import {gsap} from 'gsap';

export default function initPageAnimation() {
    const tl = gsap.timeline({
        defaults: {
            duration: 0.5,
            delay: 0.5,
            opacity: 0,
            y: 30
        }
    });
    gsap.from('.main-nav', {duration: 1, opacity: 0, y: 30});
    tl.from('.header', {})
        .from('.container .body.content', {
            delay: 0
        })

}
