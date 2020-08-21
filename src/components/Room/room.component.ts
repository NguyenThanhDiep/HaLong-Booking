import Vue from 'vue';
import Component from 'vue-class-component';
import SearchComponent from '@/components/Shared/Search/search.component.vue';
import Hotel, { FreeService, ServiceHotel } from '@/models/Hotel';
import moment from 'moment';
import HotelService from '@/services/hotelService';

@Component({
    components: { SearchComponent }
})
export default class RoomComponent extends Vue {
    //------------ Service -------------//
    hotelService: HotelService = new HotelService();
    
    bookingHotel: Hotel = new Hotel();
    checkInDate: string = '';
    checkOutDate: string = '';
    numberAdult: number | null = null;
    numberChildren: number | null = null;
    numberBaby: number | null = null;
    fullName: string = '';
    phoneNumber: string = '';
    email: string = '';
    note: string = '';

    async mounted() {
        const roomId = this.$route.params.roomId;
        if (roomId) {
            const resRoomInfo = await this.hotelService.getRoomById(roomId);
            if (resRoomInfo) this.mapDataFromAPI(resRoomInfo);
            else this.$router.push({ name: 'Home' });
        }
    }

    mapDataFromAPI(res: any) {
        const hotelInfo = res.hotel;
        const freeHotelServices = (hotelInfo.freeServices as string).split(',').map(s => FreeService[s]);
        const hotelServices = (hotelInfo.services as string).split(',').map(s => ServiceHotel[s]);
        this.bookingHotel = new Hotel(hotelInfo.id, hotelInfo.name, hotelInfo.srcImg, Number(hotelInfo.price), hotelInfo.star, hotelInfo.address, freeHotelServices, hotelServices, hotelInfo.isSale);
    }

    onInputCheckInDate(date: Date) {
        this.checkInDate = moment(date).format('D/M/YYYY');
    }

    onInputCheckoutDate(date: Date) {
        this.checkOutDate = moment(date).format('D/M/YYYY');
    }

    get totalDaysRent() {
        if (this.checkInDate && this.checkOutDate) {
            return moment(this.checkOutDate, 'D-M-YYYY').diff(moment(this.checkInDate, 'D-M-YYYY'), 'days');
        }
        else return '';
    }

    get billAdult() {
        if (this.numberAdult && this.bookingHotel.price && this.totalDaysRent) {
            return {
                text: `<span class="font-weight-bold">${this.numberAdult} người lớn</span> (>= 12 tuổi) 
                    <span class="font-weight-bold">x ${this.bookingHotel.price} x ${this.totalDaysRent} đêm</span>`,
                price: `${Number(this.numberAdult) * this.bookingHotel.price * Number(this.totalDaysRent)}đ`
            }
        }
        else return {
            text: '',
            price: ''
        }
    }

    get billChildren() {
        if (this.numberChildren && this.totalDaysRent) {
            return {
                text: `<span class="font-weight-bold">${this.numberChildren} trẻ em</span> (2-11 tuổi)`,
                price: `Báo giá sau`
            }
        }
        else {
            return {
                text: '',
                price: ''
            }
        }
    }

    get billBaby() {
        if (this.numberBaby && this.totalDaysRent) {
            return {
                text: `<span class="font-weight-bold">${this.numberBaby} em bé</span> (<2 tuổi)`,
                price: `Báo giá sau`
            }
        }
        else {
            return {
                text: '',
                price: ''
            }
        }
    }
}