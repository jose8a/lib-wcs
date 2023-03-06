import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';
import { styleMap } from 'lit/directives/style-map.js';

export class StepperItem extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
    }

    .stepper_item {
      position: relative;
      width: var(--item-width);
      padding-top: 1rem;
      margin-left: var(--margin-left);
      margin-right: var(--margin-right);
    }

    .c-stepper__title {
      width: 100%;
      font-size: 1.5rem;
    }

    .c-stepper__desc {
      width: 100%;
    }
  `;

  static properties = {
    item: { type: Object },
    align: { type: String },

    // FIXME: ??
    _timelineAlign: { state: true },    // is this variable still needed
    _marginStyles: { state: true },
  }

  constructor () {
    super();

    // default prop values
    this.align = 'left';
    this.item = {};

    this._timelineAlign = {'--timeline-align': '10%'};
    this._marginStyles = {
      '--margin-left': 'calc(var(--timeline-align) + 2rem)',
      '--margin-right': '10%',
      '--item-width': '30%'
    };

  }

  firstUpdated () {
    console.log("I am StepperItem");

    if (this.align === 'left') {
      console.log("I stepper am aligned left");
      this._timelineAlign['--timeline-align'] = '10%';
      this._marginStyles['--margin-left'] = 'calc(var(--timeline-align) + 2rem)';
      this._marginStyles['--margin-right'] = '2rem';
    }

    if (this.align === 'center') {
      console.log("I stepper am aligned center");
      this._timelineAlign['--timeline-align'] = '50%';
      this._marginStyles['--margin-left'] = 'calc(var(--timeline-align) + 2rem)';
      this._marginStyles['--margin-right'] = '2rem';
      this._marginStyles['--item-width'] = '45%';
    }

    if (this.align === 'right') {
      console.log("I stepper am aligned right");
      this._timelineAlign['--timeline-align'] = '90%';
      // marginStyles['--margin-left'] = '2rem';
      this._marginStyles['--margin-left'] = 'calc(var(--timeline-align) - var(--item-width) - 2rem)';
      this._marginStyles['--margin-right'] = 'calc(var(--timeline-align) + 2rem)';
    }
  }

  render() {
    return html`
      <details class="stepper_item" style=${styleMap(this._marginStyles)}>
        <summary class="c-stepper__title">${ this.item.title }</summary>
        <p class="c-stepper__desc">${ this.item.content }</p>
      </details>
    `;
  }
}
