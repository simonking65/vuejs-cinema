<template>
    <div id="movie-filter">
                <h2>Filter Results</h2>
                <h3>By Time of Day</h3>
                <div class="filter-group">
                    <check-filter v-for="time in times" v-bind:title="time" category="time" ></check-filter>
                </div>      
                <h3>By Genre</h3>
                <div class="filter-group">
                    <check-filter v-for="genre in genres" v-bind:title="genre" category="genre" ></check-filter>
                </div>       
            </div>
</template>
<script>
    import genres from '../util/genres';
    import times  from '../util/times';
    import CheckFilter from './CheckFilter.vue'
    export default {
            data: function() {
                return {genres: genres, times: times};
            },
 
            components: {
                CheckFilter
            },
        
        }

</script>