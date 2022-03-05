<template>
    <div>
        <div class="row">
            <div class="col">
                <cropper-doc />
            </div>
        </div>
    </div>
</template>

<script>
import CropperDoc from './../components/cooper/CropperDoc';

export default {
    components: {
        CropperDoc
    },
    data() {
        return {
            data: {
                title: 'Cropper',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'cropperjs',
                        text: 'Cropper.js'
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

<style>
</style>