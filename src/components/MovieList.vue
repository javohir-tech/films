<template>
    <div>
        <ul style="list-style: none; padding: 0;">
            <MovieLIstItem v-for="kino in kinolar" :movie="kino" @onDelete="$emit('onDelete', kino.id)"  @onToggle="$emit('onToggle' , $event)"/>
        </ul>
    </div>
</template>
<script>
import MovieLIstItem from './MovieLIstItem.vue';

export default {
    components: {
        MovieLIstItem
    },
    props: {
        kinolar: {
            type: Array,
            required: true
        }
    }
}
</script>
<style></style>