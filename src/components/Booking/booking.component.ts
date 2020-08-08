import Vue from 'vue';
import Component from 'vue-class-component';
import SearchComponent from '@/components/Shared/Search/search.component.vue';
import Hotel, { FreeService, ServiceHotel } from '@/models/Hotel';

@Component({
    components: { SearchComponent }
})
export default class BookingComponent extends Vue {
    bookingHotel: Hotel = new Hotel();

    mounted() {
        this.bookingHotel = new Hotel('Novotel Hạ Long', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 1300000, 1,
            '160 Đường Hạ Long, Bãi Cháy, Hạ Long',
            [FreeService.FreeAnSang],
            [ServiceHotel.BaiDoXe, ServiceHotel.ChapNhanThuCung, ServiceHotel.DoAnTaiPhong, ServiceHotel.HoBoi, ServiceHotel.MayATM],
            true
        );
    }
}