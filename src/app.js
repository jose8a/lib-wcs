// app.js
import { LitElement, html, css } from 'lit';
import { themeStyles, themeSpacing,
          fontScale, defaultStyles } from './styles/theme-colors.css.js'

import './components-base/app-header';
import './components-base/footer';
import './components-base/sidebar';
import './components-base/navbar';

import { navLinks, showcaseLinks } from './data/app-data.js';

export class AppShell extends LitElement {
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

      .app-shell {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 10vh 1fr 15vh;

        width: 100vw;
        min-height: 110vh;
        background-color: var(--surface2);
      }

      xx-app-header {
        --hdr-padding-inline: var(--space-xxs);
        --hdr-padding-stacked: var(--space-xxs);
        --link-color: var(--accent-base);
        --link-color-visited: var(--accent2);

        grid-column: 1/5;
        grid-row: 1/2;

        margin-bottom: 0;
        padding-inline: var(--space-1);
        background-color: var(--surface1);
      }

      xx-sidebar {
        grid-column: 1/2;
        grid-row: 2/-2;

        padding: var(--space-xs);
        padding-top: var(--space-1);
      }

      xx-sidebar h3 {
        height: var(--space-2);
      }

      xx-sidebar xx-navbar {
        --link-color: var(--accent-base);
        --link-color-visited: var(--accent3);
      }

      article.showcase {
        grid-column: 2/5;
        grid-row: 2/-2;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, fit-content);
        padding-left: .5rem;
      }

      xx-footer {
        --hdr-padding-inline: var(--space-1);
        --hdr-padding-stacked: var(--space-1);
        --link-color: var(--accent-base);
        --link-color-visited: var(--accent3);

        grid-column: 1/5;
        grid-row: -2/-1;

        background-color: var(--surface3);
      }

      xx-footer::part(footer-left),
      xx-footer::part(footer-center),
      xx-footer::part(footer-right) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: var(--space-xs);
      }
    `
  ];

  static properties = {
    colorScheme: {
      type: Array,
      attribute: "color-scheme",
      reflect: true
    },
  };

  constructor () {
    super();
    this.navLinks = navLinks;
    this.showcaseLinks = showcaseLinks;
    this.colorScheme = "dark";
  }

  render() {
    return html`
      <article class="app-shell" color-scheme="dark">
        <xx-app-header
          class="bottom-sharp-shadow"
          .navLinks=${this.navLinks}>
          <xx-navbar
            slot="center"
            orientation="horizontal"
            .navlinks=${this.navLinks}>
          </xx-navbar>
        </xx-app-header>

        <xx-sidebar class="medium-shadow">
          <h3 slot="header">Components</h3>
          <xx-navbar
            slot="content"
            .navlinks=${this.showcaseLinks}>
          </xx-navbar>
        </xx-sidebar>

        <article class="showcase">
          <slot color-scheme="dark"></slot>
        </article>

        <xx-footer></xx-footer>
      </article>
    `;
  }
}

customElements.define('xx-app-shell', AppShell);
