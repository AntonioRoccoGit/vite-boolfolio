<script>
import axios from 'axios';
import { store } from './store';
import AppProjectCard from './components/AppProjectCard.vue';
import AppPagination from './components/AppPagination.vue';
export default {
  data() {
    return {
      store,
      projects: [],
      getResult: []
    }
  },
  components: {
    AppProjectCard,
    AppPagination,
},
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios
        .get(`${this.store.apiUrl}${this.store.apiProjects}`)
        .then(resp => {
          this.projects = resp.data.results.data;
          this.getResult = resp.data.results;
        });
    }
  }
}
</script>

<template>
  <div class="container">
    <h2 class="text-center p-4">Backend-Frontend</h2>

    <!-- row for project card -->
    <div class="row row-cols-4 g-4">
      <div v-for="(project, index ) in projects" class="col" :key="index" >
        <AppProjectCard :item="project" />
      </div>
    </div>
    <!-- /row for project card -->

    <!-- pagination -->
    <div class="d-flex justify-content-center mt-4">
      <AppPagination :item="getResult" />
    </div>
    <!-- /pagination -->

  </div>
</template>

<style lang="scss">
@use './style/general.scss';
</style>