// smooth scroll to href
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function () {
    // Call to action read more animation
    var isExpanded = false;
    $('#cta-button').on('click', function () {
        if (!isExpanded) {
            $('.callToAction').animate({ height: '950px' }, 600);
            $('.cta-container').animate({ height: '700px' }, 600);

            setTimeout(function () {
                $('.cta-left-readMore').fadeIn(600);
                $('.cta-left-readMore').css('display', 'flex');
            }, 500);

            $(this).text('Read less');
            isExpanded = true;
        } else {
            $('.callToAction').animate({ height: '600px' }, 600);
            $('.cta-container').animate({ height: '350px' }, 600);

            setTimeout(function () {
                $('.cta-left-readMore').css('display', 'none');
            });

            $(this).text('Read more');
            isExpanded = false;
        }
    });
});
