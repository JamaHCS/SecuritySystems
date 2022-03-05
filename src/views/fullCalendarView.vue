<template>
    <div>
        <box title="Full calendar">
            <FullCalendar :options="calendarOptions"/>
            <div ref='draggable1' class='cool-event'>
                <span class="badge badge-secondary">Arrastame</span>
            </div>
            <div ref='draggable2' class='cool-event'>
                <span class="badge badge-secondary">Arrastame</span>
            </div>
        </box>
        <box>
            <div class="row code">
                <highlight-code lang="xml" :code="componentHtml"/>
            </div>
            <div class="row code">
                <highlight-code lang="javascript" :code="componentJs"/>
            </div>
        </box>
    </div>
</template>

<script>
import variables from './../scss/lib/_variables.scss';
import Box from '../components/box/Box';
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

export default {
    name: 'fullCalendarView',
    components: {
        Box,
        FullCalendar
    },
    data() {
        return {
            data: {
                title: 'Full calendar',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'calendar',
                        text: 'Full calendar'
                    }
                ]
            },
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                locale: 'es',
                dateClick: function(info) {
                    info.dayEl.style.backgroundColor = variables.colorWarning;
                },
                selectable: true,
                unselectAuto: true,
                droppable: true,
                dropAccept: '.cool-event',
                drop: function() {
                    alert('dropped');
                }
            },
            componentHtml: `
                <FullCalendar :options="calendarOptions" />`,
            componentJs: `
            import '@fullcalendar/core/vdom'; 
            import FullCalendar from '@fullcalendar/vue';
            import dayGridPlugin from '@fullcalendar/daygrid';
            import interactionPlugin from '@fullcalendar/interaction';
            
            ...
            
            data() {
                return {
                    calendarOptions: {
                        plugins: [ dayGridPlugin, interactionPlugin ],
                        initialView: 'dayGridMonth',
                        locale: 'es'
                    }
                }
            }`
        };
    },
    mounted() {
        this.$emit('changeView', this.data);
        new Draggable(this.$refs.draggable1);
        new Draggable(this.$refs.draggable2);
    },
    computed: {
        _variables() {
            return variables;
        }
    }
};
</script>

<style scoped>

</style>
