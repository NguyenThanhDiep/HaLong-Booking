import Vue from 'vue';
import Component from 'vue-class-component';
import SearchComponent from '@/components/Shared/Search/search.component.vue';

@Component({
    components: { SearchComponent }
})
export default class TravelExperienceComponent extends Vue {

    mounted() {
        this.scrollToTop();
        const crollToTopBtn = document.getElementById("scrollTopBtn") as HTMLButtonElement;
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                crollToTopBtn.style.display = "block";
            } else {
                crollToTopBtn.style.display = "none";
            }
        };
    }

    scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}