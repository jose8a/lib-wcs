// app.js
import { LitElement, html, css } from 'lit';
import { appStyles } from '../styles/app.css.js'

export class ComponentsShell extends LitElement {
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
      <!-- div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/components/list">XX List</a>
        <a href="/components/carousel">XX Carousel</a>
        <a href="/components/flex">XX FlexLayouts</a>
      </div>
      <div class="header">
        <h2>XX Components</h2>
      </div -->

      <article class="showcase">
        <slot></slot>
      </article>
    `;
  }
}

customElements.define('xx-components-shell', ComponentsShell);
