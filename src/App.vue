<script>
import axios from 'axios';
import { store } from './store';
export default {
  data() {
    return {
      store,
      projects: []
    }
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
        <div class="card h-100" :key="index">
          <img :src="`${this.store.apiUrl}${this.store.imgUrlPrefix}${project.thumb}`" class="card-img-top" :alt="project.slug">
          <div class="card-body h-100 d-flex flex-column justify-content-end">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './style/general.scss';
</style>