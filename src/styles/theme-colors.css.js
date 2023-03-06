import { css } from 'lit';

/*
 * source:
 *   - https://web.dev/building-a-color-scheme/
 */

export const defaultColors = css`
  /* -----
   * theme defaults
   */
  :host {
    color: var(--text1);
    link-visited: var(--surface4);
    link-decoration: none;
    background-color: var(--surface1);
  }
`;

export const defaultStyles = css`
  :host {
    font-family: var(--font-serif);
    font-size: 1rem;
    color: var(--text1);

    link-visited: var(--surface4);
    link-decoration: none;
    background-color: var(--surface1);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--font-sans);
    color: var(--text2);
  }
`;

/*
 * -----
 * NOTE: stack-utilities - e.g. from EveryLayout:
 * * + * { margin-bottom: var(--space-xs, .5rem) }
 * sidebar > * + * { margin-bottom: var(--space-1, 1rem); }
 * -----
 */
export const themeSpacing = css`
  :host {
    --space-baseline: calc(1rem * 1.4 + 1px);

    --space-xxs: calc(var(--space-baseline) * .25);
    --space-xs: calc(var(--space-baseline) * .50);
    --space-1: var(--space-baseline);
    --space-2: calc(var(--space-baseline) * 2);
    --space-4: calc(var(--space-baseline) * 4);
    --space-8: calc(var(--space-baseline) * 8);
    --space-16: calc(var(--space-baseline) * 16);
  }
`;

export const fontScale = css`
  :host {
    --font-sans: system-ui, -apple-system, Segoe UI, Roboto,
                  Ubuntu, Cantarell, Noto Sans, sans-serif;
    --font-serif: ui-serif, serif;
    --font-mono: Dank Mono, Operator Mono, Inconsolata, Fira Mono,
                  ui-monospace, SF Mono, Monaco, Droid Sans Mono,
                  Source Code Pro, monospace;

    --font-size-base: 16px;
    --font-size-coefficient: 1.25;
    --font-size-1: var(--font-size-base);
    --font-size-2: calc(var(--font-size-1) * var(--font-size-coefficient));
    --font-size-3: calc(var(--font-size-2) * var(--font-size-coefficient));
    --font-size-4: calc(var(--font-size-3) * var(--font-size-coefficient));
    --font-size-5: calc(var(--font-size-4) * var(--font-size-coefficient));
    --font-size-6: calc(var(--font-size-5) * var(--font-size-coefficient));
  }
`;

