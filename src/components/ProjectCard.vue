<script>
import { store } from '../store';
export default {
  name: 'ProjectCard',
  data() {
    return {
      store
    }
  },
  props: {
    item: Object
  },
  computed: {
    getImg() {
      let resault = "";
      if (this.item.thumb !== null) {
        resault = `${this.store.apiUrl}${this.store.imgUrlPrefix}${this.item.thumb}`
      } else {
        resault = false;
      }
      console.log(resault);
      return resault;
    },
  },
}
</script>

<template>
  <div class="card w-50">
    <img v-if="getImg" :src="getImg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text">{{ item.description }}</p>
      <p v-if="item.type" class="card-text"><strong>Tipologia:</strong> {{ item.type.title }}</p>
    </div>

    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Tecnologie:</strong></li>
      <li v-if="item.technologies" v-for="tech in item.technologies" class="list-group-item">{{ tech.name }}</li>
      <li v-else class="list-group-item">Nessuna tecnologia</li>

    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>