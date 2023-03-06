import { LitElement, html } from 'lit';
import { carouselStyles } from '../styles/carousel.css.js';

// STATUS/WARN: needs much work
// TODO/FIXME: this is only the initial shell
// TODO/FIXME: find one or two tutorials on implementing this
export class Carousel extends LitElement {
  static styles = [carouselStyles];

  render() {
    return html`
      <div class="fit">
        <h2>Hey, I'm gonna be a Carousel!</h2>
        <p>How about that</p>
      </div>
    `;
  }
}
