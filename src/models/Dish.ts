export default class Dish {
    name: string = '';
    srcImg: string = '';

    constructor(name: string, srcImg: string) {
        this.name = name;
        this.srcImg = srcImg;
    }
}