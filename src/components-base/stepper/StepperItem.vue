<template>
  <details class="stepper_item" :style="marginStyles">
    <summary class="c-stepper__title">{{ item.title }}</summary>
    <p class="c-stepper__desc">{{ item.description }}</p>
  </details>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    props: {
      item: Object,
      align: String
    },

    setup(props) {
      console.log("I am StepperItem");
      const timelineAlign = reactive({'--timeline-align': '10%'});
      const marginStyles = reactive({
        '--margin-left': 'calc(var(--timeline-align) + 2rem)',
        '--margin-right': '10%',
        '--item-width': '30%'
      });

      if (props.align === 'left') {
        console.log("I stepper am aligned left");
        timelineAlign['--timeline-align'] = '10%';
        marginStyles['--margin-left'] = 'calc(var(--timeline-align) + 2rem)';
        marginStyles['--margin-right'] = '2rem';
      }

      if (props.align === 'center') {
        console.log("I stepper am aligned center");
        timelineAlign['--timeline-align'] = '50%';
        marginStyles['--margin-left'] = 'calc(var(--timeline-align) + 2rem)';
        marginStyles['--margin-right'] = '2rem';
        marginStyles['--item-width'] = '45%';
      }

      if (props.align === 'right') {
        console.log("I stepper am aligned right");
        timelineAlign['--timeline-align'] = '90%';
        // marginStyles['--margin-left'] = '2rem';
        marginStyles['--margin-left'] = 'calc(var(--timeline-align) - var(--item-width) - 2rem)';
        marginStyles['--margin-right'] = 'calc(var(--timeline-align) + 2rem)';
      }

      // expose to template
      return {
        marginStyles
      }
    }
  }
</script>

<style lang="scss" scoped>
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
</style>
