<template>
    <Box>
        <h2>Breadcrumb</h2>
        <div class="row">
            <div class="col">
                <Breadcrumb :title="title" :path="path"/>
            </div>
        </div>
        <div class="row code">
            <highlight-code lang="xml" :code="breadcrumbHtml"/>
        </div>
        <div class="row code">
            <highlight-code lang="javascript" :code="propsCode"/>
        </div>
    </Box>
</template>

<script>
import Box from '../box/Box';
import Breadcrumb from './Breadcrumb';

export default {
    name: 'BreadcrumbDoc',
    components: { 
        Breadcrumb,
        Box
    },
    props: {
        title: {
            type: String
        },
        path: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            breadcrumbHtml: `
                <!-- Template declaration -->
                
                <div class="row wrapper border-bottom foreground page-heading pb-2">
                    <div class="col">
                        <h2 v-if="title" class="color-tittle">{{ title }}</h2>
                        <ol class="breadcrumb">
                            <li v-for="(item, index) in path" class="breadcrumb-item" :key="index">
                                <template v-if="(index + 1) !== path.length">
                                    <router-link :to="{ name: item.name }">{{ item.text }}</router-link>
                                </template>
                                <template v-else>
                                    <strong>{{ item.text }}</strong>
                                </template>
                            </li>
                        </ol>
                    </div>
                </div>

                <!-- Ó -->
                
                <Breadcrumb :title="currentTitle" :path="currentPath" />
            `,
            propsCode: `
                // Component props:
                
                title: {
                    type: String,
                    required: false
                },
                path: {
                    type: Array,
                    required: true
                }
                
                // Path example:
                //     path: [
                //         {
                //             name: 'home',
                //             text: 'Home'
                //         },
                //         {
                //             name: 'bootstrap',
                //             text: 'Components'
                //         },
                //         {
                //             name: 'bootstrap',
                //             text: 'Bootstrap'
                //         }
                //     ]`
        };
    }
};
</script>

<style scoped>

</style>