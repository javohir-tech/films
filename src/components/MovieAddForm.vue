<template>
    <div>
        <form @submit.prevent="AddMovie">
            <div class="d-flex gap-3">
                <input v-model="name" type="text" class="form-control" placeholder="Kino Nomi">
                <input v-model="viewers" type="number" class="form-control" placeholder="Nechi Marta Ko'rilgan">
            </div>
            <button class="btn btn-success mt-3 w-100" type="submit">Qo'shish</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "",
            viewers: ""
        }
    },
    methods: {
        AddMovie() {
            if (!this.name || !this.viewers) {
                alert("Iltimos Barcha maydonlarni to'ldiring")
                return
            }

            const newMovie = {
                name: this.name,
                viewers: this.viewers,
                like: false,
                favourite: false,
                id: Date.now()
            }

            this.name = ""
            this.viewers = ""

            this.$emit("AddMovie", newMovie)
        }
    }
}
</script>
<style></style>