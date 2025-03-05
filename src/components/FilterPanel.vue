<template>
    <div class="btn-group mt-3">
        <SuccessButton @click="$emit('filter', 'allMovies')" type="button"
            :class="[filterName === 'allMovies' ? 'btn-success' : 'btn-outline-success']">Barcha Kinolar</SuccessButton>
        <SuccessButton @click="$emit('filter', 'sevimli')"
            :class="[filterName === 'sevimli' ? 'btn-success' : 'btn-outline-success']" type="button">Sevimli
            Kinolar</SuccessButton>
        <SuccessButton :class="[filterName === 'mashhur' ? 'btn-success' : 'btn-outline-success']"
            @click="$emit('filter', 'mashhur')" type="button">Mashhur
            Kinolar</SuccessButton>
    </div>
</template>
<script>
export default {
    props: {
        filterName: {
            type: String
        }
    }
}
</script>
<style></style>