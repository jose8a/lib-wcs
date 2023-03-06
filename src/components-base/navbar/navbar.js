import { LitElement, html, css } from 'lit';
import { themeStyles, themeSpacing,
          fontScale, defaultStyles } from '../../styles/theme-colors.css.js'

export class Navbar extends LitElement {
  static styles = [
    themeStyles,
    themeSpacing,
    fontScale,
    defaultStyles,
    css`
      :host {
        --xx-padding-bottom: var(--space-2);

        color: var(--text2);
        background-color: var(--surface3);

        width: 100vw;
        background-color: var(--surface2);

        margin: 0;
        padding: 0;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .navbar {
        font-size: var(--link-font-size, 1.2rem);
        line-height: 1.4rem;
        list-style: none;
      }

      .horizontal li {
        --hor-link-margin-left: var(--space-xxs);
        display: inline;
        margin-left: var(--hor-link-margin-left, .25rem);
      }

      a {
        color: var(--link-color, blue);
        text-decoration: none;
        margin-inline: var(--space-xxs);
      }

      a:visited {
        color: var(--link-color-visited, gray);
      }
    `
  ];

  static properties = {
    orientation: {
      type: String,
      attribute: true,
      reflect: false
    },

    navlinks: {
      type: Array,
      attribute: false,
      reflect: false
    },
  };

  constructor () {
    super();
    this.navlinks = [];
    this.orientation = "";
  }

  render() {
    return html`
      <ul class=${"navbar " + this.orientation}>
        ${ this.navlinks.map( link => html`
          <li>
            <a href=${link.url}>${link.title}</a>
          </li>`
        )}
      </ul>
    `;
  }
}