export const themeStyles = css`
  :host {
    /* -----
     * the base-color on which the rest of the
     * theme calculations are based
     *
     * the color is based on HSL-format for ease
     * of calculations on the rest of the palette
     */
    --brand-hue: 200;
    --brand-saturation: 100%;
    --brand-saturation: 80%;
    --brand-lightness: 50%;

    --accent-hue: 385;
    --accent-saturation: 100%;
    --accent-saturation: 80%;
    --accent-lightness: 50%;
    --accent-base: hsl( var(--accent-hue),
                        var(--accent-saturation),
                        var(--accent-lightness));

    /* -----
     * light-color theme palette
     */
    --brand-light: hsl(var(--brand-hue) var(--brand-saturation) var(--brand-lightness));
    --text1-light: hsl(var(--brand-hue) var(--brand-saturation) 10%);
    --text2-light: hsl(var(--brand-hue) 30% 30%);
    --surface1-light: hsl(var(--brand-hue) 25% 90%);
    --surface2-light: hsl(var(--brand-hue) 20% 99%);
    --surface3-light: hsl(var(--brand-hue) 20% 92%);
    --surface4-light: hsl(var(--brand-hue) 20% 85%);
    --surface-shadow-light: var(--brand-hue) 10% calc(var(--brand-lightness) / 5);
    --shadow-strength-light: .02;

    /* -----
     * light-color theme palette :: accent-color additions
     */
    --accent1-light: hsl(var(--accent-hue) var(--accent-saturation) 10%);
    --accent2-light: hsl(var(--accent-hue) 50% 50%);
    --accent3-light: hsl(var(--accent-hue) 30% 30%);

    /* -----
     * dark-color theme palette
     */
    --brand-dark: hsl(var(--brand-hue) calc(var(--brand-saturation) / 2) calc(var(--brand-lightness) / 1.5));
    --text1-dark: hsl(var(--brand-hue) 15% 85%);
    --text2-dark: hsl(var(--brand-hue) 5% 65%);
    --surface1-dark: hsl(var(--brand-hue) 10% 10%);
    --surface2-dark: hsl(var(--brand-hue) 10% 15%);
    --surface3-dark: hsl(var(--brand-hue) 5%  20%);
    --surface4-dark: hsl(var(--brand-hue) 5% 25%);
    --surface-shadow-dark: var(--brand-hue) 50% 3%;
    --shadow-strength-dark: .8;

    /* -----
     * dark-color theme palette :: accent-color additions
     */
    --accent1-dark: hsl(var(--accent-hue) 45% 85%);
    --accent2-dark: hsl(var(--accent-hue) 35% 65%);
    --accent3-dark: hsl(var(--accent-hue) 20% 40%);

    /* -----
     * dim-color theme palette
     */
    --brand-dim: hsl(var(--brand-hue) calc(var(--brand-saturation) / 1.25) calc(var(--brand-lightness) / 1.25));
    --text1-dim: hsl(var(--brand-hue) 15% 75%);
    --text2-dim: hsl(var(--brand-hue) 10% 61%);
    --surface1-dim: hsl(var(--brand-hue) 10% 20%);
    --surface2-dim: hsl(var(--brand-hue) 10% 25%);
    --surface3-dim: hsl(var(--brand-hue) 5%  30%);
    --surface4-dim: hsl(var(--brand-hue) 5% 35%);
    --surface-shadow-dim: var(--brand-hue) 30% 13%;
    --shadow-strength-dim: .2;
  }

    /* -----
     * dark-color theme palette :: accent-color additions
     */
    --accent1-dim: hsl(var(--accent-hue) 15% 75%);
    --accent2-dim: hsl(var(--accent-hue) 10% 61%);
    --accent3-dim: hsl(var(--accent-hue) 15% 45%);

  /* -----
   * light-theme palette, if user auto-config for light
   */
  /*
  * :host {
  *   color-scheme: light;

  *   --brand: var(--brand-light);
  *   --text1: var(--text1-light);
  *   --text2: var(--text2-light);
  *   --surface1: var(--surface1-light);
  *   --surface2: var(--surface2-light);
  *   --surface3: var(--surface3-light);
  *   --surface4: var(--surface4-light);
  *   --surface-shadow: var(--surface-shadow-light);
  *   --shadow-strength: var(--shadow-strength-light);
  * }
  */

  /* -----
   * dark-theme palette, if user auto-config for dark
   */
  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;

      --brand: var(--brand-dark);
      --text1: var(--text1-dark);
      --text2: var(--text2-dark);
      --surface1: var(--surface1-dark);
      --surface2: var(--surface2-dark);
      --surface3: var(--surface3-dark);
      --surface4: var(--surface4-dark);
      --surface-shadow: var(--surface-shadow-dark);
      --shadow-strength: var(--shadow-strength-dark);

      --accent1: var(--accent1-dark);
      --accent2: var(--accent2-dark);
      --accent3: var(--accent3-dark);
    }
  }

  /* -----
   * light-theme palette selection (not auto)
   */
  [color-scheme="light"] {
    color-scheme: light;
    --brand: var(--brand-light);
    --text1: var(--text1-light);
    --text2: var(--text2-light);
    --surface1: var(--surface1-light);
    --surface2: var(--surface2-light);
    --surface3: var(--surface3-light);
    --surface4: var(--surface4-light);
    --surface-shadow: var(--surface-shadow-light);
    --shadow-strength: var(--shadow-strength-light);

    --accent1: var(--accent1-light);
    --accent2: var(--accent2-light);
    --accent3: var(--accent3-light);
  }

  /* -----
   * dark-theme palette selection (not auto)
   */
  [color-scheme="dark"] {
    color-scheme: dark;

    --brand: var(--brand-dark);
    --text1: var(--text1-dark);
    --text2: var(--text2-dark);
    --surface1: var(--surface1-dark);
    --surface2: var(--surface2-dark);
    --surface3: var(--surface3-dark);
    --surface4: var(--surface4-dark);
    --surface-shadow: var(--surface-shadow-dark);
    --shadow-strength: var(--shadow-strength-dark);

    --accent1: var(--accent1-dark);
    --accent2: var(--accent2-dark);
    --accent3: var(--accent3-dark);
  }

  /* -----
   * dim-theme palette selection (not auto)
   */
  [color-scheme="dim"] {
    color-scheme: dark;

    --brand: var(--brand-dim);
    --text1: var(--text1-dim);
    --text2: var(--text2-dim);
    --surface1: var(--surface1-dim);
    --surface2: var(--surface2-dim);
    --surface3: var(--surface3-dim);
    --surface4: var(--surface4-dim);
    --surface-shadow: var(--surface-shadow-dim);
    --shadow-strength: var(--shadow-strength-dim);

    --accent1: var(--accent1-dim);
    --accent2: var(--accent2-dim);
    --accent3: var(--accent3-dim);
  }

  /* -----
   * a box-shadow that's been designed to work with
   * this theme setup
   *
   * source:
   *   - https://shadows.brumm.af/
   */
  .rad-shadow {
    box-shadow:
      0 2.8px 2.2px hsl(var(--surface-shadow) / calc(var(--shadow-strength) + .03)),
      0 6.7px 5.3px hsl(var(--surface-shadow) / calc(var(--shadow-strength) + .01)),
      0 12.5px 10px hsl(var(--surface-shadow) / calc(var(--shadow-strength) + .02)),
      0 22.3px 17.9px hsl(var(--surface-shadow) / calc(var(--shadow-strength) + .02)),
      0 41.8px 33.4px hsl(var(--surface-shadow) / calc(var(--shadow-strength) + .03)),
      0 100px 80px hsl(var(--surface-shadow) / var(--shadow-strength))
    ;
  }

  .subtle-shadow-1 {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .subtle-shadow-2 {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }

  .medium-shadow {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .strong-shadow {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .bottom-soft-shadow {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  }

  .bottom-sharp-shadow {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }

  .wide-shadow {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

`;

