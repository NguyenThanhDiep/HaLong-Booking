import Vue from 'vue';
import Component from 'vue-class-component';
import Hotel from '@/models/Hotel';
import SearchComponent from '@/components/Shared/Search/search.component.vue';

@Component({
    components: { SearchComponent }
})
export default class HotelComponent extends Vue {
    hotelsOrigin: Array<Hotel> = [];
    hotelsFiltered: Array<Hotel> = [];

    //-----Method-----//
}