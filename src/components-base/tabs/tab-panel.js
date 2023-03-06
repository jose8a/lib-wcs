// tabs.js
import { LitElement, html, css } from 'lit';
import { themeStyles, themeSpacing,
          fontScale, defaultStyles } from '../../styles/theme-colors.css.js'

export class TabPanel extends LitElement {
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
        width: 100%;
        height: 100%;
      }

      /*
       * accessibly hiding non-selected elements
       *   - source: https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
       *   - https://webaim.org/techniques/css/invisiblecontent/
       */
      :host(.visuallyhidden:not([selected])) {
        position: absolute;

        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px !important;
        width: 1px !important;
        margin: -1px;
        padding: 0;
        border: 0;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
      }
    `
  ];

  static properties = {
    selected: {
      type: String,
      attribute: true,
      hasChanged: this._selectedUpdate
    },
    class: {
      type: String,
      attribute: true,
      reflect: true
    }
  };

  constructor () {
    super();
  }

  firstUpdated () {
    this.classList.add('visuallyhidden');
  }

  connectedCallback () {
    super.connectedCallback();
    // set up event listeners to kbd evts, etc
  }

  _selectedUpdate () {
    if (this.hasAttribute('selected')) {
      this.classList.remove('visuallyhidden');
    } else {
      this.classList.add('visuallyhidden');
    }
  }

  render() {
    return html`
      <slot>
        I am a tab panel
      </slot>
    `;
  }
}
