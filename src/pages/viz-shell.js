// app.js
import { LitElement, html, css } from 'lit';
import { appStyles } from '../styles/app.css.js'

export class VizShell extends LitElement {
  static styles = [
    appStyles,
    css`
      :host {
        grid-column: 1/-1;
        grid-row: 1/-1;

        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
      }

      article.showcase {
        grid-column: 1/-1;
        grid-row: 1/-1;

        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
      }
    `
  ];

  render() {
    return html`
      <article class="showcase">
        <slot></slot>
      </article>
    `;
  }
}

customElements.define('xx-viz-shell', VizShell);
