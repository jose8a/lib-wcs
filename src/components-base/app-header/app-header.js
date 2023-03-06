import { LitElement, html, css } from 'lit';

/*
 * Create a basic footer
  *   - fixed
  *   - collapsible
  *   - right, left
 */
export class AppHeader extends LitElement {
  static styles = css`
    :host {
      --align-items: flex-end;

      display: flex;
      flex-direction: var(--flex-direction, row);
      flex-wrap: var(--flex-wrap, nowrap);
      justify-content: var(--justify-content, space-between);
      align-items: var(--align-items, stretch);
      align-content: var(--align-content);

      width: 100%;
      border-bottom: 1px solid var(--brand);
    }

    .nav-left,
    .nav-center,
    .nav-right {
      margin-bottom: var(--hdr-padding-stacked, 0);
    }

    a {
      color: var(--link-color, blue);
      text-decoration: none;
      margin-inline: var(--space-xxs);
    }

    a:visited {
      color: var(--link-color-visited, gray);
    }

    .nav-left {
      font-size: var(--font-size-5, 2rem);
    }

    .nav-right {
      accent-color: var(--link-color);
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

  firstUpdated() {
  }

  render() {
    return html`
      <section class="nav-left" part="left">
        <slot name="left">
          <a href="/" class="nav-title">Home</a>
        </slot>
      </section>

      <section class="nav-center" part="center">
        <slot name="center">
          <span class="nav-links">
            ${ this.navLinks.map( link => html`
              <a href=${link.url}>${link.title}</a>`
            )}
          </span>
        </slot>
      </section>

      <section class="nav-right" part="right">
        <slot name="right">
          <nav class="nav-menu">
            <!-- sl-trigger slot="trigger" caret>Dropdown</sl-trigger -->
            <select name="nav-extras" id="select-extras">
              <option value="">--User--</option>
              <option value="account">Account Settings</option>
              <option value="profile">My Profile</option>
              <hr></hr>
              <option value="share">Share</option>
              <hr></hr>
              <option value="help" checked>Help</option>
              <option value="signout" disabled>Sign Out</option>
            </select>
          </nav>
        </slot>
      </section>
    `;
  }
}
