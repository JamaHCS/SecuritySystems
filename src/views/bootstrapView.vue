<template>
    <div>
        <div class="row">
            <div class="col">
                <h3 class="color-tittle mb-4">Bootstrap components</h3>
                <BreadcrumbDoc :title="data.title" :path="data.path" id="breadcrumb-doc"/>
                <Button id="button-doc"/>
                <ButtonGroup  id="button-group-doc"/>
                <Dropdown id="dropdown-doc"/>
                <NavBarDoc id="navbar-doc"/>
                <ToastDoc id="toast-doc" />
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../components/bootstrap/ButtonDoc';
import Dropdown from '../components/bootstrap/DropdownDoc';
import ButtonGroup from '../components/bootstrap/ButtonGroupDoc';
import NavBarDoc from '../components/bootstrap/NavBarDoc';
import ToastDoc from '../components/bootstrap/ToastDoc';
import BreadcrumbDoc from '../components/bootstrap/BreadcrumbDoc';

export default {
    components: {
        BreadcrumbDoc,
        Button,
        Dropdown,
        ButtonGroup,
        NavBarDoc,
        ToastDoc
    },
    data() {
        return {
            data: {
                title: 'Bootstrap',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'bootstrap',
                        text: 'Components'
                    },
                    {
                        name: 'bootstrap',
                        text: 'Bootstrap'
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