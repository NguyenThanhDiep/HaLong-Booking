import Vue from 'vue';
import Component from 'vue-class-component';
import Hotel, { HotelMockData, FreeService, ServiceHotel, StarHotel } from '@/models/Hotel';
import SearchComponent from '@/components/Shared/Search/search.component.vue';

@Component({
    components: { SearchComponent }
})
export default class HotelComponent extends Vue {
    hotelsOrigin: Array<Hotel> = [];
    hotelsFiltered: Array<Hotel> = [];

    filterStars: Array<any> = [];
    starHotel: Array<number> = StarHotel;
    filterFreeServices: Array<any> = [];
    freeServiceHotel = FreeService;
    filerServices: Array<any> = [];
    serviceHotel = ServiceHotel;

    //-----Method-----//
    mounted() {
        this.hotelsOrigin = this.hotelsFiltered = HotelMockData;
    }
}