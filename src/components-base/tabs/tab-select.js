// tabs.js
import { LitElement, html, css } from 'lit';
import { themeStyles, themeSpacing,
          fontScale, defaultStyles } from '../../styles/theme-colors.css.js'

export class TabSelect extends LitElement {
  static styles = [
    themeStyles,
    themeSpacing,
    fontScale,
    defaultStyles,
    css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      :host {
        padding: var(--space-xs);
        border-top-left-radius: var(--space-xxs);
        border-top-right-radius: var(--space-xxs);
        border: 1px solid var(--brand);
      }
    `
  ];

  static properties = {
  };

  constructor () {
    super();
  }

  connectedCallback () {
    super.connectedCallback();
    // set up event listeners to kbd evts, etc
    this.setAttribute('class', 'bottom-soft-shadow');
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
