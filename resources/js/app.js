require('./bootstrap');

import Vue from 'vue';
Vue.component('tasks-component', require('./components/TasksComponent.vue').default);

new Vue().$mount('#app');
