import Vue from 'vue';
import './style.scss';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import Tooltip from './util/tooltip';
Vue.use(Tooltip);

import moment from 'moment-timezone';
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } } );
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } } );

import { checkFilter, setDay } from './util/bus';

const bus = new Vue();

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './util/routes';
const router = new VueRouter({ routes });

new Vue({
    el: '#app',
    data: {
        genre: [],
        time: [], 
        movies: [],
        moment,
        day: moment(),
        bus
    },
    methods: {

    },
    created() {
        this.$http.get('/api').then(response => {
            this.movies = response.data;
        });
        this.$bus.$on('check-filter', checkFilter.bind(this));
        this.$bus.$on('set-day', setDay.bind(this))
    },
    router
});



