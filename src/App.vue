<template class="dark-theme">
    <div id="app" >
        <div id="wrapper">
            <c-asidebar />
            <div id="page-wrapper">
                <div class="row" id="c-navbar">
                    <c-navbar class="w-100"/>
                </div>
                <div class="row wrapper border-bottom foreground page-heading">
                    <Breadcrumb :title="currentTitle" :path="currentPath"/>
                </div>
                <div class="container-fluid mt-3 wrapper wrapper-content">
                    <router-view @changeView="onChangeView"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from './components/bootstrap/Breadcrumb';
import cAsidebar from './components/cooper/cAsidebar';
import CNavbar from './components/cooper/cNavbar';
   
export default {
    name: 'App',
    components: {
        CNavbar,
        cAsidebar,
        Breadcrumb
    },
    data() {
        return {
            currentTitle: '',
            currentPath: []
        };
    },
    mounted() {
        document.body.classList.add('dark-theme');
    },
    methods: {
        onChangeView(data) {
            this.currentTitle = data.title;
            this.currentPath = data.path;
        }
    }
};
</script>

<style lang="scss">

</style>
