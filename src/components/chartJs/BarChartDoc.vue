<template>
    <Box>
        <h2>Bar chart</h2>
        <div class="row">
            <div class="col">
                <bar-chart :monochromatic="false"/>
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
import BarChart from './BarChart';

export default {
    name: 'BarChartDoc',
    components: {
        BarChart,
        Box
    },
    data() {
        return {
            componentHtml: `
                <!-- Template declaration -->
              
                <bar-chart :labels="some" :data="some" :label="some" :monochromatic="bool"/>
            `,
            componentProps: `
                // component props
                    
                props: {
                    labels: {
                        required: true,
                        type: Array
                    },
                    data: {
                        required: true,
                        type: Array
                    },
                    label: {
                        required: true,
                        type: String
                    },
                    monochromatic: { 
                        type: Boolean, // Needs monochromatic colors set?
                        required: false,
                        default: true
                    }
                }
            `
        };
    }
};
</script>

<style scoped>

</style>