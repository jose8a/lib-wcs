
import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import '../components-base/tabs';
// --- import '../components-base/tab-group.js';
// --- import '../components-base/tab-select.js';
// --- import '../components-base/tab-panel.js';

export class TabsShowcase extends LitElement {
  static styles = css`
    :host {
      grid-column: 1/-1;
      grid-row: 1/-1;

      display: block;
    }

    xx-tab-group {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: baseline;

      width: 80%;
      margin: 0 auto;
      padding-top: var(--space-2, 3rem);
    }

    xx-tab-select {
      margin-right: var(--space-xs, .5rem);
      background-color: var(--surface1);
    }

    xx-tab-panel {
      width: 100%;
      flex-grow: 2;
    }

    xx-tab-select[selected] {
      border-color: var(--accent2);
      background-color: var(--surface2);
    }
  `;

  static properties = {
  };

  constructor() {
    super();
  }

  firstUpdated() {
    console.dir(`Tabs in the house!!`)
  }

  render() {
    return html`
      <xx-tab-group class="showcase">
        <xx-tab-select slot="tablist">Select - 1</xx-tab-select>
        <xx-tab-select selected slot="tablist">Select - 2</xx-tab-select>
        <xx-tab-select slot="tablist">Select - 3</xx-tab-select>
        <xx-tab-select slot="tablist">Select - 4</xx-tab-select>

        <xx-tab-panel slot="tabpanels">Lorem Ipsum - 1</xx-tab-panel>
        <xx-tab-panel slot="tabpanels">Lorem Ipsum - 2</xx-tab-panel>
        <xx-tab-panel slot="tabpanels">Lorem Ipsum - 3</xx-tab-panel>
        <xx-tab-panel slot="tabpanels">Lorem Ipsum - 4</xx-tab-panel>
      </xx-tab-group>
    `;
  }
}

customElements.define('xx-tabs-showcase', TabsShowcase);
