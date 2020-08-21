/* eslint-disable @typescript-eslint/no-empty-function */
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class SearchComponent extends Vue {
    //-----Prop-----//
    @Prop({ default: 'normal' }) typePage!: string;

    nameHotel: string = '';
    checkInDate: string = '';
    checkOutDate: string = '';

    get heightImg(): string {
        return this.typePage === 'home' ? '100vh' : '300px';
    } 

    onSearchHotel() {
        const searchString = this.nameHotel.trim();
        if (!!searchString) this.$router.push({ name: 'FindHotel', query: { searchString: searchString } }).then(() => {}).catch(() => {});
        else this.$router.push({ name: 'FindHotel' }).then(() => {}).catch(() => {});
    }
}