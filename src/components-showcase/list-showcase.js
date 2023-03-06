import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';

import '../components-base/list';

export class ListShowcase extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
    }

    article.showcase {
      grid-column: 1/-1;
      grid-row: 1/-1;

      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);

      padding-left: 2rem;
    }
  `;

  constructor () {
    super();

    this.title = `Default List`;
    this.items = ['apple', 'banana', 'carrot', 'durazno', 'elote', 'fresa', 'grape']
  }

  static properties = {
    items: {type: Array},
    title: {type: String},
  };

  render() {
    return html`
      <article class="showcase">
        <xx-list>
          ${map(this.items, (item) => html`
            <li slot="content">${item}</li>`
          )}
        </xx-list>
      </article>
    `;
  }
}

customElements.define('xx-list-showcase', ListShowcase);
