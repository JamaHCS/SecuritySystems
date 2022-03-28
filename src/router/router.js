import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/homeView')
    },
    {
        path: '/login',
        name:'login',
        component:() => import('../views/LoginView')
    },
    {
        path:'/register',
        name: 'register',
        component:() => import('../views/RegisterView')
    },
    {
        path: '/cooper',
        name: 'cooper',
        component: () => import('../views/cooperView')
    },
    {
        path: '/bootstrap',
        name: 'bootstrap',
        component: () => import('../views/bootstrapView')
    },
    {
        path: '/bootstrap/vue',
        name: 'bootstrapvue',
        component: () => import('../views/vueBootstrapView')
    },
    {
        path: '/layout',
        name: 'layout',
        component: () => import('../views/layoutView')
    },
    {
        path: '/login',
        name: 'form',
        component: () => import('../views/formView')
    },
    {
        path: '/form/formSimulation',
        name: 'formSimulation',
        component: () => import('../views/formSimulationView')
    },
    {
        path: '/chartjs',
        name: 'chartjs',
        component: () => import('../views/charJsView')
    },
    {
        path: '/chartjs/bars',
        name: 'chartjsBars',
        component: () => import('../views/barChartView')
    },
    {
        path: '/chartjs/funnel',
        name: 'chartjsFunnel',
        component: () => import('../views/funnelChartView')
    },
    {
        path: '/chartjs/doughnut',
        name: 'chartjsDoughnut',
        component: () => import('../views/doughnutChartView')
    },
    {
        path: '/cropperjs',
        name: 'cropperjs',
        component: () => import('../views/cropperView')
    },
    {
        path: '/tables',
        name: 'tables',
        component: () => import('../views/tableView')
    },
    {
        path: '/dropzone',
        name: 'dropzone',
        component: () => import('../views/dropzoneView')
    },
    {
        path: '/dropzone/basic',
        name: 'dropzoneBasic',
        component: () => import('../components/dropzone/BasicDropzoneDoc')
    },
    {
        path: '/inputs',
        name: 'inputs',
        component: () => import('../views/inputsView')
    },
    {
        path: '/fullcalendar',
        name: 'fullCalendar',
        component: () => import('../views/fullCalendarView')
    },
    {
        path: '/summernote',
        name: 'summernote',
        component: () => import('../views/summernoteView')
    },
    {
        path: '/sweetalert',
        name: 'sweetalert',
        component: () => import('../views/sweetAlertView')
    },
    {
        path: '/viewerjs',
        name: 'viewerjs',
        component: () => import('../views/viewerjsView')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/testView')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;