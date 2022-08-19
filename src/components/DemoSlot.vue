<template>
  <div>
    <p>DemoSlot</p>
    <comp-tabs title="tiêu đề của tabs">
      <ul class="tabs-header">
        <li
          v-for="(item, index) in taskHeader"
          v-on:click="handleChangeTabs(index)"
          v-bind:key="index"
          v-bind:class="{ active: tabActive == index }"
        >
          {{ item.text }}
        </li>
      </ul>
      <div class="tab-content tab1" v-if="tabActive === 0">
        <p>tab1</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          dolorem.
        </p>
      </div>
      <div class="tab-content tab2" v-if="tabActive === 1">
        <p>tab2</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          dolorem.
        </p>
      </div>
      <div class="tab-content tab3" v-if="tabActive === 2">
        <p>tab3</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          dolorem.
        </p>
      </div>
      <div class="tab-content tab4" v-if="tabActive === 3">
        <p>tab4</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          dolorem.
        </p>
      </div>
    </comp-tabs>
  </div>
</template>

<script>
import CompTabs from './CompTabs.vue';
export default {
  components: { CompTabs },
  name: 'DemoSlot',

  data() {
    return {
      taskHeader: [
        { text: 'tab1' },
        { text: 'tab2' },
        { text: 'tab3' },
        { text: 'tab4' }
      ],
      tabActive: 1
    };
  },

  mounted() {},

  methods: {
    handleChangeTabs(index) {
      this.tabActive = index;
    }
  }
};
</script>

<style scoped></style>
