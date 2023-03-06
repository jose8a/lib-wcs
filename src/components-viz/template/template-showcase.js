import { LitElement, html, css } from 'lit';

import './CHART_TYPE.js';

export class BarChartShowcase extends LitElement {
  static styles = css`
    :host {
      grid-column: 1/-1;
      grid-row: 1/-1;

      display: block;
    }

    xx-CHART_TYPE {
      grid-column: 1/-1;
      grid-row: 1/-1;

      display: grid;
      grid-templat-columns: repeat(8, 1fr);
      grid-template-rows: auto max-content;
    }
  `;

  static properties = {
  };

  constructor() {
    super();
  }

  firstUpdated() {
    console.log(`BarCharts in da house!!`)
  }

  render() {
    return html`
      <xx-CHART_TYPE class="showcase">
      </xx-CHART_TYPE>
    `;
  }
}

customElements.define('xx-CHART_TYPE-showcase', BarChartShowcase);
