import { LitElement, html } from 'lit';

// STATUS/WARN: needs much work, esp styles
// TODO/FIXME: create a minimal style
// TODO/FIXME: create a vertical 'thin' style
// TODO/FIXME: create a vertical 'wide' style
// TODO/FIXME: create a horizontal 'thin' style

/*
 * variation ideas:
 * - source: https://open-ui.org/components/card.research
 */
class Card extends LitElement {
  constructor () {
    super();
  }

  /*
   * @props:
   *  - orientation: vertical vs horizontal
   *  - action: flip | nav | animate | none (default)
   *  - url: nav-action destination
   *  - selectable: true | false
   *    * dispatches event,/ ui-changes
   *
   */
  static properties = {
    orientation: {type: String},
  }

  render() {
    return html`
      <article>
        <slot name="title">${item}</slot>
        <slot name="header">${item}</slot>
        <slot name="content">${item}</slot>
        <slot name="footer">${item}</slot>
      </article>
    `;
  }
}
