<template>
  <div class="demo-ref">
    <p>DemoRef</p>
    <button v-on:click="handleClickInputFile" class="avatar">
      Thay đổi avater
    </button>
    <input ref="fileInputAvatar" type="file" style="display:none" />
  </div>
</template>

<script>
export default {
  name: 'DemoRef',

  data() {
    return {};
  },

  methods: {
    handleClickInputFile(e) {
      this.$refs.fileInputAvatar.click();
    }
  }
};
</script>

<style scoped>
.demo-ref {
  margin-top: 100px;
  padding: 100px 30px;
  border: 1px solid #333;
}
.avatar {
  padding: 12px 15px;
  border: 2px solid #333;
  background-color: #333;
  color: aliceblue;
  transition: all 0.3s;
  cursor: pointer;
}
.avatar:hover {
  background-color: white;
  color: #333;
}
</style>
