import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import '../components-layout/flex-layout.js';

export class FlexShowcase extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);

      width: 100vw;
    }

    article.showcase {
      grid-column: 1/-1;
      grid-row: 1/-1;

      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);
    }

    xx-flex-layout {
      --flex-direction: column;
      --align-items: center;

      grid-column: 1/-1;
      grid-row: 1/-1;

      height: 50vh;
      padding: 1rem;
      gap: 1rem;

      font-size: 18px;
      background-color: var(--surface2);
    }

    div {
      display: flex;
      justify-content: center;
      width: 100px;
      padding: 1rem;
      background-color: var(--brand-light);
      color: var(--text1-light);
    }
  `;

  static properties = {
    flex: { type: Object, attribute: false },
    classes: { type: Object, attribute: false },
    styles: { type: Object, attribute: false },
  };

  constructor() {
    super();
    this.flex = {};
    this.classes = {};
    this.styles = {};
  }

  flexStyles (flexVars) {
    return {
       "--flex-direction": flexVars["fd"],
       "--flex-wrap": flexVars["wrap"],
       "--justify-content": flexVars["jc"],
       "--align-items": flexVars["ai"],
       "--align-content": flexVars["ac"]
    };
  }

  firstUpdated() {
    /*
      * url-searchParams can be in the following keys:
      *   - fd => flex-direction
      *   - ai => align-items
      *   - jc => justify-content
      *   - ac => align-content
      *   - wrap => flex-wrap
      *
      * >> any other key is not valid <<
      */
    const validKeys = ['fd', 'ai', 'jc', 'ac', 'wrap']
    const flexVars = {
      "fd": "",
      "ai": "",
      "jc": "",
      "ac": "",
      "wrap": ""
    }

    /* grab the url search parameters
     *  - these translate directly into flex-props via
     *  .. flexVars and this.flexStyles transforms
     */
    const paramString = window.location.search;
    let params = new URLSearchParams(paramString);

    for (const [k,v] of params) {
      if (validKeys.includes(k)) {
        flexVars[k] = v;
      }
    }

    this.styles = this.flexStyles(flexVars);
    console.dir(this.styles)
  }

  render() {
    return html`
      <article class="showcase">
        <xx-flex-layout
          class=${classMap(this.classes)}
          style=${styleMap(this.styles)}
        >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        </xx-flex-layout>
      </article>
    `;
  }
}

customElements.define('xx-flex-showcase', FlexShowcase);
