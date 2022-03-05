<template>
    <Box>
        <h2>Buttons</h2>
        <div class="row">
            <div class="buttons">
                <button class="btn btn-primary">Primary <font-awesome-icon icon="user" class="ml-1"/></button>
                <button class="btn btn-secondary">Secondary <font-awesome-icon icon="eye" class="ml-1"/></button>
                <button class="btn btn-tertiary">tertiary <font-awesome-icon icon="eye" class="ml-1"/></button>
                <button class="btn btn-quaternary">quaternary <font-awesome-icon icon="eye" class="ml-1"/></button>
                <button class="btn btn-success">Success <font-awesome-icon icon="lock" class="ml-1"/></button>
                <button class="btn btn-danger">Danger <font-awesome-icon icon="phone" class="ml-1"/></button>
                <button class="btn btn-warning">Warning <font-awesome-icon icon="database" class="ml-1"/></button>
                <button class="btn btn-info">Info <font-awesome-icon icon="home" class="ml-1"/></button>
                <button class="btn btn-light">Light <font-awesome-icon icon="search" class="ml-1"/></button>
                <button class="btn btn-dark">Dark <font-awesome-icon icon="th-large" class="ml-1"/></button>
                <button class="btn btn-theme-1">Theme 1 <font-awesome-icon icon="star" class="ml-1"/></button>
                <button class="btn btn-theme-2">Theme 2 <font-awesome-icon icon="trash-alt" class="ml-1"/></button>
                <button class="btn btn-alice">alice<font-awesome-icon icon="trash-alt" class="ml-1"/></button>
                <button class="btn btn-white">white <font-awesome-icon icon="trash-alt" class="ml-1"/></button>
                <button class="btn btn-shadow">shadow <font-awesome-icon icon="trash-alt" class="ml-1"/></button>
                <button class="btn btn-default">default <font-awesome-icon icon="trash-alt" class="ml-1"/></button>
            </div>
        </div>
        <div class="row code">
            <highlight-code lang="xml" :code="buttonsHtml"/>
        </div>
    </Box>
</template>

<script>
import Box from '../box/Box';

export default {
    name: 'Button',
    components: {
        Box
    },
    data() {
        return {
            buttonsHtml: `
                <button class="btn btn-primary">Primary</button>
                <button class="btn btn-secondary">Secondary</button>
                <button class="btn btn-success">Success</button>
                <button class="btn btn-danger">Danger</button>
                <button class="btn btn-warning">Warning</button>
                <button class="btn btn-info">Info</button>
                <button class="btn btn-light">Light</button>
                <button class="btn btn-dark">Dark</button>
                <button class="btn btn-theme-1">Theme 1</button>
                <button class="btn btn-theme-2">Theme 2</button>`
        };
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
</style>