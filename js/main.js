$('#about-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText: [
        "<i class=\"fas fa-chevron-left\"></i>",
        "<i class=\"fas fa-chevron-right\"></i>"
    ],
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
}),

$('#review-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})