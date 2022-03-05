<template>
    <funnel-chart-doc />
</template>

<script>
import FunnelChartDoc from '../components/chartJs/FunnelChartDoc';

export default {
    name: 'charJsView',
    components: { FunnelChartDoc },
    data() {
        return {
            data: {
                title: 'Funnel chart',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'chartjs',
                        text: 'chart.js'
                    },
                    {
                        name: 'chartjs',
                        text: 'chart.funnel.js'
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