<template>
  <div class="product-page">
    <p>
      Page title : {{ title }} <br>
      Page format : {{ format }} <br>
      Selected color:
      <span
        class="selected-color"
        :style="{ 'background-color': activeColor.code }"></span>
    </p>
  </div>
</template>

<script>
  export default {
    props: ['title', 'format', 'activeColor']
  }
</script>

<style lang="sass" scoped>
  .selected-color
    display: inline-block
    +w-h(15px)
</style>
