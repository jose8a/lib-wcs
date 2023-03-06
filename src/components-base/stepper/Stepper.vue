<template>
  <article class="timeline" :style="timelineAlign">
    <section v-for="item in items" class="timeline__item">
      <slot
        :item="item"
        :style="timelineAlign"
        :align="align">
      </slot>
    </section>
  </article>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    props: {
      items: Array,
      align: String
    },
    setup(props) {
      const readersNumber = ref(0)
      const book = reactive({ title: 'Vue 3 Guide' })
      const timelineAlign = reactive({
        '--timeline-align': '10%'
      });

      if (props.align === 'left')
        timelineAlign['--timeline-align'] = '10%';

      if (props.align === 'center')
        timelineAlign['--timeline-align'] = '50%';

      if (props.align === 'right')
        timelineAlign['--timeline-align'] = '90%';

      // expose to template
      return {
        timelineAlign,
        book
      }
    }
  }
</script>

<style lang="scss" scoped>
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

</style>
