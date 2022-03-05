<script>
/**
 * ?https://vue-chartjs.org/guide/#updating-charts
 * ?https://www.chartjs.org/docs/latest/charts/bar.html
 */

import { Bar } from 'vue-chartjs';
import variables from './../../scss/lib/_variables.scss';
import { COLORS_THEME } from '../../js/constants';

export default {
    extends: Bar,
    mounted() {
        this.renderChart(this.chartData, this.options);
    },
    props: {
        labels: {
            default: () => ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'diciembre'],
            type: Array
        },
        data: {
            default: () => [251, 207, 115, 183, 254, 198, 204, 165, 200, 311, 290, 200],
            type: Array
        },
        label: {
            default: () => 'Datos de prueba, por favor, llena los props',
            type: String
        },
        monochromatic: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    data() {
        return {
            variables: { ...variables },
            chartData:{
                labels: this.labels,
                datasets: [{
                    label: this.label,
                    borderWidth: 1,
                    backgroundColor: (this.monochromatic) ? variables.colorPrimary + '66' : this.getColorsArray(true),
                    borderColor: (this.monochromatic) ? variables.colorPrimary : this.getColorsArray(),
                    pointBorderColor: (this.monochromatic) ? variables.colorPrimary : this.getColorsArray(),
                    data: this.data
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            }
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
        }
    }
};
</script>

<style scoped>

</style>