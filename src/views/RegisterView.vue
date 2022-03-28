<template>
    <div>
        <div class="row mt-5">
            <div class="col">
                <box-doc />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4">
                <Box title="Box with title" route-show="layout">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.
                    </p>
                </Box>
            </div>
            <div class="col-4">
                <Box title="Botones" route-show="layout">
                    <div class="buttons">
                        <button class="btn btn-primary">Hola</button>
                        <button class="btn btn-secondary">Hola</button>
                        <button class="btn btn-danger">Hola</button>
                    </div>
                </Box>
            </div>
            <div class="col-4">
                <Box route-show="layout">
                    Este es un box sencillo
                </Box>
            </div>
            <div class="col-4">
                <Box p-title="Titulo" p-small="Descipcion">
                    Este es un box sencillo
                </Box>
            </div>
            <div class="col-4">
                <Box pTitle="Lorem" p-small="ipsum" route-show="layout">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.
                    </p>
                </Box>
            </div>
            <div class="col-4">
                <Box>
                    Este es un box sencillo
                </Box>
            </div>
            <div class="col-4">
                <Box title="Botones" >
                    <div class="buttons">
                        <button class="btn btn-primary">Hola</button>
                        <button class="btn btn-secondary">Hola</button>
                        <button class="btn btn-danger">Hola</button>
                    </div>
                </Box>
            </div>
        </div>
    </div>
</template>

<script>
import Box from '../components/box/Box';
import BoxDoc from '../components/box/BoxDoc';

export default {
    name: 'register',
    components: { Box, BoxDoc },
    data() {
        return {
            data: {
                title: 'Layout',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'layout',
                        text: 'Layout'
                    },
                    {
                        name: 'layout',
                        text: 'Boxed layout'
                    }
                ]
            }
        };
    },
    mounted() {
        this.$emit('changeView', this.data);
    }
};
</script>

<style scoped>
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
    width: 100%;
}
.buttons .btn{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>