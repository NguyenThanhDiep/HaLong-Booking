/* eslint-disable @typescript-eslint/no-empty-function */
import Vue from 'vue';
import Component from 'vue-class-component';
import Hotel, { FreeService, ServiceHotel, StarHotel, FilterCriteria } from '@/models/Hotel';
import SearchComponent from '@/components/Shared/Search/search.component.vue';
import { Watch } from 'vue-property-decorator';
import HotelService from '@/services/hotelService';
import moment from 'moment';

@Component({
    components: { SearchComponent }
})
export default class FindHotelComponent extends Vue {
    //------------ Service -------------//
    hotelService: HotelService = new HotelService();

    hotelsOrigin: Array<Hotel> = [];
    hotelsFiltered: Array<Hotel> = [];

    //SearchHotel
    nameHotel: string = '';
    checkInDate: Date | null = null;
    checkOutDate: Date | null = null;

    filterCriteria: FilterCriteria = new FilterCriteria();
    firstPrice: number = 0;
    secondPrice: number = 5000000;
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
    async mounted() {
        //Parse checkInDate and checkOutDate
        const checkIn = this.$route.query['checkInDate'] as string;
        if (!!checkIn) {
            const dateIn = checkIn.split('/');
            if (dateIn.length === 3) this.checkInDate = moment(`${dateIn[2]}-${dateIn[1]}-${dateIn[0]}`).toDate();
        }
        const checkOut = this.$route.query['checkOutDate'] as string;
        if (!!checkOut) {
            const dateOut = checkOut.split('/');
            if (dateOut.length === 3) this.checkOutDate = moment(`${dateOut[2]}-${dateOut[1]}-${dateOut[0]}`).toDate();
        }
        const searchString = this.$route.query['searchString'] as string;
        let resAllHotels = [];
        if (!!searchString) {
            resAllHotels = await this.hotelService.getHotelsByName(searchString);
            this.nameHotel = searchString;
        }
        else resAllHotels = await this.hotelService.getAllHotels();
        this.hotelsOrigin = this.mapDataFromAPI(resAllHotels);
        this.hotelsFiltered = this.hotelsOrigin.splice(0, this.hotelsOrigin.length, ...this.hotelsOrigin);
    }

    mapDataFromAPI(data: Array<any>): Hotel[] {
        return data.map(h => {
            const freeServices = h.freeServices.split(',').map((s: string) => FreeService[s]);
            const services = h.services.split(',').map((s: string) => ServiceHotel[s]);
            return new Hotel(h.id, h.name, h.srcImg, Number(h.price), h.star, h.address, freeServices, services, h.isSale);
        });
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

    get rangeFilterPrice(): number[] {
        return [Math.min(this.firstPrice, this.secondPrice), Math.max(this.firstPrice, this.secondPrice)];
    }

    get minPrice(): number {
        return Math.min(this.firstPrice, this.secondPrice);
    }

    get maxPrice(): number {
        return Math.max(this.firstPrice, this.secondPrice);
    }

    @Watch('rangeFilterPrice')
    onFilterByPrice(val: number[]) {
        this.filterCriteria.price = val;
        this.onFilterHotels();
    }

    onFilterHotels() {
        let result = this.hotelsOrigin;
        if (this.filterCriteria.price.some(n => n !== 0 && n !== 5000000)) {
            result = result.filter(h => h.price >= this.filterCriteria.price[0] && h.price <= this.filterCriteria.price[1]);
        }
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

    onClickBookHotel(hotelId: number) {
        this.$router.push({ name: 'Hotel', params: { hotelId: hotelId.toString() } });
    }

    async onSearchHotel() {
        const searchString = this.nameHotel.trim();
        let resAllHotels = [];
        if (!!searchString) {
            resAllHotels = await this.hotelService.getHotelsByName(searchString);
        }
        else {
            resAllHotels = await this.hotelService.getAllHotels();
        }
        if (!!searchString || !!this.checkInDate || !!this.checkOutDate) {
            this.$router.push({ name: 'FindHotel', query: { searchString: searchString, checkInDate: moment(this.checkInDate).format('D/M/YYYY'), checkOutDate: moment(this.checkOutDate).format('D/M/YYYY') } })
                .then(() => { }).catch(() => { });
        }
        else this.$router.push({ name: 'FindHotel' }).then(() => { }).catch(() => { });
        this.hotelsOrigin = this.mapDataFromAPI(resAllHotels);
        this.hotelsFiltered = this.hotelsOrigin.splice(0, this.hotelsOrigin.length, ...this.hotelsOrigin);
    }

    get validateCheckInDate(): boolean | null {
        if (!!this.checkInDate) {
            return moment(this.checkInDate).isSameOrAfter(moment());
        }
        return null;
    }

    get validateCheckOutDate(): boolean | null {
        if (!!this.checkInDate && !!this.checkOutDate) {
            return moment(this.checkOutDate).isSameOrAfter(this.checkInDate);
        }
        if (!!this.checkOutDate) {
            return moment(this.checkOutDate).isSameOrAfter(moment());
        }
        return null;
    }

    get isDisableSearchButton(): boolean {
        return this.validateCheckInDate === false || this.validateCheckOutDate === false;
    }

    get wrongCheckInDateInfo(): string {
        if (!!this.checkInDate && !moment(this.checkInDate).isSameOrAfter(moment())) return 'Ngày nhận phòng phải bằng hoặc sau ngày hôm nay';
        return '';
    }

    get wrongCheckOutDateInfo(): string {
        if (!!this.checkInDate && !!this.checkOutDate && !moment(this.checkOutDate).isSameOrAfter(this.checkInDate)) return 'Ngày trả phòng phải sau ngày nhận phòng';
        if (!!this.checkOutDate && !moment(this.checkOutDate).isSameOrAfter(moment())) return 'Ngày trả phòng phải sau ngày hôm nay';
        return '';
    }

    onClickMap() {
        window.open('https://goo.gl/maps/6r9oNba2E3VoMJ9P9', '_blank');
    }
}