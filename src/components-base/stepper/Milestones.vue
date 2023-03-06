<template>
  <article>
    <h2>Milestones Completed</h2>
    <Stepper align="right" :items="milestones" v-slot="{ item: milestone, align: align }">
      <StepperItem :align="align" :item="milestone"></StepperItem>
    </Stepper>
  </article>
</template>

<script>
  import Stepper from './Stepper.vue'
  import StepperItem from './StepperItem.vue'

  export default {
    components: {
      Stepper,
      StepperItem
    },
    props: {
      milestones: Array
    },
    setup(props) {
      // expose to template
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
