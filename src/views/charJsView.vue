<template>
    <div>
        <Box title="Bar chart" route-show="chartjsBars">
            <bar-chart :monochromatic="true"/>
        </Box>
        <Box title="Doughnut chart" route-show="chartjsDoughnut">
            <doughnut-chart style="width: 50vw !important" class="mx-auto"/>
        </Box>
        <Box title="Funnel chart" route-show="chartjsFunnel">
            <funnel-chart />
        </Box>
    </div>
</template>

<script>
import Box from '../components/box/Box';
import BarChart from '../components/chartJs/BarChart';
import FunnelChart from '../components/chartJs/FunnelChart';
import DoughnutChart from '../components/chartJs/DoughnutChart';

export default {
    name: 'charJsView',
    components: { DoughnutChart, FunnelChart, BarChart, Box },
    data() {
        return {
            data: {
                title: 'Chart.js',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'chartjs',
                        text: 'Chart.js'
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