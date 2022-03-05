<template>
    <div>
        <box title="SummerNote">
            <form method="post">
                <textarea ref="summernote" name="editordata"></textarea>
            </form>
        </box>
        <box>
            <div class="row code">
                <highlight-code lang="xml" :code="componentHtml"/>
            </div>
            <div class="row code">
                <highlight-code lang="javascript" :code="componentJs"/>
            </div>
        </box>
    </div>
</template>
 
<script>
import Box from '../components/box/Box';
import $ from 'jquery';
import jquery from 'jquery';
window.jQuery = jquery;
window.$ = jquery;
import summernote from 'summernote/dist/summernote-bs4';

export default {
    name: 'test',
    components: {
        Box
    },
    data() {
        return {
            data: {
                title: 'SummerNote',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'summernote',
                        text: 'SummerNote'
                    }
                ]
            },
            componentHtml: `
                <form method="post">
                    <textarea ref="summernote" name="editordata"></textarea>
                </form>`,
            componentJs: `
                import $ from 'jquery';
                import jquery from 'jquery';
                window.jQuery = jquery;
                window.$ = jquery;
                import summernote from 'summernote/dist/summernote-bs4';
                
                ...
                
                mounted() {               
                    $(this.$refs.summernote).summernote();
                }`
        };
    },
    mounted() {
        this.$emit('changeView', this.data);
        
        $(this.$refs.summernote).summernote();
    }
};
</script>

<style scoped>

</style>