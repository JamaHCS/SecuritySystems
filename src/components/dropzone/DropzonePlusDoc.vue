<template>
    <Box>
        <h2>Basic dropzone</h2>
        <div class="row">
            <div class="col">
                <vue-dropzone ref="dropzone" id="dropzone" :options="dropzoneOptions" />
            </div>
        </div>
        <div class="row code">
            <highlight-code lang="xml" :code="componentHtml"/>
        </div>
        <div class="row code">
            <highlight-code lang="javascript" :code="componentProps"/>
        </div>
    </Box>
</template>

<script>
import Box from '../box/Box';
import vue2Dropzone from 'vue2-dropzone';

export default {
    name: 'BarChartDoc',
    components: {
        Box,
        vueDropzone: vue2Dropzone
    },
    data() {
        return {
            componentHtml: `
                <!-- Template declaration -->
              
                <vue-dropzone ref="dropzone" id="dropzone" :options="dropzoneOptions" />
            `,
            componentProps: `
                // component props
                    
                props: {
                    dropzoneOptions: {
                        url: "https://httpbin.org/post",
                        thumbnailWidth: 150,
                        maxFilesize: 200,
                        headers: { 'My-Awesome-Header': 'header value' }
                        ...
                        ...
                        // Doc: https://rowanwins.github.io/vue-dropzone/docs/dist/
                    }
                }
            `,
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 200,
                headers: { 'My-Awesome-Header': 'header value' }
            }
        };
    }
};
</script>

<style scoped>

</style>