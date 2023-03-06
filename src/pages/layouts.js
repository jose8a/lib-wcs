// app.js
import { LitElement, html, css } from 'lit';
import { themeStyles,
          themeSpacing,
          fontScale } from '../styles/theme-colors.css.js';

import '../components-base/sidebar';
import '../components-base/app-header';
import '../components-base/footer';

export class LayoutsShell extends LitElement {
  static styles = [
    themeStyles,
    themeSpacing,
    fontScale,
    css`
      :host {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(12, 1fr);

        width: 100vw;
        height: 100%;
        background-color: var(--surface2);
      }

      .left-content {
        grid-column: 1/2;
        grid-row: 1/-1;

        margin: 0;
        background-color: blue;
        background-color: var(--surface2);
      }

      article.content {
        grid-column: 2/-2;
        grid-row: 1/-1;
      }

      .right-content {
        grid-column: -2/-1;
        grid-row: 1/-1;

        margin: 0;
        background-color: blue;
        background-color: var(--surface2);
      }
    `
  ];

  static properties = {
    colorScheme: {
      type: Array,
      attribute: "color-scheme",
      reflect: true
    },
  };

  constructor () {
    super();
    this.colorScheme = "dark";
  }

  render() {
    return html`
      <xx-sidebar class="left-content">
        <ul slot="content">
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
        </ul>
      </xx-sidebar>
      <article class="content">
        <slot></slot>
      </article>
      <xx-sidebar class="right-content">
      </xx-sidebar>
    `;
  }
}

customElements.define('xx-layouts', LayoutsShell);
