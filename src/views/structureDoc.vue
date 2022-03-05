<template>
    <Box>
        <h2>App.vue structure</h2>
        <div class="row">
            <div class="col">
                On the root component, the designed structure should be the next one...
            </div>
        </div>
        <div class="row code">
            <highlight-code lang="xml" :code="appHtml"/>
        </div>
    </Box>
</template>

<script>
import Box from './../components/box/Box';

export default {
    name: 'structureDoc',
    components: {
        Box
    },
    data() {
        return {
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