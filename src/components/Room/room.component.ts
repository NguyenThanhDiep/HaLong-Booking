import Vue from 'vue';
import Component from 'vue-class-component';
import SearchComponent from '@/components/Shared/Search/search.component.vue';
import Hotel from '@/models/Hotel';
import Room from '@/models/Room';

@Component({
    components: { SearchComponent }
})
export default class RoomComponent extends Vue {
    hotel: Hotel = new Hotel();

    mounted() {
        //TO DO get data from API
        this.hotel.name = 'Novotel Hạ Long';
        this.hotel.star = 5;
        this.hotel.address = '160 Đường Hạ Long, Phường Bãi Cháy, Hạ Long';
        this.hotel.srcImg = 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg';
        const room = new Room();
        room.name = 'Premium Deluxe Double Sea View';
        room.srcImg = 'https://pix10.agoda.net/hotelImages/209/2092140/2092140_17031512040051555216.jpg?s=1024x768';
        room.price = 1600000;
        room.freeServices = ['Bữa sáng miễn phí', 'Thêm giường phụ miễn phí', 'Hồ bơi', 'Bãi tắm riêng', 'Wifi miễn phí', 'Phòng Gym'];
        room.capacity = ['2 người lớn', 'Có thể kê thêm giường phụ'];
        this.hotel.rooms.push(room);
        this.hotel.rooms.push(room);

    }
}