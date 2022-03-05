<template>
    <box>
        <h5>Alert</h5>
        <b-alert show variant="primary">This is a test vue-bootstrap alert</b-alert>
        <hr />
        <h5>Badges</h5>
        <div>
            <h2>Example heading <b-badge>New</b-badge></h2>
            <h3>Example heading <b-badge>New</b-badge></h3>
            <h4>Example heading <b-badge>New</b-badge></h4>
            <h5>Example heading <b-badge>New</b-badge></h5>
            <h6>Example heading <b-badge>New</b-badge></h6>
        </div>
        <hr />
        <h5>Breadcrumb</h5>
        <template>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </template>
        <hr />
        <h5>Buttons</h5>
        <div class="d-flex" style="justify-content:space-around">
            <b-button>Button</b-button>
            <b-button variant="danger">Button</b-button>
            <b-button variant="success">Button</b-button>
            <b-button variant="outline-primary">Button</b-button>
        </div>
        <hr />
        <h5>Card</h5>
        <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        <hr />
        <h5>Dropdown</h5>
        <div>
            <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
        </div>
        <hr />
        <h5>Modal</h5>
        <div>
            <b-button v-b-modal.modal-1>Launch demo modal</b-button>
            <b-modal id="modal-1" title="BootstrapVue">
                <p class="my-4">Hello from modal!</p>
            </b-modal>
        </div>
        <hr />
        <h5>Popover</h5>
        <div class="d-flex" style="justify-content:space-around">
            <b-button v-b-popover.hover.top="'I am popover directive content!'" title="Popover Title">
                Hover Me
            </b-button>

            <b-button id="popover-target-1">
                Hover Me
            </b-button>
            <b-popover target="popover-target-1" triggers="hover" placement="top">
                <template #title>Popover Title</template>
                I am popover <b>component</b> content!
            </b-popover>
        </div>
        <hr />
        <h5>Tabs</h5>
        <div>
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Tab 1" active>
                        <b-card-text>Tab contents 1</b-card-text>
                    </b-tab>
                    <b-tab title="Tab 2">
                        <b-card-text>Tab contents 2</b-card-text>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </box>
</template>

<script>
import Box from '../components/box/Box';
export default {
    name: 'vueBootstrapView',
    components: { Box },
    data() {
        return {
            data: {
                title: 'Test',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'bootstrap',
                        text: 'Bootstrap'
                    },
                    {
                        name: 'bootstrapvue',
                        text: 'Vue-Bootstrap'
                    }
                ]
            },
            items: [
                {
                    href: '/home',
                    text: 'Home'
                },
                {
                    href: '/bootstrap',
                    text: 'Bootstrap'
                },
                {
                    href: '/bootstrap/vue',
                    text: 'Vue-Bootstrap'
                }
            ]
        };
    },
    mounted() {
        this.$emit('changeView', this.data);
    }
};
</script>

<style scoped>

</style>