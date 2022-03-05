<template>
    <box title="test">
        <div ref="images">
            <img :src="image.path" :alt="image.name" class="element-img" v-for="image in _images" :key="image.id"/>
        </div>
    </box>
</template>

<script>
import Box from '../components/box/Box';
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

export default {
    name: 'test',
    components: {
        Box
    },
    data() {
        return {
            data: {
                title: 'ViewerJs',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'viewejs',
                        text: 'Viewer.js'
                    }
                ]
            },
            images : [
                {
                    membershipId: 1,
                    createdById: 1,
                    updatedById:1,
                    updated: new Date(),
                    created: new Date(2020, 3, 20, 14, 56, 34, 433),
                    enabled: true,
                    id: 1,
                    name: 'img1.jpg',
                    path: 'https://lorempixel.com/1080/726/',
                    mimeType: 'image/jpeg'
                },
                {
                    membershipId: 1,
                    createdById: 1,
                    updatedById:1,
                    updated: new Date(),
                    created: new Date(),
                    enabled: false,
                    id: 2,
                    name: 'segundo.png',
                    path: 'https://lorempixel.com/1080/725/',
                    mimeType: 'image/png'
                },
                {
                    membershipId: 1,
                    createdById: 1,
                    updatedById:1,
                    updated: new Date(),
                    created: new Date(),
                    enabled: true,
                    id: 3,
                    name: 'tercero.jpg',
                    path: 'https://lorempixel.com/1080/724/',
                    mimeType: 'image/jpeg'
                },
                {
                    membershipId: 1,
                    createdById: 1,
                    updatedById:1,
                    updated: new Date(),
                    created: new Date(),
                    enabled: true,
                    id: 4,
                    name: 'tercero.jpg',
                    path: 'https://lorempixel.com/1080/723/',
                    mimeType: 'image/jpeg'
                },
                {
                    membershipId: 1,
                    createdById: 1,
                    updatedById:1,
                    updated: new Date(),
                    created: new Date(),
                    enabled: true,
                    id: 5,
                    name: 'tercero.jpg',
                    path: 'https://lorempixel.com/1080/722/',
                    mimeType: 'image/jpeg'
                },
                {
                    membershipId: 1,
                    createdById: 1,
                    updatedById:1,
                    updated: new Date(),
                    created: new Date(),
                    enabled: true,
                    id: 6,
                    name: 'tercero.jpg',
                    path: 'https://lorempixel.com/1080/721/',
                    mimeType: 'image/jpeg'
                }
            ]
        };
    },
    mounted() {
        this.$emit('changeView', this.data);
        const viewer = new Viewer(this.$refs.images, {
            viewed() {
                // viewer.zoomTo(1);
            }
        });
    },
    computed: {
        _images: function() {
            return this.images;
        }
    }
};
</script>

<style scoped>
</style>