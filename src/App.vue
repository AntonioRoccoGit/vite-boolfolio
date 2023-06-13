<script>
import axios from 'axios';
import { store } from './store';
import AppProjectCard from './components/AppProjectCard.vue';
export default {
  data() {
    return {
      store,
      projects: []
    }
  },
  components: {
    AppProjectCard,
    AppProjectCard
},
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios
        .get(`${this.store.apiUrl}${this.store.apiProjects}`)
        .then(resp => {
          this.projects = resp.data.results;
          console.log(this.projects);
        });
    }
  }
}
</script>

<template>
  <div class="container">
    <h2 class="text-center p-4">Backend-Frontend</h2>
    <div class="row row-cols-4 g-4">
      <div v-for="(project, index ) in projects" class="col">
        <AppProjectCard :item="project" :key="index" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './style/general.scss';
</style>