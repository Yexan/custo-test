<template>
  <section class="navigation-bar">
    <ul>
      <li
        v-for="(page, index) in pages"
        :key="index"
        :class="{ active: isActive(page) }"
        @click="setFocusedPage(page)">
        {{page.title}}
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters('pages', {
      pages: 'getAll',
      isActive: 'isActivePage',
    }),
    methods: mapActions('pages', [
      'setFocusedPage'
    ]),
    created () {
      this.$store.dispatch('pages/initPages')
    }
  }
</script>

<style lang="sass" scoped>
  .navigation-bar
    +flex-column-center
    color: #14294a
    background-color: #fff

    ul
      +flex-row-center
      height: 100%
      list-style: none

    li
      +flex-column-center
      height: 100%
      min-width: 120px
      margin: 0 10px
      cursor: pointer
      border: 2px solid transparent

      &.active
        border-bottom-color: currentColor

</style>
