export default class Hotel {
    name: string = '';
    srcImg: string = '';
    price: number = 0;
    star: number = 0;
    address: string = '';
    freeServices: Array<{ code: string; name: string}> = [];
    services: Array<{ code: string; name: string }> = [];
    isSale: boolean = false;
    isShowAll: boolean = false;
    
    constructor(name: string, scrImg: string, price: number, star: number = 0,
        address: string = '', freeServices: Array<{ code: string; name: string }> = [],
        services: Array<{ code: string; name: string }> = [], isSale = false) {
        this.name = name;
        this.srcImg = scrImg;
        this.price = price;
        this.star = star;
        this.address = address;
        this.freeServices = freeServices;
        this.services = services;
        this.isSale = isSale;
    }

    get totalServises(): number {
        return this.freeServices.length + this.services.length;
    }
}

export const StarHotel = [1, 2, 3, 4, 5]

export const FreeService = {
    FreeAnSang: { code: 'FreeAnSang', name: 'Bữa sáng miễn phí' },
    Free3Bua: { code: 'Free3Bua', name: '3 bữa ăn miễn phí' },
    ThemGiuongPhu: { code: 'ThemGiuongPhu', name: 'Thêm giường phụ' }
}

export const ServiceHotel = {
    HoBoi: { code: 'HoBoi', name: 'Hồ bơi' },
    Massage: { code: 'Massage', name: 'Massage/Spa'},
    Wifi: { code: 'Wifi', name: 'Wifi miễn phí' },
    BaiDoXe: { code: 'BaiDoXe', name: 'Bãi đỗ xe' },
    ThueXeMay: { code: 'ThueXeMay', name: 'Cho thuê xe máy' },
    DuaDonSanBay: { code: 'DuaDonSanBay', name: 'Đưa đón sân bay' },
    PhongGym: { code: 'PhongGym', name: 'Phòng Gym' },
    DoAnTaiPhong: { code: 'DoAnTaiPhong', name: 'Phục vụ đồ ăn tại phòng' },
    NhaHang: { code: 'NhaHang', name: 'Nhà hàng' },
    GiatLa: { code: 'GiatLa', name: 'Giặt là' },
    ChapNhanThuCung: { code: 'ChapNhanThuCung', name: 'Chấp nhận thú cưng' },
    HoTroDatTour: { code: 'HoTroDatTour', name: 'Hỗ trợ đặt tour' },
    LeTan24: { code: 'LeTan24', name: 'Lê tân 24/24' },
    ThangMay: { code: 'ThangMay', name: 'Thang máy' },
    MayATM: { code: 'MayATM', name: 'Máy ATM trong khách sạn' }
}

export const HotelMockData = [
    new Hotel('Novotel Hạ Long', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 1300000, 1,
        '160 Đường Hạ Long, Bãi Cháy, Hạ Long',
        [FreeService.FreeAnSang],
        [ServiceHotel.BaiDoXe, ServiceHotel.ChapNhanThuCung, ServiceHotel.DoAnTaiPhong, ServiceHotel.HoBoi, ServiceHotel.MayATM],
        true
    ),
    new Hotel('Central Luxury Hạ Long', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 1700000, 1,
        '160 Đường Hạ Long, Bãi Cháy, Hạ Long',
        [FreeService.Free3Bua],
        [ServiceHotel.BaiDoXe, ServiceHotel.ChapNhanThuCung, ServiceHotel.DoAnTaiPhong, ServiceHotel.HoBoi, ServiceHotel.MayATM]
    ),
    new Hotel('StarCity Hạ Long Bay', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 2300000, 2,
        '160 Đường Hạ Long, Bãi Cháy, Hạ Long',
        [FreeService.ThemGiuongPhu],
        [ServiceHotel.BaiDoXe, ServiceHotel.ChapNhanThuCung, ServiceHotel.DoAnTaiPhong, ServiceHotel.HoBoi, ServiceHotel.MayATM]
    ),
    new Hotel('Sài Gòn Hạ Long', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 2500000, 2,
        '160 Đường Hạ Long, Bãi Cháy, Hạ Long',
        [FreeService.Free3Bua, FreeService.FreeAnSang],
        [ServiceHotel.HoBoi, ServiceHotel.Massage, ServiceHotel.ThangMay, ServiceHotel.PhongGym, ServiceHotel.GiatLa],
        true
    ),
    new Hotel('Grand Hạ Long', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 3100000, 3,
        '160 Đường Hạ Long, Bãi Cháy, Hạ Long',
        [FreeService.ThemGiuongPhu, FreeService.FreeAnSang],
        [ServiceHotel.Wifi, ServiceHotel.ThueXeMay, ServiceHotel.LeTan24, ServiceHotel.ChapNhanThuCung, ServiceHotel.MayATM]),
    new Hotel('Paradise Suites Hạ Long', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 3800000, 3,
        '160 Đường Hạ Long, Bãi Cháy, Hạ Long',
        [FreeService.Free3Bua],
        [ServiceHotel.NhaHang, ServiceHotel.DuaDonSanBay, ServiceHotel.BaiDoXe, ServiceHotel.HoTroDatTour, ServiceHotel.DoAnTaiPhong]
    ),
    new Hotel('Mường Thanh Luxury Quảng Ninh', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 4200000, 4,
        '160 Đường Hạ Long, Bãi Cháy, Hạ Long',
        [FreeService.FreeAnSang],
        [ServiceHotel.PhongGym, ServiceHotel.ChapNhanThuCung, ServiceHotel.LeTan24, ServiceHotel.BaiDoXe, ServiceHotel.ThangMay]
    ),
    new Hotel('Royal Lotus Hạ Long', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 4500000, 4,
        '160 Đường Hạ Long, Bãi Cháy, Hạ Long',
        [FreeService.ThemGiuongPhu],
        [ServiceHotel.ChapNhanThuCung, ServiceHotel.ThueXeMay, ServiceHotel.GiatLa, ServiceHotel.HoBoi, ServiceHotel.Massage],
        true
    ),
    new Hotel('FiveStar Hạ Long', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 4900000, 5,
        '160 Đường Hạ Long, Bãi Cháy, Hạ Long',
        [FreeService.Free3Bua],
        [ServiceHotel.BaiDoXe, ServiceHotel.ThueXeMay, ServiceHotel.HoTroDatTour, ServiceHotel.LeTan24, ServiceHotel.DuaDonSanBay]
    ),
    new Hotel('Royal Hạ Long', 'https://q-cf.bstatic.com/images/hotel/max1280x900/688/68867405.jpg', 5000000, 5,
        '160 Đường Hạ Long, Bãi Cháy, Hạ Long',
        [FreeService.FreeAnSang],
        [ServiceHotel.DuaDonSanBay, ServiceHotel.HoTroDatTour, ServiceHotel.DoAnTaiPhong, ServiceHotel.HoBoi, ServiceHotel.MayATM]
    )

]

export class FilterCriteria {
    price: Array<number> = [];
    onlyIsSale: boolean = false;
    star: Array<number> = [];
    freeService: Array<string> = [];
    service: Array<string> = [];
}
