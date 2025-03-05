<template>
  <div class="container">
    <div class="content">
      <AppInfo :allMovies="movies.length" :likedMovies="movies.filter(item=>item.like === true).length"/>
      <SearchPanel @onSearch="onSearch" @filterMovies="onFilter" :filterName="filter"/>
      <MovieList :kinolar="FilteredMovies" @onToggle="onToggle" @onDelete="OnDelete" />
      <MovieAddForm @AddMovie="onAddMovie" />
    </div>
  </div>
</template>
<script>
import AppInfo from './components/AppInfo.vue';
import MovieAddForm from './components/MovieAddForm.vue';
import MovieList from './components/MovieList.vue';
import SearchPanel from './components/SearchPanel.vue';

export default {
  components: {
    AppInfo,
    SearchPanel,
    MovieList,
    MovieAddForm
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          name: "Taxtlar O'yini",
          viewers: 1243,
          like: false,
          favourite: true
        },
        {
          id: 2,
          name: "Titanlar Hujumi",
          viewers: 1243,
          like: true,
          favourite: false
        },
        {
          id: 3,
          name: "Zo'rlangan Kelin",
          viewers: 483,
          like: true,
          favourite: false
        },
      ],
      search: "",
      filter: "allMovies"
    }
  },
  computed: {
    FilteredMovies() {

      const FilteredMovies = this.movies
        .filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()))
        .filter(item => {
          if (this.filter === 'sevimli') {
            return item.like === true
          } else if (this.filter === "mashhur") {
            return item.favourite === true
          }
          return true
        })
      return FilteredMovies


    }
  },
  methods: {
    onAddMovie(newMovie) {
      this.movies.push(newMovie)
    },
    OnDelete(id) {
      this.movies = this.movies.filter(item => item.id !== id)
    },
    onToggle({ prop, id }) {
      this.movies.map((item) => {
        if (item.id === id) {
          return item[prop] = !item[prop]
        }
        return item
      })
    },
    onSearch(search) {
      this.search = search
    },
    onFilter(filterType) {
      this.filter = filterType
    }
  }
}
</script>
<style></style>