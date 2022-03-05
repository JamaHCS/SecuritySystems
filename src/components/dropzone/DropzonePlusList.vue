<template>
    <div class="DropzonePlusList">
        <ul v-if="tempAttachments.length > 0">
            <li v-for="tempAttachment in tempAttachments" :key="tempAttachment._id">
                <div class="file-details">
                    <div class="file-name display-flex align-center">
                        <p class="text-center"> <icon-file :mime-type="tempAttachment.mimeType"/> {{ tempAttachment.title }}</p>
                    </div>
                    <div class="file-info">
                        <span class="uploaded-date badge badge-secondary"> {{ getFileSizeString(tempAttachment.size) }}</span>
                        <span v-if="checkProgress(tempAttachment)" :class="(tempAttachment.progress < 100) ? 'badge badge-warning upload-progress' : 'badge badge-success upload-progress'">
                          {{ `${tempAttachment.progress} %` }}
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import IconFile from '../cooper/iconFile';
export default {
    name: 'DropzonePlusList',
    components: { IconFile },
    methods: {
        checkProgress(attachment) {
            return attachment.progress !== null;
        },
        getFileSizeString(fileSize) {
            let selectedSize = 0;
            let selectedUnit = 'b';

            if (fileSize > 0) {
                let units = ['tb', 'gb', 'mb', 'kb', 'b'];

                for (let i = 0; i < units.length; i++) {
                    let unit = units[i];
                    let cutoff = Math.pow(1024, 4 - i) / 10;

                    if (fileSize >= cutoff) {
                        selectedSize = fileSize / Math.pow(1024, 4 - i);
                        selectedUnit = unit;
                        break;
                    }
                }

                selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
            }

            return `${selectedSize} ${selectedUnit}`.toUpperCase();
        },
        test(test) {
            console.log(test);
        }
    },
    props: {
        tempAttachments: {
            type: Array
        },
        attachments: {
            type: Array
        }
    }
};
</script>

<style scoped>

</style>
