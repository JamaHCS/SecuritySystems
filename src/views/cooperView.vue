<template>
    <div>
        <div class="row">
            <div class="col">
                <h3 class="color-tittle mb-4">Cooper components</h3>
                <AsidebarDoc id="asidebar-doc" />
                <NavbarDoc  id="navbar-doc"/>
            </div>
        </div>
    </div>
</template>

<script>

import NavbarDoc from '../components/cooper/NavbarDoc';
import AsidebarDoc from '../components/cooper/AsidebarDoc';

export default {
    components: {
        NavbarDoc,
        AsidebarDoc
    },
    data() {
        return {
            data: {
                title: 'Cooper',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'cooper',
                        text: 'Components'
                    },
                    {
                        name: 'cooper',
                        text: 'Cooper'
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