import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export default class HttpService {
    baseUrl: string = "";

    constructor(baseurl: string) {
        this.baseUrl = baseurl;
    }

    private config: AxiosRequestConfig = {
        timeout: 10000,
        responseType: 'json',
        baseURL: this.baseUrl,
        auth: {
            username: 'DiepNguyen',
            password: 'realmadrid1995'
        }
    }

    private handleError = (error: AxiosError) => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        else {
            console.log(error.message);
        }
    }

    public async get<R>(route: string): Promise<R> {
        let response: AxiosResponse = {} as AxiosResponse;
        await axios.get(this.baseUrl + route, this.config)
            .then(r => response = r)
            .catch(this.handleError);
        return response.data;
    }

    public async post<T>(route: string, item: T): Promise<any> {
        let response: AxiosResponse = {} as AxiosResponse;
        await axios.post(this.baseUrl + route, item, this.config)
            .then(r => response = r)
            .catch(this.handleError);
        return response.data;
    }

    public async put<T>(route: string, item: T): Promise<any> {
        let response: AxiosResponse = {} as AxiosResponse;
        await axios.put(this.baseUrl + route, item, this.config)
            .then(r => response = r)
            .catch(this.handleError);
        return response.data;
    }

    public async delete<R>(route: string): Promise<R> {
        let response: AxiosResponse = {} as AxiosResponse;
        await axios.delete(this.baseUrl + route, this.config)
            .then(r => response = r)
            .catch(this.handleError);
        return response.data;
    }
}