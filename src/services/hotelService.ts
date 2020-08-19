import HttpService from './httpService';
import environment from '@/environment/environment.dev';

export default class HotelService {
    httpService: HttpService = new HttpService(environment.ApiHotel.BaseUrl);

    public async getAllHotels() {
        return this.httpService.get<Array<any>>(environment.ApiHotel.GetAllHotels);
    }

    public async getHotelById(hotelId: string) {
        return this.httpService.get<any>(environment.ApiHotel.GetHotelById.replace('{hotelId}', hotelId));
    }
}