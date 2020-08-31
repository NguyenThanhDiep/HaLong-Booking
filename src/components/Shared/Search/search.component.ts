/* eslint-disable @typescript-eslint/no-empty-function */
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import moment from 'moment';

@Component({})
export default class SearchComponent extends Vue {
    //-----Prop-----//
    @Prop({ default: 'normal' }) typePage!: string;

    nameHotel: string = '';
    checkInDate: Date | null = null
    checkOutDate: Date | null = null;

    get heightImg(): string {
        return this.typePage === 'home' ? '100vh' : '300px';
    } 

    onSearchHotel() {
        const searchString = this.nameHotel.trim();
        if (!!searchString || !!this.checkInDate || !!this.checkOutDate)
            this.$router.push({ name: 'FindHotel', query: { searchString: searchString, checkInDate: moment(this.checkInDate).format('D/M/YYYY'), checkOutDate: moment(this.checkOutDate).format('D/M/YYYY') } })
                .then(() => { }).catch(() => { });
        else this.$router.push({ name: 'FindHotel' }).then(() => { }).catch(() => { });
    }

    get validateCheckInDate(): boolean | null {
        if (!!this.checkInDate) {
            return moment(this.checkInDate).isSameOrAfter(moment());
        }
        return null;
    }

    get validateCheckOutDate(): boolean | null {
        if (!!this.checkInDate && !!this.checkOutDate) {
            return moment(this.checkOutDate).isSameOrAfter(this.checkInDate);
        }
        if (!!this.checkOutDate) {
            return moment(this.checkOutDate).isSameOrAfter(moment());
        }
        return null;
    }

    get isDisableSearchButton(): boolean {
        return this.validateCheckInDate === false || this.validateCheckOutDate === false;
    }

    get wrongCheckInDateInfo(): string {
        if (!!this.checkInDate && !moment(this.checkInDate).isSameOrAfter(moment())) return 'Ngày nhận phòng phải bằng hoặc sau ngày hôm nay';
        return '';
    }

    get wrongCheckOutDateInfo(): string {
        if (!!this.checkInDate && !!this.checkOutDate && !moment(this.checkOutDate).isSameOrAfter(this.checkInDate)) return 'Ngày trả phòng phải sau ngày nhận phòng';
        if (!!this.checkOutDate && !moment(this.checkOutDate).isSameOrAfter(moment())) return 'Ngày trả phòng phải sau ngày hôm nay';
        return '';
    }
}