import { LitElement, html, css } from 'lit';

/*
 * Create a basic grid-layout container
 */
export class GridLayout extends LitElement {
  static styles = css`
    :host {
      display: grid;
      flex-direction: var(--flex-direction, row);
      flex-wrap: var(--flex-wrap, wrap);
      justify-content: var(--justify-content, flex-start);
      align-items: var(--align-items, stretch);
      align-content: var(--align-content);
    }
  `;

  constructor() {
    super();
  }

  firstUpdated() {
  }

  render() {
    return html`
      <slot>How about that</slot>
    `;
  }
}

customElements.define('xx-grid-layout', GridLayout);
