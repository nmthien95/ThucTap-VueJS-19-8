<template>
  <div class="list-user">
    <user
      class="user"
      v-for="user in listUser"
      v-bind:key="user.id"
      v-bind:user="user"
      v-on:deleteUser="deleteUser"
    />
  </div>
</template>

<script>
import User from './User.vue';
export default {
  name: 'list-user',
  components: { User },
  props: {
    listUser: { type: Array, default: [] }
  },
  methods: {
    deleteUser(data) {
      this.$emit('handleDeleteUser', data);
    }
  }
};
</script>

<style>
.list-user {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list-user .user {
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid #333;
  width: calc(33.3333% -20px);
}
</style>
