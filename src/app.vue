<template>
  <div id="app">
    <Overview/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Overview from '@/components/overview.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Overview,
  },
});
</script>

<style>

</style>
