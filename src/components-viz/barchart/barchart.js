// tabs.js
/*
 * TODO: [ ] move the data-fetch outside of the component, and
 *      .. send in the data through a prop
 * TODO: [ ] fix the css/styles for the chart
 * TODO: ..tbd
 */
import { LitElement, html, svg, css } from 'lit';
import { max, scaleTime, scaleLinear, timeYear } from 'd3';

import store from './store.js';

export class BarChart extends LitElement {
  static styles = [
    css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      :host {
        --surface-1: hsla(250, 20%, 10%, .70);
        --surface-2: hsla(250, 30%, 20%, .80);
        --surface-3: hsla(250, 40%, 20%, .95);
        --surface-4: hsla(250, 50%, 25%, .95);

        --gray-1: hsla(250, 40%, 80%, 1);
        --gray-2: hsla(250, 30%, 70%, 1);
        --gray-3: hsla(250, 20%, 50%, 1);
        --gray-4: hsla(250, 20%, 30%, 1);
        --gray-5: hsla(250, 15%, 20%, 1);

        --brand-1: hsla(160, 80%, 70%, 1);
        --brand-2: hsla(160, 60%, 50%, 1);
        --brand-3: hsla(160, 60%, 30%, 1);
        --brand-4: hsla(160, 50%, 20%, 1);

        --accent-1: hsla(40, 80%, 70%, 1);
        --accent-2: hsla(40, 70%, 50%, 1);
        --accent-3: hsla(40, 70%, 30%, 1);
        --accent-4: hsla(40, 60%, 20%, 1);

        --title-color: var(--accent-2, orange);
        --title-size: 2.5rem;

        grid-column: 1/-1;
        grid-row: 1/-1;

        display: grid;
        grid-templat-columns: repeat(8, 1fr);
        grid-template-rows: auto max-content;
      }

      .chart-container {
        background-color: var(--surface-1, blue);
      }

      .chart-title {
        font-size: var(--title-size, 2rem);
        fill: var(--title-color, cyan);
        text-anchor: middle;
        stroke: none;
      }

      .marks-container-panel {
        fill: var(--surface-1);
        stroke: var(--gray-5);
      }

      .marks-node {
        fill: var(--brand-3);
        stroke: var(--gray-1);
        stroke-width: .02rem;
      }

      .marks-node:hover {
        fill: var(--accent-2, orange);
      }

      .axis-horizontal-panel {
        fill: var(--surface-1, blue);
        stroke: none;
      }

      .axis-horizontal-ticks {
        fill: var(--gray-1, gray);
        stroke: var(--gray-1, gray);
        stroke-width: .05rem;
      }

      .axis-horizontal-labels {
        fill: var(--gray-1, gray);
        stroke: var(--gray-1, gray);
        font-size: .5rem;
        text-anchor: middle;
        letter-spacing: .08rem;
      }

      .axis-vertical-panel {
        fill: var(--surface-1, blue);
        stroke: none;
      }

      .axis-vertical-ticks {
      }

      .axis-vertical-labels {
        fill: var(--gray-1, gray);
        stroke: var(--gray-1, gray);
        font-size: .5rem;
        text-anchor: end;
        letter-spacing: .08rem;
      }
    `
  ];

  static properties = {
    chartWidth: {
      type: Number,
      attribute: "chart-width",
      reflect: true
    },
    chartHeight: {
      type: Number,
      attribute: "chart-height",
      reflect: true
    }
  };

  constructor () {
    super();
    this.store = store;
    this._data = [];

    this._chartWidth = 1000;
    this._chartHeight = 600;
    this._margins = {
      top: this._chartHeight * .15,
      right: this._chartWidth * .10,
      bottom: this._chartHeight * .10,
      left: this._chartWidth * .10
    };

    this._marksWidth = this._chartWidth - this._margins.left - this._margins.right;
    this._marksHeight = this._chartHeight - this._margins.top - this._margins.bottom;
    this._baseGap = 5;

    this._barWidth = null;
    this._xScale = null;
    this._yScale = null;
    this._xTicks = null;
  }

  connectedCallback () {
    super.connectedCallback();
  }

  async firstUpdated () {
    await this._retrieveData();

    this.requestUpdate();
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  async _retrieveData() {
    console.log(`pre-get-data`);
    this._data = await this.store.getData();
    console.log(`post-get-data`);

    console.dir(this._data);
    console.dir(this._margins);

    // update the barWidth based on new data-size
    let rawBarWidth = this._chartWidth / this._data.length;
    this._barWidth = rawBarWidth / 1.1;

    // recalculate the x- and y-scales
    this.createXScale();
    this.createYScale();
  }

  createXScale() {
    /* ---------------------------------------------
     *  Domain / Range setup for x-Scales
     *
     *  - Note: the x-scale is a time-scale and we need to
     *    convert the x-scale properties into date-objects
     * .............................................
     */
    let latestDateIndex = this._data.length - 1;
    let initialDate = this._data[0];
    let latestDate = this._data[latestDateIndex];

    const xDomainMin = new Date(initialDate[0]);
    const xDomainMax = new Date(latestDate[0]);
    const xRangeMin = 0;
    const xRangeMax = this._marksWidth;

    this._xScale = scaleTime()
      .domain([xDomainMin, xDomainMax])
      .range([xRangeMin, xRangeMax]);

    // only set an x-axis tick for every 5 years of data
    this._xTicks = this._xScale.ticks(timeYear.every(5));
  }

  createYScale() {
    /* ---------------------------------------------
     *  Domain / Range setup for y-Scales
     * .............................................
     */
    const yMax = max(this._data.map(d => d[1]));

    const yDomainMin = 0;
    const yDomainMax = yMax;
    // og --- const yRangeMin = this._marksHeight;
    // og --- const yRangeMax = 0;
    const yRangeMin = 0;
    const yRangeMax = this._marksHeight;

    this._yScale = scaleLinear()
      .domain([yDomainMin, yDomainMax])
      .range([yRangeMin, yRangeMax]);
  }

  _marksViz() {
    const xPos = d => this._xScale(new Date(d[0]));
    const tipText = d => {
      const [yr, month] = d[0].split('-').splice(0,2);
      return `gdp for ${month}/${yr}: ${d[1]}`
    }

    return svg`
      <g
        stroke="yellow"
        transform=${`translate(${this._margins.left},${this._margins.top})`}>
        <rect
          x="0"
          y="0"
          width=${this._marksWidth}
          height=${this._marksHeight}
          class="marks-container-panel"
        >
        </rect>

        ${ this._data.map( d => svg`
          <rect
            x=${xPos(d)}
            y=${this._marksHeight - this._yScale(d[1])}
            width=${this._barWidth}
            height=${this._yScale(d[1])}
            class="marks-node"
          >
            <title class="tip">${tipText(d)}</title>
          </rect>
        `)}
      </g>
    `;
  }

  _horizontalAxis() {
    const leftOffset = this._margins.left;
    const topOffset = this._marksHeight + this._margins.top + this._baseGap;

    const tickOffsetX = (tVal) => this._xScale(tVal) + this._margins.left;
    const tickOffsetY = topOffset; //+ this._baseGap;

    const tickLineSize = this._baseGap * 2;
    const tickLabel = (tVal) => {
      const date = new Date(tVal)
      return date.getFullYear()
    };

    return svg`
      <g
        stroke="yellow">
        <rect
          x="0"
          y="0"
          width=${this._marksWidth}
          height=${this._margins.bottom - this._baseGap}
          transform=${`translate(${leftOffset},${topOffset})`}
          class="axis-horizontal-panel"
        >
        </rect>

        ${ this._xTicks?.map( tickValue => svg`
            <g key=${tickValue}
              transform=${`translate(${tickOffsetX(tickValue)},${tickOffsetY})`}>
              <line
                y2=${tickLineSize}
                class="axis-horizontal-ticks"
              />
              <text
                y=${tickLineSize + 10}
                class="axis-horizontal-labels"
              >${tickLabel(tickValue)}</text>
            </g>
          `)
        }
      </g>
    `;
  }

  _verticalAxis() {
    const leftOffset = 0;
    const topOffset = this._margins.top;

    const tickOffsetY = tValue => {
      return this._marksHeight - this._yScale(tValue);
    }

    return svg`
      <g
        stroke="yellow"
        transform=${`translate(${leftOffset},${topOffset})`}>
        <rect
          x="0"
          y="0"
          width=${this._margins.left - this._baseGap}
          height=${this._marksHeight}
          class="axis-vertical-panel"
      >
        </rect>
      ${ this._yScale?.ticks().map( tickValue => svg`
          <text
            x=${this._margins.left - 10}
            y=${tickOffsetY(tickValue)}
            class="axis-vertical-labels"
          >
            ${ tickValue }
          </text>
        `)}
      </g>
    `
  }

  _chartTitle() {
    const leftOffset = this._margins.left;
    const topOffset = this._margins.top - this._baseGap;

    return svg`
      <g
        stroke="yellow"
        transform=${`translate(${leftOffset},${topOffset})`}>
        <text
          x=${this._marksWidth / 2}
          y="0"
          dy="-10px"
          width=${this._marksWidth}
          height=${this._margins.top - this.baseGap}
          class="chart-title"
        >
          Hola
        </text>
      </g>
    `
  }

  render() {
    console.log(`rendering barchart ..`);

    return html`
      <svg
        x="200"
        y="200"
        width=${this._chartWidth}
        height=${this._chartHeight}
        class="chart-container"
      >
        <g>
          <!-- g stroke="cyan">
            <rect width="100%" height="100%"></rect>
          </g -->

          ${ this._marksViz() }
          ${ this._horizontalAxis() }
          ${ this._verticalAxis() }
          ${ this._chartTitle() }
        </g>
      </svg>
    `;
  }
}


customElements.define('xx-barchart', BarChart);
