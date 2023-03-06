import { LitElement, html, css } from 'lit';

/*
 * Create a basic grid-layout container
  *   - fixed
  *   - collapsible
  *   - position: right | left
 */
export class Sidebar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: var(--flex-direction, column);
      flex-wrap: var(--flex-wrap, nowrap);
      justify-content: var(--justify-content, flex-start);
      align-items: var(--align-items, flex-start);
      align-content: var(--align-content);
    }

    article {
      width: max-content;
    }
  `;

  static properties = {
    title: { type: String, attribute: true },
    fixed: { type: Boolean, attribute: false },
    collapsible: { type: Boolean, attribute: false },
    position: { type: String, attribute: false },
  };

  constructor() {
    super();
    this.title = "";
  }

  firstUpdated() {
  }

  render() {
    return html`
      <article>
        <section class="title-bar">
          ${ this.title
            ? html`<h3>${this.title}</h3>`
            : html``
          }

          <!--
            show a button to close the sidebar if it is
            not a fixed sidebar
          -->
          ${ this.fixed
            ? html``
            : html``
          }
        </section>

        <section class="header">
          <!-- title, buttons, icons, etc -->
          <slot name="header"></slot>
        </section>

        <section class="content">
          <!-- primary content, navs, lists, etc -->
          <slot name="content"></slot>
        </section>

        <section class="footer">
          <!-- footer content, more buttons, icons, etc -->
          <slot name="footer"></slot>
        </section>

        <!-- default content, if any -->
        <slot></slot>
      </article>
    `;
  }
}
