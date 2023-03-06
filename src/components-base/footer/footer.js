import { LitElement, html, css } from 'lit';

/*
 * Create a basic footer
  *   - fixed
  *   - collapsible
  *   - right, left
 */
export class Footer extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :host {
      --align-items: flex-start;

      display: flex;
      box-sizing: border-box;

      flex-direction: var(--flex-direction, row);
      flex-wrap: var(--flex-wrap, nowrap);
      justify-content: var(--justify-content, space-between);
      align-items: var(--align-items, stretch);
      align-content: var(--align-content);
      grid-gap: 2rem;

      width: 100%;
    }

    .footer-left {
      padding-left: var(--hdr-padding-inline, 0);
    }

    .footer-right {
      padding-right: var(--hdr-padding-inline, 0);
    }

    .footer-left,
    .footer-center,
    .footer-right {
      padding-bottom: var(--hdr-padding-stacked, 0);
    }

    a {
      color: var(--link-color, blue);
      text-decoration: none;
      margin-inline: var(--space-xxs);
    }

    a:visited {
      color: var(--link-color-visited, gray);
    }

  `;

  static properties = {
    navLinks: { type: Array, attribute: false },
    classes: { type: Object, attribute: false },
    styles: { type: Object, attribute: false },
  };

  constructor() {
    super();

    this.navLinks = [
      { title: "Home", url: "/"},
      { title: "Dodos", url: "/dodos"},
      { title: "page-2", url: "#page-2"},
      { title: "page-3", url: "#page-3"}
    ];
  }

  render() {
    return html`
      <section class="footer-left" part="footer-left">
        <slot name="left">
          ${ this.navLinks.map( link => html`
            <a href=${link.url}>${link.title}</a>`
          )}
        </slot>
      </section>

      <section class="footer-center" part="footer-center">
        <slot name="center">
          ${ this.navLinks.map( link => html`
            <a href=${link.url}>${link.title}</a>`
          )}
        </slot>
      </section>

      <section class="footer-right" part="footer-right">
        <slot name="right">
          ${ this.navLinks.map( link => html`
            <a href=${link.url}>${link.title}</a>`
          )}
        </slot>
      </section>
    `;
  }
}
