AOS.init({ disable: 'mobile' });

var navbarOpen = false;
var exp = {
    html: 2019,
    css: 2019,
    js: 2020,
    php: 2021
};

var typed = new Typed('#typed', {
    strings: ['Naadir Al Ari', 'Naadir Al Atilla'],
    backSpeed: 55,
    typeSpeed: 55,
    backDelay: 25
});

var date = new Date();
var currentYear = date.getFullYear();
$('#html-exp').html(`${currentYear - exp.html} > years`);
$('#css-exp').html(`${currentYear - exp.css} > years`);
$('#js-exp').html(`${currentYear - exp.js} years`);
$('#php-exp').html(`${currentYear - exp.php} > years`);
$('.copyright').html(`© ${currentYear} NavdPlay. All Rights Reserved`);

$('.projects').click(function() {
    var rep = $(this).attr('data-value');
    window.open('https://navdplay.github.io/' + rep + '/');
});

var headHeight = $('.header-container').height();
var dropLinkHeight = $('.dropdown-links').height();
var dropHeight = ((dropLinkHeight + 35) * 3);

$('.dropdown-container').css({
    'height': dropHeight + 'px',
    'top': '-' + dropHeight + 'px'
});

function mobileNavbar(x) {
    if (navbarOpen) {
        x.classList.remove('fa-times');
        x.classList.add('fa-bars');
        $('.dropdown-container').css({
            'top': '-' + dropHeight + 'px'
        });
         navbarOpen = false;
    } else {
        x.classList.remove('fa-bars');
        x.classList.add('fa-times');
        $('.dropdown-container').css({
            'top': '40px'
        });
        navbarOpen = true;
    }
}

function linkClick() {
    document.getElementById('menu-icon').classList.remove('fa-times');
    document.getElementById('menu-icon').classList.add('fa-bars');
    $('.dropdown-container').css({
        'top': '-' + dropHeight + 'px'
    }); 
}

function refreshPage() {
    location.replace('index.html');
}

function githubRedir() {
    window.open('https://github.com/NavdPlay/');
}

function instagramRedir() {
    window.open('https://instagram.com/NavdPlay/');
}

function tiktokRedir() {
    window.open('https://tiktok.com/@navdplay/');
}

function discordRedir() {
    window.open('https://discordapp.com/users/730376000470384681/');
}
