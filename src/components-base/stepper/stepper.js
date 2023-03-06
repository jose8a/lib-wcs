import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';
import { styleMap } from 'lit/directives/style-map.js';

export class Stepper extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
    }

    .timeline {
      position: relative;

      width: 100%;
      height: 100%;
      padding-top: 1rem;
      padding-bottom: 2rem;

      background: hsla(220, 70%, 70%, 0.7);
    }

    .timeline::before {
      --ribbon-width: .5rem;
      --ribbon-offset: calc((var(--ribbon-width) / 2));

      --ribbon-color: hsla(230, 80%, 30%, 1);
      --ribbon-border-color: hsla(230, 80%, 20%, .25);
      --ribbon-shadow-color: hsla(50, 80%, 50%, 1);

      content: '';
      position: absolute;
      width: var(--ribbon-width);
      top: 0;
      bottom: 0;
      left: calc(var(--timeline-align) - var(--ribbon-offset));
      border: 1px solid var(--ribbon-border-color);

      background-color: hsla(40, 70%, 70%, 1);
    }

    .timeline__item {
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
    }

    ::slotted(xx-stepper-item)::before,
    .timeline__item::before {
      --marker-width: 1.5rem;
      --marker-offset: calc(var(--marker-width) / 2);
      --marker-color: hsla(230, 80%, 30%, 1);
      --marker-border-color: black;
      --marker-shadow-color: hsla(50, 80%, 50%, 1);

      content: '';
      position: absolute;
      width: var(--marker-width);
      height: var(--marker-width);
      left: calc(var(--timeline-align) - var(--marker-offset));
      border: 1px solid var(--marker-border-color);
      border-radius: 100px;
      background-color: var(--marker-color);
      box-shadow: inset 0px 0px 0px 5px var(--marker-shadow-color);
    }
  `;

  static properties = {
    align: { type: String },
    _timelineAlign: { state: true }
  }

  constructor () {
    super();

    // default prop values
    this.align = 'left';
    this._timelineAlign = {
      '--timeline-align': '10%'
    };

  }

  firstUpdated () {
    if (this.align === 'left')
      this._timelineAlign['--timeline-align'] = '10%';

    if (this.align === 'center')
      this._timelineAlign['--timeline-align'] = '50%';

    if (this.align === 'right')
      this._timelineAlign['--timeline-align'] = '90%';
  }

  updated () {
    console.log(`Stepper updated!`);
  }


  // TODO:FIXME: if the slot doesn't update (align or style), those
  // TODO:FIXME: .. attributes may need to be applied manually via the
  // TODO:FIXME: .. @slotchange event and event-handler method
  handleStepperItemChange (e) {
    console.log(`@Changed: stepper-item`);
    console.dir(e);
    console.dir(e.target.firstChild);
  }

  render() {
    return html`
      <article class="timeline" style=${styleMap(this._timelineAlign)}>
        <slot
          name="stepitem"
          class="timeline__item"
          style=${styleMap(this._timelineAlign)}
          .align=${this.align}
          @slotchange=${this.handleStepperItemChange}>
        </slot>
      </article>
    `;
  }
}
