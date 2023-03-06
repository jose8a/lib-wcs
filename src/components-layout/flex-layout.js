import { LitElement, html, css } from 'lit';

/*
 * Create a basic flex-layout container
 */
export class FlexLayout extends LitElement {
  static styles = css`
    :host {
      display: flex;
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

customElements.define('xx-flex-layout', FlexLayout);
