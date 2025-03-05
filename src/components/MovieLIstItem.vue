<template>
    <li class="mb-3" :class="[movie.favourite ? 'text-warning' : '']">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <h3 class="mb-0">{{ movie.name }}</h3>
            </div>
            <div class="d-flex gap-5 align-items-center">
                <h3 class="mb-0">
                    {{ movie.viewers }}
                </h3>
                <div class="d-flex gap-3">
                    <button class="btn btn-sm btn-success text-warning"
                        @click="$emit('onToggle', { prop: 'favourite', id: movie.id })"><i
                            class="bi bi-film"></i></button>

                    <button class="btn btn-sm btn-success text-danger" 
                    @click="$emit('onDelete' , movie.id)"><i
                            class="bi bi-trash-fill"></i></button>

                    <button class="btn btn-sm btn-success text-warning"
                        @click="$emit('onToggle', { prop: 'like', id: movie.id })"><i class="bi bi-"
                            :class="[movie.like ? 'bi-star-fill' : 'bi-star']"></i></button>
                </div>
            </div>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}
</script>
<style></style>