<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: "SingleProject",
    data() {
        return {
            project: {},
            store
        };
    },
    mounted() {
        const slug = this.$route.params.slug;
        this.getProject(slug);
    },
    methods: {
        getProject(slug) {
            axios
                .get(`${this.store.apiUrl}${this.store.apiProjects}/${slug}`)
                .then(resp => {
                    this.project = resp.data.results;
                    console.log(this.project);
                });
        }
    },
    components: { ProjectCard }
}
</script>

<template>
    <div class="container d-flex justify-content-center mt-5">
        <ProjectCard :item="project" />
    </div>
</template>