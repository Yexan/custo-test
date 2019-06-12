<template>
  <div class="product-custo-page">
    <TitleBar />
    <NavBar />
    <ProductContent />
    <BottomBar />
  </div>
</template>

<script>
  import TitleBar from './components/TitleBar.vue'
  import NavBar from './components/NavBar.vue'
  import ProductContent from './components/ProductContent.vue'
  import BottomBar from './components/BottomBar.vue'

  export default {
    components: {
      TitleBar,
      NavBar,
      ProductContent,
      BottomBar
    }
  }
</script>

<style lang="sass">
  @import './sass/reset.sass'

  .product-custo-page
    display: grid
    grid-template: 40px 60px auto 82px / auto
    min-height: 100vh
    background-color: #eee
</style>
