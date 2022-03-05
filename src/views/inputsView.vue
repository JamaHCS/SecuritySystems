<template>
    <div>
        <box title="Flatpicker">
            <div class="input-container">
                <label>
                    Flatpicker input
                    <input type="date" class="form-control" ref="flatpicker" placeholder="dd / mm / aaaa">
                </label>
            </div>
            <div class="row code">
                <highlight-code lang="xml" :code="componentHtml"/>
            </div>
            <div class="row code">
                <highlight-code lang="javascript" :code="componentJs"/>
            </div>
        </box>

        <box p-title="Select2" p-small="https://select2.github.io/">
            <div class="row">
                <div class="col-md-4">
                    <p>
                        Select2 is a jQuery based replacement for select boxes. It can take a
                        regular select box and turn it into:
                    </p>
                    <select class="form-control select2">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                        <option value="5">Option 5</option>
                    </select>
                </div>

                <div class="col-md-4">
                    <p>
                        A placeholder value can be defined and will be displayed until a selection
                        is made.
                    </p>
                    <select class="form-control select2">
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                    </select>

                </div>
                <div class="col-md-4">
                    <p>
                        Select2 also supports multi-value select boxes. The select below is declared
                        with the multiple attribute.
                    </p>
                    <select class="form-control select2" multiple="multiple">
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">Micronesia, Federated States of tansilvania
                        </option>
                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                    </select>

                </div>
            </div>
        </box>
        <box title="Select2">
            <div class="input-container">
                <select class="select2">
                    <option value="op1">option 1</option>
                    <option value="op2">option 2</option>
                    <option value="op3">option 3</option>
                    <option value="op4">option 4</option>
                    <option value="op5">option 5</option>
                </select>
            </div>
            <div class="row code">
                <highlight-code lang="xml" :code="select2Html"/>
            </div>
            <div class="row code">
                <highlight-code lang="javascript" :code="select2Js"/>
            </div>
        </box>
        <box title="Vue-tribute">
            <div class="input-container">
                <vue-tribute :options="options">
                    <input type="text" placeholder="@..." class="form-control"/>
                </vue-tribute>
            </div>
            <div class="row code">
                <highlight-code lang="xml" :code="tributeHtml"/>
            </div>
            <div class="row code">
                <highlight-code lang="javascript" :code="tributeJs"/>
            </div>
        </box>
    </div>
</template>

<script>
import Box from '../components/box/Box';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';

import $ from 'jquery';
import jquery from 'jquery';

window.jQuery = jquery;
window.$ = jquery;
import select2 from 'select2';
import VueTribute from 'vue-tribute';

export default {
    name: 'test',
    components: {
        Box,
        VueTribute
    },
    data() {
        return {
            data: {
                title: 'Special inputs',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'specialInputs',
                        text: 'Special inputs'
                    }
                ]
            },
            options: {
                trigger: '@',
                values: [
                    { key: 'Collin Henderson', value: 'syropian' },
                    { key: 'Sarah Drasner', value: 'sarah_edo' },
                    { key: 'Evan You', value: 'youyuxi' },
                    { key: 'Adam Wathan', value: 'adamwathan' }
                ],
                positionMenu: true,
                menuContainer: document.querySelector('.menu-container')
            },
            componentHtml: `
                <label>
                    Flatpicker input
                    <input type="date" class="form-control" ref="flatpicker" placeholder="dd / mm / aaaa">
                </label>`,
            componentJs: `
                import flatpickr from 'flatpickr';
                import { Spanish } from 'flatpickr/dist/l10n/es';
                
                ...
                
                mounted() {
                    let flatpickrElement = this.$refs.flatpicker;
                    flatpickr(flatpickrElement, { 'locale': Spanish });
                }`,
            select2Html: `
                <select class="select2">
                    <option value="..."> ... </option>
                    <option value="..."> ... </option>
                </select>`,
            select2Js: `
                import $ from 'jquery';
                import jquery from 'jquery';
                window.jQuery = jquery;
                window.$ = jquery;
                import select2 from 'select2';';
                
                ...
                
                mounted() {
                    $('.select2').select2();
                }`,
            tributeHtml: `
            <vue-tribute :options="options">
                <input type="text" placeholder="@..." class="form-control"/>
            </vue-tribute>`,
            tributeJs: `
            data() {
                return {
                    options: {
                        trigger: '@',
                        values: [
                            { key: 'Collin Henderson', value: 'syropian' },
                            { key: 'Sarah Drasner', value: 'sarah_edo' },
                            { key: 'Evan You', value: 'youyuxi' },
                            { key: 'Adam Wathan', value: 'adamwathan' }
                        ],
                        positionMenu: true,
                        menuContainer: document.querySelector('.menu-container')
                    }
                }
            }`
        };
    },
    mounted() {
        this.$emit('changeView', this.data);

        let flatpickrElement = this.$refs.flatpicker;
        flatpickr(flatpickrElement, { 'locale': Spanish });

        $('.select2').select2();
    }
};
</script>

<style scoped>
.input-container {
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
}
</style>