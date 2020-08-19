/* eslint-disable */
import Vue from 'vue';
import Component from 'vue-class-component';
import Hotel from '@/models/Hotel';
import Scene from '@/models/Scene';
import Dish from '@/models/Dish';
import SearchComponent from '@/components/Shared/Search/search.component.vue';

@Component({
    components: {
        SearchComponent
    }
})
export default class HomeComponent extends Vue {
    //-----Prop-----//
    hotels: Array<Hotel> = [];
    hotelsFormat: Array<any> = []
    scenes: Array<Scene> = [];
    scenesFormat: Array<any> = [];
    dishes: Array<Dish> = [];
    dishesFormat: Array<any> = [];

    mounted() {
        //Mock Data
        const hotelData = [
            new Hotel(1, 'Central Luxury Hạ Long', 'https://salt.tikicdn.com/ts/tmp/fe/ef/b0/53cd94836aefa2936752b446b6628cfe.jpg', 1500000),
            new Hotel(2, 'StarCity Hạ Long Bay', 'https://pix10.agoda.net/hotelImages/297680/-1/3971b03b26a32a394c6e2a76002974ef.jpg', 1400000),
            new Hotel(3, 'Sài Gòn Hạ Long', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 1700000),
            new Hotel(4, 'Grand Hạ Long', 'https://datphongflc.com/wp-content/uploads/2019/09/khach-san-flc-grand-halong-hotel-16.jpg', 1600000),
            new Hotel(5, 'Central Luxury Hạ Long 2', 'https://salt.tikicdn.com/ts/tmp/fe/ef/b0/53cd94836aefa2936752b446b6628cfe.jpg', 1500000),
            new Hotel(6, 'StarCity Hạ Long Bay 2', 'https://pix10.agoda.net/hotelImages/297680/-1/3971b03b26a32a394c6e2a76002974ef.jpg', 1400000),
            new Hotel(7, 'Sài Gòn Hạ Long 2', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 1700000),
            new Hotel(8, 'Grand Hạ Long 2', 'https://datphongflc.com/wp-content/uploads/2019/09/khach-san-flc-grand-halong-hotel-16.jpg', 1600000)
        ]
        this.hotels = hotelData;
        for (let i = 0; i < this.hotels.length / 4; ++i) {
            this.hotelsFormat.push(this.hotels.slice(i * 4, i * 4 + 4));
        }

        const sceneData = [
            new Scene('Vịnh Bái Tử Long', 'https://streaming1.danviet.vn/upload/2-2020/images/2020-04-28/bai-tu-long1-1588089180-width1962height1104.jpg'),
            new Scene('Vịnh Lan Hạ', 'https://thegioidulich.com/upload/viet-nam/hai-phong/vinh-lan-ha-thien-duong-bo-quen-01.jpg'),
            new Scene('Đảo Soi Sim', 'https://bloganchoi.com/wp-content/uploads/2017/08/dao-soi-sim-hl-1.jpg'),
            new Scene('Đảo Tuần Châu', 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/11/khu-du-lich-tuan-chau-quang-ninh.jpg'),
            new Scene('Vịnh Bái Tử Long 2', 'https://streaming1.danviet.vn/upload/2-2020/images/2020-04-28/bai-tu-long1-1588089180-width1962height1104.jpg'),
            new Scene('Vịnh Lan Hạ 2', 'https://thegioidulich.com/upload/viet-nam/hai-phong/vinh-lan-ha-thien-duong-bo-quen-01.jpg'),
            new Scene('Đảo Soi Sim 2', 'https://bloganchoi.com/wp-content/uploads/2017/08/dao-soi-sim-hl-1.jpg'),
            new Scene('Đảo Tuần Châu 2', 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/11/khu-du-lich-tuan-chau-quang-ninh.jpg')
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
            new Dish('Sá Sùng 2', 'https://tapchimuasam.vn/wp-content/uploads/2019/09/2.jpg'),
            new Dish('Bún Bề Bề 2', 'https://cdn.24h.com.vn/upload/3-2018/images/2018-08-21/1534870743-335-thoi-tiet-nay-ma-an-bun-be-be-suon-chua-thi-dung-la-so-mot-31239344_975017625990170_6265187907003219968_n-1534870385-width960height921.jpg'),
            new Dish('Cà Sáy Tiên Yên 2', 'https://wiki-travel.com.vn/Uploads/Picture/thanhhuong-175720015747-oc-xao.jpg'),
            new Dish('Chả Mực Bánh Cuốn 2', 'https://image.thanhnien.vn/1080/uploaded/2014/saigonamthuc.thanhnien.com.vn/pictures201404/tan_nhan/banhcuonchamuc_400.jpg')
        ];
        this.dishes = dishData;
        for (let i = 0; i < this.dishes.length / 4; ++i) {
            this.dishesFormat.push(this.dishes.slice(i * 4, i * 4 + 4));
        }
    }
}