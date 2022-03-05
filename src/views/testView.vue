<template>
    <box title="test">
        <div class="p-3" style="min-height: 170px;">
            <b-button class="mb-2" variant="primary" @click="$bvToast.show('example-toast')">
                Show toast
            </b-button>
            <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide toast-class="toast-warning">
                Hello, world! This is a toast message.
            </b-toast>
        </div>
    </box>
</template>
 
<script>
import Box from '../components/box/Box';

export default {
    name: 'test',
    components: {
        Box
    },
    data() {
        return {
            data: {
                title: 'Test',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'test',
                        text: 'Tests'
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
</style>