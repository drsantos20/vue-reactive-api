import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import About from './components/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/about', component: About },
];

export default routes;