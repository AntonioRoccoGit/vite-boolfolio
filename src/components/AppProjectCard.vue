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
    <div class="card h-100">
        <img v-if="getImg" :src="getImg" class="card-img-top" :alt="item.slug">
        <div class="card-body h-100 d-flex flex-column justify-content-end">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
        </div>
        <RouterLink class="btn btn-primary" :to="{ name: 'single-project', params: { slug: item.slug } }">Dettagli
        </RouterLink>
    </div>
</template>