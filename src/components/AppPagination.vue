<script>
export default {
    name: 'AppPagination',

    data() {
        return {
        }
    },
    props: {
        item: Object,
    },
    emits: [
        'next',
        'previously'
    ]
}
</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <!-- handle prev button -->
            <li class="page-item">
                <a class="page-link" href="#" @click.prevent="$emit('previously')">Previous</a>
            </li>
            <!-- /handle prev button -->

            <!-- handle number group input -->
            <li v-for="number in item.last_page" class="page-item"><a class="page-link" href="#">{{ number }}</a></li>
            <!-- /handle number group input -->
           
           
            <!-- handle next button -->
            <li class="page-item">
                <a class="page-link" href="#" @click.prevent="$emit('next')">Next</a>
            </li>
            <!-- /handle next button -->
        </ul>
    </nav>
</template>