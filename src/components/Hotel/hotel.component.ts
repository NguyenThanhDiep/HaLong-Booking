import Vue from 'vue';
import Component from 'vue-class-component';
import SearchComponent from '@/components/Shared/Search/search.component.vue';
import Hotel from '@/models/Hotel';
import Room from '@/models/Room';
import { Watch } from 'vue-property-decorator';
import HotelService from '@/services/hotelService';

@Component({
    components: { SearchComponent }
})
export default class HotelComponent extends Vue {
    //------------ Service -------------//
    hotelService: HotelService = new HotelService();

    hotel: Hotel = new Hotel();
    imgSelected: string = '';
    allImg: Array<string> = [];
    mainPropsImg: object = {};
    indexActiveImg: number = 0;

    async mounted() {
        const hotelId = this.$route.params.hotelId;
        if (hotelId) {
            const resHotel = await this.hotelService.getHotelById(hotelId);
            if (resHotel) this.mapDataFromAPI(resHotel);
            else this.$router.push({ name: 'Home' });
        }

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

    mapDataFromAPI(res: any) {
        this.hotel.id = res.id;
        this.hotel.name = res.name;
        this.hotel.srcImg = res.srcImg;
        this.hotel.price = Number(res.price);
        this.hotel.star = res.star;
        this.hotel.address = res.address;
        this.hotel.isSale = res.isSale;
        (res.rooms as Array<any>).forEach(r => {
            const room = new Room();
            room.id = r.id;
            room.name = r.name;
            room.srcImg = r.srcImg;
            room.price = Number(r.price);
            room.freeServices = (r.freeServices as string).split(',');
            room.capacity = (r.capacity as string).split(',');
            this.hotel.rooms.push(room);
        })
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

    onClickBookRoom(roomId: number) {
        this.$router.push({ name: 'Room', params: { roomId: roomId.toString() } });
    }
}