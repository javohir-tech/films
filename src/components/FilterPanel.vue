<template>
    <div class="btn-group mt-3">
        <button class="btn btn-outline-success" @click="$emit('filter', 'allMovies')" type="button">Barcha
            Kinolar</button>
        <button class="btn btn-outline-success" @click="$emit('filter', 'sevimli')" type="button">Sevimli
            Kinolar</button>
        <button class="btn btn-outline-success" @click="$emit('filter', 'mashhur')" type="button">Mashhur
            Kinolar</button>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>