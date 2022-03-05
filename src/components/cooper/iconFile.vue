<template>
    <font-awesome-icon :icon="getIcon(mimeType)"/>
</template>

<script>
export default {
    name: 'iconFile',
    props: {
        mimeType: {
            type: String,
            required: true,
            default: ''
        }
    },
    methods: {
        getIcon(mimeType) {
            const mimes = {
                'application/pdf': 'file-pdf',
                'image/jpeg': 'file-image',
                'image/png': 'file-image',
                'application/zip': 'file-archive',
                'application/x-rar-compressed': 'file-archive',
                'default': 'file'
            };
            return mimes[mimeType] || mimes.default;
        }
    }
};
</script>

<style scoped>

</style>