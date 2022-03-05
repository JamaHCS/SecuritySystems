<template>
    <box title="SweetAlert">
        <div class="input-container">
            <button @click="swal()" class="btn btn-warning">Sweet alert</button>
        </div>
        <div class="row code">
            <highlight-code lang="javascript" :code="componentCode"/>
        </div>
    </box>
</template>
 
<script>
import Box from '../components/box/Box';
import swal from 'sweetalert';

export default {
    name: 'test',
    components: {
        Box
    },
    data() {
        return {
            data: {
                title: 'Sweet alert',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'sweetalert',
                        text: 'SweetAlert'
                    }
                ]
            },
            componentCode: `
            <template>
                <button @click="swal()" class="btn btn-warning">Sweet alert</button>
            </template>
            
            import swal from 'sweetalert';
            
            swal() {
                swal({
                    title: 'Are you sure?',
                    text: 'Are you sure that you want to leave this page?',
                    icon: 'warning',
                    dangerMode: true
                }).then(willDelete => {
                    if (willDelete) {
                        swal('Deleted!', 'Your imaginary file has been deleted!', 'success');
                    }
                });
            }`
        };
    },
    mounted() {
        this.$emit('changeView', this.data);
    },
    methods: {
        swal() {
            swal({
                title: 'Are you sure?',
                text: 'Are you sure that you want to leave this page?',
                icon: 'warning',
                dangerMode: true
            }).then(willDelete => {
                if (willDelete) {
                    swal('Deleted!', 'Your imaginary file has been deleted!', 'success');
                }
            });
        }
    }
};
</script>

<style scoped>
.input-container{
    display: flex;
    padding: 1rem;
    justify-content:center;
    align-items: center;
}
</style>