<template>
    <div>
        <input v-model="search" @input="onSearch" type="text" class="form-control p-3" placeholder="Qidirish...">
        <FilterPanel @filter="filterMovie" :filterName="filterName"/>
    </div>
</template>
<script>
import FilterPanel from './FilterPanel.vue';

export default {
    components: {
        FilterPanel
    },
    data() {
        return {
            search: ""
        }
    },
    methods: {
        onSearch() {
            this.$emit('onSearch', this.search)
        },
        filterMovie(filterType) {
            this.$emit('filterMovies', filterType)
        }
    },
    props:{
        filterName:{
            type: String
        }
    }
}
</script>
<style></style>