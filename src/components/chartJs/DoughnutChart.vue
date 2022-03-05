<script>
/**
 * ?https://vue-chartjs.org/guide/#updating-charts
 * ?https://www.chartjs.org/docs/latest/charts/bar.html
 */

import { Doughnut } from 'vue-chartjs';
import variables from './../../scss/lib/_variables.scss';
import { COLORS_THEME } from '../../js/constants';

export default {
    extends: Doughnut,
    mounted() {
        this.renderChart(this.chartData, this.options);
    },
    props: {
        labels: {
            default: () => ['Bitcoin', 'Ethereum', 'Cardano', 'Litecoin', 'Cake', 'Theta'],
            type: Array
        },
        data: {
            default: () => [.4, .2, .1, .1, .1, .1],
            type: Array
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
                    backgroundColor: this.getColorsArray(true),
                    borderColor: this.getColorsArray(),
                    pointBorderColor: this.getColorsArray(),
                    data: this.data
                }]
            }
        };
    },
    methods: {
        getColorsArray(withTransparency = false) {
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