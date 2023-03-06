import { LitElement, html, css } from 'lit';
import { tooltipStyles } from './styles/tooltip.js';

export class Tooltip extends LitElement {
  static styles = [css``, tooltipStyles];

  render() {
    return html`<slot></slot>`;
  }
}
