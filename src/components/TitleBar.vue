<template>
  <header class="title-bar">
    {{ productName }} - {{ productPrice | formatPrice }}
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters('productInfos', {
      productName: 'getProductName',
      productPrice: 'getProductPrice',
    }),
    created () {
      this.$store.dispatch('productInfos/getProductInfos')
    },
    filters: {
      formatPrice: function (value) {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value / 100)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .title-bar
    +flex-column-center
    color: #fff
    background-color: #14294a
</style>
