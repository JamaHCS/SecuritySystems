<template>
    <div class="container">
        <vue-dropzone
            ref="myVueDropzone"
            :include-styling="false"
            :useCustomSlot="true"
            class="dropzonePlus"
            id="dropzonePlus"
            @vdropzone-upload-progress="uploadProgress"
            :options="dropzoneOptions"
            @vdropzone-file-added="fileAdded"
            @vdropzone-sending-multiple="sendingFiles"
            @vdropzone-success-multiple="success"
        >
            <div class="dropzone-container">
                <div class="file-selector">
                    <div class="charger" ref="charger"></div>
                    <svg
                        width="72px"
                        height="72px"
                        viewBox="0 0 72 72"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <defs>
                            <circle id="path-1" cx="36" cy="36" r="36"></circle>
                            <filter
                                width="175.0%"
                                height="175.0%"
                                filterUnits="objectBoundingBox"
                                id="filter-2"
                            >
                                <feOffset
                                    dx="0"
                                    dy="6"
                                    in="SourceAlpha"
                                    result="shadowOffsetOuter1"
                                ></feOffset>
                                <feGaussianBlur
                                    stdDeviation="8"
                                    in="shadowOffsetOuter1"
                                    result="shadowBlurOuter1"
                                ></feGaussianBlur>
                                <feColorMatrix
                                    values="0 0 0 0 0.0117647059   0 0 0 0 0.0862745098   0 0 0 0 0.160784314  0 0 0 0.08 0"
                                    type="matrix"
                                    in="shadowBlurOuter1"
                                    result="shadowMatrixOuter1"
                                ></feColorMatrix>
                                <feOffset
                                    dx="0"
                                    dy="1"
                                    in="SourceAlpha"
                                    result="shadowOffsetOuter2"
                                ></feOffset>
                                <feGaussianBlur
                                    stdDeviation="1"
                                    in="shadowOffsetOuter2"
                                    result="shadowBlurOuter2"
                                ></feGaussianBlur>
                                <feColorMatrix
                                    values="0 0 0 0 0.0117647059   0 0 0 0 0.0862745098   0 0 0 0 0.160784314  0 0 0 0.11 0"
                                    type="matrix"
                                    in="shadowBlurOuter2"
                                    result="shadowMatrixOuter2"
                                ></feColorMatrix>
                                <feMerge>
                                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                                    <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g
                                id="Artboard"
                                transform="translate(-476.000000, -135.000000)"
                            >
                                <g id="Group-4" transform="translate(412.000000, 129.000000)">
                                    <g id="Group-2" transform="translate(58.000000, 0.000000)">
                                        <circle
                                            id="Oval"

                                            opacity="0.100000001"
                                            cx="42"
                                            cy="42"
                                            r="42"
                                        ></circle>
                                        <g id="Group" transform="translate(6.000000, 6.000000)">
                                            <g id="Oval">
                                                <use
                                                    fill="black"
                                                    fill-opacity="1"
                                                    filter="url(#filter-2)"
                                                    xlink:href="#path-1"
                                                ></use>
                                                <use
                                                    :fill="_variables.colorSecondaryBackground"
                                                    fill-rule="evenodd"
                                                    xlink:href="#path-1"
                                                ></use>
                                            </g>
                                            <g
                                                id="upload-cloud"
                                                transform="translate(21.818182, 24.000000)"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                            >
                                                <polyline
                                                    id="Path"
                                                    :stroke="_variables.colorDark"
                                                    points="19.6458087 17.3789847 14.3565525 12.0897285 9.06729634 17.3789847"
                                                ></polyline>
                                                <path
                                                    d="M14.3565525,12.0897285 L14.3565525,24.1794569"
                                                    id="Path"
                                                    :stroke="_variables.colorPrimary"
                                                ></path>
                                                <path
                                                    d="M25.6438239,20.7792208 C28.2965835,19.3021499 29.6312816,16.1761528 28.8860265,13.1856562 C28.1407715,10.1951596 25.5052337,8.10125672 22.4838689,8.09921935 L20.8179512,8.09921935 C19.7219904,3.76967373 16.1275086,0.577339516 11.7773112,0.0700384831 C7.42711383,-0.43726255 3.22057026,1.84535014 1.19724759,5.81113853 C-0.826075091,9.77692693 -0.247870665,14.6059952 2.6515151,17.9569414"
                                                    id="Path"
                                                    :stroke="_variables.colorPrimary"
                                                ></path>
                                                <polyline
                                                    id="Path"
                                                    :stroke="_variables.colorPrimary"
                                                    points="19.6458087 17.3789847 14.3565525 12.0897285 9.06729634 17.3789847"
                                                ></polyline>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <p>
                        Arrastra archivos aquí
                    </p>
                    <p>
                        ó
                    </p>
                    <button type="button" class="btn btn-primary">Examinar...</button>
                </div>
            </div>
        </vue-dropzone>
        <DropzonePlusList
            :tempAttachments="getTempAttachments"
            :attachments="getAttachments"
            class="dropzonePlusList mt-2"
        />
    </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import DropzonePlusList from './DropzonePlusList';
import variables from './../../scss/lib/_variables.scss';

export default {
    name: 'DropzonePlus',
    data() {
        return {
            msg: 'Cooper.css',
            tempAttachments: [],
            attachments: [],
            dropzoneOptions: {
                url: `https://httpbin.org/post`,
                maxFilesize: 102400000,
                headers: {
                    Authorization: `Access Token`
                },
                // The way you want to receive the files in the server
                paramName: function(n) {
                    return 'file[]';
                },
                dictDefaultMessage: 'Upload files',
                includeStyling: false,
                previewsContainer: false,
                thumbnailWidth: 250,
                thumbnailHeight: 140,
                uploadMultiple: true,
                parallelUploads: 20
            }
        };
    },
    components: {
        vueDropzone: vue2Dropzone,
        DropzonePlusList: DropzonePlusList
    },
    methods: {
        fileAdded(file) {
            // console.log(file);
            let attachment = {};
            attachment._id = file.upload.uuid;
            attachment.title = file.name;
            attachment.type = 'file';
            attachment.extension = '.' + file.type.split('/')[1];
            attachment.user = JSON.parse(localStorage.getItem('user'));
            attachment.content = 'File Upload by Select or Drop';
            attachment.thumb = file.dataURL;
            attachment.thumb_list = file.dataURL;
            attachment.isLoading = true;
            attachment.progress = null;
            attachment.size = file.size;
            attachment.mimeType = file.type;
            this.tempAttachments = [...this.tempAttachments, attachment];
        },
        sendingFiles(files, xhr, formData) {
            this.$refs.charger.classList.add('uploading');
        },
        uploadProgress(file, progress, bytesSent) {
            this.tempAttachments.map(attachment => {
                if (attachment.title === file.name) {
                    attachment.progress = `${Math.floor(progress)}`;
                }
            });
        },
        success(file, response) {
            setTimeout(() => {
                this.$refs.charger.classList.remove('uploading');
            }, 3000);
        }
    },
    computed: {
        getTempAttachments() {
            return this.tempAttachments;
        },
        getAttachments() {
            return this.attachments;
        },
        _variables: function() {
            return variables;
        }
    }
};
</script>

<style scoped>
</style>
