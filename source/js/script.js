//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ВАЖНО !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// slidesPerView: 2,
// slidesPerGroup: 2,
// centeredSlides: true,
// initialSlide: 2,



// const video = document.querySelector('.preview__video');
// video.playbackRate = 2;

// const previewSwiper = new Swiper('.preview__swiper', {
//     loop: false,
//     speed: 1800,


//     keyboard: {
//         enabled: true,
//         onlyInViewport: true,
//         pageUpDown: true,
//     },

//     mousewheel: {
//         sensitivity: 1.8,
//         eventsTarget: '.swiper',
//     },

//     // autoplay: {
//     //     delay: 1800,
//     //     stopOnLastSlide: true,
//     //     disableOnInteraction: true,
//     //    },

//     simulateTouch: false,
//     // grabCursor: true,

//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//         },

//         1024: {
//             slidesPerView: 3,
//         },
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     //     centeredSlides: true,
//     // slideToClickedSlide: false,
// })


























































/*let particles = document.querySelectorAll('.particles'),
		radius = 3.35,
		number = 100

particles.forEach(node => {

	let color = node.dataset.color

	const ctx = node.getContext('2d'),
				clr = hexToRgbA(color),
				width = window.innerWidth,
				height = window.innerHeight

	node.width = width
	node.height = height
	ctx.fillStyle = clr

	let dots = {
		num: number,
		distance: 200,
		d_radius: 200,
		velocity: -.9,
		array: []
	}

	function Dot() {
		this.x = Math.random() * width
		this.y = Math.random() * height
		this.vx = dots.velocity + Math.random()
		this.vy = dots.velocity + Math.random()
		this.radius = Math.random() * radius
	}

	Dot.prototype = {

		create: function () {
			ctx.beginPath()
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
			ctx.fill()
		},

		animate: function () {
			for (let i = 0; i < dots.num; i++) {
				let dot = dots.array[i]
				if (dot.x < 0 || dot.x > width) {
					dot.vx = - dot.vx
					dot.vy = dot.vy
				} else if (dot.y < 0 || dot.y > height) {
					dot.vx = dot.vx
					dot.vy = - dot.vy
				}
				dot.x += dot.vx
				dot.y += dot.vy
			}
		}
	}

	function createDots() {
		ctx.clearRect(0, 0, width, height)
		for (let i = 0; i < dots.num; i++) {
			dots.array.push(new Dot())
			let dot = dots.array[i]
			dot.create()
		}
		Dot.prototype.animate()
	}

	setInterval(createDots, 1000 / 30)

})

function hexToRgbA(hex) {
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		let c = hex.substring(1).split('')
		if (c.length == 3) { c = [c[0], c[0], c[1], c[1], c[2], c[2]] }
		c = `0x${c.join('')}`
		return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')}, 1`
	} throw new Error('Bad Hex')
}



const previewSwiper = new Swiper('.preview__swiper', {
    loop: true,
    spaceBetween: 30,


    speed: 1800,





    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        1024: {
            slidesPerView: 1,
        },
    },
    direction: 'vertical',
    // freeMode: true,

    //parallax: true,

    // simulateTouch: true,
    // touchRatio: 2
    // grabCursor: true,
    // autoplay: {
    //     delay: 1000,
    //     stopOnLastSlide: true,
    //     disableOnInteraction: false,
    // },
    // hashNavigation: {
    //     watchState: true
    //   },
    // keyboard: {
    //     enabled: true,
    //     onlyInViewport: true,
    //     pageUpDown: true,
    //   },
    mousewheel: {
        sensitivity: 1.8,
        eventsTarget: '.preview__swiper',
    },
//     effect: 'fade',
//  fadeEffect: {
//     crossFade : false,
//   },
// effect: 'flip',
//  flipEffect: {
//     slideShadows: true,
//     limitRotation: true
//   },
// effect: 'cube',
// cubeEffect: {
//  slidesShadows: true,
//  shadow: true,
//  shadowOffset: 30,
//  shadowScale: 1,
// },
// effect: 'coverflow',
// coverflowEffect: {
//  rotate: 20,
//  stretch: 50,
//  slideShadows: true,
// },
})*/














































function bindSwipers(...swiperList) {
    for (const swiper of swiperList) {
        swiper.setTranslate = function (translate, byController, doNotPropagate) {
            if (doNotPropagate) {
                Swiper.prototype.setTranslate.apply(this, arguments)
            } else {
                for (const swiper of swiperList) {
                    swiper.setTranslate(translate, byController, true)
                }
            }
        }
        swiper.setTransition = function (duration, byController, doNotPropagate) {
            if (doNotPropagate) {
                Swiper.prototype.setTransition.apply(this, arguments)
            } else {
                for (const swiper of swiperList) {
                    swiper.setTransition(duration, byController, true)
                }
            }
        }
    }
}

const portfolioFirstSwiper = new Swiper('.portfolio__swipers-first-swiper', {
    freeMode: true,
    centeredSlides: true,
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 1.75,
    spaceBetween: 30,
})

const portfolioSecondSwiper = new Swiper('.portfolio__swipers-second-swiper', {
    freeMode: true,
    centeredSlides: true,
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 1.75,
    spaceBetween: 30,
})

const portfolioThirdSwiper = new Swiper('.portfolio__swipers-third-swiper', {
    freeMode: true,
    centeredSlides: true,
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 1.75,
    spaceBetween: 30,
})

const portfolioFourthSwiper = new Swiper('.portfolio__swipers-fourth-swiper', {
    freeMode: true,
    centeredSlides: true,
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 1.75,
    spaceBetween: 30,
})

bindSwipers(portfolioFirstSwiper, portfolioSecondSwiper, portfolioThirdSwiper, portfolioFourthSwiper);

const previewSwiper = new Swiper('.preview__swiper', {
    loop: false,

    speed: 1800,
    centeredSlides: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1.8,
        eventsTarget: '.swiper',
    },

    // autoplay: {
    //     delay: 1800,
    //     stopOnLastSlide: true,
    //     disableOnInteraction: true,
    //    },

    simulateTouch: false,
    grapCursor: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        1024: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})