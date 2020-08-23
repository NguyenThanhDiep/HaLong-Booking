/* eslint-disable */
import Vue from 'vue';
import Component from 'vue-class-component';
import Hotel, { FreeService, ServiceHotel } from '@/models/Hotel';
import Scene from '@/models/Scene';
import Dish from '@/models/Dish';
import SearchComponent from '@/components/Shared/Search/search.component.vue';
import HotelService from '@/services/hotelService';

@Component({
    components: {
        SearchComponent
    }
})
export default class HomeComponent extends Vue {
    //------------ Service -------------//
    hotelService: HotelService = new HotelService();
    
    //-----Prop-----//
    hotels: Array<Hotel> = [];
    hotelsFormat: Array<any> = []
    scenes: Array<Scene> = [];
    scenesFormat: Array<any> = [];
    dishes: Array<Dish> = [];
    dishesFormat: Array<any> = [];

    async mounted() {
        const resAllHotels = await this.hotelService.getAllHotels();
        this.hotels = this.mapDataFromAPI(resAllHotels).slice(0, 8);
        for (let i = 0; i < this.hotels.length / 4; ++i) {
            this.hotelsFormat.push(this.hotels.slice(i * 4, i * 4 + 4));
        }

        const sceneData = [
            new Scene('Vịnh Bái Tử Long', 'https://previews.123rf.com/images/puthuchon/puthuchon1310/puthuchon131000194/22732961-high-mountains-view-beautiful-views-of-the-country-s-northern-thai.jpg'),
            new Scene('Vịnh Lan Hạ', 'https://thegioidulich.com/upload/viet-nam/hai-phong/vinh-lan-ha-thien-duong-bo-quen-01.jpg'),
            new Scene('Đảo Soi Sim', 'https://bloganchoi.com/wp-content/uploads/2017/08/dao-soi-sim-hl-1.jpg'),
            new Scene('Đảo Tuần Châu', 'https://previews.123rf.com/images/freeartist/freeartist1712/freeartist171200055/91120197-beautiful-beach-of-mauritius-island-view-from-the-azure-sea-and-palm-tree-.jpg'),
            new Scene('Vịnh Duy Triều', 'https://onewanderatatime.com/wp-content/uploads/2018/07/Cat_ba_Sunset_01.jpg'),
            new Scene('Hòn Trân Châu', 'https://unscriptedadventures.files.wordpress.com/2016/05/img_2451.jpg'),
            new Scene('Đảo Phùng Hưng', 'https://www.vietfuntravel.com.vn/image/data/Blog/so-tay/du-lich-ha-long-mua-nao-dep-nhat/du-lich-ha-long-mua-nao-dep-nhat-h1.jpg'),
            new Scene('Hòn Đôi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIxAjMbQOmLHMBlVk1_ftnQ5xEPWSlkOhLNA&usqp=CAU')
        ];
        this.scenes = sceneData;
        for (let i = 0; i < this.scenes.length / 4; ++i) {
            this.scenesFormat.push(this.scenes.slice(i * 4, i * 4 + 4));
        }

        const dishData = [
            new Dish('Sá Sùng', 'https://tapchimuasam.vn/wp-content/uploads/2019/09/2.jpg'),
            new Dish('Bún Bề Bề', 'https://cdn.24h.com.vn/upload/3-2018/images/2018-08-21/1534870743-335-thoi-tiet-nay-ma-an-bun-be-be-suon-chua-thi-dung-la-so-mot-31239344_975017625990170_6265187907003219968_n-1534870385-width960height921.jpg'),
            new Dish('Cà Sáy Tiên Yên', 'https://i.pinimg.com/originals/fa/0a/5c/fa0a5c2d4e07c9a9f053a42bfc1ca329.jpg'),
            new Dish('Chả Mực Bánh Cuốn', 'https://imgmedia.lbb.in/media/2019/12/5dea974649f4a2824dec12cc_1575655238048.jpg'),
            new Dish('Bánh canh giò heo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUv6aN9RCqtipz1Y7ZqxmyzCKXKku-NtdpSQ&usqp=CAU'),
            new Dish('Bún thịt nướng', 'https://static.sscontent.com/prodimg/products/124/v723685_prozis_french-honey-mustard-chicken--rice_newin.jpg'),
            new Dish('Trứng hải sản', 'https://cdn.cnn.com/cnnnext/dam/assets/190515173104-03-breakfast-around-the-world-avacado-toast.jpg'),
            new Dish('Sò huyết', 'https://blog.traveloka.com/source/uploads/sites/9/2018/09/mon-ngon-phan-thiet-hai-san-1.jpg')
        ];
        this.dishes = dishData;
        for (let i = 0; i < this.dishes.length / 4; ++i) {
            this.dishesFormat.push(this.dishes.slice(i * 4, i * 4 + 4));
        }
    }

    mapDataFromAPI(data: Array<any>): Hotel[] {
        return data.map(h => {
            const freeServices = h.freeServices.split(',').map((s: string) => FreeService[s]);
            const services = h.services.split(',').map((s: string) => ServiceHotel[s]);
            return new Hotel(h.id, h.name, h.srcImg, Number(h.price), h.star, h.address, freeServices, services, h.isSale);
        });
    }

    onClickHotelImg(hotelId: number) {
        this.$router.push({ name: 'Hotel', params: { hotelId: hotelId.toString() } });
    }
}