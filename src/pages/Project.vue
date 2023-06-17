<script>
import axios from 'axios';
import { store } from '../store';
import AppProjectCard from '../components/AppProjectCard.vue';
import AppPagination from '../components/AppPagination.vue';
export default {
    name: 'Project',
    data() {
        return {
            store,
            projects: [],
            types: [],
            currentPage: 0,
            lastPage: 0,
            itemFound: 0,
            filterValue: "all"
        }
    },
    components: {
        AppProjectCard,
        AppPagination,
    },
    mounted() {
        this.getProjects();
        this.getTypes();
    },
    methods: {
        getProjects(getPage = 1) {
            const params = {
                page: getPage
            };
            if (this.filterValue !== 'all') {
                params.type_id = this.filterValue;
            };
            axios
                .get(`${this.store.apiUrl}${this.store.apiProjects}`, { params })
                .then(resp => {
                    const json = resp.data.results
                    this.projects = json.data;
                    this.currentPage = json.current_page;
                    this.lastPage = json.last_page;
                    this.itemFound = json.total;
                });
        },
        getTypes() {
            axios
                .get(`${this.store.apiUrl}${this.store.apiTypes}`)
                .then(resp => {
                    this.types = resp.data.results;
                })
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center p-4">Le mie repo</h2>

        <div class="mt-2 d-flex justify-content-between">
            <div class="form-group">
                <select @change="getProjects" id="types" class="form-control mb-2" v-model="filterValue">
                    <option value="all">Tutte</option>
                    <option v-for='(type) in types' :value="type.id" :key="type.id"> {{ type.title }}</option>
                </select>
            </div>
            <p> <strong>Trovati:</strong> {{ itemFound }}</p>
        </div>

        <!-- for project card -->
        <div class="row row-cols-4 g-4">
            <div v-for="(project, index ) in projects" class="col" :key="index">
                <AppProjectCard :item="project" />
            </div>
        </div>
        <!-- for project card -->

        <!-- pagination -->
        <div class="d-flex justify-content-center mt-4">
            <AppPagination :currentPage="currentPage" :lastPage="lastPage" @changePage="getProjects" />
        </div>
        <!-- /pagination -->

    </div>
</template>