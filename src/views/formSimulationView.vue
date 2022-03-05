<template>
    <b-container>
        <box title="Formulario">
            <div class="row">
                <div class="col">
                    <form>
                        <div class="form-row">
                            <div class="form-group col">
                                <label for="name">Nombre<span class="text-muted"> (s)</span>:</label>
                                <input type="text" class="form-control" name="name" placeholder="Juan"
                                       autocomplete="firstname" required/>
                            </div>
                            <div class="form-group col">
                                <label for="middleName">Apellido materno:</label>
                                <input type="text" class="form-control" name="middleName" autocomplete="middleName"
                                       placeholder="Perez" required>
                            </div>
                            <div class="form-group col">
                                <label for="lastName">Apellido paterno:</label>
                                <input type="text" class="form-control" name="name" autocomplete="lastname"
                                       placeholder="Gonzales" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" name="email" placeholder="juan@perez.io"
                                       autocomplete="email" required/>
                            </div>
                            <div class="form-group col">
                                <label for="password">password:</label>
                                <input type="password" class="form-control" name="password" placeholder="********"
                                       required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col">
                                <label for="birthdate">
                                    Fecha de nacimiento
                                    <input type="date" class="form-control" ref="flatpicker"
                                           placeholder="dd / mm / aaaa" name="birthdate">
                                </label>
                            </div>
                            <div class="form-group col">
                                <label for="sex">
                                    Sexo:
                                    <select class="form-control select2">
                                        <option value="1">Masculino</option>
                                        <option value="2">Femenino</option>
                                        <option value="3">Otro</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col">
                                <label for="paises">Que paises te gustaria visitar?</label>
                                <select class="form-control select2" multiple="multiple" name="paises">
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia, Federated States of">Micronesia, Federated States of
                                        tansilvania
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
                                    <option value="otro">Otro</option>
                                </select>
                            </div>

                        </div>
                        <div class="form-row">
                            <div class="form-group col">
                                <label class="ilabel">
                                    <span>Terminos y condiciones</span>
                                    <input type="checkbox" required>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="button">
                        <button class="btn btn-danger mx-1" @click="swal()" type="submit">Cancelar</button>
                        <button class="btn btn-primary" @click="swalSuccess()">Enviar</button>
                    </div>
                </div>
            </div>
        </box>
    </b-container>
</template>

<script>

import Box from '../components/box/Box';
import swal from 'sweetalert';

import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';

import $ from 'jquery';
import jquery from 'jquery';

window.jQuery = jquery;
window.$ = jquery;
import select2 from 'select2';
import VueTribute from 'vue-tribute';

export default {
    name: 'formView',
    components: {
        Box
    },
    data() {
        return {
            data: {
                title: 'Form',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'form',
                        text: 'Form'
                    },
                    {
                        name: 'formSimulation',
                        text: 'Form simulated'
                    }
                ]
            }
        };
    },
    mounted() {
        this.$emit('changeView', this.data);

        $('.select2').select2();

        let flatpickrElement = this.$refs.flatpicker;
        flatpickr(flatpickrElement, { 'locale': Spanish });
    },
    methods: {
        swal() {
            swal({
                title: 'Estas seguro?',
                text: 'Esta operacion cancelara el proceso ficticio actual.',
                icon: 'error',
                dangerMode: true
            }).then(willDelete => {
                if (willDelete) {
                    swal('Cancelado!', 'Tu registro ficticio fue cancelado!', 'success');
                }
            });
        },
        swalSuccess() {
            swal('Genial!', 'Te has registrado en el sitio de Cooper.css! Desafortunadamente, tus datos no se guardaron porque no hay backend', 'success');
        }
    }
};
</script>

<style scoped>
.button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}
</style>