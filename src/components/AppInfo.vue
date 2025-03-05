<template>
    <div>
        <p class="fs-3">Barcha Kinolar : {{ allMovies }}</p>
        <p class="fs-3">Sevimli Kinolar : {{ likedMovies }}</p>
    </div>
</template>
<script>
export default {
    props: {
        allMovies:{
            type:Number
        },
        likedMovies:{
            type:Number
        }
    },

}
</script>
<style></style>