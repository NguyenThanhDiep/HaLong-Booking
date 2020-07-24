import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class SearchComponent extends Vue {
    //-----Prop-----//
    @Prop({ default: 800 }) heightImg!: number;

    nameHotel: string = '';
    checkInDate: string = '';
    checkOutDate: string = '';

    onSearchHotel() {
        //console.log('>>>search: ', this.nameHotel, this.checkInDate, this.checkOutDate);
        this.$router.push('Hotel');
    }
}