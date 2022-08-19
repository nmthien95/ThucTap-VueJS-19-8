<template>
  <div>
    <div class="comp-tabs">
      <div class="tabs-title">
        <span>{{ title }}</span>
        <ion-icon name="heart"></ion-icon>
      </div>
      <div class="tabs-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comp-tabs',

  data() {
    return {};
  },
  props: {
    title: String
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.tabs-title {
  border: 1px solid #333;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
}
.tabs-header {
  list-style: none;
  margin-top: 10px;
  padding: 0;
  display: flex;
}
.tabs-header li {
  padding: 8px 15px;
  background-color: #ccc;

  transition: all 0.3s;
}
.tabs-header li:hover {
  background-color: #333;
  color: white;
}
.tabs-content {
  border: 1px solid #333;
  padding: 5px;
}
.tab-content {
  padding: 15px;
  border: 1px solid green;
  text-align: center;
}
.active {
  background-color: orangered !important;
  color: white;
}
</style>
