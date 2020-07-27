import Vue from 'vue';
import Component from 'vue-class-component';
import Hotel, { HotelMockData, FreeService, ServiceHotel, StarHotel, FilterCriteria } from '@/models/Hotel';
import SearchComponent from '@/components/Shared/Search/search.component.vue';
import { Watch } from 'vue-property-decorator';

@Component({
    components: { SearchComponent }
})
export default class HotelComponent extends Vue {
    hotelsOrigin: Array<Hotel> = [];
    hotelsFiltered: Array<Hotel> = [];

    filterCriteria: FilterCriteria = new FilterCriteria();
    filterIsSale: boolean = false;
    filterStars: Array<any> = [];
    starHotel: Array<number> = StarHotel;
    filterFreeServices: Array<any> = [];
    freeServiceHotel = FreeService;
    filerServices: Array<any> = [];
    serviceHotel = ServiceHotel;
    isSortStarAsc: boolean | null = null;
    sortStarIcon: string = '';
    isSortPriceAsc: boolean | null = null;
    sortPriceIcon: string = '';

    //-----Method-----//
    mounted() {
        this.hotelsOrigin = HotelMockData;
        this.hotelsFiltered = this.hotelsOrigin.splice(0, this.hotelsOrigin.length, ...this.hotelsOrigin);
    }

    onClickSortStar() {
        switch (this.isSortStarAsc) {
            case true:
                this.isSortStarAsc = false;
                this.hotelsFiltered = this.hotelsFiltered.sort((a, b) => b.star - a.star);
                this.sortStarIcon = 'fa-caret-down'
                break;
            case false:
                this.isSortStarAsc = null;
                this.hotelsFiltered = this.hotelsOrigin;
                this.sortStarIcon = '';
                break;
            default:
                this.isSortStarAsc = true;
                this.hotelsFiltered = this.hotelsFiltered.sort((a, b) => a.star - b.star);
                this.sortStarIcon = 'fa-caret-up';
        }
        this.isSortPriceAsc = null;
        this.sortPriceIcon = '';
    }

    onClickSortPrice() {
        switch (this.isSortPriceAsc) {
            case true:
                this.isSortPriceAsc = false;
                this.hotelsFiltered = this.hotelsFiltered.sort((a, b) => b.star - a.star);
                this.sortPriceIcon = 'fa-caret-down'
                break;
            case false:
                this.isSortPriceAsc = null;
                this.hotelsFiltered = this.hotelsOrigin;
                this.sortPriceIcon = '';
                break;
            default:
                this.isSortPriceAsc = true;
                this.hotelsFiltered = this.hotelsFiltered.sort((a, b) => a.star - b.star);
                this.sortPriceIcon = 'fa-caret-up';
        }
        this.isSortStarAsc = null;
        this.sortStarIcon = '';
    }

    @Watch('filterStars')
    onFilterByStar(val: Array<number>) {
        if (val && val.length > 0) {
            this.filterCriteria.star = val;
        }
        else {
            this.filterCriteria.star = [];
        }
        this.onFilterHotels();
    }

    @Watch('filterFreeServices')
    onFilterByFreeService(val: Array<string>) {
        if (val && val.length > 0) {
            this.filterCriteria.freeService = val;
        }
        else {
            this.filterCriteria.freeService = val;
        }
        this.onFilterHotels();
    }

    @Watch('filerServices')
    onFilterByService(val: Array<string>) {
        if (val && val.length > 0) {
            this.filterCriteria.service = val;
        }
        else {
            this.filterCriteria.service = [];
        }
        this.onFilterHotels();
    }

    @Watch('filterIsSale')
    onFilterByIsSale(val: boolean) {
        this.filterCriteria.onlyIsSale = val;
        this.onFilterHotels();
    }

    onFilterHotels() {
        let result = this.hotelsOrigin;
        if (this.filterCriteria.onlyIsSale) {
            result = result.filter(h => h.isSale);
        }
        if (this.filterCriteria.star.length > 0) {
            result = result.filter(h => this.filterCriteria.star.includes(h.star));
        }
        if (this.filterCriteria.freeService.length > 0) {
            result = result.filter(h => h.freeServices.some(s => this.filterCriteria.freeService.includes(s.code)));
        }
        if (this.filterCriteria.service.length > 0) {
            result = result.filter(h => h.services.some(s => this.filterCriteria.service.includes(s.code)));
        }
        this.hotelsFiltered = result;
        this.resetSort();
    }

    resetSort() {
        this.isSortStarAsc = this.isSortPriceAsc = null;
        this.sortStarIcon = this.sortPriceIcon = '';
    }

    onClickBookHotel() {
        this.$router.push('Room');
    }
}