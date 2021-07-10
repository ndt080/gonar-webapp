import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger.min'

export default function initHomePageAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        defaults: {
            duration: 0.5,
            delay: 0.5,
            opacity: 0.25,
            scale: 0.7,
            y: 30
        }
    });

    gsap.from('.main-nav', {duration: 1, opacity: 0, y: 30});

    tl.from('.container-header', { })
        // .from('.container-news', {
        //     scrollTrigger: {
        //         trigger: ".container-news",
        //         start: "center bottom",
        //         end: "center 90%",
        //         scrub: true,
        //     },
        //     duration: 1,
        //     x: -200
        // })
        .from('.container-news', {
            scrollTrigger: {
                trigger: ".container-news",
                start: "center bottom",
                end: "center 75%",
                scrub: true,
            },
            y: 0,
            scale: 1,

            duration: 4,
            opacity: 0.7,

            x: -400
        })
        // .staggerFrom('.card-news', 1, {
        //     scrollTrigger: {
        //         trigger: ".container-news",
        //         start: "center bottom",
        //         end: "center center",
        //         scrub: true,
        //     },
        //     // duration: 1.25,
        //     opacity: 1,
        //     scale: 1,
        //     x: -200
        // }, 3)
        .from('.container-coach', {
            scrollTrigger: {
                trigger: ".container-coach",
                start: "center bottom",
                end: "center center",
                scrub: true,
            },
            duration: 1,
        })
        .from('.container-lightbox', {
            scrollTrigger: {
                trigger: '.container-lightbox',
                start: "center bottom",
                end: "center center",
                scrub: true,
            },
            duration: 1,
        })
        .from('.container-partners', {
            scrollTrigger: {
                trigger: '.container-partners',
                start: "center bottom",
                end: "center center",
                scrub: true,
            },
            duration: 1,
        })
        .from('.container-contacts iframe', {
            scrollTrigger: {
                trigger: '.container-contacts',
                start: "center bottom",
                end: "center center",
                scrub: true,
            },
            duration: 1,
            y: -150,
            scale: 0.3,
            x: -150,
        })
        .from('.container-contacts .contacts', {
            scrollTrigger: {
                trigger: '.container-contacts',
                start: "center bottom",
                end: "center center",
                scrub: true,
            },
            duration: 1.5,
            y: -150,
            scale: 0.3,
            x: 150
        })
}
