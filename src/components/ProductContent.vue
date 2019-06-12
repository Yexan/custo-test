<template>
  <section class="product-content">
    <div v-if="!hasActivePage">
      Empty product
    </div>

    <div v-if="hasActivePage">
      <Page
        :title="page.title"
        :format="page.format"
        :activeColor=activeColor>
      </Page>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Page from './Page.vue'

  export default {
    components: { Page },
    computed: {
      ...mapGetters('pages', {
        page: 'getActivePage',
        hasActivePage: 'hasActivePage'
      }),
      ...mapGetters('colors', {
        activeColor: 'getActiveColor'
      })
    }
  }
</script>

<style lang="sass" scoped>
  .product-content
    +flex-column-center
    background-color: #ccc
</style>
