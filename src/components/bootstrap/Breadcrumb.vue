<template>
    <div class="row wrapper foreground page-heading pb-2 breadcrumb-container">
        <div class="col">
            <h2 v-if="title" class="color-tittle">{{ title }}</h2>
            <ol class="breadcrumb">
                <li v-for="(item, index) in path" class="breadcrumb-item" :key="index">
                    <template v-if="(index + 1) !== path.length">
                        <router-link :to="{ name: item.name }">{{ item.text }}</router-link>
                    </template>
                    <template v-else>
                        <strong>{{ item.text }}</strong>
                    </template>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props: {
        title: {
            type: String
        },
        path: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>

</style>