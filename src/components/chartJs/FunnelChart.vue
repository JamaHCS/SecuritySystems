<template>
    <div>
        <canvas ref="funnelChart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js';
import * as funnelChart from 'chartjs-funnel';
import variables from './../../scss/lib/_variables.scss';
import { COLORS_THEME } from '../../js/constants';

/**
 * Issue with tooltip info:
 * https://github.com/xch89820/Chart.Funnel.js/issues/7
 * 
 * https://github.com/greghub/funnel-graph-js
 */

export default {
    name: 'FunnelChart',
    mounted() {
        this.renderChart();
    },
    props: {
        data: {
            required: false,
            default: () => [10, 35, 90],
            type: Array
        },
        labels: {
            required: false,
            default: () => ['label 1', 'label 2', 'label 3'],
            type: Array
        },
        title: {
            required: false,
            default: 'Test title',
            type: String
        }
    },
    data() {
        return {
            variables: variables
        };
    },
    methods: {
        getColorsArray(withTransparency = false) {
            // console.log(variables);
            return this.data.map((e, index) => {
                let colorNumber = index + 3;
                if (colorNumber > 9) {
                    return variables['color' + (colorNumber - COLORS_THEME)] + ((withTransparency) ? '66' : '');
                } else {
                    return variables['color' + colorNumber] + ((withTransparency) ? '66' : '');
                }
            });
        },
        renderChart: function() {
            let ctx = this.$refs.funnelChart;
            let chart = new Chart(ctx, {
                plugins: [funnelChart],
                type: 'funnel',
                data: {
                    datasets: [{
                        data: this.data,
                        backgroundColor: [
                            ...this.getColorsArray(true)
                        ],
                        borderColor: [
                            ...this.getColorsArray()
                        ]
                    }],
                    labels: this.labels
                },
                options: {
                    responsive: true,
                    sort: 'desc',
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: this.title
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            });
        }
    }
};
</script>

<style scoped>

</style>