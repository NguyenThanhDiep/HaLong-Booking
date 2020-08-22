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
            new Scene('Vịnh Bái Tử Long', 'https://streaming1.danviet.vn/upload/2-2020/images/2020-04-28/bai-tu-long1-1588089180-width1962height1104.jpg'),
            new Scene('Vịnh Lan Hạ', 'https://thegioidulich.com/upload/viet-nam/hai-phong/vinh-lan-ha-thien-duong-bo-quen-01.jpg'),
            new Scene('Đảo Soi Sim', 'https://bloganchoi.com/wp-content/uploads/2017/08/dao-soi-sim-hl-1.jpg'),
            new Scene('Đảo Tuần Châu', 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/11/khu-du-lich-tuan-chau-quang-ninh.jpg'),
            new Scene('Vịnh Duy Triều', 'https://image.ngaynay.vn/w800/uploaded/HmdWyC/vaolyz2/uploaded/dieulan/2015_05_29/ngamhalongvedepantuongcuatop7kyquan1.png'),
            new Scene('Hòn Trân Châu', 'https://toplist.vn/images/800px/dia-diem-tham-quan-dep-nhat-ha-long-297305.jpg'),
            new Scene('Đảo Phùng Hưng', 'https://www.vietfuntravel.com.vn/image/data/Blog/so-tay/du-lich-ha-long-mua-nao-dep-nhat/du-lich-ha-long-mua-nao-dep-nhat-h1.jpg'),
            new Scene('Hòn Đôi', 'https://3.bp.blogspot.com/-KHzwTkMaAS0/UdG3KM9qjUI/AAAAAAAAAX8/loFMm_XW7PI/s1600/Vinh-Ha-long-0.jpg')
        ];
        this.scenes = sceneData;
        for (let i = 0; i < this.scenes.length / 4; ++i) {
            this.scenesFormat.push(this.scenes.slice(i * 4, i * 4 + 4));
        }

        const dishData = [
            new Dish('Sá Sùng', 'https://tapchimuasam.vn/wp-content/uploads/2019/09/2.jpg'),
            new Dish('Bún Bề Bề', 'https://cdn.24h.com.vn/upload/3-2018/images/2018-08-21/1534870743-335-thoi-tiet-nay-ma-an-bun-be-be-suon-chua-thi-dung-la-so-mot-31239344_975017625990170_6265187907003219968_n-1534870385-width960height921.jpg'),
            new Dish('Cà Sáy Tiên Yên', 'https://wiki-travel.com.vn/Uploads/Picture/thanhhuong-175720015747-oc-xao.jpg'),
            new Dish('Chả Mực Bánh Cuốn', 'https://image.thanhnien.vn/1080/uploaded/2014/saigonamthuc.thanhnien.com.vn/pictures201404/tan_nhan/banhcuonchamuc_400.jpg'),
            new Dish('Bánh canh giò heo', 'https://cdn.24h.com.vn/upload/3-2018/images/2018-07-20/1532053480-552-son-hao-hai-vicung-chang-bang-15-dac-san-ngon-soi-suc-da-day-cua-ha-giang-1-1532052119-width660height441.jpg'),
            new Dish('Thịt nướng', 'https://www.tripi.vn/blog/wp-content/uploads/2018/08/b%C3%BAn-ch%E1%BA%A3.jpg'),
            new Dish('Phở thập cẩm', 'https://www.huongnghiepaau.com/wp-content/uploads/2019/01/canh-chua-ca-dieu-hong.jpg'),
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