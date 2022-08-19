<template>
  <div>
    <header-comp />
    <div class="hello">
      <h1>{{ msg }}</h1>
      <img src="../assets/logo.png" />
    </div>
    <list-user
      v-bind:list-user="listUser"
      v-on:handleDeleteUser="handleDeleteUser"
    />
    <footer-comp />
  </div>
</template>

<script>
import FooterComp from './FooterComp.vue';
import HeaderComp from './HeaderComp.vue';
import ListUser from './ListUser.vue';
export default {
  components: { HeaderComp, FooterComp, ListUser },
  name: 'HelloWorld',
  data() {
    return {
      msg: 'hello VueJS!',
      listUser: [
        { id: 100, email: 'test1@gmail.com', active: false },
        { id: 200, email: 'test2@gmail.com', active: false },
        { id: 300, email: 'test3@gmail.com', active: true },
        { id: 400, email: 'test4@gmail.com', active: true },
        { id: 500, email: 'test4@gmail.com', active: true },
        { id: 600, email: 'test4@gmail.com', active: true }
      ]
    };
  },
  methods: {
    handleDeleteUser(data) {
      let index = this.listUser.findIndex(user => user.id === data.id);

      if (index != 1) {
        this.listUser.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped></style>
