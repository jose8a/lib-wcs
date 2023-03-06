import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';

// STATUS/WARN: needs much work
// TODO/FIXME: add styles to the list
// TODO/FIXME: add support for grid-layout styles
// TODO/FIXME: add support for horizontal-layout styles
// TODO/FIXME: add support for vertical-layout styles
// TODO/FIXME: add support for pagination?
// TODO/FIXME: add support for sorting?
// TODO/FIXME: add support for filtering/search?
// TODO/FIXME: does this element need accessibility additions?
// TODO/FIXME: does a 'list-item' component need to be created?
export class List extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
    }

    .list-title,
    ul.list-content {
      color: var(--accent3-dark);
    }
  `;

  constructor () {
    super();
  }

  render() {
    return html`
      <h2 class="list-title">
        <slot name="title">Default Title</slot>
      </h2>
      <ul class="list-content">
        <slot name="content">Default List Content</slot>
      </ul>
    `;
  }
}
