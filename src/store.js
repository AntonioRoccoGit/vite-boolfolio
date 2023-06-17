import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'http://localhost:8000/',
    apiProjects: 'api/projects',
    apiTypes: 'api/types',
    imgUrlPrefix: 'storage/'
});