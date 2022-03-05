<template>
    <div>
        <div class="row">
            <div class="col">
                <h3 class="color-tittle mb-4">Dropzone's</h3>
                <box p-title="Dropzone" p-small="basic" route-show="dropzoneBasic">
                    <vue-dropzone ref="dropzone" id="dropzone" :options="dropzoneOptions" />
                </box>
                <box p-title="Dropdown" p-small="plus">
                    <dropzone-plus />
                </box>
            </div>
        </div>
    </div>
</template>

<script>
import Box from '../components/box/Box';
import vue2Dropzone from 'vue2-dropzone';
import DropzonePlus from '../components/dropzone/DropzonePlus';

export default {
    components: {
        DropzonePlus,
        Box,
        vueDropzone: vue2Dropzone
    },
    data() {
        return {
            data: {
                title: 'Dropzone',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'dropzone',
                        text: 'Dropzone'
                    }
                ]
            },
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 200,
                headers: { 'My-Awesome-Header': 'header value' }
            }
        };
    },
    mounted() {
        this.$emit('changeView', this.data);
    }
};
</script>

<style>
</style>