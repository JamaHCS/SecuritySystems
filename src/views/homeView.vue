<template>
<div>
    <structure-doc />
    <structure-doc />
    <structure-doc />
    <structure-doc />
</div>
</template>

<script>
import StructureDoc from './structureDoc';
export default {
    name: 'homeView',
    components: { StructureDoc },
    data() {
        return {
            data: {
                title: 'Home',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
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