import Vue from 'vue';
import Component from 'vue-class-component';
import SearchComponent from '@/components/Shared/Search/search.component.vue';
import Hotel from '@/models/Hotel';
import Room from '@/models/Room';
import { Watch } from 'vue-property-decorator';

@Component({
    components: { SearchComponent }
})
export default class RoomComponent extends Vue {
    hotel: Hotel = new Hotel();
    imgSelected: string = '';
    allImg: Array<string> = [];
    mainPropsImg: object = {};
    indexActiveImg: number = 0;

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

        this.allImg = [
            "https://r-cf.bstatic.com/images/hotel/max1024x768/195/195444614.jpg",
            "https://r-cf.bstatic.com/images/hotel/max1024x768/192/192958857.jpg",
            "https://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3",
            "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
            "https://www.welcome-hotels.com/site/assets/files/35059/welcome_hotel_marburg_lobby_2k.2560x1600.jpg",
            "https://pix10.agoda.net/hotelImages/209/2092140/2092140_17031512040051555216.jpg?s=1024x768"
        ];
        this.imgSelected = this.allImg[0];
        this.mainPropsImg = {
            center: true,
            fluidGrow: true,
            blank: true,
            blankColor: '#bbb',
            width: 100,
            height: 50,
            class: 'm-1 mx-5'
        }

    }

    onClickImg(img: string, index: number) {
        this.imgSelected = img;
        this.indexActiveImg = index;
    }

    @Watch('imgSelected')
    async onImgSelectedChange() {
        const mainImg = document.getElementById('mainImg');
        mainImg?.classList.add('main-img');
        setTimeout(() => {
            mainImg?.classList.remove('main-img');
        }, 2000);
    }

    onClickBookRoom() {
        this.$router.push('Booking');
    }
}