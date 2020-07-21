/* eslint-disable */
import Vue from 'vue';
import Component from 'vue-class-component';
import Hotel from '@/models/Hotel';

@Component({})
export default class HotelComponent extends Vue {
    //-----Prop-----//
    hotelsOrigin: Array<Hotel> = [];
    hotelsFiltered: Array<Hotel> = [];

    //-----Method-----//
}