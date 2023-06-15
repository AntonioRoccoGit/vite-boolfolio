<script>
export default {
    name: 'AppPagination',

    data() {
        return {
        }
    },
    props: {
        currentPage: Number,
        lastPage: Number,
    },
    emits: [
        'changePage'
    ]
}
</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <!-- handle prev button -->
            <li class="page-item">
                <a class="page-link" href="#" 
                :class="{'disabled' : currentPage === 1}"
                @click.prevent="$emit('changePage', currentPage - 1)">
                    Previous
                </a>
            </li>
            <!-- /handle prev button -->

            <!-- handle number group input -->
            <li v-for="number in lastPage" class="page-item">
                <a class="page-link" href="#" 
                :class="{'active' : number === currentPage }"
                @click.prevent="$emit('changePage', number)">
                     {{ number }} 
                </a>
            </li>
            <!-- /handle number group input -->
           
           
            <!-- handle next button -->
            <li class="page-item">
                <a class="page-link" href="#" 
                :class="{'disabled' : currentPage === lastPage}"
                @click.prevent="$emit('changePage', currentPage + 1)">
                    Next
                </a>
            </li>
            <!-- /handle next button -->
        </ul>
    </nav>
</template>