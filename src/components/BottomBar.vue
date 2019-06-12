<template>
  <section class="bottom-bar">
    <ul>
      <li
        v-for="(color, index) in colors"
        :key="index"
        class="product-color"
        :style="{ 'background-color': color.code, 'color': color.code }"
        :class="{ active: isActive(color) }"
        @click="setActiveColor(color)">
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters('colors', {
      colors: 'getColors',
      isActive: 'isActiveColor',
    }),
    methods: mapActions('colors', [
      'setActiveColor'
    ]),
    created () {
      this.$store.dispatch('colors/initColors')
    }
  }
</script>

<style lang="sass" scoped>
  .bottom-bar
    +flex-column-center
    color: #14294a
    background-color: #fff

    ul
      +flex-row-center
      list-style: none

  .product-color
    +w-h(30px)
    margin: 0 10px
    border-radius: 15px
    cursor: pointer

    &.active
      box-shadow: 0 0 0 2px #fff, 0 0 0 3px currentColor
</style>
