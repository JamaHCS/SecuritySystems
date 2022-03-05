<template>
    <Box>
        <h2>Box component</h2>

        <div class="row code mb-5">
            <highlight-code lang="xml" :code="navbarHtml" />
        </div>
        This component can has the following props:
        <div class="row code">
            <highlight-code lang="javascript" :code="propsCode" />
        </div>
    </Box>
</template>

<script>
import Box from './../box/Box';

export default {
    name: 'NavbarDoc',
    components: {
        Box
    },
    data() {
        return {
            navbarHtml: `
            <div class="ibox">
                <div v-if="title || pTitle || routeShow" class="ibox-title">
                    <h5 v-if="title">{{ title }}</h5>
                    <h5 v-else-if="pTitle">{{ pTitle }} <small>{{ pSmall }}</small></h5>
                    <div class="ibox-tools">
                        <router-link v-if="routeShow" class="collapse-link" :to="{ name: routeShow }">
                            <font-awesome-icon icon="search" class="mx-1"/>
                        </router-link>
                    </div>
                </div>
                <div class="ibox-content float-e-margins">
                    <slot></slot>
                </div>
            </div>

            <!-- o -->

            <box title="Titulo" pTitle="Titulo seguido de descripcion" pSmall="descripcion" routeShow="nombre de ruta" />`,
            
            propsCode: `
            props: {
                title: {
                    type: String // Titulo sencillo
                },
                pTitle: {
                    type: String, // Titulo
                    required: false
                },
                pSmall: {
                    type: String, // Subtitulo
                    required: false
                },
                routeShow: {
                    type: String, // nameRoute del boton show
                    required: false
                }
            }
            `
        };
    }
};
</script>

<style scoped>

</style>