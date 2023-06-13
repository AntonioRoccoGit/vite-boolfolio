<script>
import axios from 'axios';
import {store} from './store';
export default{
  data() {
    return {
      store,
      projects: []
    }
  },
  mounted(){
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios
      .get(`${this.store.apiUrl}${this.store.apiProjects}`)
      .then(resp=>{
        this.projects = resp.data.results;
        console.log(this.projects);
      });
    }
  }
}
</script>

<template>
  <div class="container">
    <h2 class="text-center">Backend-Frontend</h2>

  </div>
</template>

<style lang="scss">
@use './style/general.scss';
</style>