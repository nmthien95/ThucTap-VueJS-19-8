<template>
  <div id="user">
    <h3>{{ user.email }}</h3>
    <button v-on:click="handleDelete" class="delete">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleDelete(e) {
      let data = { id: this.user.id };

      this.$emit('deleteUser', data);
    }
  }
};
</script>

<style>
#user {
  position: relative;
}
#user .delete {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
