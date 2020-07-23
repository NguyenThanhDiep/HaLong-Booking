import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class SearchComponent extends Vue {
    //-----Prop-----//
    nameHotel: string = '';
    checkInDate: string = '';
    checkOutDate: string = '';

    onSearchHotel() {
        //console.log('>>>search: ', this.nameHotel, this.checkInDate, this.checkOutDate);
        this.$router.push('Hotel');
    }
}