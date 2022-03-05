<template>
    <div class="ibox ">
        <div v-if="title || pTitle || routeShow" class="ibox-title">
            <h5 v-if="title">{{ title }}</h5>
            <h5 v-else-if="pTitle">{{ pTitle }} <small>{{ pSmall }}</small></h5>
            <div class="ibox-tools">
                <router-link v-if="routeShow && !isUrl(routeShow)" class="collapse-link" :to="{ name: routeShow }">
                    <font-awesome-icon icon="search" class="mx-1"/>
                </router-link>
                <a v-else-if="routeShow && isUrl(routeShow)" :href="routeShow" target="_blank">
                    <font-awesome-icon icon="search" class="mx-1"/>
                </a>
            </div>
        </div>
        <div class="ibox-content float-e-margins">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Box',
    props: {
        title: {
            type: String
        },
        pTitle: {
            type: String,
            required: false
        },
        pSmall: {
            type: String,
            required: false
        },
        routeShow: {
            type: String,
            required: false
        }
    },
    methods: {
        isUrl: function(string) {
            let regexp = /(ftp|http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
            return regexp.test(string);
        }
    }
};
</script>

<style scoped>

</style>