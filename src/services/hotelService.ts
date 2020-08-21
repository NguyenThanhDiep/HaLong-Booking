import HttpService from './httpService';
import environment from '@/environment/environment.dev';

export default class HotelService {
    httpService: HttpService = new HttpService(environment.ApiHotel.BaseUrl);

    public async getAllHotels() {
        return this.httpService.get<Array<any>>(environment.ApiHotel.GetAllHotels);
    }

    public async getHotelsByName(searchString: string) {
        return this.httpService.get<Array<any>>(environment.ApiHotel.GetHotelsByName.replace('{searchString}', searchString));
    }

    public async getHotelById(hotelId: string) {
        return this.httpService.get<any>(environment.ApiHotel.GetHotelById.replace('{hotelId}', hotelId));
    }

    public async getRoomById(roomId: string) {
        return this.httpService.get<any>(environment.ApiHotel.GetRoomById.replace('{roomId}', roomId));
    }
}