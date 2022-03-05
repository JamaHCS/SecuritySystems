<template>
    <Box>
        <h2>chart.funnel.js</h2>
        <div class="row">
            <div class="col">
                <funnel-chart />
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
import funnelChart from './FunnelChart';

export default {
    name: 'BarChartDoc',
    components: {
        funnelChart,
        Box
    },
    data() {
        return {
            componentHtml: `
                <!-- Template declaration -->
              
                <funnel-chart :labels="some" :data="some" :title="some" />
            `,
            componentProps: `
                // component props
                    
                props: {
                    data: {
                        required: false,
                        default: () => // Test array,
                        type: Array
                    },
                    labels: {
                        required: false,
                        default: () => // Test array,
                        type: Array
                    },
                    title: {
                        required: false,
                        default: 'Test title',
                        type: String
                    }
                }
            `
        };
    }
};
</script>

<style scoped>

</style>