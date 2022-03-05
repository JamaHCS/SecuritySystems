<template>
    <div>
        <box class="cropper" title="Vue CropperJS" route-show="https://github.com/Agontuk/vue-cropperjs">
            <input ref="input" type="file" name="image" accept="image/*" @change="setImage" />

            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-6">
                        <section class="cropper-area">
                        <div class="img-cropper">
                          <vue-cropper ref="cropper" :aspect-ratio="16 / 9" :src="imgSrc" preview=".preview" />
                        </div>
                        <div class="actions">
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="zoom(-0.2)">Zoom Out</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="zoom(0.2)">Zoom In</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="move(-10, 0)">Move Left</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="move(10, 0)">Move Right</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="move(0, -10)">Move Up</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="move(0, 10)">Move Down</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="rotate(90)">Rotate +90deg</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="rotate(-90)">Rotate -90deg</button>
                          <button class="btn btn-secondary mx-2 my-1" ref="flipX" role="button" @click.prevent="flipX">Flip X</button>
                          <button class="btn btn-secondary mx-2 my-1" ref="flipY" role="button" @click.prevent="flipY">Flip Y</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="cropImage">Crop</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="reset">Reset</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="getData">Get Data</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="setData">Set Data</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="getCropBoxData">Get CropBox Data</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="setCropBoxData">Set CropBox Data</button>
                          <button class="btn btn-secondary mx-2 my-1" role="button" @click.prevent="showFileChooser">Upload Image</button>
                        </div>

                        <textarea v-model="dataCropper" class="form-control"/>
                      </section>
                    </div>
                    <div class="col-xl-6">
                        <section class="preview-area">
                        <p>Preview</p>
                        <div class="preview"/>
                        <p>Cropped Image</p>
                        <div class="cropped-image">
                          <img v-if="cropImg" :src="cropImg" alt="Cropped Image" />
                          <div v-else class="crop-placeholder"/>
                        </div>
                      </section>
                    </div>
                </div>
                <div class="row code mt-5">
                <highlight-code lang="xml" :code="buttonsHtml" />
            </div>
            </div>
        </box>
    </div>
    
</template>

<script>
import Box from '../box/Box';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import img from './../../assets/tritonix-logo.png';

export default {
    name: 'Button',
    components: {
        Box,
        VueCropper
    },
    data() {
        return {
            imgSrc: img,
            cropImg: '',
            dataCropper: null,
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
            },
            buttonsHtml: `
                <vue-cropper ref="cropper" :aspect-ratio="16 / 9" :src="imgSrc" preview=".preview" />`
        };
    },
    methods: {
        cropImage() {
            // get image data for post processing, e.g. upload or setting image src
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        },
        flipX() {
            const dom = this.$refs.flipX;
            let scale = dom.getAttribute('data-scale');
            scale = scale ? -scale : -1;
            this.$refs.cropper.scaleX(scale);
            dom.setAttribute('data-scale', scale);
        },
        flipY() {
            const dom = this.$refs.flipY;
            let scale = dom.getAttribute('data-scale');
            scale = scale ? -scale : -1;
            this.$refs.cropper.scaleY(scale);
            dom.setAttribute('data-scale', scale);
        },
        getCropBoxData() {
            this.dataCropper = JSON.stringify(this.$refs.cropper.getCropBoxData(), null, 4);
        },
        getData() {
            this.dataCropper = JSON.stringify(this.$refs.cropper.getData(), null, 4);
        },
        move(offsetX, offsetY) {
            this.$refs.cropper.move(offsetX, offsetY);
        },
        reset() {
            this.$refs.cropper.reset();
        },
        rotate(deg) {
            this.$refs.cropper.rotate(deg);
        },
        setCropBoxData() {
            if (!this.dataCropper) {
                return;
            }
            this.$refs.cropper.setCropBoxData(JSON.parse(this.dataCropper));
        },
        setData() {
            if (!this.dataCropper) {
                return;
            }
            this.$refs.cropper.setData(JSON.parse(this.dataCropper));
        },
        setImage(e) {
            const file = e.target.files[0];
            if (file.type.indexOf('image/') === -1) {
                alert('Please select an image file');
                return;
            }
            if (typeof FileReader === 'function') {
                const reader = new FileReader();
                reader.onload = event => {
                    this.imgSrc = event.target.result;
                    // rebuild cropperjs with the updated source
                    this.$refs.cropper.replace(event.target.result);
                };
                reader.readAsDataURL(file);
            } else {
                alert('Sorry, FileReader API not supported');
            }
        },
        showFileChooser() {
            this.$refs.input.click();
        },
        zoom(percent) {
            this.$refs.cropper.relativeZoom(percent);
        }
    }
};
</script>

<style scoped>
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
    width: 100%;
}
.buttons .btn{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
@media (max-width: 1590px) {
  .col-xl-6 {
    flex: unset;
    max-width: unset;
  }
}
</style>