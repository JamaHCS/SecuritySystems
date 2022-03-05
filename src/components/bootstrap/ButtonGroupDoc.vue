<template>
    <Box>
        <h2>Buttons group</h2>
        <div class="row">
            <div class="buttons">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Left <font-awesome-icon icon="user" class="ml-1"/></button>
                    <button type="button" class="btn btn-primary">Middle <font-awesome-icon icon="eye" class="ml-1"/></button>
                    <button type="button" class="btn btn-primary">Right <font-awesome-icon icon="trash-alt" class="ml-1"/></button>
                </div>
            </div>
        </div>
        <div class="row code">
            <highlight-code lang="xml" :code="buttonsHtml" />
        </div>
    </Box>
</template>

<script>
import Box from '../box/Box';

export default {
    name: 'ButtonGroup',
    components: {
        Box
    },
    data() {
        return {
            buttonsHtml: `
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-primary">Left</button>
                  <button type="button" class="btn btn-primary">Middle</button>
                  <button type="button" class="btn btn-primary">Right</button>
                </div>`
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