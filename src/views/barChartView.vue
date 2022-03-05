<template>
    <bar-chart-doc />
</template>

<script>
import BarChartDoc from '../components/chartJs/BarChartDoc';

export default {
    name: 'charJsView',
    components: { BarChartDoc },
    data() {
        return {
            data: {
                title: 'Bar chart',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'chartjs',
                        text: 'Chart.js'
                    },
                    {
                        name: 'chartjsBar',
                        text: 'Bar chart'
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