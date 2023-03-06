import { LitElement, html, css } from 'lit';

import './barchart.js';

export class BarChartShowcase extends LitElement {
  static styles = css`
    :host {
      grid-column: 1/-1;
      grid-row: 1/-1;

      display: block;
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
    console.log(`xxBarCharts connecting..`);
    return html`
      <xx-barchart class="showcase">
      </xx-barchart>
    `;
  }
}

customElements.define('xx-barchart-showcase', BarChartShowcase);
