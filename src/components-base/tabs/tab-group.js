// tabs.js
import { LitElement, html, css } from 'lit';

/* ----------
 * helpful references:
 *   - https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/
 *   - https://web.dev/building-a-tabs-component/
 *   - https://web.dev/components-howto-tabs/
 * ..........
 */
export class TabGroup extends LitElement {
  static styles = [
    css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      :host {
        grid-column: 1/-1;
        grid-row: 1/-1;

        display: grid;
        grid-templat-columns: repeat(8, 1fr);
        grid-template-rows: auto max-content;
      }

      header {
        display: flex;
        justify-content: flex-start;

        grid-column: 1 / -1;
        grid-row: 1 / 2;

        border-bottom: 1px solid var(--brand);
      }

      section.tab-panels {
        grid-column: 1 / -1;
        grid-row: 2 / -1;

        block-size: 100%;
        padding-top: var(--space-xs);

        display: flex;
        flex-wrap: wrap;

        overflow: hidden;
      }
    `
  ];

  static properties = {
    _selectedTabIndex: {
      type: Number,
      state: true
    }
  };

  constructor () {
    super();
    this._selectedTabIndex = 0;
    this._allTabs = [];
    this._allPanels = [];
    this._idBase = this._getRandomIdBase();
  }

  get selectedTab () {
    return this._allTabs[this._selectedTabIndex];
  }

  get firstTab () {
    return this._allTabs[0];
  }

  get lastTab () {
    const maxIndex = this._allTabs.length - 1;
    return this._allTabs[maxIndex];
  }

  _nextTab () {
    const currentIndex = this._selectedTabIndex;
    const nextIndex = this._selectedTabIndex + 1;

    if (this._isLastTab(currentIndex)) return this._firstTab;
    return this._allTabs[nextIndex];
  }

  _prevTab () {
    const currentIndex = this._selectedTabIndex;
    const prevIndex = this._selectedTabIndex - 1;

    if (this._isFirstTab(currentIndex)) return this._lastTab;
    return this._allTabs[prevIndex];
  }

  _isFirstTab (index) {
    return index === 0;
  }

  _isLastTab (index) {
    const maxIndex = this._allTabs.length - 1;
    return index === maxIndex;
  }

  _clickHandler (evt) {
    const clickedItem = evt.target;
    const clickedIndex = parseInt(clickedItem.dataset.index, 10);
    console.log(`Clicked item-index: ${clickedIndex}`);

    // clear the selected item
    this._allTabs.map( tabItem => tabItem.removeAttribute('selected'));
    this._allPanels.map( tabItem => tabItem.removeAttribute('selected'));

    // assign selected to the newly clicked tab
    this._allTabs[clickedIndex].setAttribute('selected', '');
    this._allPanels[clickedIndex].setAttribute('selected', '');
    return;
  }

  _keydownHandler (evt) {
    console.log(`Key pressed: ${evt.key}.`);

    // TODO/FIXME: handle the keyboard events according
    // to the ARIA guidelines (also see Dodson/Surma article)
    return;
  }

  _slotChangeHandler () {
    console.log("Tabs slot changed.");
  }

  // TODO/FIXME: replace this with a UUID for
  // generating a stronger base for unique IDs
  // of internal tab-component elements
  _getRandomIdBase () {
    const max = 1024;
    const min = 128;
    return Math.random() * (max - min) + min;
  }

  connectedCallback () {
    super.connectedCallback();
  }

  firstUpdated () {
    // store references to all the tab-select and tab-panel items
    this._allTabs = Array.from(this.querySelectorAll('xx-tab-select'));
    this._allPanels = Array.from(this.querySelectorAll('xx-tab-panel'));

    // TODO:tag each of the tab-select items with:
    //  - aria properties for a tab-select item
    for (let [index, item] of this._allTabs.entries()) {
      item.setAttribute('role', 'tab');
      item.setAttribute('data-index', index);
      console.log("setAttribute tablist");

      if (item.hasAttribute('selected')) {
        this._selectedTabIndex = index;
      }
    }

    // TODO:tag each of the tab-panel items with:
    //  - aria properties for a tab-panel item
    for (let [index, item] of this._allPanels.entries()) {
      item.setAttribute('role', 'tabpanel');
      item.setAttribute('data-index', index);
      //item.classList.add('visuallyhidden');
      console.log("setAttribute tabpanel");
    }

    // TODO:for accessibility, link each of the
    // tab-select with it's related tab-panel item
    // based on the order they appear in the code
    for (let index of this._allTabs.keys()) {
      const tabId = `tab-${this._idBase}-${index}`;
      const panelId = `panel-${this._idBase}-${index}`;

      this._allTabs[index].setAttribute('id', tabId);
      this._allTabs[index].setAttribute('aria-controls', panelId);

      this._allPanels[index].setAttribute('id', panelId);
      this._allPanels[index].setAttribute('aria-labelledby', tabId);
    }

    // if any tab-selects are marked as selected when
    // created, also mark the appropriate tab-panel as selected
    const selectIndex = this._selectedTabIndex;
    this._allTabs[selectIndex].setAttribute('selected', '');
    this._allPanels[selectIndex].setAttribute('selected', '');

    document.addEventListener('keydown', this._keydownHandler);
    console.log("Tabs is connected.");
  }

  disconnectedCallback() {
    super.disconnectedCallback()

    // remove any external event listeners here,
    // .. internal event listeners don't need to be removed per
    // .. the Lit docs
    document.removeEventListener('keydown', this._keydownHandler);
  }

  render() {
    return html`
      <header
        class="bottom-sharp-shadow"
        @click=${this._clickHandler}
        role="tablist"
        >
        <slot
          @slotchange=${this._slotChangeHandler}
          name="tablist"></slot>
      </header>

      <section
        class="tab-panels">
        <slot
          @slotchange=${this._slotChangeHandler}
          name="tabpanels"></slot>
      </section>
    `;
  }
}
