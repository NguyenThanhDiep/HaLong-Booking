/* eslint-disable */
export default class Hotel {
    name: string = '';
    srcImg: string = '';
    price: number = 0;

    constructor(name: string, scrImg: string, price: number) {
        this.name = name;
        this.srcImg = scrImg;
        this.price = price;
    }
}