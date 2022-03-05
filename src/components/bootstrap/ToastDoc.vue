<template>
    <Box>
        <h2>Toast</h2>
        <div class="row">
            <div class="col">
                <div class="toast toast-bootstrap show toast-success" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <i class="fa fa-newspaper-o"> </i>
                        <strong class="mr-auto m-l-sm">Notificación</strong>
                        <small>Hace 2 segundos</small>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">
                        Este es un toast de ejemplo. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="toast-example">
                    <button class="btn btn-primary" @click="toast('toast-primary')">Toast!</button>
                </div>
            </div>
        </div>
        <div class="row code">
            <highlight-code lang="xml" :code="navbarHtml" />
        </div>
        <Toast />
    </Box>
</template>

<script>
import Box from '../box/Box';
import Toast from './Toast';

export default {
    name: 'NavBarDoc',
    components: {
        Toast,
        Box
    },
    data() {
        return {
            navbarHtml: `
            <div class="toast-container">
                <div class="toast toast-bootstrap animate fadeIn" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <i class="fa fa-newspaper-o"> </i>
                        <strong class="mr-auto m-l-sm">Notificación</strong>
                        <small>Hace 2 segundos</small>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">
                        Este es un toast de ejemplo. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                    </div>
                </div>
            </div>
            `
        };
    },
    methods: {
        toast(className) {
            let toast = this.$el.querySelector(`.${className}`);
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);

        }
    }
};
</script>

<style scoped>
.toast-example{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>