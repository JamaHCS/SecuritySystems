<template>
    <div>
        <div class="row">
            <div class="col-md-8 mx-auto">
                <FormLogin />
            </div>
        </div>
    </div>
</template>

<script>
import FormLogin from '../components/form/FormLogin';

export default {
    name: 'formView',
    components: {
        FormLogin
    },
    data() {
        return {
            data: {
                title: 'Login',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'form',
                        text: 'Login'
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

<style scoped>

</style>