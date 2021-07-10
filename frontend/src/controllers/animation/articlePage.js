import {gsap} from 'gsap';

export default function initArticlePageAnimation() {
    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            y: 30
        }
    });
    gsap.from('.main-nav', {duration: 1, opacity: 0, y: 30});
    tl.from('.article-header', { })
        .from('.article-body', {
            delay: 0
        })

}


