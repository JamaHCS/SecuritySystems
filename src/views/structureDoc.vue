<template>
    <Box class="mb-4">
        <h2 class="mb-5">Product name</h2>
        <div class="row">
            <div class="col-2">
                 <font-awesome-icon icon="desktop" size="10x"/>
            </div>
            <div class="col-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum nobis optio neque nam molestiae veniam exercitationem incidunt voluptatibus corrupti cumque, quasi voluptas, in, minima excepturi. Ad id voluptates distinctio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel inventore dolorum fuga laborum nemo repellat numquam aperiam quia quasi quibusdam. Id corporis consectetur, deserunt ea illo ex accusamus odit tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi blanditiis ipsum adipisci consectetur iusto expedita libero, molestias ex laborum distinctio nam voluptatum deleniti at ad illum aliquid aut, fugit cumque.
            </div>
            <div class="col-2"><button class="btn btn-primary float-left ml-auto">More information</button></div>
        </div>
    </Box>
</template>

<script>
import Box from './../components/box/Box';
import photo from '../assets/logo1000.png';

export default {
    name: 'structureDoc',
    components: {
        Box
    },
    data() {
        return {
            photo: photo,
            appHtml: `
                <div id="app" class="">
                    <div id="wrapper">
                        <c-asidebar />
                        <div id="page-wrapper">
                            <div class="row">
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
                </div>`
        };
    }
};
</script>

<style scoped>

</style>