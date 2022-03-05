<template>
    <doughnut-chart-doc />
</template>

<script>
import DoughnutChartDoc from '../components/chartJs/DoughnutChartDoc';

export default {
    name: 'charJsView',
    components: { DoughnutChartDoc },
    data() {
        return {
            data: {
                title: 'Doughnut chart',
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
                        text: 'Doughnut chart'
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