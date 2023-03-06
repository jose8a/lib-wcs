import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';

import '../components-base/stepper';

export class StepperShowcase extends LitElement {
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
    this.items = [
      { title: "title-1", content: "This content-1", imageUrl: "" },
      { title: "title-2", content: "This content-2", imageUrl: "" },
      { title: "title-3", content: "This content-3", imageUrl: "" },
      { title: "title-4", content: "This content-4", imageUrl: "" },
      { title: "title-5", content: "This content-5", imageUrl: "" },
    ];
  }

  static properties = {
    items: {type: Array },
    title: {type: String },
  };

  render() {
    return html`
      <article class="showcase">
        <xx-stepper .align="center">
          ${ map(this.items, (item) => html`
            <xx-stepper-item
              slot="stepitem"
              .item=${ item }
              align="left">
            </xx-stepper-item>
          `)}
        </xx-stepper>
      </article>
    `;
  }
}

customElements.define('xx-stepper-showcase', StepperShowcase);

/*
              <!-- h3>${item.title}</h3>
              <p>${item.content}</p>
              <img src=${item.imageUrl} alt-text="" -->
  */
