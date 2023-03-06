// index.ts
import { Router } from '@vaadin/router';

// Adding the lit-app component here for better performance
import './app.js';

const routes = [
  {
    path: '/',
    component: 'xx-app-shell',
    children: [
      {
        path: 'layouts',
        component: 'xx-layouts',
        action: async () => {
          await import('./pages/layouts.js');
        },
      }, {
        path: 'components',
        component: 'xx-components-shell',
        action: async () => {
          await import('./pages/components.js');
        },
        children: [
          {
            path: 'list',
            component: 'xx-list-showcase',
            action: async () => {
              await import('./components-showcase/list-showcase.js');
            },
          }, {
            path: 'carousel',
            component: 'xx-carousel',
            action: async () => {
              await import('./components-base/carousel');
            },
          }, {
            path: 'flex',
            component: 'xx-flex-showcase',
            action: async () => {
              await import('./components-showcase/flex-showcase.js');
            },
          }, {
            path: 'stepper',
            component: 'xx-stepper-showcase',
            action: async () => {
              await import('./components-showcase/stepper-showcase.js');
            },
          }, {
            path: 'card',
            component: 'xx-card',
            action: async () => {
              await import('./components-base/card');
            },
          }, {
            path: 'tooltip',
            component: 'xx-tooltip',
            action: async () => {
              await import('./components-base/tooltip');
            },
          }, {
            path: 'select',
            component: 'xx-select',
            action: async () => {
              await import('./components-base/select');
            },
          }, {
            path: 'tabs',
            component: 'xx-tabs-showcase',
            action: async () => {
              await import('./components-showcase/tabs-showcase.js');
            },
          }, {
            path: 'navbar',
            component: 'xx-navbar',
            action: async () => {
              await import('./components-base/navbar');
            },
          },
        ]
      }, {
        path: 'viz',
        component: 'xx-viz-shell',
        action: async () => {
          await import('./pages/viz-shell.js');
        },
        children: [
          {
            path: 'barchart',
            component: 'xx-barchart-showcase',
            action: async () => {
              await import('./components-viz/barchart/barchart-showcase.js');
            },
          }, {
            path: 'barchart-1',
            component: 'xx-barchart-showcase',
            action: async () => {
              await import('./components-viz/barchart/barchart-showcase.js');
            },
          }, {
            path: 'barchart-2',
            component: 'xx-barchart-showcase',
            action: async () => {
              await import('./components-viz/barchart/barchart-showcase.js');
            },
          },
        ]
      },
    ],
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);
