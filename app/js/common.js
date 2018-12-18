$(function() {

    // User dropdown open
    $('.user__open').click(
        function(){
            $('.dropdown').css('display','block');
            $('.user__open').css('display','none');
            $('.user__close').css('display','block');
        }
    );

    // User dropdown close
    $('.user__close').click(
        function(){
            $('.dropdown').css('display','none');
            $('.user__open').css('display','block');
            $('.user__close').css('display','none');
        }
    );

    // Show/hide right chat
    $('.chat__close').click(
        function(){
            $(this).toggleClass('chat__open');
            $('.chat').toggleClass('chat--close');
            $('.main__center').toggleClass('main__center--close');
            $('.main').toggleClass('main--hidden');
            if ( $(window).width() < 1024 ) {  
                $('.chat-form').toggleClass('chat-form--fixed');
                $('.header__center, .user--mobile').toggle(false);
                $('.menu-close').toggle(false);
                $('.menu-open').toggle(true);
            }
        }
    );


    function checkWindowSize() {  

        if ( $(window).width() < 1024) {  
            $('.chat__close').addClass('chat__open');
            $('.chat').addClass('chat--close');
            $('.main__center').addClass('main__center--close');
            $('.chat-form').removeClass('chat-form--fixed');
        }  
        else {
            $('.chat__close').removeClass('chat__open');
            $('.chat').removeClass('chat--close');
            $('.main__center').removeClass('main__center--close');
        }
        
    }  

    $(document).ready(function() {
        $(window).resize(checkWindowSize); 
    });

    $(window).on('load', function() {
        if ( $(window).width() < 1024 ) {  
            $('.chat__close').addClass('chat__open');
            $('.chat').addClass('chat--close');
            $('.main__center').addClass('main__center--close');
            $('.main').addClass('main--hidden');
            $('.chat-form').removeClass('chat-form--fixed');
        }  
    });
    
    // Custom scroll for chat
    $(".chat__body-wrap").nanoScroller({ alwaysVisible: true });

    // Custom scroll central block
    $(".main__center--king-wrap").nanoScroller({ alwaysVisible: true });

    // Slider for game block on king page
    $('.game__participants').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        responsive: [   
            {
                breakpoint: 1640,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 1400,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false
                }
            }
        ]
    });

    // Timers function 
    function timer(timer){
        var timerTime = timer.text(), 
        int;

        int = setInterval(function() {
            if (timerTime > 0) {
                timerTime--;
                if (timerTime < "10") {
                    timerTime = "0" + timerTime;
                }
            return timer.text(timerTime);
            } else {
            clearInterval(int);
            }
        }, 1000);
    };

    // Timers function ащк сщшт 
    function timerFast(timer){
        var timerTime = timer.text(), 
        int;

        int = setInterval(function() {
            if (timerTime > 0) {
                timerTime--;
            return timer.text(timerTime);
            } else {
            clearInterval(int);
            }
        }, 1);
    };

    // Timers function ащк сщшт 
    function timerUp(timer, timerParent){
        var timerTime = timer.text();
        var timerParent = timerParent.text(),  
        int;

        int = setInterval(function() {
            if (timerTime < timerParent) {
                timerTime++;
            return timer.text(timerTime);
            } else {
            clearInterval(int);
            }
        }, 1);
    };

    // Start timers in game block on king page
    timer($('.game__time-counter'));
    timer($('.game__time-counter2'));

        
    // Base modal for all page
    $("#inputModal, #outputModal, #betModal, #betModalCoin, #betModalCoin2").iziModal({
        radius: 6,
        top: 50,
        bodyOverflow: true,
        overlayColor: 'rgba(254,254,254, .9)'
    });

   
    // Function for change value in input plus/minus in modal create bet
    $(function(){
        var amountArray = ['#coins', '#coins2', '#coins3', '#coins-result', '#coins-result2', '#coins-result3'];
        amountArray.forEach(function(item, i, arr) {
            var $amountBlock = $(item),
            $amountText = $amountBlock.find('input[type="text"]'),
            $amountUpButton = $amountBlock.find('.bet__form-up'),
            $amountDownButton = $amountBlock.find('.bet__form-down');
        
            $amountUpButton.on('click', function(){
                var $amount = $amountText.val();
                $amountText.val(++$amount); 
                if ($amountDownButton.hasClass('disabled')) {
                    $amountDownButton.removeClass('disabled');
                }
            });
    
            $amountDownButton.on('click', function(){
                var $amount = $amountText.val();
                $amountText.val(--$amount); 
                if ($amount < 1000) {
                    $amountDownButton.addClass('disabled');
                }
            });
        });
        
    });

    // Open social menu for adaptive 
    $('.social-menu__open').click(
        function(){
            $('.social-menu').css('display','flex');
            $('.social-menu__open').css('display','none');
            $('.social-menu__close').css('display','inline-block');
        }
    );

    // Close social menu for adaptive 
    $('.social-menu__close').click(
        function(){
            $('.social-menu__wrap--adaptive .social-menu').css('display','none');
            $('.social-menu__close').css('display','none');
            $('.social-menu__open').css('display','inline-block');
        }
    );

    // Modal
    $("#createGame, #waitPlayer, #waitPlayer2, #waitPlayer3, #waitPlayer4, #waitPlayer5, #waitPlayer6, #waitPlayer7, #waitPlayer8").iziModal({
        width: 700,
        radius: 6,
        top: 50,
        bodyOverflow: true,
        overlayColor: 'rgba(254,254,254, .9)'
    });
    
    // Start timer function after opened modal
    $(document).on('opened', '#createGame', function (e) {
        timer($('#coinModalTimer'));
    });

    // Start timer function after opened modal
    $(document).on('opened', '#waitPlayer', function (e) {
        timer($('#coinModalTimer2'));
    });

    // Start timer function after opened modal
    $(document).on('opened', '#waitPlayer2', function (e) {
        timer($('#coinModalTimer3'));
    });

    // Start timer function after opened modal
    $(document).on('opened', '#waitPlayer3', function (e) {
        timer($('#coinModalTimer4'));
    });

    // Start timer function after opened modal
    $(document).on('opened', '#waitPlayer5', function (e) {
        timerFast($('#coinModalMiniTimer2'));
        timerUp($('#coinModalMiniTimer1'),$('#coinModalMiniTimer2'));
    });

    // Start timer function after opened modal
    $(document).on('opened', '#waitPlayer6', function (e) {
        timer($('#coinModalTimer5'));
    });

    // Start timer function after opened modal
    $(document).on('opened', '#waitPlayer7', function (e) {
        timer($('#coinModalTimer6'));
    });

    // Start timer function after opened modal
    $(document).on('opened', '#waitPlayer8', function (e) {
        timer($('#coinModalTimer7'));
    });

    // Slider jackpot page
    $('.winners__slider').slick({
        slidesToShow: 7,
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [   
            {
                breakpoint: 1400,
                settings: {
                slidesToShow: 6
                }
            },
            {
                breakpoint: 1280,
                settings: {
                slidesToShow: 5
                }
            },
            {
                breakpoint: 1120,
                settings: {
                slidesToShow: 4
                }
            }, 
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 370,
                settings: {
                slidesToShow: 2,
                arrows: false
                }
            }
        ]
    });

    // Slider jackpot page
    $('.choose-winner__slider').slick({
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
    });

    // Slider in modal roulette
    $('.wait-palyer__roulette-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        onInit: function() {
            $(".wait-palyer__roulette-slider").slick("setPosition")
        },
        responsive: [   
            {
                breakpoint: 1024,
                settings: {
                centerMode: true
                }
            }
        ]
    });

    // Slider bonus page
    $('.bonus__slider').slick({
        variableWidth: true,
        infinite: true,
        slidesToScroll: 1,
        arrows: false
    });
  
    // Custom scroll central block
    $(".jackpot-history__wrapper").nanoScroller({ alwaysVisible: true });

    // Accordion help page
    $(document).ready(function() {

        $(".answer__top").on("click", function() {
            if ($(this).parents(".answer").hasClass('answer--active')) {
                $(this).parents(".answer").removeClass("answer--active");
                $(this).children('.answer__arrow').removeClass("answer__arrow--active");
                $(this).siblings('.answer__body').slideUp(500);
            } else {
                $('.answer').removeClass("answer--active");
                $('.answer__arrow').removeClass("answer__arrow--active");
                $(this).parents(".answer").addClass("answer--active");
                $(this).children('.answer__arrow').addClass("answer__arrow--active");
                $('.answer__body').slideUp(500);
                $(this).siblings('.answer__body').slideDown(500);
            }
        });
    });

    // Bonus timer
    var bonusTimer = document.getElementById('bonus-timer');

    if (bonusTimer) {
        var countDownDate = new Date("Dec 25, 2018 17:10:25").getTime();

        var x = setInterval(function() {

            var now = new Date().getTime();
            
            var distance = countDownDate - now;
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("bonus-timer").innerHTML = hours + " <span>ч</span> " + minutes + " <span>мин</span> "
            + seconds + " <span>сек</span>";

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("bonus-timer").innerHTML = "END";
            }
        }, 1000);
    }

    // Custom scroll profile page
    $(".history__body").nanoScroller({ alwaysVisible: true });

    // Tabs profile page
    $('.history__links').on('click', 'li:not(.history__link--active)', function() {
    $(this)
        .addClass('history__link--active').siblings().removeClass('history__link--active')
        .closest('div.history').find('div.history__body').removeClass('history__body--active').eq($(this).index()).addClass('history__body--active');
    $('.history__body')[0].nanoscroller.reset();
    $('.history__body')[1].nanoscroller.reset();
    });

    // Other modal
    $("#outputRules, #referralInfo, #referralTable").iziModal({
        width: 600,
        radius: 6,
        top: 50,
        bodyOverflow: true,
        overlayColor: 'rgba(254,254,254, .9)'
    });

    // Show notify block after click on hash link and copy content
    $("#showNotify").on("click", function() {
        window.createNotification({
            closeOnClick: true,
            positionClass: 'nfc-top-right',
            showDuration: 2000,
            theme: 'success'
        })({
            title: 'Ссылку скопировано'
        });

        var copyText = $('#showNotifyInput');
        console.log(copyText);
        copyText.select();
        document.execCommand("copy");
    
    });
    

    // Other modal
    $("#helpModal, #chatRules").iziModal({
        radius: 6,
        top: 50,
        bodyOverflow: true,
        overlayColor: 'rgba(254,254,254, .9)'
    });

    // Custom scroll in modal
    $(".modal-help").nanoScroller({ alwaysVisible: true });
    $(".modal-chat").nanoScroller({ alwaysVisible: true });

    // Reset custom scroll after open modal
    $(document).on('opened', '#helpModal', function (e) {
        $('.modal-help')[0].nanoscroller.reset();
    });

    // Reset custom scroll after open modal
    $(document).on('opened', '#chatRules', function (e) {
        $('.modal-chat')[0].nanoscroller.reset();
    });

    // Jackpot timer
    var jackpotTimer = document.getElementById('jackpotTimer');

    if (jackpotTimer) {
        var countDownDate = new Date("Dec 25, 2018 18:52:25").getTime();

        var x = setInterval(function() {
    
            var now = new Date().getTime();
            e
            var distance = countDownDate - now;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            var thousandSeconds = Math.floor((distance % 1000) / 10);

            if (thousandSeconds < "10") {
                thousandSeconds = "0" + thousandSeconds;
            }
            if (seconds < "10") {
                seconds = "0" + seconds;
            }
           
            document.getElementById("jackpotTimer").innerHTML = minutes + ":" + seconds + "<span>." + thousandSeconds + "</span>";
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("jackpotTimer").innerHTML = "00";
            }
        }, 10);
    }
    
    // Fixed field in chat sidebar form mobile
    var chatHeight = 84;    
    $(document).ready(function() {
        $(window).scroll(function () {
        if ($(this).scrollTop() > chatHeight && $(window).width() > 1024 ){
            $('.chat').addClass(' chat--fixed');
            $(".chat__body-wrap")[0].nanoscroller.reset();
        } 
        else {
            $('.chat').removeClass('chat--fixed');
            $(".chat__body-wrap")[0].nanoscroller.reset();
        }
        });
    });

    // Notification green
    $("#goodBet").on("click", function() {
        window.createNotification({
            closeOnClick: true,
            positionClass: 'nfc-top-right',
            showDuration: 2000,
            theme: 'success'
        })({
            title: 'Ставка принята'
        });
    });

    // Notification red
    $("#bedBet").on("click", function() {
        window.createNotification({
            closeOnClick: true,
            positionClass: 'nfc-bottom-right',
            showDuration: 2000,
            theme: 'warning'
        })({
            title: 'Отказано'
        });
    });

    //Open social menu for adaptive 
    $('.menu-open').click(
        function(){
            $('.header__center, .user--mobile').css('display','flex');
            $(this).css('display','none');
            $('.menu-close').css('display','flex');
            $('.chat__close').addClass('chat__open');
            $('.chat').addClass('chat--close');
            $('.main__center').addClass('main__center--close');
            $('.main').addClass('main--hidden');
        }
    );

    // Close social menu for adaptive 
    $('.menu-close').click(
        function(){
            $('.header__center, .user--mobile').css('display','none');
            $(this).css('display','none');
            $('.menu-open').css('display','flex');
        }
    );

    // Accordion menu for adaptive
    $('.user--mobile .user__top').click(
        function(){
            $(this).toggleClass("user__top--active");
            $('.user__arrow').toggleClass('user__arrow--active');
            $('.dropdown--mobile').toggleClass('dropdown--mobile--active');
        }
    );

    // Tabs for choose room on jackpot page
    $('.rooms__wrap').on('click', 'li:not(.rooms__link--active)', function() {
    $(this)
        .addClass('rooms__link--active').siblings().removeClass('rooms__link--active')
        .closest('div.rooms').find('div.rooms__box').removeClass('rooms__box--active').eq($(this).index()).addClass('rooms__box--active');
    });

    // Open tab panelwhen user click on menu point
    $('#showHistory, #showHistoryMobile').on('click', function() {
        $('#historyBodyOne').removeClass('history__body--active');
        $('.history__link:first-child').removeClass('history__link--active');
        $('#historyBodyTwo').addClass('history__body--active');
        $('.history__link:last-child').addClass('history__link--active');
        $('.history__body')[1].nanoscroller.reset();
    });

    // Notification
    $("#promoActive").on("click", function() {
        window.createNotification({
            closeOnClick: true,
            positionClass: 'nfc-top-right',
            showDuration: 2000,
            theme: 'success'
        })({
            title: 'Промокод активирован'
        });
    });

    //Notification
    $("#promoActive").on("click", function() {
        window.createNotification({
            closeOnClick: true,
            positionClass: 'nfc-bottom-right',
            showDuration: 2000,
            theme: 'warning'
        })({
            title: 'Не найден'
        });
    });

    // Fixed cht when device height < 580px
    $(document).ready(function(){
        setInterval(function() {
            if ($(this).scrollTop() < 140 && $('.chat').hasClass('chat--close') == false && window.innerHeight < 580) {
                $('.chat-form').addClass('chat-form--fixed');
            } 
            else {
                $('.chat-form').removeClass('chat-form--fixed');
            }
        }, 1);
    });

    // Control location href
    $(document).ready(function(){
        var stringPrev = window.parent.location.href;
        var string = '#history';
        if (stringPrev.search(string) != -1) {
            $('#historyBodyOne').removeClass('history__body--active');
            $('.history__link:first-child').removeClass('history__link--active');
            $('#historyBodyTwo').addClass('history__body--active');
            $('.history__link:last-child').addClass('history__link--active');
            $('.history__body')[1].nanoscroller.reset();
        }
    });
 
});

// Show field requisites
function showField1(){
    document.getElementById('fieldRequisites').style.display ='none';
}

// Show field requisites
function showField2(){
    document.getElementById('fieldRequisites').style.display = 'flex';
}

// Show field requisites2
function show1(){
    document.getElementById('outputRequisites').style.display ='none';
}

// Show field requisites2
function show2(){
    document.getElementById('outputRequisites').style.display = 'flex';
}