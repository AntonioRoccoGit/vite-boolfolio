<script>
import { store } from '../store';
export default {
    name: 'AppProjectCard',
    data() {
        return {
            store
        }
    },
    props: {
        item: Object,
    }
}
</script>

<template>
    <div class="card h-100">
        <img :src="`${this.store.apiUrl}${this.store.imgUrlPrefix}${item.thumb}`" class="card-img-top" :alt="item.slug">
        <div class="card-body h-100 d-flex flex-column justify-content-end">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
        </div>
        <RouterLink class="btn btn-primary" :to="{ name: 'single-project', params:{slug: item.slug} }">Dettagli</RouterLink>
    </div>
</template>