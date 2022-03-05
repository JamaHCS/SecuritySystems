<template>
    <div class="toast-container">
        <div class="toast toast-primary toast-bootstrap animate fadeIn toast-primary" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
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
</template>

<script>
export default {
    name: 'Toast'
};
</script>

<style scoped>

</style>