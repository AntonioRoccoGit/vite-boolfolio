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
      getResult: [],
      currentPage: 0
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
    getProjects(getPage = 1) {
      const params = {
        page: getPage
      };
      axios
        .get(`${this.store.apiUrl}${this.store.apiProjects}`, {params})
        .then(resp => {
          const json = resp.data.results
          this.getResult = json;
          this.projects = json.data;
          this.currentPage = json.current_page;
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
      <AppPagination :item="getResult" 
        @next="getProjects(currentPage + 1)"
        @previously="getProjects(currentPage - 1)"
      />
    </div>
    <!-- /pagination -->

  </div>
</template>

<style lang="scss">
@use './style/general.scss';
</style>