export const allOPColors = css`
  /*
   * source: OpenProps color palette
   *   - https://github.com/argyleink/open-props/blob/main/src/props.colors-hsl.css
   */
  :where(html) {
    --gray-0-hsl: 210 17% 98%;
    --gray-1-hsl: 210 17% 95%;
    --gray-2-hsl: 210 16% 93%;
    --gray-3-hsl: 210 14% 89%;
    --gray-4-hsl: 210 14% 83%;
    --gray-5-hsl: 210 11% 71%;
    --gray-6-hsl: 210 7% 56%;
    --gray-7-hsl: 210 9% 31%;
    --gray-8-hsl: 210 10% 23%;
    --gray-9-hsl: 210 11% 15%;
    --red-0-hsl: 0 100% 98%;
    --red-1-hsl: 0 100% 95%;
    --red-2-hsl: 0 100% 89%;
    --red-3-hsl: 0 100% 83%;
    --red-4-hsl: 0 100% 76%;
    --red-5-hsl: 0 100% 71%;
    --red-6-hsl: 0 94% 65%;
    --red-7-hsl: 0 86% 59%;
    --red-8-hsl: 0 74% 54%;
    --red-9-hsl: 0 65% 48%;
    --pink-0-hsl: 336 100% 97%;
    --pink-1-hsl: 336 100% 94%;
    --pink-2-hsl: 338 91% 87%;
    --pink-3-hsl: 339 90% 81%;
    --pink-4-hsl: 339 88% 74%;
    --pink-5-hsl: 339 82% 67%;
    --pink-6-hsl: 339 76% 59%;
    --pink-7-hsl: 339 67% 52%;
    --pink-8-hsl: 339 68% 45%;
    --pink-9-hsl: 339 69% 38%;
    --grape-0-hsl: 280 67% 96%;
    --grape-1-hsl: 287 77% 92%;
    --grape-2-hsl: 288 86% 86%;
    --grape-3-hsl: 289 85% 78%;
    --grape-4-hsl: 288 83% 71%;
    --grape-5-hsl: 288 75% 64%;
    --grape-6-hsl: 288 67% 58%;
    --grape-7-hsl: 288 56% 52%;
    --grape-8-hsl: 288 54% 46%;
    --grape-9-hsl: 288 54% 40%;
    --violet-0-hsl: 252 100% 97%;
    --violet-1-hsl: 257 100% 93%;
    --violet-2-hsl: 256 100% 87%;
    --violet-3-hsl: 255 94% 79%;
    --violet-4-hsl: 255 93% 72%;
    --violet-5-hsl: 255 91% 67%;
    --violet-6-hsl: 255 86% 63%;
    --violet-7-hsl: 255 78% 60%;
    --violet-8-hsl: 255 67% 55%;
    --violet-9-hsl: 255 53% 50%;
    --indigo-0-hsl: 223 100% 96%;
    --indigo-1-hsl: 225 100% 93%;
    --indigo-2-hsl: 228 100% 86%;
    --indigo-3-hsl: 228 100% 78%;
    --indigo-4-hsl: 228 96% 72%;
    --indigo-5-hsl: 228 94% 67%;
    --indigo-6-hsl: 228 89% 63%;
    --indigo-7-hsl: 228 81% 59%;
    --indigo-8-hsl: 228 69% 55%;
    --indigo-9-hsl: 230 57% 50%;
    --blue-0-hsl: 205 100% 95%;
    --blue-1-hsl: 206 100% 91%;
    --blue-2-hsl: 206 100% 82%;
    --blue-3-hsl: 206 96% 72%;
    --blue-4-hsl: 207 91% 64%;
    --blue-5-hsl: 207 86% 57%;
    --blue-6-hsl: 208 80% 52%;
    --blue-7-hsl: 208 77% 47%;
    --blue-8-hsl: 209 77% 43%;
    --blue-9-hsl: 209 75% 38%;
    --cyan-0-hsl: 185 81% 94%;
    --cyan-1-hsl: 185 84% 88%;
    --cyan-2-hsl: 186 77% 77%;
    --cyan-3-hsl: 187 74% 65%;
    --cyan-4-hsl: 187 69% 55%;
    --cyan-5-hsl: 188 72% 47%;
    --cyan-6-hsl: 187 80% 42%;
    --cyan-7-hsl: 188 83% 37%;
    --cyan-8-hsl: 189 85% 32%;
    --cyan-9-hsl: 189 85% 28%;
    --teal-0-hsl: 161 79% 95%;
    --teal-1-hsl: 160 85% 87%;
    --teal-2-hsl: 162 78% 77%;
    --teal-3-hsl: 162 72% 65%;
    --teal-4-hsl: 162 68% 54%;
    --teal-5-hsl: 162 73% 46%;
    --teal-6-hsl: 162 82% 40%;
    --teal-7-hsl: 162 87% 35%;
    --teal-8-hsl: 162 88% 30%;
    --teal-9-hsl: 162 88% 26%;
    --green-0-hsl: 131 67% 95%;
    --green-1-hsl: 128 76% 90%;
    --green-2-hsl: 128 71% 82%;
    --green-3-hsl: 129 68% 73%;
    --green-4-hsl: 130 61% 64%;
    --green-5-hsl: 130 57% 56%;
    --green-6-hsl: 131 50% 50%;
    --green-7-hsl: 131 53% 46%;
    --green-8-hsl: 131 54% 40%;
    --green-9-hsl: 132 52% 35%;
    --lime-0-hsl: 79 81% 94%;
    --lime-1-hsl: 80 83% 88%;
    --lime-2-hsl: 81 81% 80%;
    --lime-3-hsl: 82 75% 69%;
    --lime-4-hsl: 83 73% 59%;
    --lime-5-hsl: 84 69% 51%;
    --lime-6-hsl: 85 74% 45%;
    --lime-7-hsl: 85 79% 40%;
    --lime-8-hsl: 86 84% 36%;
    --lime-9-hsl: 85 84% 32%;
    --yellow-0-hsl: 50 100% 93%;
    --yellow-1-hsl: 49 100% 87%;
    --yellow-2-hsl: 49 100% 80%;
    --yellow-3-hsl: 48 100% 70%;
    --yellow-4-hsl: 47 100% 62%;
    --yellow-5-hsl: 45 97% 54%;
    --yellow-6-hsl: 42 96% 50%;
    --yellow-7-hsl: 39 100% 48%;
    --yellow-8-hsl: 35 100% 47%;
    --yellow-9-hsl: 31 100% 45%;
    --orange-0-hsl: 34 100% 95%;
    --orange-1-hsl: 33 100% 90%;
    --orange-2-hsl: 33 100% 83%;
    --orange-3-hsl: 32 100% 74%;
    --orange-4-hsl: 31 100% 65%;
    --orange-5-hsl: 29 100% 58%;
    --orange-6-hsl: 27 98% 54%;
    --orange-7-hsl: 24 94% 50%;
    --orange-8-hsl: 21 90% 48%;
    --orange-9-hsl: 17 87% 45%;
  }
`;
