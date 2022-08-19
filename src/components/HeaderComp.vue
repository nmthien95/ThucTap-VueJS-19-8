<template>
  <div>
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'headerComp',
  data() {
    return {
      text: 'header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
