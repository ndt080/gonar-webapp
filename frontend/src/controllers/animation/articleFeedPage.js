import {gsap} from 'gsap';

export default function initArticleFeedPageAnimation() {
    gsap.from('.main-nav', {duration: 1, opacity: 0, y: 30});

}
