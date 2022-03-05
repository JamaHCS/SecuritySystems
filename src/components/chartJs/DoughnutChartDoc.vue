<template>
    <Box>
        <h2>Doughnut chart</h2>
        <div class="row">
            <div class="col chart">
                <doughnut-chart style="width: 50vw !important"/>
            </div>
        </div>
        <div class="row code">
            <highlight-code lang="xml" :code="componentHtml"/>
        </div>
        <div class="row code">
            <highlight-code lang="javascript" :code="componentProps"/>
        </div>
    </Box>
</template>

<script>
import Box from '../box/Box';
import DoughnutChart from './DoughnutChart';

export default {
    name: 'BarChartDoc',
    components: {
        DoughnutChart,
        Box
    },
    data() {
        return {
            componentHtml: `
                <!-- Template declaration -->
              
                <doughnut-chart :labels="some" :data="some" />
            `,
            componentProps: `
                // component props
                    
                props: {
                    labels: {
                        default: () => ['Bitcoin', 'Ethereum', 'Cardano', 'Litecoin', 'Cake', 'Theta'],
                        type: Array
                    },
                    data: {
                        default: () => [.4, .2, .1, .1, .1, .1],
                        type: Array
                    }
                }
            `
        };
    }
};
</script>

<style scoped>
    .chart {
        display: flex;
        align-content: center;
        justify-content:center;
    }
</style>