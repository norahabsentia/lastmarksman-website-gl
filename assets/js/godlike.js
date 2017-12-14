/*!-----------------------------------------------------------------
  Name: Godlike - Gaming HTML Template
  Version: 2.1.0
  Author: _nK
  Website: https://nkdev.info
  Purchase: https://nkdev.info
  Support: https://nk.ticksy.com
  License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
  Copyright 2017.
  -------------------------------------------------------------------*/
  ;(function() {
    'use strict';

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*------------------------------------------------------------------

  Theme Options

  -------------------------------------------------------------------*/
  var options = {
    enableSearchAutofocus: true,
    enableActionLikeAnimation: true,
    enableShortcuts: true,
    enableFadeBetweenPages: true,
    enableMouseParallax: true,
    enableCookieAlert: true,
    scrollToAnchorSpeed: 700,
    parallaxSpeed: 0.6,
    backgroundMusic: 'assets/mp3/purpleplanetmusic-desolation.mp3',
    backgroundMusicVolume: 100,
    backgroundMusicAutoplay: true,

    templates: {
        secondaryNavbarBackItem: 'Back',

        likeAnimationLiked: 'Liked!',
        likeAnimationDisliked: 'Disliked!',

        cookieAlert: '<span class="nk-cookie-alert-close"><span class="nk-icon-close"></span></span>\n            Cookie alert are ready to use. You can simply change content inside this alert or disable it in javascript theme options. <a href="#">Cookies policy</a>.\n            <div class="nk-gap"></div>\n            <span class="nk-cookie-alert-confirm nk-btn link-effect-4 nk-btn-bg-white nk-btn-color-dark-1">Confirm</span>',

        plainVideoIcon: '<span class="nk-video-icon"><i class="fa fa-play pl-5"></i></span>',
        plainVideoLoadIcon: '<span class="nk-loading-spinner"><i></i></span>',
        fullscreenVideoClose: '<span class="nk-icon-close"></span>',
        gifIcon: '<span class="nk-gif-icon"><i class="fa fa-hand-pointer-o"></i></span>',

        audioPlainButton: '<div class="nk-audio-plain-play-pause">\n                <span class="nk-audio-plain-play">\n                    <span class="ion-play ml-3"></span>\n                </span>\n                <span class="nk-audio-plain-pause">\n                    <span class="ion-pause"></span>\n                </span>\n            </div>',

        instagram: '<div class="col-4">\n                <a href="{{link}}" target="_blank">\n                    <img src="{{image}}" alt="{{caption}}" class="nk-img-stretch">\n                </a>\n            </div>',
        instagramLoadingText: 'Loading...',
        instagramFailText: 'Failed to fetch data',
        instagramApiPath: 'php/instagram/instagram.php',

        twitter: '<div class="nk-twitter">\n                <span class="nk-twitter-icon fa fa-twitter"></span>\n                <div class="nk-twitter-text">\n                   {{tweet}}\n                </div>\n                <div class="nk-twitter-date">\n                    <span>{{date}}</span>\n                </div>\n            </div>',
        twitterLoadingText: 'Loading...',
        twitterFailText: 'Failed to fetch data',
        twitterApiPath: 'php/twitter/tweet.php',

        countdown: '<div>\n                <span>%D</span>\n                Days\n            </div>\n            <div>\n                <span>%H</span>\n                Hours\n            </div>\n            <div>\n                <span>%M</span>\n                Minutes\n            </div>\n            <div>\n                <span>%S</span>\n                Seconds\n            </div>'
    },

    shortcuts: {
        toggleSearch: 's',
        showSearch: '',
        closeSearch: 'esc',

        toggleCart: 'p',
        showCart: '',
        closeCart: 'esc',

        toggleSignForm: 'f',
        showSignForm: '',
        closeSignForm: 'esc',

        closeFullscreenVideo: 'esc',

        postLike: 'l',
        postDislike: 'd',
        postScrollToComments: 'c',

        toggleSideLeftNavbar: 'alt+l',
        openSideLeftNavbar: '',
        closeSideLeftNavbar: 'esc',

        toggleSideRightNavbar: 'alt+r',
        openSideRightNavbar: '',
        closeSideRightNavbar: 'esc',

        toggleFullscreenNavbar: 'alt+f',
        openFullscreenNavbar: '',
        closeFullscreenNavbar: 'esc'
    },
    events: {
        actionHeart: function actionHeart(params) {
            params.updateIcon();

            // fake timeout for demonstration
            // Change on AJAX request or something
            setTimeout(function () {
                var result = params.currentNum + (params.type === 'like' ? 1 : -1);
                params.updateNum(result);
            }, 300);
        },
        actionLike: function actionLike(params) {
            params.updateIcon();

            // fake timeout for demonstration
            // Change on AJAX request or something
            setTimeout(function () {
                var additional = 0;
                if (params.type === 'like') {
                    if (params.isLiked) {
                        additional = -2;
                    }
                    if (params.isDisliked) {
                        additional = 1;
                    }
                }
                if (params.type === 'dislike') {
                    if (params.isLiked) {
                        additional = -1;
                    }
                    if (params.isDisliked) {
                        additional = 2;
                    }
                }
                var result = params.currentNum + (params.type === 'like' ? 1 : -1) + additional;
                params.updateNum(result);
            }, 300);
        }
    }
};

/*------------------------------------------------------------------

  Utility

  -------------------------------------------------------------------*/
  var $ = jQuery;
  var tween = window.TweenMax;
  var isIOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera);
  var isFireFox = typeof InstallTrigger !== 'undefined';
  var isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;

// add 'is-mobile' or 'is-desktop' classname to html tag
$('html').addClass(isMobile ? 'is-mobile' : 'is-desktop');

/**
 * window size
 */
 var $wnd = $(window);
 var $doc = $(document);
 var $body = $('body');
 var wndW = 0;
 var wndH = 0;
 var docH = 0;
 function getWndSize() {
    wndW = $wnd.width();
    wndH = $wnd.height();
    docH = $doc.height();
}
getWndSize();
$wnd.on('resize load orientationchange', getWndSize);

/**
 * Debounce resize
 */
 var resizeArr = [];
 var resizeTimeout = void 0;
 $wnd.on('load resize orientationchange', function (e) {
    if (resizeArr.length) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            for (var k = 0; k < resizeArr.length; k++) {
                resizeArr[k](e);
            }
        }, 50);
    }
});
 function _debounceResize(func) {
    if (typeof func === 'function') {
        resizeArr.push(func);
    } else {
        window.dispatchEvent(new Event('resize'));
    }
}

/**
 * Throttle scroll
 * thanks: https://jsfiddle.net/mariusc23/s6mLJ/31/
 */
 var hideOnScrollList = [];
 var didScroll = void 0;
 var lastST = 0;

 $wnd.on('scroll load resize orientationchange', function () {
    if (hideOnScrollList.length) {
        didScroll = true;
    }
});

 function hasScrolled() {
    var ST = $wnd.scrollTop();

    var type = ''; // [up, down, end, start]

    if (ST > lastST) {
        type = 'down';
    } else if (ST < lastST) {
        type = 'up';
    } else {
        type = 'none';
    }

    if (ST === 0) {
        type = 'start';
    } else if (ST >= docH - wndH) {
        type = 'end';
    }

    hideOnScrollList.forEach(function (value) {
        if (typeof value === 'function') {
            value(type, ST, lastST, $wnd);
        }
    });

    lastST = ST;
}

setInterval(function () {
    if (didScroll) {
        didScroll = false;
        window.requestAnimationFrame(hasScrolled);
    }
}, 250);

function _throttleScroll(callback) {
    hideOnScrollList.push(callback);
}

/**
 * Body Overflow
 * Thanks https://jsfiddle.net/mariusc23/s6mLJ/31/
 * Usage:
 *    // enable
 *    bodyOverflow(1);
 *
 *    // disable
 *    bodyOverflow(0);
 */
 var bodyOverflowEnabled = void 0;
 var isBodyOverflowing = void 0;
 var scrollbarWidth = void 0;
 var originalBodyPadding = void 0;
 var $header = $('.nk-header');
 function bodyGetScrollbarWidth() {
    // thx d.walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'nk-body-scrollbar-measure';
    $body[0].appendChild(scrollDiv);
    var result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    $body[0].removeChild(scrollDiv);
    return result;
}
function bodyCheckScrollbar() {
    var fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) {
        // workaround for missing window.innerWidth in IE8
        var documentElementRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
    isBodyOverflowing = $body[0].clientWidth < fullWindowWidth;
    scrollbarWidth = bodyGetScrollbarWidth();
}
function bodySetScrollbar() {
    if (typeof originalBodyPadding === 'undefined') {
        originalBodyPadding = $body[0].style.paddingRight || '';
    }

    if (isBodyOverflowing) {
        $body.add($header.filter(':not(.nk-header-opaque)').children()).add($header.filter('.nk-header-opaque').children('.nk-navbar-fixed')).css('paddingRight', scrollbarWidth + 'px');
    }
}
function bodyResetScrollbar() {
    $body.css('paddingRight', originalBodyPadding);
    $header.children().css('paddingRight', '');
}
function _bodyOverflow(enable) {
    if (enable && !bodyOverflowEnabled) {
        bodyOverflowEnabled = 1;
        bodyCheckScrollbar();
        bodySetScrollbar();
        $body.css('overflow', 'hidden');
        $body.addClass('nk-body-overflow');
    } else if (!enable && bodyOverflowEnabled) {
        bodyOverflowEnabled = 0;
        $body.css('overflow', '');
        $body.removeClass('nk-body-overflow');
        bodyResetScrollbar();
    }
}

/**
 * In Viewport checker
 * return visible percent from 0 to 1
 */
 function _isInViewport($item, returnRect) {
    var rect = $item[0].getBoundingClientRect();
    var result = 1;

    if (rect.right <= 0 || rect.left >= wndW) {
        result = 0;
    } else if (rect.bottom < 0 && rect.top <= wndH) {
        result = 0;
    } else {
        var beforeTopEnd = Math.max(0, rect.height + rect.top);
        var beforeBottomEnd = Math.max(0, rect.height - (rect.top + rect.height - wndH));
        var afterTop = Math.max(0, -rect.top);
        var beforeBottom = Math.max(0, rect.top + rect.height - wndH);
        if (rect.height < wndH) {
            result = 1 - (afterTop || beforeBottom) / rect.height;
        } else if (beforeTopEnd <= wndH) {
            result = beforeTopEnd / wndH;
        } else if (beforeBottomEnd <= wndH) {
            result = beforeBottomEnd / wndH;
        }
        result = result < 0 ? 0 : result;
    }
    if (returnRect) {
        return [result, rect];
    }
    return result;
}

/**
 * Scroll To
 */
 function _scrollTo($to, callback) {
    var scrollPos = false;
    var speed = this.options.scrollToAnchorSpeed / 1000;

    if ($to === 'top') {
        scrollPos = 0;
    } else if ($to === 'bottom') {
        scrollPos = Math.max(0, docH - wndH);
    } else if (typeof $to === 'number') {
        scrollPos = $to;
    } else {
        scrollPos = $to.offset ? $to.offset().top : false;
    }

    if (scrollPos !== false && $wnd.scrollTop() !== scrollPos) {
        tween.to($wnd, speed, {
            scrollTo: {
                y: scrollPos,

                // disable autokill on iOs (buggy scrolling)
                autoKill: !isIOs
            },
            ease: Power2.easeOut,
            overwrite: 5
        });
        if (callback) {
            tween.delayedCall(speed, callback);
        }
    } else if (typeof callback === 'function') {
        callback();
    }
}

/*------------------------------------------------------------------

  Set Custom Options

  -------------------------------------------------------------------*/
  function _setOptions(newOpts) {
    var self = this;

    var optsTemplates = $.extend({}, this.options.templates, newOpts && newOpts.templates || {});
    var optsShortcuts = $.extend({}, this.options.shortcuts, newOpts && newOpts.shortcuts || {});
    var optsEvents = $.extend({}, this.options.events, newOpts && newOpts.events || {});

    self.options = $.extend({}, self.options, newOpts);
    self.options.templates = optsTemplates;
    self.options.shortcuts = optsShortcuts;
    self.options.events = optsEvents;
}

/*------------------------------------------------------------------

  Shortcuts
  https://github.com/madrobby/keymaster

  -------------------------------------------------------------------*/
  function _key(name, fn) {
    if (typeof window.key === 'undefined') {
        return;
    }
    name = this.options && this.options.shortcuts && this.options.shortcuts[name];

    if (name) {
        window.key(name, fn);
    }
}
function _initShortcuts() {
    if (typeof window.key === 'undefined' || !this.options.enableShortcuts) {
        return;
    }

    var self = this;

    // Search
    self.key('toggleSearch', function () {
        self.toggleSearch();
    });
    self.key('openSearch', function () {
        self.openSearch();
    });
    self.key('closeSearch', function () {
        self.closeSearch();
    });

    // Cart
    self.key('toggleCart', function () {
        self.toggleCart();
    });
    self.key('openCart', function () {
        self.openCart();
    });
    self.key('closeCart', function () {
        self.closeCart();
    });

    // Sign Form
    self.key('toggleSignForm', function () {
        self.toggleSignForm();
    });
    self.key('openSignForm', function () {
        self.openSignForm();
    });
    self.key('closeSignForm', function () {
        self.closeSignForm();
    });

    // FullScreen Video
    self.key('closeFullscreenVideo', function () {
        if (self.closeFullScreenVideo) {
            self.closeFullScreenVideo();
        }
    });

    // post single
    self.key('postLike', function () {
        if ($('.nk-blog-post-single').length) {
            $('.nk-action-heart:not(.liked):eq(0), .nk-action-like:eq(0) .like-icon').eq(0).click();
        }
    });
    self.key('postDislike', function () {
        if ($('.nk-blog-post-single').length) {
            $('.nk-action-heart.liked:eq(0), .nk-action-like:eq(0) .dislike-icon').eq(0).click();
        }
    });
    self.key('postScrollToComments', function () {
        var $comments = $('#comments');
        if ($comments.length) {
            self.scrollTo($comments);
        }
    });

    // Side Left Navbar
    var $leftSide = $('.nk-navbar-left-side');
    self.key('toggleSideLeftNavbar', function () {
        self.toggleSide($leftSide);
    });
    self.key('openSideLeftNavbar', function () {
        self.openSide($leftSide);
    });
    self.key('closeSideLeftNavbar', function () {
        self.closeSide($leftSide);
    });

    // Side Right Navbar
    var $rightSide = $('.nk-navbar-right-side');
    self.key('toggleSideRightNavbar', function () {
        self.toggleSide($rightSide);
    });
    self.key('openSideRightNavbar', function () {
        self.openSide($rightSide);
    });
    self.key('closeSideRightNavbar', function () {
        self.closeSide($rightSide);
    });

    // Fullscreen Navbar
    self.key('toggleFullscreenNavbar', function () {
        self.toggleFullscreenNavbar();
    });
    self.key('openFullscreenNavbar', function () {
        self.openFullscreenNavbar();
    });
    self.key('closeFullscreenNavbar', function () {
        self.closeFullscreenNavbar();
    });

    // ESC - use also inside form elements
    window.key.filter = function (event) {
        var tagName = (event.target || event.srcElement).tagName;
        var isContentEditable = (event.target || event.srcElement).getAttribute('contenteditable');
        var isESC = window.key.isPressed('esc');
        return isESC || !(isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA');
    };
}

/*------------------------------------------------------------------

  Init Blog

  -------------------------------------------------------------------*/
  function _initBlog() {
    var $blogList = $('.nk-blog-list');

    // add hover classname
    $blogList.on('mouseover', '.nk-blog-post .nk-post-thumb, .nk-blog-post .nk-post-content', function onBlogListMouseOver() {
        $(this).parents('.nk-blog-post:eq(0)').addClass('hover');
    }).on('mouseleave', '.nk-blog-post .nk-post-thumb, .nk-blog-post .nk-post-content', function onBlogListMouseLeave() {
        $(this).parents('.nk-blog-post:eq(0)').removeClass('hover');
    });
}

/*------------------------------------------------------------------

  Mouse Parallax

  -------------------------------------------------------------------*/
  var $parallaxMouseList = false;
  var parallaxMouseTimeout = void 0;
// run parallax animation
function runParallaxMouse(x, y) {
    var data = void 0;
    var itemX = void 0;
    var itemY = void 0;
    var itemCenterLeft = void 0;
    var itemCenterTop = void 0;
    $parallaxMouseList.each(function eachParallaxMouse() {
        data = $(this).data('nk-parallax-mouse-data');

        // don't animate if block isn't in viewport
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || !data.isInViewport) {
            return;
        }

        // mouse calculate
        itemCenterLeft = data.rect.left + data.rect.width / 2;
        itemCenterTop = data.rect.top + data.rect.height / 2;

        itemX = (itemCenterLeft - x) / (x > itemCenterLeft ? wndW - itemCenterLeft : itemCenterLeft);
        itemY = (itemCenterTop - y) / (y > itemCenterTop ? wndH - itemCenterTop : itemCenterTop);

        // animate
        // yep, magic number just to let user add attribute data-mouse-parallax="4" instead of data-mouse-parallax="20"
        var maxOffset = 5 * data.z;
        tween.to(this, data.speed, {
            x: itemX * maxOffset,
            y: itemY * maxOffset,
            force3D: true
        });
    });
}

function _initParallaxMouse() {
    var self = this;
    if (!self.options.enableMouseParallax || isMobile) {
        return;
    }

    clearTimeout(parallaxMouseTimeout);
    parallaxMouseTimeout = setTimeout(function () {
        var $newParallax = $('[data-mouse-parallax-z]:not(.parallaxed)').addClass('parallaxed');
        if ($newParallax.length) {
            // add new parallax blocks
            if ($parallaxMouseList) {
                $parallaxMouseList = $parallaxMouseList.add($newParallax);

                // first init parallax
            } else {
                $parallaxMouseList = $newParallax;
                if (!isFireFox) {
                    $wnd.on('mousemove', function (event) {
                        runParallaxMouse(event.clientX, event.clientY);
                    });
                }
            }
        }

        // update data for parallax blocks
        if ($parallaxMouseList) {
            $parallaxMouseList.each(function eachParallaxMouse() {
                var $this = $(this);
                $this.data('nk-parallax-mouse-data', {
                    isInViewport: self.isInViewport($this) ? $this.is(':visible') : 0,
                    rect: $this[0].getBoundingClientRect(),
                    z: parseFloat($this.attr('data-mouse-parallax-z')),
                    speed: parseFloat($this.attr('data-mouse-parallax-speed') || 2)
                });
            });
        }
    }, 100);
}

/*------------------------------------------------------------------

  Init Preloader

  -------------------------------------------------------------------*/
  function _initPreloader() {
    var self = this;
    var $preloader = $('.nk-preloader');
    var $preloaderBG = $preloader.find('.nk-preloader-bg');
    var $content = $preloader.find('.nk-preloader-content, .nk-preloader-skip');
    if (!$preloader.length) {
        return;
    }

    var isBusy = 0;
    var isOpened = 1;

    // prepare preloader
    var closeData = {
        frames: parseInt($preloaderBG.attr('data-close-frames'), 10),
        speed: parseFloat($preloaderBG.attr('data-close-speed')),
        sprites: $preloaderBG.attr('data-close-sprites'),
        loaded: false,
        width: false,
        height: false
    };
    var openData = {
        frames: parseInt($preloaderBG.attr('data-open-frames'), 10),
        speed: parseFloat($preloaderBG.attr('data-open-speed')),
        sprites: $preloaderBG.attr('data-open-sprites'),
        loaded: false,
        width: false,
        height: false
    };

    // preload images
    function preloadImages(data, cb) {
        if (!data.frames || !data.speed || !data.sprites) {
            return;
        }

        var img = new Image();
        img.onload = function onImgLoad() {
            data.width = this.width;
            data.height = this.height;
            data.loaded = true;

            if (cb) {
                cb(data);
            }
        };
        img.src = data.sprites;
    }

    // set div size and position
    function prepareBgDiv(data) {
        // set size and position
        var w = data.width / data.frames;
        var h = data.height;
        var bgCSS = {
            left: 0,
            top: 0,
            backgroundImage: 'url("' + data.sprites + '")'
        };

        if (w / h > wndW / wndH) {
            bgCSS.height = wndH;
            bgCSS.width = bgCSS.height * w / h;
            bgCSS.left = (wndW - bgCSS.width) / 2;
        } else {
            bgCSS.width = wndW;
            bgCSS.height = bgCSS.width * h / w;
            bgCSS.top = (wndH - bgCSS.height) / 2;
        }

        // set css to background
        $preloaderBG.css(bgCSS);
    }

    // initial image preload (widhout this code background image was flickering)
    preloadImages(closeData, function (data) {
        if (!isBusy && isOpened) {
            $preloaderBG.css({
                backgroundPosition: '200% 50%'
            });
            prepareBgDiv(data);
        }
    });

    // close preloader
    self.closePreloader = function closePreloader(cb) {
        if (!isBusy && isOpened) {
            isBusy = 1;

            if (!closeData.loaded) {
                tween.to($preloader, 0.3, {
                    opacity: 0,
                    display: 'none',
                    force3D: true,
                    onComplete: function onComplete() {
                        // hide content
                        tween.set($content, {
                            opacity: 0,
                            display: 'none'
                        });

                        if (cb) {
                            cb();
                        }
                        isBusy = 0;
                        isOpened = false;
                    }
                });
                return;
            }

            prepareBgDiv(closeData);

            // animate background
            tween.set($preloaderBG, {
                backgroundPosition: '100% 50%',
                backgroundColor: 'transparent'
            });
            tween.to($preloaderBG, closeData.speed, {
                backgroundPosition: '0% 50%',
                ease: SteppedEase.config(closeData.frames - 1),
                onComplete: function onComplete() {
                    tween.set($preloader, {
                        opacity: 0,
                        display: 'none'
                    });
                    if (cb) {
                        cb();
                    }
                    isBusy = 0;
                    isOpened = false;
                }
            });

            // animate content
            tween.to($content, 0.3, {
                y: '-20px',
                opacity: 0,
                display: 'none',
                force3D: true
            });
        }
    };

    // open preloader
    self.openPreloader = function openPreloader(cb) {
        if (!isBusy && !isOpened) {
            isBusy = 1;

            if (!openData.loaded) {
                if (cb) {
                    cb();
                }
                isBusy = 0;
                return;
            }

            tween.set($preloaderBG, {
                backgroundPosition: '0% 50%',
                backgroundColor: 'transparent'
            });

            prepareBgDiv(openData);

            tween.set($preloader, {
                opacity: 1,
                display: 'block'
            });

            // animate background
            tween.to($preloaderBG, openData.speed, {
                backgroundPosition: '100% 50%',
                ease: SteppedEase.config(openData.frames - 1),
                onComplete: function onComplete() {
                    if (cb) {
                        cb();
                    }
                    isBusy = 0;
                    isOpened = true;
                }
            });
        }
    };

    // hide preloader after page load
    var preloadedOpenImage = 0;
    function firstClosePreloader() {
        self.closePreloader();

        // preload image for opening animation
        if (!preloadedOpenImage) {
            preloadedOpenImage = 1;
            setTimeout(function () {
                preloadImages(openData);
            }, 1000);
        }
    }
    $wnd.on('load', firstClosePreloader);
    $preloader.on('click', '.nk-preloader-skip', firstClosePreloader);

    // fade between pages
    if (!self.options.enableFadeBetweenPages) {
        return;
    }

    // Internal: Return the `href` component of given URL object with the hash
    // portion removed.
    //
    // location - Location or HTMLAnchorElement
    //
    // Returns String
    function stripHash(href) {
        return href.replace(/#.*/, '');
    }

    $doc.on('click', 'a:not(.no-fade):not([target="_blank"]):not([href^="#"]):not([href^="mailto"]):not([href^="javascript:"])', function onLinksClick(e) {
        var href = this.href;

        // stop if empty href
        if (!href) {
            return;
        }

        // Middle click, cmd click, and ctrl click should open
        // links in a new tab as normal.
        if (e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
            return;
        }

        // Ignore case when a hash is being tacked on the current URL
        if (href.indexOf('#') > -1 && stripHash(href) === stripHash(location.href)) {
            return;
        }

        // Ignore e with default prevented
        if (e.isDefaultPrevented()) {
            return;
        }

        // prevent item clicked
        if ($(this).next('.dropdown').length) {
            if ($(this).next('.dropdown').css('visibility') === 'hidden' || $(this).parent().hasClass('open')) {
                return;
            }
        }

        e.preventDefault();
        self.openPreloader(function () {
            window.location.href = href;
        });
    });

    // fix safari back button
    // thanks http://stackoverflow.com/questions/8788802/prevent-safari-loading-from-cache-when-back-button-is-clicked
    $wnd.on('pageshow', function (e) {
        if (e.originalEvent.persisted) {
            $preloader.hide();
        }
    });
}

/*------------------------------------------------------------------

  Init Background Video

  -------------------------------------------------------------------*/
  function _initBackgroundVideo() {
    var $bg = $('[data-bg-mp4], [data-bg-webm], [data-bg-ogv]');
    if (!$bg.length || typeof window.VideoWorker === 'undefined') {
        return;
    }

    $bg.each(function eachBackground() {
        var $this = $(this);
        var mp4 = $this.attr('data-bg-mp4') || '';
        var webm = $this.attr('data-bg-webm') || '';
        var ogv = $this.attr('data-bg-ogv') || '';
        var poster = $this.attr('data-bg-poster') || '';
        var url = [];
        if (mp4) {
            url.push('mp4:' + mp4);
        }
        if (webm) {
            url.push('webm:' + webm);
        }
        if (ogv) {
            url.push('ogv:' + ogv);
        }
        url = url.join(',');

        // add background image
        if (poster) {
            $this.css({
                'background-image': 'url("' + poster + '")'
            });
        }

        // play video
        if (url) {
            var api = new VideoWorker(url, {
                autoplay: 1,
                loop: 1,
                mute: 1,
                controls: 0
            });

            if (api && api.isValid()) {
                var $video = void 0;
                api.getIframe(function (iframe) {
                    // add iframe
                    $video = $(iframe);
                    var $parent = $video.parent();
                    tween.set(iframe, {
                        opacity: 0,
                        display: 'none'
                    });
                    $video.appendTo($this);
                    $parent.remove();
                });

                api.on('play', function () {
                    tween.to($video, 0.5, {
                        opacity: 1,
                        display: 'block',
                        force3D: true
                    });
                });

                // cover video on resize
                _debounceResize(function () {
                    if (!$video || !$video[0]) {
                        return;
                    }

                    // native video size
                    var vW = $video[0].videoWidth || 1280;
                    var vH = $video[0].videoHeight || 720;

                    if (wndW / vW > wndH / vH) {
                        $video.css({
                            width: wndW,
                            height: 'auto',
                            marginTop: (wndH - vH * wndW / vW) / 2,
                            marginLeft: 0
                        });
                    } else {
                        $video.css({
                            width: 'auto',
                            height: wndH,
                            marginTop: 0,
                            marginLeft: (wndW - vW * wndH / vH) / 2
                        });
                    }
                });

                $wnd.on('blur focus', function (e) {
                    if (e.type === 'blur') {
                        api.pause();
                    } else {
                        api.play();
                    }
                });
            }
        }
    });
}

/*------------------------------------------------------------------

  Init Background Audio

  -------------------------------------------------------------------*/
  function _initBackgroundAudio() {
    var self = this;
    var $toggle = $('.nk-bg-audio-toggle');
    if (!self.options.backgroundMusic || typeof soundManager === 'undefined') {
        $toggle.hide();
        return;
    }
    var api = void 0;

    // hide / show play icon
    $toggle.find('.nk-bg-audio-play-icon').hide();

    function saveParams() {
        if (api) {
            localStorage.nkBackgroundAudio = JSON.stringify({
                playing: !api.paused && api.playState,
                progress: api.position
            });
        }
    }
    // save on close window and every 20 seconds
    $wnd.on('unload', saveParams);
    setInterval(saveParams, 20000);

    function getParams() {
        var params = {
            playing: self.options.backgroundMusicAutoplay,
            progress: 0
        };

        // restore local data
        if (localStorage && typeof localStorage.nkBackgroundAudio !== 'undefined') {
            var storedData = JSON.parse(localStorage.nkBackgroundAudio);
            params = $.extend(params, storedData);
        }

        // prevent autoplay on mobile devices
        if (isMobile) {
            params.playing = false;
        }

        return params;
    }

    function onPlay() {
        $toggle.find('.nk-bg-audio-play-icon').hide();
        $toggle.find('.nk-bg-audio-pause-icon').show();
    }
    function onStop() {
        $toggle.find('.nk-bg-audio-pause-icon').hide();
        $toggle.find('.nk-bg-audio-play-icon').show();
    }

    var params = getParams();

    // toggle button if autoplay
    if (params.playing) {
        onPlay();
    } else {
        onStop();
    }

    // fade
    var fadeInterval = void 0;
    function fadeOut() {
        var volume = api.volume;
        var dur = 1000;
        var toVol = 0;
        var interval = dur / Math.abs(volume - toVol);
        clearInterval(fadeInterval);
        fadeInterval = setInterval(function () {
            volume = volume > toVol ? volume - 1 : volume + 1;
            api.setVolume(volume);
            if (volume === toVol) {
                clearInterval(fadeInterval);
                api.pause();
            }
        }, interval);
    }
    function fadeIn() {
        var volume = 0;
        var dur = 1000;
        var toVol = self.options.backgroundMusicVolume;
        var interval = dur / Math.abs(volume - toVol);
        api.play({
            url: self.options.backgroundMusic
        });
        api.setVolume(volume);

        clearInterval(fadeInterval);
        fadeInterval = setInterval(function () {
            volume = volume > toVol ? volume - 1 : volume + 1;
            api.setVolume(volume);
            if (volume === toVol) {
                clearInterval(fadeInterval);
            }
        }, interval);
    }

    soundManager.onready(function () {
        var firstLoad = 1;
        api = soundManager.createSound({
            onplay: function onplay() {
                onPlay();
            },
            onresume: function onresume() {
                onPlay();
            },
            onpause: function onpause() {
                onStop();
            },
            onstop: function onstop() {
                onStop();
            },

            volume: self.options.backgroundMusicVolume,
            onload: function onload(ok) {
                if (!ok && this._iO && this._iO.onerror) {
                    this._iO.onerror();
                }
            },
            onfinish: function onfinish() {
                api.play();
            },
            onbufferchange: function onbufferchange() {
                // move to saved progress position on first load
                if (firstLoad && api.duration) {
                    firstLoad = 0;
                    api.setPosition(params.progress);
                }
            }
        });

        // autoplay
        if (params.playing) {
            fadeIn();
        }

        // play / pause
        $toggle.on('click', function () {
            if (api.paused || !api.playState) {
                fadeIn();
            } else {
                api.pause();
            }
        });

        // window focus / blur
        var pausedOnBlur = false;
        $wnd.on('blur focus', function (e) {
            if (e.type === 'blur') {
                if (!api.paused && api.playState) {
                    pausedOnBlur = true;
                    fadeOut();
                }
            } else if (pausedOnBlur) {
                pausedOnBlur = false;
                fadeIn();
            }
        });
    });
}

/*------------------------------------------------------------------

  Init Link Effects

  -------------------------------------------------------------------*/
  function _initLinkEffects() {
    if (isMobile) {
        return;
    }

    // add link effect for navbar
    $('.nk-navbar:not(.nk-navbar-no-link-effect) ul > li > a:not(.btn):not(.nk-btn):not(.no-link-effect)').addClass('link-effect-4');

    // Link Effect 1 (rotate all letters)
    $('.link-effect-1:not(.ready)').each(function eachLinkEffect1() {
        $(this).addClass('ready');
        var itemText = $(this).text().replace(/([^\x00-\x80]|\w)/g, '<span>$&</span>');
        $(this).html(itemText);
    });

    // mouse over class
    var timeout = void 0;
    function toggleClass($span, type) {
        var $nextSpan = $span[type === 'add' ? 'next' : 'prev']();
        $span[type + 'Class']('active');
        clearTimeout(timeout);

        if ($nextSpan.length) {
            timeout = setTimeout(function () {
                toggleClass($nextSpan, type);
            }, 40);
        }
    }
    $doc.on('mouseover', '.link-effect-1.ready', function linkEffect1OnMouseOver() {
        toggleClass($(this).children('span:not(.active):first'), 'add');
    }).on('mouseleave', '.link-effect-1.ready', function linkEffect1OnMouseLeave() {
        toggleClass($(this).children('span.active:last'), 'remove');
    });

    // Link Effect 2 and 3 (color for letters from left to right and top to bottom)
    $('.link-effect-2:not(.ready), .link-effect-3:not(.ready)').each(function eachLinkeEffect2and3() {
        $(this).addClass('ready');
        $(this).html(function (i, letters) {
            return $('<span>').html(letters).prepend($('<span class="link-effect-shade">').html(letters));
        });
    });

    // Link Effect 4 (cut words)
    $('.link-effect-4:not(.ready)').each(function eachLinkEffect4() {
        // fix for navigation item descriptions
        var $descr = $(this).find('.nk-item-descr').clone();
        if ($descr.length) {
            $(this).find('.nk-item-descr').remove();
        }

        $(this).addClass('ready');
        $(this).html(function (i, letters) {
            return $('<span class="link-effect-inner">').html('<span class="link-effect-l"><span>' + letters + '</span></span><span class="link-effect-r"><span>' + letters + '</span></span><span class="link-effect-shade"><span>' + letters + '</span></span>');
        });

        if ($descr.length) {
            $(this).append($descr);
        }
    });
}

/*------------------------------------------------------------------

  Init Navbar

  -------------------------------------------------------------------*/
  function _initNavbar() {
    var self = this;
    var $navbarTop = $('.nk-navbar-top');
    var $contactsTop = $('.nk-contacts-top');

    // add mobile navbar
    var $mobileNavItems = $('[data-nav-mobile]');
    if ($mobileNavItems.length) {
        $mobileNavItems.each(function eachMobileNavItems() {
            var $nav = $($(this).html());
            var $mobileNav = $($(this).attr('data-nav-mobile'));

            // insert into mobile nav
            $mobileNav.find('.nk-navbar-mobile-content > ul.nk-nav').append($nav);
        });

        var $nav = $('.nk-navbar-mobile-content > ul.nk-nav');

        // remove background images
        $nav.find('.bg-image, .bg-video').remove();

        // remove mega menus
        $nav.find('.nk-mega-item > .dropdown').each(function eachMegaMenuDropdowns() {
            var $drop = $(this).children('ul').addClass('dropdown');

            // fix mega menu columns
            var megaItems = '';
            $drop.find('> li > ul').each(function eachMegaDropdownULs() {
                megaItems += $(this).html();
            });
            $drop.html(megaItems);

            $(this).replaceWith($drop);
        });
        $nav.find('.nk-mega-item').removeClass('nk-mega-item');
    }

    // sticky navbar
    var navbarTop = $navbarTop.length ? $navbarTop.offset().top : 0;
    // fake hidden navbar to prevent page jumping on stick
    var $navbarFake = $('<div>').hide();
    function onScrollNav() {
        var stickyOn = $wnd.scrollTop() >= navbarTop;

        if (stickyOn) {
            $navbarTop.addClass('nk-navbar-fixed');
            $navbarFake.show();
        } else {
            $navbarTop.removeClass('nk-navbar-fixed');
            $navbarFake.hide();
        }
    }
    if ($navbarTop.hasClass('nk-navbar-sticky')) {
        $wnd.on('scroll resize', onScrollNav);
        onScrollNav();

        $navbarTop.after($navbarFake);
        self.debounceResize(function () {
            $navbarFake.height($navbarTop.innerHeight());
        });
    }

    // correct dropdown position
    function correctDropdown($item) {
        if ($item.parent().is('.nk-nav')) {
            var $dropdown = $item.children('.dropdown');
            var $parent = $item.parents('.nk-navbar:eq(0)');
            var $parentContainer = $parent.children('.container');
            $parentContainer = $parentContainer.length ? $parentContainer : $parent;

            // fix right value when sub menu is not hidden
            $dropdown.css('display', 'none');
            var isRight = $dropdown.css('right') !== 'auto';
            var $contacts = $item.parents('.nk-contacts-top:eq(0)');
            var css = {
                marginLeft: '',
                marginRight: '',
                marginTop: 0,
                display: 'block'
            };

            $dropdown.css(css);

            var rect = $dropdown[0].getBoundingClientRect();
            var rectContainer = $parentContainer[0].getBoundingClientRect();
            var itemRect = $item[0].getBoundingClientRect();

            // move dropdown from right corner (right corner will check in nav container)
            if (rect.right > rectContainer.right) {
                css.marginLeft = rectContainer.right - rect.right;
                $dropdown.css(css);
                rect = $dropdown[0].getBoundingClientRect();
            }

            // move dropdown from left corner
            if (rect.left < 0) {
                css.marginLeft = -rect.left;
                $dropdown.css(css);
                rect = $dropdown[0].getBoundingClientRect();
            }

            // check if dropdown not under item
            var currentLeftPost = rect.left + (css.marginLeft || 0);
            if (currentLeftPost > itemRect.left) {
                css.marginLeft = (css.marginLeft || 0) - (currentLeftPost - itemRect.left);
            }

            // change to margin-right. In some cases left margin isn't working, for ex. in mega menu
            if (isRight) {
                css.marginRight = -1 * css.marginLeft;
                css.marginLeft = '';
            }

            // correct top position
            css.marginTop = $parent.innerHeight() - $dropdown.offset().top + $parent.offset().top;

            // additional 2px offset
            css.marginTop += 2;

            // add offset if contacts
            if ($contacts.length) {
                css.marginTop += parseFloat($contacts.css('padding-bottom') || 0);
            }

            // hide menu
            css.display = 'none';

            $dropdown.css(css);
        }
    }

    // toggle dropdown
    function closeSubmenu($item) {
        if ($item.length) {
            $item.removeClass('open');
            tween.to($item.children('.dropdown'), 0.3, {
                opacity: 0,
                display: 'none',
                force3D: true
            });
            $wnd.trigger('nk-closed-submenu', [$item]);
        }
    }
    function openSubmenu($item) {
        if (!$item.hasClass('open')) {
            correctDropdown($item);
            tween.to($item.children('.dropdown'), 0.3, {
                opacity: 1,
                display: 'block',
                force3D: true
            });
            $item.addClass('open');
            $wnd.trigger('nk-opened-submenu', [$item]);
        }
    }
    var dropdownTimeout = void 0;
    $navbarTop.add($contactsTop).on('mouseenter', 'li.nk-drop-item', function onNavbarTopMouseEnter() {
        var $item = $(this);
        var $otherDropdown = $item.closest($contactsTop).length ? $navbarTop : $contactsTop;
        var $openedSiblings = $item.siblings('.open').add($item.siblings().find('.open')).add($item.parents('.nk-nav:eq(0)').siblings().find('.open')).add($item.parents('.nk-nav:eq(0)').siblings('.open')).add($item.parents('.nk-nav:eq(0)').parent().siblings().find('.open')).add($otherDropdown.find('.open'));

        clearTimeout(dropdownTimeout);
        closeSubmenu($openedSiblings);
        openSubmenu($item);
    }).on('mouseleave', 'li.nk-drop-item', function onNavbarTopMouseLeave() {
        var $item = $(this);
        clearTimeout(dropdownTimeout);
        dropdownTimeout = setTimeout(function () {
            closeSubmenu($item);
        }, 200);
    });
    $navbarTop.add($contactsTop).on('mouseleave', function () {
        clearTimeout(dropdownTimeout);
        dropdownTimeout = setTimeout(function () {
            closeSubmenu($navbarTop.add($contactsTop).find('.open'));
        }, 400);
    });

    // hide / show
    // add / remove solid color
    var $autohideNav = $navbarTop.filter('.nk-navbar-autohide');
    self.throttleScroll(function (type, scroll) {
        var start = 400;
        var hideClass = 'nk-onscroll-hide';
        var showClass = 'nk-onscroll-show';

        // hide / show
        if (type === 'down' && scroll > start) {
            $autohideNav.removeClass(showClass).addClass(hideClass);
        } else if (type === 'up' || type === 'end' || type === 'start') {
            $autohideNav.removeClass(hideClass).addClass(showClass);
        }

        // add solid color
        if ($navbarTop.hasClass('nk-navbar-transparent')) {
            $navbarTop[(scroll > 70 ? 'add' : 'remove') + 'Class']('nk-navbar-solid');
        }
    });
}

/*------------------------------------------------------------------

  Init Navbar Side

  -------------------------------------------------------------------*/
  function _initNavbarSide() {
    var self = this;
    var $overlay = $('<div class="nk-navbar-overlay">').appendTo($body);

    // side navbars
    var $leftSide = $('.nk-navbar-left-side');
    var $rightSide = $('.nk-navbar-right-side');
    var $sideNavs = $('.nk-navbar-side');

    // toggle navbars
    function updateTogglers() {
        $('[data-nav-toggle]').each(function eachNavToggle() {
            var active = $($(this).attr('data-nav-toggle')).hasClass('open');
            $(this)[(active ? 'add' : 'remove') + 'Class']('active');
        });
    }
    self.toggleSide = function ($side, speed) {
        self[$side.hasClass('open') ? 'closeSide' : 'openSide']($side, speed);
    };
    self.openSide = function ($side, speed) {
        if ($side.css('display') === 'none') {
            return;
        }

        $side.addClass('open');

        // show sidebar
        tween.to($side, speed || 0.4, {
            x: $side.hasClass('nk-navbar-left-side') ? '100%' : '-100%',
            force3D: true
        });

        // show overlay
        if ($side.hasClass('nk-navbar-overlay-content')) {
            tween.to($overlay, 0.3, {
                opacity: 0.8,
                display: 'block',
                force3D: true
            });
        }

        updateTogglers();
    };
    self.closeSide = function ($side, speed) {
        $side.each(function eachSide() {
            $(this).removeClass('open');

            // hide sidebar
            tween.to(this, speed || 0.4, {
                x: '0%',
                force3D: true
            });
            updateTogglers();
        });

        if (!$sideNavs.filter('.nk-navbar-overlay-content.open').length) {
            // hide overlay
            tween.to($overlay, 0.3, {
                opacity: 0,
                display: 'none',
                force3D: true
            });
        }
    };
    $doc.on('click', '[data-nav-toggle]', function onNavToggleClick(e) {
        var $nav = $($(this).attr('data-nav-toggle'));
        if ($nav.hasClass('open')) {
            self.closeSide($nav);
        } else {
            // hide another navigations
            $('[data-nav-toggle]').each(function eachNavToggle() {
                self.closeSide($($(this).attr('data-nav-toggle')));
            });

            self.openSide($nav);
        }
        e.preventDefault();
    });

    // overlay
    $doc.on('click', '.nk-navbar-overlay', function () {
        self.closeSide($sideNavs);
    });

    // hide sidebar if it invisible
    self.debounceResize(function () {
        $sideNavs.filter('.open').each(function eachOpenedNavs() {
            if (!$(this).is(':visible')) {
                self.closeSide($(this));
            }
        });
    });

    // swipe side navbars
    if (!isTouch || typeof Hammer === 'undefined') {
        return;
    }
    var swipeStartSize = 50;
    var $swipeItem = void 0;
    var navSize = void 0;
    var openNav = void 0;
    var closeNav = void 0;
    var isRightSide = void 0;
    var isLeftSide = void 0;
    var isScrolling = 0;
    var swipeDir = void 0;
    var sidePos = false;
    var startSwipe = false;
    var endSwipe = false;

    // strange solution to fix pan events on the latest Chrome
    // https://github.com/hammerjs/hammer.js/issues/1065
    var mc = new Hammer.Manager(document, {
        touchAction: 'auto',
        inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
        recognizers: [[Hammer.Pan, { direction: Hammer.DIRECTION_HORIZONTAL }]]
    });

    // If we detect a scroll before a panleft/panright, disable panning
    // thanks: https://github.com/hammerjs/hammer.js/issues/771
    mc.on('panstart', function (e) {
        if (e.additionalEvent === 'panup' || e.additionalEvent === 'pandown') {
            isScrolling = 1;
        }
    });
    // Reenable panning
    mc.on('panend', function (e) {
        if (!isScrolling) {
            if ($swipeItem) {
                var swipeSize = void 0;
                if (sidePos) {
                    if (openNav) {
                        swipeSize = sidePos;
                    } else if (closeNav) {
                        swipeSize = navSize - sidePos;
                    } else {
                        swipeSize = 0;
                    }
                } else {
                    swipeSize = 0;
                }

                var transitionTime = Math.max(0.15, 0.4 * (navSize - swipeSize) / navSize);
                var swiped = 0;

                if (swipeSize && swipeSize > 10) {
                    var velocityTest = Math.abs(e.velocityX) > 0.7;
                    if (swipeSize >= navSize / 3 || velocityTest) {
                        swiped = 1;
                        if (openNav) {
                            self.openSide($swipeItem, transitionTime);
                        } else {
                            self.closeSide($swipeItem, transitionTime);
                        }
                    }
                }
                if (!swiped) {
                    if (openNav) {
                        self.closeSide($swipeItem, transitionTime);
                    } else {
                        self.openSide($swipeItem, transitionTime);
                    }
                }
            }
            openNav = false;
            closeNav = false;
            isRightSide = false;
            isLeftSide = false;
            swipeDir = false;
            sidePos = false;
            $swipeItem = false;
            startSwipe = false;
            endSwipe = false;
        }
        isScrolling = 0;
    });
    mc.on('panleft panright panup pandown', function (e) {
        if (isScrolling) {
            return;
        }

        var isFirst = false;
        var isFinal = e.isFinal;

        if (startSwipe === false) {
            startSwipe = e.center.x;
            isFirst = true;
        }
        endSwipe = e.center.x;

        // init
        if (isFirst) {
            if (e.direction === 2) {
                swipeDir = 'left';
            } else if (e.direction === 4) {
                swipeDir = 'right';
            } else {
                swipeDir = false;
            }

            // right side
            if ($rightSide && $rightSide.length) {
                navSize = $rightSide.width();

                // open
                if (wndW - startSwipe <= swipeStartSize && !$rightSide.hasClass('open') && !$leftSide.hasClass('open')) {
                    openNav = 1;
                    isRightSide = 1;

                    // close
                } else if (wndW - startSwipe >= navSize - 100 && $rightSide.hasClass('open')) {
                    closeNav = 1;
                    isRightSide = 1;
                }
            }

            // left side
            if ($leftSide && $leftSide.length && !isRightSide && $leftSide.is(':visible')) {
                navSize = $leftSide.width();

                // open
                if (startSwipe <= swipeStartSize && !$rightSide.hasClass('open') && !$leftSide.hasClass('open')) {
                    openNav = 1;
                    isLeftSide = 1;

                    // close
                } else if (startSwipe >= navSize - 100 && $leftSide.hasClass('open')) {
                    closeNav = 1;
                    isLeftSide = 1;
                }
            }

            // swipe item
            if (isLeftSide) {
                $swipeItem = $leftSide;
            } else if (isRightSide) {
                $swipeItem = $rightSide;
            } else {
                $swipeItem = false;
            }

            // move
        } else if (!isFinal && $swipeItem) {
            if (isRightSide && (openNav && swipeDir === 'left' || closeNav && swipeDir === 'right')) {
                // open side navbar
                if (openNav) {
                    sidePos = Math.min(navSize, Math.max(0, startSwipe - endSwipe));
                }

                // close side navbar
                if (closeNav) {
                    var curPos = startSwipe - endSwipe;
                    if (startSwipe < wndW - navSize) {
                        curPos = wndW - navSize - endSwipe;
                    }
                    sidePos = navSize - Math.abs(Math.max(-navSize, Math.min(0, curPos)));
                }

                tween.set($swipeItem, {
                    x: -100 * sidePos / navSize + '%'
                });
            } else if (isLeftSide && (openNav && swipeDir === 'right' || closeNav && swipeDir === 'left')) {
                // open mobile navbar
                if (openNav) {
                    sidePos = Math.min(navSize, Math.max(0, endSwipe - startSwipe));
                }

                // close mobile navbar
                if (closeNav) {
                    var curPos2 = endSwipe - startSwipe;
                    if (startSwipe > navSize) {
                        curPos2 = endSwipe - navSize;
                    }
                    sidePos = navSize - Math.abs(Math.max(-navSize, Math.min(0, curPos2)));
                }

                tween.set($swipeItem, {
                    x: 100 * sidePos / navSize + '%'
                });
            }
        }
    });

    // prevent scrolling when opening/hiding navigation
    addEventListener('touchmove', function (e) {
        if (isRightSide || isLeftSide) {
            e.srcEvent.preventDefault();
            e.preventDefault();
        }
    }, { passive: false });
}

/*------------------------------------------------------------------

  Init Navbar Fullscreen

  -------------------------------------------------------------------*/
  function _initNavbarFullscreen() {
    var self = this;
    var $navbar = $('.nk-navbar-full');
    var $navbarTop = $('.nk-navbar-top');
    var $navbarSocial = $navbar.find('.nk-nav-social');
    var navTransparent = void 0;
    var navRect = void 0;
    var isOpened = void 0;

    self.toggleFullscreenNavbar = function () {
        self[isOpened ? 'closeFullscreenNavbar' : 'openFullscreenNavbar']();
    };
    self.openFullscreenNavbar = function () {
        if (isOpened || !$navbar.length) {
            return;
        }
        isOpened = 1;

        var $navbarMenuItems = $navbar.find('.nk-nav .nk-drop-item.open > .dropdown:not(.closed) > li > a');
        if (!$navbarMenuItems.length) {
            $navbarMenuItems = $navbar.find('.nk-nav > li > a');
        }

        // active all togglers
        $('.nk-navbar-full-toggle').addClass('active');

        // padding bottom if there is social block
        var paddingBottom = $navbar.find('.nk-nav-social').innerHeight();

        // add navbar top position
        navTransparent = $navbarTop.length ? $navbarTop.hasClass('nk-navbar-transparent') && !$navbarTop.hasClass('nk-navbar-solid') : 1;
        navRect = $navbarTop[0] ? $navbarTop[0].getBoundingClientRect() : 0;

        // set top position and animate
        tween.set($navbar, {
            top: navRect ? navRect.top + (navTransparent ? 0 : navRect.height) : 0,
            paddingTop: navRect && navTransparent ? navRect.height : 0,
            paddingBottom: paddingBottom
        });
        tween.set($navbarMenuItems, {
            y: -10,
            opacity: 0
        });
        tween.set($navbarSocial, {
            y: 10,
            opacity: 0
        });
        tween.to($navbar, 0.5, {
            opacity: 1,
            display: 'block',
            force3D: true,
            onComplete: function onComplete() {
                self.initPluginNano($navbar);
            }
        });
        tween.staggerTo($navbarMenuItems, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.2
        }, 0.1);
        tween.to($navbarSocial, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4,
            force3D: true
        });

        $navbar.addClass('open');

        // prevent body scrolling
        self.bodyOverflow(1);

        // trigger event
        $wnd.trigger('nk-open-full-navbar', [$navbar]);
    };

    self.closeFullscreenNavbar = function (dontTouchBody) {
        if (!isOpened || !$navbar.length) {
            return;
        }
        isOpened = 0;

        // disactive all togglers
        $('.nk-navbar-full-toggle').removeClass('active');

        // set top position and animate
        tween.to($navbar, 0.5, {
            opacity: 0,
            display: 'none',
            force3D: true,
            onComplete: function onComplete() {
                if (!dontTouchBody) {
                    // restore body scrolling
                    self.bodyOverflow(0);
                }
            }
        });

        // open navbar block
        $navbar.removeClass('open');

        // trigger event
        $wnd.trigger('nk-close-full-navbar', [$navbar]);
    };

    $doc.on('click', '.nk-navbar-full-toggle', function (e) {
        self.toggleFullscreenNavbar();
        e.preventDefault();
    });

    $wnd.on('nk-open-search-block nk-open-cart nk-open-sign-form', function () {
        self.closeFullscreenNavbar(1);
    });
}

/*------------------------------------------------------------------

  Init Dropdown Effect 1 for side navbars and fullscreen

  -------------------------------------------------------------------*/
  function _initNavbarDropEffect() {
    var self = this;
    var $navbars = $('.nk-navbar-side, .nk-navbar-full').find('.nk-nav');

    // add perspective
    $navbars.css({
        perspective: '600px',
        perspectiveOrigin: 'center top'
    });

    // add back item for dropdowns
    $navbars.find('.dropdown').prepend('<li class="bropdown-back"><a href="#">' + self.options.templates.secondaryNavbarBackItem + '</a></li>');

    // change height of opened dropdown
    function updateSideNavDropdown($item) {
        var $nav = $item.parents('.nk-navbar:eq(0)');
        var $khNav = $nav.find('.nk-nav');
        var $nanoCont = $khNav.children('.nano-content');
        var $khNavRow = $khNav.parent();
        var $drop = $nav.find('.nk-drop-item.open > .dropdown:not(.closed)');

        if ($drop.length) {
            var dropHeight = $drop.innerHeight();

            // vertical center for dropdown
            if ($khNavRow.hasClass('nk-nav-row-center')) {
                $drop.css({
                    top: 0
                });

                $khNav.hide();
                var nanoHeight = $khNavRow.innerHeight();
                $khNav.show();
                var nanoNavRowHeight = nanoHeight;
                var nanoTop = $khNavRow.offset().top;
                var dropTop = $drop.offset().top;

                var top = nanoTop - dropTop;
                if (dropHeight < nanoNavRowHeight) {
                    top += (nanoHeight - dropHeight) / 2;
                }

                $drop.css({
                    top: top
                });
            }

            $khNav.css('height', dropHeight);
            self.initPluginNano($nav);

            // scroll to top
            tween.to($nanoCont, 0.3, {
                scrollTo: { y: 0 },
                delay: 0.2
            });
        } else {
            $khNav.css('height', '');
        }
        self.initPluginNano($nav);
    }

    // open / close submenu
    function toggleSubmenu(open, $drop) {
        var $newItems = $drop.find('> .dropdown > li > a');
        var $oldItems = $drop.parent().find('> li > a');

        if (open) {
            $drop.addClass('open').parent().addClass('closed');
        } else {
            $drop.removeClass('open').parent().removeClass('closed');

            var tmp = $newItems;
            $newItems = $oldItems;
            $oldItems = tmp;
        }

        // show items
        tween.set($newItems, {
            x: open ? '30%' : '-30%',
            rotationY: open ? '30deg' : '-30deg',
            opacity: 0,
            display: 'block'
        }, 0.1);
        tween.to($newItems, 0.3, {
            x: '0%',
            rotationY: '0deg',
            opacity: 1,
            delay: 0.1
        });

        // hide items
        tween.to($oldItems, 0.3, {
            x: open ? '-30%' : '30%',
            rotationY: open ? '-30deg' : '30deg',
            opacity: 0,
            onComplete: function onComplete() {
                $oldItems.css('display', 'none');
            }
        });
    }

    $navbars.on('click', '.nk-drop-item > a', function navbarDropItemClick(e) {
        toggleSubmenu(true, $(this).parent());
        updateSideNavDropdown($(this));
        e.preventDefault();
    });
    $navbars.on('click', '.bropdown-back > a', function navbarDropItemBackClick(e) {
        toggleSubmenu(false, $(this).parent().parent().parent());
        updateSideNavDropdown($(this));
        e.preventDefault();
    });
}

/*------------------------------------------------------------------

  Init Search Block

  -------------------------------------------------------------------*/
  function _initSearchBlock() {
    var self = this;
    var $search = $('.nk-search');
    var $searchField = $search.find('.nk-search-field');
    var $nav = $('.nk-navbar-top');
    var navRect = void 0;
    var isOpened = void 0;

    self.toggleSearch = function () {
        self[(isOpened ? 'close' : 'open') + 'Search']();
    };

    self.openSearch = function () {
        if (isOpened) {
            return;
        }
        isOpened = 1;

        // active all togglers
        $('.nk-search-toggle').addClass('active');

        // add search top position
        navRect = $nav[0] ? $nav[0].getBoundingClientRect() : 0;

        // set top position and animate
        tween.set($search, {
            paddingTop: navRect ? navRect.bottom : 0
        });
        tween.set($searchField, {
            y: -10,
            opacity: 0
        });
        tween.to($search, 0.5, {
            opacity: 1,
            display: 'block',
            force3D: true
        });
        tween.to($searchField, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.2,
            force3D: true
        });

        // open search block
        $search.addClass('open');

        // focus search input
        if (self.options.enableSearchAutofocus) {
            setTimeout(function () {
                $search.find('.nk-search-field input').focus();
            }, 100);
        }

        // trigger event
        $wnd.trigger('nk-open-search-block', [$search]);
    };

    self.closeSearch = function () {
        if (!isOpened) {
            return;
        }
        isOpened = 0;

        // disactive all togglers
        $('.nk-search-toggle').removeClass('active');

        tween.to($search, 0.5, {
            opacity: 0,
            display: 'none',
            force3D: true
        });

        // open search block
        $search.removeClass('open');

        // trigger event
        $wnd.trigger('nk-close-search-block', [$search]);
    };

    $doc.on('click', '.nk-search-toggle', function (e) {
        self.toggleSearch();
        e.preventDefault();
    });

    // prevent search close on iOS after scroll. Scroll event triggers after focus on search input
    $wnd.on('nk-open-full-navbar nk-open-cart nk-open-sign-form' + (isIOs ? '' : ' scroll'), function () {
        self.closeSearch();
    });
}

/*------------------------------------------------------------------

  Init Cart

  -------------------------------------------------------------------*/
  function _initCart() {
    var self = this;
    var $cart = $('.nk-cart');
    var $cartItems = $cart.find('.nk-store-cart-products tr');
    var $cartTotal = $cart.find('.nk-cart-total');
    var $cartBtns = $cart.find('.nk-cart-btns');
    var $cartToggle = $('.nk-cart-toggle');
    var $nav = $('.nk-navbar-top');
    var navRect = void 0;
    var isOpened = void 0;

    self.toggleCart = function () {
        self[(isOpened ? 'close' : 'open') + 'Cart']();
    };

    self.openCart = function () {
        if (isOpened) {
            return;
        }
        isOpened = 1;

        // active all togglers
        $cartToggle.addClass('active');

        // add cart top position
        navRect = $nav[0] ? $nav[0].getBoundingClientRect() : 0;

        // set top position and animate
        tween.set($cart, {
            paddingTop: navRect ? navRect.bottom : 0
        });
        tween.set($cartItems, {
            y: -10,
            opacity: 0
        });
        tween.set($cartTotal, {
            y: -10,
            opacity: 0
        });
        tween.set($cartBtns, {
            y: -10,
            opacity: 0
        });
        tween.to($cart, 0.5, {
            opacity: 1,
            display: 'block',
            force3D: true
        });
        tween.staggerTo($cartItems, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.2
        }, 0.1);
        tween.to($cartTotal, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.3,
            force3D: true
        });
        tween.to($cartBtns, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4,
            force3D: true
        });

        // open cart block
        $cart.addClass('open');

        // prevent body scrolling
        self.bodyOverflow(1);

        // trigger event
        $wnd.trigger('nk-open-cart', [$cart]);
    };

    self.closeCart = function (dontTouchBody) {
        if (!isOpened) {
            return;
        }
        isOpened = 0;

        // deactive all togglers
        $cartToggle.removeClass('active');

        tween.to($cart, 0.5, {
            opacity: 0,
            display: 'none',
            force3D: true,
            onComplete: function onComplete() {
                if (!dontTouchBody) {
                    // restore body scrolling
                    self.bodyOverflow(0);
                }
            }
        });

        // open cart block
        $cart.removeClass('open');

        // trigger event
        $wnd.trigger('nk-close-cart', [$cart]);
    };

    $doc.on('click', '.nk-cart-toggle', function (e) {
        self.toggleCart();
        e.preventDefault();
    });
    $wnd.on('nk-open-full-navbar nk-open-search-block nk-open-sign-form', function () {
        self.closeCart(1);
    });
}

/*------------------------------------------------------------------

  Init Sign Form

  -------------------------------------------------------------------*/
  function _initSignForm() {
    var self = this;
    var $signForm = $('.nk-sign-form');
    var $signFormContainer = $signForm.find('.nk-sign-form-container');
    var $signToggle = $('.nk-sign-toggle');
    var $nav = $('.nk-navbar-top');
    var navRect = void 0;
    var isOpened = void 0;

    // show / hide block with form
    self.toggleSignForm = function () {
        self[(isOpened ? 'close' : 'open') + 'SignForm']();
    };

    // show block with form
    self.openSignForm = function () {
        if (isOpened) {
            return;
        }
        isOpened = 1;

        // active all togglers
        $signToggle.addClass('active');

        // add form top position
        navRect = $nav[0] ? $nav[0].getBoundingClientRect() : 0;

        // set top position and animate
        tween.set($signForm, {
            paddingTop: navRect ? navRect.bottom : 0
        });
        tween.set($signFormContainer, {
            y: -10,
            opacity: 0
        });
        tween.to($signForm, 0.5, {
            opacity: 1,
            display: 'block',
            force3D: true
        });
        tween.to($signFormContainer, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4,
            force3D: true
        });

        // open form block
        $signForm.addClass('open');

        // prevent body scrolling
        self.bodyOverflow(1);

        // trigger event
        $wnd.trigger('nk-open-sign-form', [$signForm]);
    };

    // hide block with form
    self.closeSignForm = function (dontTouchBody) {
        if (!isOpened) {
            return;
        }
        isOpened = 0;

        // deactive all togglers
        $signToggle.removeClass('active');

        tween.to($signForm, 0.5, {
            opacity: 0,
            display: 'none',
            force3D: true,
            onComplete: function onComplete() {
                if (!dontTouchBody) {
                    // restore body scrolling
                    self.bodyOverflow(0);
                }
            }
        });

        // open form block
        $signForm.removeClass('open');

        // trigger event
        $wnd.trigger('nk-close-sign-form', [$signForm]);
    };
    $doc.mouseup(function(e) 
    {       
        var container = $doc.find(".register_ui");
        var keepintouch = $doc.find(".nk-sign-toggle");
        if (!keepintouch.is(e.target) && !container.is(e.target) && container.has(e.target).length === 0) 
        {
            self.closeSignForm(1);
            $doc.find('body').removeAttr('style');
        }
    });
    $doc.on('click', '.nk-sign-toggle', function (e) {
        self.toggleSignForm();
        e.preventDefault();
    });
    $wnd.on('nk-open-full-navbar nk-open-search-block nk-open-cart', function () {
        self.closeSignForm(1);
    });

    // show / hide forms
    var $formLost = $signForm.find('.nk-sign-form-lost');
    var $formLogin = $signForm.find('.nk-sign-form-login');
    var $formRegister = $signForm.find('.nk-sign-form-register');
    var $toggleLost = $signForm.find('.nk-sign-form-lost-toggle');
    var $toggleLogin = $signForm.find('.nk-sign-form-login-toggle');
    var $toggleRegister = $signForm.find('.nk-sign-form-register-toggle');

    function animateForms($showItems) {
        var inverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var $hideItems = $formLost.filter('.active').add($formRegister.filter('.active')).add($formLogin.filter('.active'));
        tween.set($hideItems, {
            position: 'absolute',
            display: 'block',
            x: 0
        });
        tween.set($showItems, {
            position: 'absolute',
            display: 'none',
            x: inverse ? '-60%' : '60%'
        });
        tween.to($hideItems, 0.2, {
            opacity: 0,
            x: inverse ? '60%' : '-60%',
            display: 'none',
            force3D: true
        });
        tween.to($showItems, 0.2, {
            opacity: 1,
            display: 'block',
            x: '0%',
            force3D: true,
            onComplete: function onComplete() {
                tween.set($showItems, {
                    position: 'relative'
                });
            }
        });
        $hideItems.removeClass('active');
        $showItems.addClass('active');
    }
    function showLoginForm() {
        animateForms($formLogin, true);
        $toggleLost.removeClass('active');
        $toggleLogin.addClass('active');
        $toggleRegister.removeClass('active');
    }
    function showLostForm() {
        animateForms($formLost);
        $toggleLost.addClass('active');
        $toggleLogin.removeClass('active');
        $toggleRegister.removeClass('active');
    }
    function showRegisterForm() {
        animateForms($formRegister);
        $toggleLost.removeClass('active');
        $toggleLogin.removeClass('active');
        $toggleRegister.addClass('active');
    }

    $signForm.on('click', '.nk-sign-form-login-toggle:not(.active)', function (e) {
        e.preventDefault();
        showLoginForm();
    });
    $signForm.on('click', '.nk-sign-form-lost-toggle:not(.active)', function (e) {
        e.preventDefault();
        showLostForm();
    });
    $signForm.on('click', '.nk-sign-form-register-toggle:not(.active)', function (e) {
        e.preventDefault();
        showRegisterForm();
    });
}

/*------------------------------------------------------------------

  Init Header Title

  -------------------------------------------------------------------*/
  function _initHeaderTitle() {
    var self = this;
    var $navbarHeader = $('.nk-header');
    var isNavbarOpaque = $navbarHeader.hasClass('nk-header-opaque');
    var isNavbarTransparent = $('.nk-navbar-top').hasClass('nk-header-transparent');
    var $headerTitle = $('.nk-header-title > .nk-header-table');
    var $fullHeaderTitle = $('.nk-header-title-full > .nk-header-table');

    // remove header title padding if navbar opaque
    if (isNavbarOpaque) {
        $headerTitle.css('padding-top', 0);
    }

    self.debounceResize(function () {
        if ((isNavbarTransparent || isNavbarOpaque) && (!$fullHeaderTitle.length || !isNavbarOpaque)) {
            return;
        }

        var navH = $navbarHeader.outerHeight() || 0;

        // add header title padding
        if (!isNavbarTransparent && !isNavbarOpaque) {
            $headerTitle.css('padding-top', navH);
        }

        // fix header title height
        if ($fullHeaderTitle.length) {
            var headerH = '100vh';

            if (isNavbarOpaque) {
                //headerH = 'calc(100vh - ' + navH + 'px)';
            }

            $fullHeaderTitle.css('min-height', headerH);
        }
    });
}

/*------------------------------------------------------------------

  Init Counters

  -------------------------------------------------------------------*/
  function _initCounters() {
    var self = this;
    var $progressCount = $('.nk-progress.nk-count');
    var $numberCount = $('.nk-count:not(.nk-progress)');

    // set default progress
    $progressCount.each(function eachProgress() {
        $(this).attr('data-nk-count', $(this).attr('data-progress')).attr('data-nk-mask', $(this).attr('data-progress-mask')).find('.nk-progress-line > div').css('width', ($(this).attr('data-nk-count-from') || '0') + '%').find('.nk-progress-percent').html('');
    });

    // set default numbers
    $numberCount.each(function eachNumberCount() {
        $(this).attr('data-nk-count', $(this).attr('data-nk-count') || parseInt($(this).text(), 10)).html($(this).attr('data-nk-count-from') || '0');
    });

    var countersNum = 1;
    function runCounters() {
        if (!countersNum) {
            return;
        }

        var progress = $progressCount.filter('[data-nk-count]');
        var numbers = $numberCount.filter('[data-nk-count]');
        countersNum = progress.length + numbers.length;

        // progress
        $progressCount.filter('[data-nk-count]').each(function eachProgressCount() {
            var $item = $(this);
            if (self.isInViewport($item)) {
                var count = {
                    curr: $item.attr('data-nk-count-from') || '0',
                    to: $item.attr('data-nk-count'),
                    mask: $item.attr('data-nk-mask') || '{$}%'
                };
                var $itemLine = $item.find('.nk-progress-line > div');
                var $itemLabel = $item.find('.nk-progress-percent');

                tween.to($itemLine, 1, {
                    width: count.to + '%',
                    force3D: true
                });
                tween.to(count, 1, {
                    curr: count.to,
                    roundProps: 'curr',
                    ease: Circ.easeIn,
                    onUpdate: function onUpdate() {
                        $itemLabel.text(count.mask.replace('{$}', count.curr));
                    }
                });
                $item.removeAttr('data-nk-count');
            }
        });

        // number
        $numberCount.filter('[data-nk-count]').each(function eachNumberCount() {
            var $item = $(this);
            if (self.isInViewport($item)) {
                var count = {
                    curr: $item.text(),
                    to: $item.attr('data-nk-count')
                };
                $item.removeAttr('data-nk-count data-nk-count-from');
                tween.to(count, 1, {
                    curr: count.to,
                    roundProps: 'curr',
                    ease: Circ.easeIn,
                    onUpdate: function onUpdate() {
                        $item.text(count.curr);
                    }
                });
            }
        });
    }

    self.throttleScroll(runCounters);
    runCounters();
}

/*------------------------------------------------------------------

  Init Side Buttons

  -------------------------------------------------------------------*/
  function _initSideButtons() {
    var self = this;
    var $sideButtons = $('.nk-side-buttons');

    // hide on scroll
    self.throttleScroll(function (type, scroll) {
        var start = 400;

        if (scroll > start) {
            $sideButtons.addClass('nk-side-buttons-show-scroll-top');
        } else {
            $sideButtons.removeClass('nk-side-buttons-show-scroll-top');
        }
    });

    // scroll top
    $doc.on('click', '.nk-scroll-top', function (e) {
        e.preventDefault();
        self.scrollTo('top');
    });
}

/*------------------------------------------------------------------

  Init Actions Like and Heart

  -------------------------------------------------------------------*/
  function _initActionsLike() {
    var self = this;

    // like / dislike animation init
    var $likeAnimation = void 0;
    var $dislikeAnimation = void 0;
    if (self.options.enableActionLikeAnimation) {
        $likeAnimation = $('<div class="nk-like-animation">' + self.options.templates.likeAnimationLiked + '</div>').appendTo($body);
        $dislikeAnimation = $('<div class="nk-dislike-animation">' + self.options.templates.likeAnimationDisliked + '</div>').appendTo($body);
    }
    function runLikeAnimation(type) {
        var $animateItem = type === 'like' ? $likeAnimation : $dislikeAnimation;
        tween.set($animateItem, {
            scale: 1,
            opacity: 0
        });
        tween.to($animateItem, 0.3, {
            scale: 1.1,
            opacity: 0.5,
            display: 'block',
            ease: Power2.easeIn,
            force3D: true,
            onComplete: function onComplete() {
                tween.to($animateItem, 0.3, {
                    scale: 1.2,
                    opacity: 0,
                    display: 'none',
                    ease: Power2.easeOut,
                    force3D: true
                });
            }
        });
    }

    // heart action
    $doc.on('click', '.nk-action-heart', function onActionHeartClick(e) {
        e.preventDefault();
        var $like = $(this);

        if ($like.hasClass('busy')) {
            return;
        }

        var $num = $like.find('.num');
        var type = $like.hasClass('liked') ? 'dislike' : 'like';
        var $parent = $like.parents('.nk-comment:eq(0), .nk-blog-post:eq(0)').eq(0);
        var updatedNum = void 0;
        var updatedIcon = void 0;
        $like.addClass('busy');
        self.options.events.actionHeart({
            $dom: $like,
            $parent: $parent,
            type: type,
            currentNum: parseInt($num.text(), 10),
            updateNum: function updateNum(num) {
                $num.text(num);
                updatedNum = 1;
                if (updatedNum && updatedIcon) {
                    $like.removeClass('busy');
                }
            },
            updateIcon: function updateIcon() {
                $like[type === 'like' ? 'addClass' : 'removeClass']('liked');
                updatedIcon = 1;
                if (updatedNum && updatedIcon) {
                    $like.removeClass('busy');
                }

                // like / dislike animation
                if (self.options.enableActionLikeAnimation) {
                    runLikeAnimation(type);
                }
            }
        });
    });

    // like action
    $doc.on('click', '.nk-action-like .like-icon, .nk-action-like .dislike-icon', function onLikeClick(e) {
        e.preventDefault();
        var $like = $(this);
        var $parentLike = $like.parent();

        if ($parentLike.hasClass('busy')) {
            return;
        }

        var isLiked = $parentLike.hasClass('liked');
        var isDisliked = $parentLike.hasClass('disliked');
        var isDislike = $like.hasClass('dislike-icon');

        var $num = $parentLike.find('.num');
        var $parent = $parentLike.parents('.nk-comment:eq(0), .nk-blog-post:eq(0)').eq(0);
        var type = isDislike ? 'dislike' : 'like';
        var updatedNum = void 0;
        var updatedIcon = void 0;
        $parentLike.addClass('busy');
        self.options.events.actionLike({
            $dom: $like,
            $parent: $parent,
            type: type,
            isLiked: isLiked,
            isDisliked: isDisliked,
            currentNum: parseInt($num.text(), 10),
            updateNum: function updateNum(num) {
                $num.text((num > 0 ? '+' : '') + num);
                updatedNum = 1;
                if (updatedNum && updatedIcon) {
                    $parentLike.removeClass('busy');
                }
            },
            updateIcon: function updateIcon() {
                $parentLike.removeClass('liked disliked');
                if (!(isLiked && !isDislike || isDisliked && isDislike)) {
                    $parentLike.addClass(type === 'like' ? 'liked' : 'disliked');
                }
                updatedIcon = 1;
                if (updatedNum && updatedIcon) {
                    $parentLike.removeClass('busy');
                }

                // like / dislike animation
                if (self.options.enableActionLikeAnimation) {
                    if (type === 'like' && !isLiked || type === 'dislike' && !isDisliked) {
                        runLikeAnimation(type);
                    }
                }
            }
        });
    });
}

/*------------------------------------------------------------------

  Anchors

  -------------------------------------------------------------------*/
  function _initAnchors() {
    var self = this;

    // click on anchors
    var $leftSide = $('.nk-navbar-left-side');
    var $rightSide = $('.nk-navbar-right-side');
    function closeNavs() {
        self.closeSide($leftSide);
        self.closeSide($rightSide);
        self.closeFullscreenNavbar();
    }
    $doc.on('click', '.navbar a, .nk-navbar a, a.btn, a.nk-btn, a.nk-anchor', function anchorsOnClick(e) {
        var isHash = this.hash;
        var isURIsame = this.baseURI === window.location.href;

        if (isHash && isURIsame) {
            // sometimes hashs have no valid selector like ##hash, it will throw errors
            try {
                var $hashBlock = $(isHash);
                var hash = isHash.replace(/^#/, '');

                if ($hashBlock.length || hash === 'top' || hash === 'bottom') {
                    // close navigations
                    closeNavs();

                    // add hash to address bar
                    if ($hashBlock.length) {
                        $hashBlock.attr('id', '');
                        document.location.hash = hash;
                        $hashBlock.attr('id', hash);
                    }

                    // scroll to block
                    self.scrollTo($hashBlock.length ? $hashBlock : hash);

                    e.preventDefault();
                }
            } catch (ev) {}
        }
    });

    // add active class on navbar items
    var $anchorItems = $('.nk-navbar .nk-nav > li > a[href*="#"]');
    var anchorBlocks = [];
    function hashInArray(item) {
        for (var k = 0; k < anchorBlocks.length; k++) {
            if (anchorBlocks[k].hash === item) {
                return k;
            }
        }
        return false;
    }
    // get all anchors + blocks on the page
    $anchorItems.each(function eachAnchors() {
        var hash = this.hash.replace(/^#/, '');
        if (!hash) {
            return;
        }

        var $item = $(this).parent();
        var $block = $('#' + hash);

        if (hash && $block.length || hash === 'top') {
            var inArray = hashInArray(hash);
            if (inArray === false) {
                anchorBlocks.push({
                    hash: hash,
                    $item: $item,
                    $block: $block
                });
            } else {
                anchorBlocks[inArray].$item = anchorBlocks[inArray].$item.add($item);
            }
        }
    });
    // prepare anchor list and listen for scroll to activate items in navbar
    function updateAnchorItemsPositions() {
        for (var k = 0; k < anchorBlocks.length; k++) {
            var item = anchorBlocks[k];
            var blockTop = 0;
            var blockH = wndH;
            if (item.$block.length) {
                blockTop = item.$block.offset().top;
                blockH = item.$block.innerHeight();
            }
            item.activate = blockTop - wndH / 2;
            item.deactivate = blockTop + blockH - wndH / 2;
        }
    }
    function setAnchorActiveItem(type, ST) {
        for (var k = 0; k < anchorBlocks.length; k++) {
            var item = anchorBlocks[k];
            var active = ST >= item.activate && ST < item.deactivate;
            
            var current_li = $(document).find('ul.nk-nav li.active');
            
            if(ST >= item.activate){

                $(current_li).addClass('temp-non-active');
                $(document).find('ul.nk-nav li').removeClass('active');
            } else {

                $('.temp-non-active').addClass('active').removeClass('temp-non-active');
            }
            item.$item[active ? 'addClass' : 'removeClass']('active');
        }
    }
    if (anchorBlocks.length) {
        updateAnchorItemsPositions();
        setAnchorActiveItem('static', $wnd.scrollTop());
        self.throttleScroll(setAnchorActiveItem);
        self.debounceResize(updateAnchorItemsPositions);
    }
}

/*------------------------------------------------------------------

  Init Line For Boxes
  <div class="nk-box nk-box-line"></div>

  -------------------------------------------------------------------*/
  function _initLinesForBoxes() {
    var self = this;
    var $rowsWithBoxes = void 0;

    $('.row').each(function eachRow() {
        if ($(this).find('> * > .nk-box-line').length) {
            $rowsWithBoxes = $rowsWithBoxes ? $rowsWithBoxes.add($(this)) : $(this);
        }
    });

    // support for VC
    $('.vc_row').each(function eachVCRow() {
        if ($(this).find('> div > div > div > .nk-box-line').length) {
            $rowsWithBoxes = $rowsWithBoxes ? $rowsWithBoxes.add($(this)) : $(this);
        }
    });

    if (!$rowsWithBoxes) {
        return;
    }

    function calculate() {
        $rowsWithBoxes.each(function eachRowWithBoxes() {
            var currentRowStart = 0;
            var rowDivs = [];
            var topPosition = 0;
            var $this = $(this);

            // check all rows and add in array
            $this.children('*').each(function eachChildrenRow() {
                topPosition = $(this).position().top;
                if (currentRowStart !== topPosition) {
                    currentRowStart = topPosition;
                    rowDivs.push($(this));
                } else if (rowDivs[rowDivs.length - 1]) {
                    rowDivs[rowDivs.length - 1] = rowDivs[rowDivs.length - 1].add($(this));
                } else {
                    rowDivs[(rowDivs.length || 1) - 1] = $(this);
                }
            });

            // support for VC
            if ($this.hasClass('vc_row')) {
                // remove additional classnames
                $(this).find('> div > div > div > .nk-box-line').removeClass('nk-box-line-top nk-box-last');

                // add new classnames
                for (var k = 0; k < rowDivs.length; k++) {
                    rowDivs[k].last().find('> div > div > .nk-box-line').addClass('nk-box-last');
                    if (k > 0) {
                        rowDivs[k].find('> div > div > .nk-box-line').addClass('nk-box-line-top');
                    }
                }

                // bootstrap
            } else {
                // remove additional classnames
                $this.find('> * > .nk-box-line').removeClass('nk-box-line-top nk-box-last');

                // add new classnames
                for (var _k = 0; _k < rowDivs.length; _k++) {
                    rowDivs[_k].last().children('.nk-box-line').addClass('nk-box-last');
                    if (_k > 0) {
                        rowDivs[_k].children('.nk-box-line').addClass('nk-box-line-top');
                    }
                }
            }
        });
    }

    calculate();
    self.debounceResize(calculate);
}

/*------------------------------------------------------------------

  Init Image Boxes

  -------------------------------------------------------------------*/
  function _initImageBoxes() {
    // overlay smart show
    $doc.on('mouseenter mouseleave', '.nk-image-box-4', function onImageBoxMouseEnterLeave(e) {
        var $overlay = $(this).find('.nk-image-box-overlay');
        var itemRect = $(this)[0].getBoundingClientRect();

        // detect mouse enter or leave
        var x = (itemRect.width / 2 - e.clientX + itemRect.left) / (itemRect.width / 2);
        var y = (itemRect.height / 2 - e.clientY + itemRect.top) / (itemRect.height / 2);
        var enter = e.type === 'mouseenter';
        var endX = '0%';
        var endY = '0%';
        if (Math.abs(x) > Math.abs(y)) {
            endX = (x > 0 ? '-10' : '10') + endX;
        } else {
            endY = (y > 0 ? '-10' : '10') + endY;
        }

        if (enter) {
            tween.set($overlay, {
                x: endX,
                y: endY
            });
        }
        tween.to($overlay, 0.25, {
            x: enter ? '0%' : endX,
            y: enter ? '0%' : endY,
            display: enter ? 'flex' : 'none',
            ease: Power1.easeInOut,
            force3D: true
        });
    });
}

/*------------------------------------------------------------------

  Init Video Blocks

  -------------------------------------------------------------------*/
  function _initVideoBlocks() {
    if (typeof window.VideoWorker === 'undefined') {
        return;
    }
    var self = this;

    // open fullscreen videos
    var openedFSVideo = void 0;
    self.openFullScreenVideo = function (url) {
        if (openedFSVideo) {
            return;
        }
        openedFSVideo = 1;

        // get api for this video
        self.FullScreenVideoApi = new VideoWorker(url, {
            autoplay: 1,
            loop: 0,
            mute: 0,
            controls: 1
        });

        // set video size
        function setVideoSize() {
            var ratio = 16 / 9;
            var resultW = void 0;
            var resultH = void 0;

            if (ratio > wndW / wndH) {
                resultW = wndW * 0.9;
                resultH = resultW / ratio;
            } else {
                resultH = wndH * 0.9;
                resultW = resultH * ratio;
            }
            self.FullScreenVideoWrapper.css({
                width: resultW,
                height: resultH,
                top: (wndH - resultH) / 2,
                left: (wndW - resultW) / 2
            });
        }

        // create fullscreen video wrapper if doesn't exist
        if (!self.FullScreenVideo) {
            self.FullScreenVideo = $('<div class="nk-video-fullscreen"></div>').appendTo($body);

            self.closeFullScreenVideo = function () {
                if (openedFSVideo) {
                    openedFSVideo = 0;

                    self.FullScreenVideoApi.pause();

                    // hide animation
                    tween.to(self.FullScreenVideo, 0.4, {
                        opacity: 0,
                        display: 'none',
                        force3D: true,
                        onComplete: function onComplete() {
                            self.FullScreenVideoWrapper.html('');
                        }
                    });
                    tween.to(self.FullScreenVideoWrapper, 0.4, {
                        scale: 0.9,
                        force3D: true
                    });

                    // restore body scrolling
                    self.bodyOverflow(0);
                }
            };

            // close icon
            $('<div class="nk-video-fullscreen-close">' + self.options.templates.fullscreenVideoClose + '</div>').on('click', self.closeFullScreenVideo).appendTo(self.FullScreenVideo);

            // video container
            self.FullScreenVideoWrapper = $('<div class="nk-video-fullscreen-cont"></div>').appendTo(self.FullScreenVideo);

            setVideoSize();
            self.debounceResize(setVideoSize);
        }

        // check api and run fullscreen
        if (self.FullScreenVideoApi && self.FullScreenVideoApi.isValid()) {
            self.FullScreenVideoApi.getIframe(function (iframe) {
                var $parent = $(iframe).parent();
                self.FullScreenVideoWrapper.append(iframe);
                $parent.remove();

                // pause audio
                if (typeof soundManager !== 'undefined') {
                    soundManager.pauseAll();
                }

                // show animation
                tween.fromTo(self.FullScreenVideo, 0.4, {
                    opacity: 0
                }, {
                    opacity: 1,
                    display: 'block'
                });
                tween.fromTo(self.FullScreenVideoWrapper, 0.4, {
                    opacity: 0,
                    scale: 0.9
                }, {
                    opacity: 1,
                    scale: 1,
                    delay: 0.3
                });

                // prevent body scrolling
                self.bodyOverflow(1);
            });
        }
    };
    $doc.on('click', '.nk-video-fullscreen-toggle', function videoFullscreenTogglerClick(e) {
        e.preventDefault();
        self.openFullScreenVideo($(this).attr('href'));
    });

    // init plain video
    function addPlainPlayButton($plainCont) {
        $plainCont.find('.nk-video-plain-toggle').html(self.options.templates.plainVideoIcon);
    }
    function addPlainLoadButton($plainCont) {
        $plainCont.find('.nk-video-plain-toggle').html(self.options.templates.plainVideoLoadIcon || self.options.templates.plainVideoIcon);
    }
    $('.nk-plain-video[data-video]').each(function plainVideoClick() {
        var $plainCont = $(this);
        var $plainIframe = void 0;
        var url = $(this).attr('data-video');
        var thumb = $(this).attr('data-video-thumb');
        var api = new VideoWorker(url, {
            autoplay: 0,
            loop: 0,
            mute: 0,
            controls: 1
        });

        if (api && api.isValid()) {
            var loaded = 0;
            api.getIframe(function (iframe) {
                // add iframe
                $plainIframe = $(iframe);
                var $parent = $plainIframe.parent();
                tween.set(iframe, {
                    opacity: 0,
                    visibility: 'hidden'
                });
                $plainIframe.appendTo($plainCont);
                $parent.remove();

                // add play button
                $plainCont.append('<span class="nk-video-plain-toggle"></span>');
                addPlainPlayButton($plainCont);

                // add play event
                $plainCont.on('click', function () {
                    if (isMobile) {
                        window.open(api.url);
                        return;
                    }

                    api.play();

                    // add loading button
                    if (!loaded) {
                        addPlainLoadButton($plainCont);
                    }
                });
            });
            // set thumb
            if (thumb) {
                $plainCont.css('background-image', 'url("' + thumb + '")');
            } else {
                api.getImageURL(function (imgSrc) {
                    $plainCont.css('background-image', 'url("' + imgSrc + '")');
                });
            }
            if (isMobile) {
                return;
            }
            api.on('play', function () {
                tween.to($plainIframe, 0.5, {
                    opacity: 1,
                    visibility: 'visible',
                    force3D: true,
                    onComplete: function onComplete() {
                        // add play button
                        if (!loaded) {
                            addPlainPlayButton($plainCont);
                            loaded = 1;
                        }
                    }
                });

                // pause audio
                if (typeof soundManager !== 'undefined') {
                    soundManager.pauseAll();
                }
            });
            api.on('pause', function () {
                tween.to($plainIframe, 0.5, {
                    opacity: 0,
                    force3D: true,
                    onComplete: function onComplete() {
                        tween.set($plainIframe, {
                            visibility: 'hidden'
                        });
                    }
                });
            });
        }
    });
}

/*------------------------------------------------------------------

  Init GIFs

  -------------------------------------------------------------------*/
  function _initGIF() {
    var self = this;

    // load gif in background
    function loadGif(url, cb) {
        var temp = new Image();
        temp.onload = function () {
            cb();
        };
        temp.src = url;
    }

    // play gif
    function playGif(item) {
        var $item = $(item);
        if (!item.gifPlaying) {
            item.gifPlaying = true;
            if (item.khGifLoaded) {
                $item.addClass('nk-gif-playing');
                $item.find('img').attr('src', $item.find('img').attr('data-gif'));
            } else if (!item.khGifLoading) {
                item.khGifLoading = 1;
                $item.addClass('nk-gif-loading');
                loadGif($item.find('img').attr('data-gif'), function () {
                    item.khGifLoaded = 1;
                    $item.removeClass('nk-gif-loading');
                    if (item.gifPlaying) {
                        item.gifPlaying = false;
                        playGif(item);
                    }
                });
            }
        }
    }

    // stop playing gif
    function stopGif(item) {
        var $item = $(item);
        if (item.gifPlaying) {
            item.gifPlaying = false;
            $item.removeClass('nk-gif-playing');
            $item.find('img').attr('src', $item.find('img').attr('data-gif-static'));
        }
    }

    // prepare gif containers
    $('.nk-gif').each(function eachGif() {
        var $this = $(this);
        // add toggle button
        $this.append('<a class="nk-gif-toggle">' + self.options.templates.gifIcon + '</a>');

        // add loading circle
        $this.append('<div class="nk-loading-spinner"><i></i></div>');

        $this.find('img').attr('data-gif-static', $this.find('img').attr('src'));
    });

    // hover gif
    $('.nk-gif-hover').on('mouseenter', function gifOnMouseEnter() {
        $(this).addClass('hover');
        playGif(this);
    }).on('mouseleave', function gifOnMouseLeave() {
        $(this).removeClass('hover');
        stopGif(this);
    });

    // click gif
    $('.nk-gif-click').on('click', function gifOnClick() {
        if (this.gifPlaying) {
            $(this).removeClass('hover');
            stopGif(this);
        } else {
            $(this).addClass('hover');
            playGif(this);
        }
    });

    // autoplay in viewport
    var $gifVP = $('.nk-gif-viewport');
    if ($gifVP.length) {
        self.throttleScroll(function () {
            $gifVP.each(function eachGifInVeiwport() {
                var inVP = self.isInViewport($(this), 1);
                if (inVP[0]) {
                    if (inVP[1].height / wndH < 0.7) {
                        if (inVP[0] === 1) {
                            playGif(this);
                        } else {
                            stopGif(this);
                        }
                    } else if (inVP[0] >= 0.7) {
                        playGif(this);
                    } else {
                        stopGif(this);
                    }
                } else {
                    stopGif(this);
                }
            });
        });
    }

    // autoplay gif
    $('.nk-gif:not(.nk-gif-click):not(.nk-gif-hover):not(.nk-gif-viewport)').each(function eachGifAutoplay() {
        playGif(this);
    });
}

/*------------------------------------------------------------------

  Init Info Boxes / Alerts

  -------------------------------------------------------------------*/
  function _initInfoBoxes() {
    var self = this;

    // close
    $doc.on('click', '.nk-info-box .nk-info-box-close', function onInfoboxCloseClick(e) {
        e.preventDefault();
        var $box = $(this).parents('.nk-info-box:eq(0)');
        tween.to($box, 0.3, {
            opacity: 0,
            onComplete: function onComplete() {
                tween.to($box, 0.3, {
                    height: 0,
                    padding: 0,
                    margin: 0,
                    display: 'none',
                    onComplete: function onComplete() {
                        self.debounceResize();
                    }
                });
            }
        });
    });
}

/*------------------------------------------------------------------

  Init Forms

  -------------------------------------------------------------------*/
  function _initForms() {
    var self = this;

    // Create Spinners in input number
    $('<span class="nk-form-control-number-up"></span>').insertAfter('.nk-form-control-number input');
    $('<span class="nk-form-control-number-down"></span>').insertBefore('.nk-form-control-number input');
    $doc.on('click', '.nk-form-control-number-up', function onFormControlNumberUpClick() {
        var $input = $(this).siblings('input');
        var max = $input.attr('max') || 9999999;

        var oldValue = parseFloat($input.val());
        var newVal = oldValue;
        if (oldValue < max) {
            newVal += 1;
        }
        $input.val(newVal);
        $input.trigger('change');
    });
    $doc.on('click', '.nk-form-control-number-down', function onFormControlNumberDownClick() {
        var $input = $(this).siblings('input');
        var min = $input.attr('min') || -9999999;

        var oldValue = parseFloat($input.val());
        var newVal = oldValue;
        if (oldValue > min) {
            newVal -= 1;
        }
        $input.val(newVal);
        $input.trigger('change');
    });

    if (typeof $.validator === 'undefined') {
        return;
    }
    // Validate Forms
    $('form:not(.nk-form-ajax):not(.nk-mchimp):not([novalidate])').each(function eachFromValidate() {
        $(this).validate({
            errorClass: 'nk-error',
            errorElement: 'div',
            errorPlacement: function errorPlacement(error, element) {
                var $parent = element.parent('.input-group, .nk-form-control-number');
                if ($parent.length) {
                    $parent.after(error);
                } else {
                    element.after(error);
                }
                self.debounceResize();
            }
        });
    });

    if (typeof $.fn.ajaxSubmit === 'undefined') {
        return;
    }
    // ajax form
    $('form.nk-form-ajax:not([novalidate])').each(function eachAjaxForm() {
        $(this).validate({
            errorClass: 'nk-error',
            errorElement: 'div',
            errorPlacement: function errorPlacement(error, element) {
                var $parent = element.parent('.input-group');
                if ($parent.length) {
                    $parent.after(error);
                } else {
                    element.after(error);
                }
                self.debounceResize();
            },

            // Submit the form via ajax (see: jQuery Form plugin)
            submitHandler: function submitHandler(form) {
                var $responseSuccess = $(form).find('.nk-form-response-success');
                var $responseError = $(form).find('.nk-form-response-error');
                $(form).ajaxSubmit({
                    type: 'POST',
                    success: function success(response) {
                        response = JSON.parse(response);
                        if (response.type && response.type === 'success') {
                            $responseError.hide();
                            $responseSuccess.html(response.response).show();
                            form.reset();
                        } else {
                            $responseSuccess.hide();
                            $responseError.html(response.response).show();
                        }
                        self.debounceResize();
                    },
                    error: function error(response) {
                        $responseSuccess.hide();
                        $responseError.html(response.responseText).show();
                        self.debounceResize();
                    }
                });
            }
        });
    });
}

/*------------------------------------------------------------------

  Init MailChimp

  -------------------------------------------------------------------*/
  function _initFormsMailChimp() {
    var $mchimp = $('form.nk-mchimp');
    if (typeof $.fn.ajaxSubmit === 'undefined' || typeof $.validator === 'undefined' || !$mchimp.length) {
        return;
    }
    var self = this;

    // Additional Validate Methods From MailChimp
    // Validate a multifield birthday
    $.validator.addMethod('mc_birthday', function (date, element, grouping_class) {
        var isValid = false;
        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class));
        if ($fields.filter(':filled').length === 0 && this.optional(element)) {
            isValid = true; // None have been filled out, so no error
        } else {
            var dateArray = new Array();
            dateArray.month = $fields.filter('input[name*="[month]"]').val();
            dateArray.day = $fields.filter('input[name*="[day]"]').val();

            // correct month value
            dateArray.month -= 1;

            var testDate = new Date(1970, dateArray.month, dateArray.day);
            if (testDate.getDate() !== dateArray.day || testDate.getMonth() !== dateArray.month) {
                isValid = false;
            } else {
                isValid = true;
            }
        }
        return isValid;
    }, 'Please enter a valid month and day.');

    // Validate a multifield date
    $.validator.addMethod('mc_date', function (date, element, grouping_class) {
        var isValid = false;
        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class));
        if ($fields.filter(':filled').length === 0 && this.optional(element)) {
            isValid = true; // None have been filled out, so no error
        } else {
            var dateArray = new Array();
            dateArray.month = $fields.filter('input[name*="[month]"]').val();
            dateArray.day = $fields.filter('input[name*="[day]"]').val();
            dateArray.year = $fields.filter('input[name*="[year]"]').val();

            // correct month value
            dateArray.month -= 1;

            // correct year value
            if (dateArray.year.length < 4) {
                dateArray.year = parseInt(dateArray.year, 10) < 50 ? 2000 + parseInt(dateArray.year, 10) : 1900 + parseInt(dateArray.year, 10);
            }

            var testDate = new Date(dateArray.year, dateArray.month, dateArray.day);
            if (testDate.getDate() !== dateArray.day || testDate.getMonth() !== dateArray.month || testDate.getFullYear() !== dateArray.year) {
                isValid = false;
            } else {
                isValid = true;
            }
        }
        return isValid;
    }, 'Please enter a valid date');

    // Validate a multifield phone number
    $.validator.addMethod('mc_phone', function (phone_number, element, grouping_class) {
        var isValid = false;
        var $fields = $('input:filled:not(:hidden)', $(element).closest(grouping_class));
        if ($fields.length === 0 && this.optional(element)) {
            isValid = true; // None have been filled out, so no error
        } else {
            phone_number = $fields.eq(0).val() + $fields.eq(1).val() + $fields.eq(2).val();
            isValid = phone_number.length === 10 && phone_number.match(/[0-9]{9}/);
        }
        return isValid;
    }, 'Please specify a valid phone number');

    $.validator.addMethod('skip_or_complete_group', function (value, element, grouping_class) {
        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class)),
        $fieldsFirst = $fields.eq(0),
        validator = $fieldsFirst.data('valid_skip') ? $fieldsFirst.data('valid_skip') : $.extend({}, this),
        numberFilled = $fields.filter(function () {
            return validator.elementValue(this);
        }).length,
        isValid = numberFilled === 0 || numberFilled === $fields.length;

        // Store the cloned validator for future validation
        $fieldsFirst.data('valid_skip', validator);

        // If element isn't being validated, run each field's validation rules
        if (!$(element).data('being_validated')) {
            $fields.data('being_validated', true);
            $fields.each(function () {
                validator.element(this);
            });
            $fields.data('being_validated', false);
        }
        return isValid;
    }, $.validator.format('Please supply missing fields.'));

    $.validator.addMethod('skip_or_fill_minimum', function (value, element, options) {
        var $fields = $(options[1], element.form),
        $fieldsFirst = $fields.eq(0),
        validator = $fieldsFirst.data('valid_skip') ? $fieldsFirst.data('valid_skip') : $.extend({}, this),
        numberFilled = $fields.filter(function () {
            return validator.elementValue(this);
        }).length,
        isValid = numberFilled === 0 || numberFilled >= options[0];
        // Store the cloned validator for future validation
        $fieldsFirst.data('valid_skip', validator);

        // If element isn't being validated, run each skip_or_fill_minimum field's validation rules
        if (!$(element).data('being_validated')) {
            $fields.data('being_validated', true);
            $fields.each(function () {
                validator.element(this);
            });
            $fields.data('being_validated', false);
        }
        return isValid;
    }, $.validator.format('Please either skip these fields or fill at least {0} of them.'));

    $.validator.addMethod('zipcodeUS', function (value, element) {
        return this.optional(element) || /^\d{5}-\d{4}$|^\d{5}$/.test(value);
    }, 'The specified US ZIP Code is invalid');

    $mchimp.each(function () {
        var $form = $(this);
        if (!$form.length) {
            return;
        }

        var validator = $form.validate({
            errorClass: 'nk-error',
            errorElement: 'div',
            // Grouping fields makes jQuery Validation display one error for all the fields in the group
            // It doesn't have anything to do with how the fields are validated (together or separately),
            // it's strictly for visual display of errors
            groups: function groups() {
                var groups = {};
                $form.find('.input-group').each(function () {
                    var inputs = $(this).find('input:text:not(:hidden)'); // TODO: What about non-text inputs like number?
                    if (inputs.length > 1) {
                        var mergeName = inputs.first().attr('name');
                        var fieldNames = $.map(inputs, function (f) {
                            return f.name;
                        });
                        groups[mergeName.substring(0, mergeName.indexOf('['))] = fieldNames.join(' ');
                    }
                });
                return groups;
            },

            // Place a field's inline error HTML just before the div.input-group closing tag
            errorPlacement: function errorPlacement(error, element) {
                element.closest('.input-group').after(error);
                self.debounceResize();
            },

            // Submit the form via ajax (see: jQuery Form plugin)
            submitHandler: function submitHandler() {
                var $responseSuccess = $form.find('.nk-form-response-success');
                var $responseError = $form.find('.nk-form-response-error');
                var url = $form.attr('action');
                url = url.replace('/post?u=', '/post-json?u=');
                url += '&c=?';

                $form.ajaxSubmit({
                    type: 'GET',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    url: url,
                    success: function success(resp) {
                        $responseSuccess.hide();
                        $responseError.hide();

                        // On successful form submission, display a success message and reset the form
                        if (resp.result === 'success') {
                            $responseSuccess.show().html(resp.msg);
                            $form[0].reset();

                            // If the form has errors, display them, inline if possible, or appended to #mce-error-response
                        } else {
                            // Example errors - Note: You only get one back at a time even if you submit several that are bad.
                            // Error structure - number indicates the index of the merge field that was invalid, then details
                            // Object {result: "error", msg: "6 - Please enter the date"}
                            // Object {result: "error", msg: "4 - Please enter a value"}
                            // Object {result: "error", msg: "9 - Please enter a complete address"}

                            // Try to parse the error into a field index and a message.
                            // On failure, just put the dump thing into in the msg letiable.
                            var index = -1;
                            var msg = void 0;
                            try {
                                var parts = resp.msg.split(' - ', 2);
                                if (typeof parts[1] === 'undefined') {
                                    msg = resp.msg;
                                } else {
                                    i = parseInt(parts[0], 10);
                                    if (i.toString() === parts[0]) {
                                        index = parts[0];
                                        msg = parts[1];
                                    } else {
                                        index = -1;
                                        msg = resp.msg;
                                    }
                                }
                            } catch (e) {
                                index = -1;
                                msg = resp.msg;
                            }

                            try {
                                // If index is -1 if means we don't have data on specifically which field was invalid.
                                // Just lump the error message into the generic response div.
                                if (index === -1) {
                                    $responseError.show().html(msg);
                                } else {
                                    var fieldName = $form.find('input[name]:eq(' + index + ')').attr('name'); // Make sure this exists
                                    var data = {};
                                    data[fieldName] = msg;
                                    validator.showErrors(data);
                                }
                            } catch (e) {
                                $responseError.show().html(msg);
                            }
                        }
                        self.debounceResize();
                    },
                    error: function error(response) {
                        $responseSuccess.hide();
                        $responseError.html(response.responseText).show();
                        self.debounceResize();
                    }
                });
            }
        });
});

    // Custom validation methods for fields with certain css classes
    $.validator.addClassRules('birthday', { digits: true, mc_birthday: '.datefield' });
    $.validator.addClassRules('datepart', { digits: true, mc_date: '.datefield' });
    $.validator.addClassRules('phonepart', { digits: true, mc_phone: '.phonefield' });
}

/*------------------------------------------------------------------

  Init Blog

  -------------------------------------------------------------------*/
  function _initTeamMembers() {
    var $teamMembers = $('.nk-team-member');

    // add hover classname
    $teamMembers.on('mouseover', '.nk-team-member-photo, .nk-team-member-info', function onTeamMembersMouseOver() {
        $(this).parents('.nk-team-member:eq(0)').addClass('hover');
    }).on('mouseleave', '.nk-team-member-photo, .nk-team-member-info', function onTeamMembersMouseLeave() {
        $(this).parents('.nk-team-member:eq(0)').removeClass('hover');
    });
}

/*------------------------------------------------------------------

  Init Audio Player

  -------------------------------------------------------------------*/
  function _initAudioPlayer() {
    if (typeof soundManager === 'undefined') {
        return;
    }

    var _self = this;
    var progressBusy = false; // busy when user drag progress bar

    /* Plain audio players */
    var $playersPlain = $('.nk-audio-plain');
    // add play and pause buttons
    $playersPlain.prepend(_self.options.templates.audioPlainButton);
    function PlayersPlain($item) {
        var self = this;
        self.$item = $item;
        self.url = $item.attr('data-src');
        self.$playPauseBtn = $item.find('.nk-audio-plain-play-pause');
        self.$progress = $item.find('.nk-audio-progress-current');

        self.$timer = $item.find('.nk-audio-plain-duration');
        self.$timer.attr('data-duration', self.$timer.text());

        function onPlay() {
            $item.addClass('nk-audio-plain-playing');
        }
        function onStop() {
            self.seek(0);
            self.step();
            self.$item.removeClass('nk-audio-plain-playing');
            self.$timer.text(self.$timer.attr('data-duration'));
        }
        self.api = soundManager.createSound({
            volume: 100,
            whileplaying: function whileplaying() {
                self.step();
            },

            onplay: onPlay,
            onresume: onPlay,
            onpause: function onpause() {
                self.$item.removeClass('nk-audio-plain-playing');
                self.$timer.text(self.$timer.attr('data-duration'));
            },

            onstop: onStop,
            onfinish: onStop,
            onload: function onload(ok) {
                if (!ok && this._iO && this._iO.onerror) {
                    this._iO.onerror();
                }
            }
        });

        self.$playPauseBtn.on('click', function () {
            if (!self.api.paused && self.api.playState && self.api.url) {
                self.pause();
            } else {
                self.play();
            }
        });
    }
    PlayersPlain.prototype = {
        /**
        * Play a song in the playlist.
        * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
        */
        play: function play() {
            // pause all players
            soundManager.pauseAll();

            // Begin playing the sound.
            this.api.play({
                url: this.url
            });
        },


        /**
        * Pause the currently playing track.
        */
        pause: function pause() {
            // Puase the sound.
            soundManager.pauseAll();
        },

        /**
        * Seek to a new position in the currently playing track.
        * @param  {Number} per Percentage through the song to skip.
        */
        seek: function seek(per) {
            this.api.setPosition(this.api.duration * per);
        },

        /**
        * The step called within requestAnimationFrame to update the playback position.
        */
        step: function step() {
            var self = this;
            // Determine our current seek position.
            var seek = self.api.position || 0;
            self.progress = seek / self.api.duration;
            self.$timer[0].innerHTML = self.formatTime(Math.round(seek));

            if (!progressBusy) {
                self.$progress[0].style.width = (self.progress * 100 || 0) + '%';
            }
        },


        /**
        * Format the time from seconds to M:SS.
        * @param  {Number} secs Seconds to format.
        * @return {String}      Formatted time.
        */
        formatTime: function formatTime(msec) {
            var secs = Math.round(msec / 1000) || 0;
            var minutes = Math.floor(secs / 60) || 0;
            minutes = (minutes < 10 ? '0' : 0) + minutes;
            var seconds = secs - minutes * 60;
            return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        }
    };

    // progress
    if (typeof Hammer !== 'undefined') {
        var $progresses = $playersPlain.find('.nk-audio-progress');
        $progresses.each(function eachProgress() {
            var $curProgressCont = $(this);
            var $curProgres = $curProgressCont.children();
            var curApi = void 0;
            var progressW = void 0;
            var progressCurW = void 0;
            var progressStart = false;
            var HammerProgress = new Hammer.Manager($curProgressCont[0]);
            HammerProgress.add(new Hammer.Pan({
                pointers: 1,
                threshold: 0
            }));
            HammerProgress.add(new Hammer.Press({
                time: 1
            }));
            HammerProgress.on('pan press pressup', function (e) {
                // start
                if (e.type === 'press' || progressStart === false) {
                    progressBusy = true;
                    progressW = $curProgressCont.width();
                    progressStart = e.pointers[0].clientX - $curProgressCont[0].getBoundingClientRect().left;
                    $curProgressCont.addClass('hover');
                }

                // each
                progressCurW = Math.min(1, Math.max(0, (progressStart + e.deltaX) / progressW));
                $curProgres[0].style.width = progressCurW * 100 + '%';

                // end
                if (e.isFinal || e.type === 'pressup') {
                    if (!curApi) {
                        curApi = $curProgressCont.parents('.nk-audio-player-main, .nk-audio-plain')[0].audioAPI;
                    }
                    if (curApi) {
                        curApi.seek(progressCurW);
                    }

                    $curProgressCont.removeClass('hover');
                    progressBusy = false;
                    progressStart = false;
                }

                e.preventDefault();
            });
        });
    }

    soundManager.onready(function () {
        if ($playersPlain.length) {
            $playersPlain.each(function eachPlayersPlain() {
                this.audioAPI = new PlayersPlain($(this));
            });
        }
    });
}

/*------------------------------------------------------------------

  Facebook

  -------------------------------------------------------------------*/
  function _initFacebook() {
    if (!$('.fb-page').length) {
        return;
    }
    $body.append('<div id="fb-root"></div>');

    (function facebookClosure(d, s, id) {
        if (location.protocol === 'file:') {
            return;
        }
        var fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        var js = d.createElement(s);
        js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4';
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
}

/*------------------------------------------------------------------

  Init Instagram

  -------------------------------------------------------------------*/
  function _initInstagram() {
    var self = this;
    var $instagram = $('.nk-instagram');
    if (!$instagram.length || !self.options.templates.instagram) {
        return;
    }

    /**
     * Templating a instagram item using '{{ }}' braces
     * @param  {Object} data Instagram item details are passed
     * @return {String} Templated string
     */
     function templating(data, temp) {
        var tempVariables = ['link', 'image', 'caption'];

        for (var _i = 0, len = tempVariables.length; _i < len; _i++) {
            temp = temp.replace(new RegExp('{{' + tempVariables[_i] + '}}', 'gi'), data[tempVariables[_i]]);
        }

        return temp;
    }

    $instagram.each(function eachInstagram() {
        var $this = $(this);
        var options = {
            userID: $this.attr('data-instagram-user-id') || null,
            count: $this.attr('data-instagram-count') || 6,
            template: $this.attr('data-instagram-template') || self.options.templates.instagram,
            quality: $this.attr('data-instagram-quality') || 'sm', // sm, md, lg
            loadingText: self.options.templates.instagramLoadingText,
            failText: self.options.templates.instagramFailText,
            apiPath: self.options.templates.instagramApiPath
        };

        // stop if running in file protocol
        if (window.location.protocol === 'file:') {
            $this.html('<div class="col-12">' + options.failText + '</div>');
            console.error('You should run you website on webserver with PHP to get working Instagram');
            return;
        }

        $this.html('<div class="col-12">' + options.loadingText + '</div>');

        // Fetch instagram images
        $.getJSON(options.apiPath, {
            userID: options.userID,
            count: options.count
        }, function (response) {
            $this.html('');

            for (var _i2 = 0; _i2 < options.count; _i2++) {
                var instaItem = false;
                if (response[_i2]) {
                    instaItem = response[_i2];
                } else if (response.statuses && response.statuses[_i2]) {
                    instaItem = response.statuses[_i2];
                } else {
                    break;
                }

                var resolution = 'thumbnail';
                if (options.quality === 'md') {
                    resolution = 'low_resolution';
                }
                if (options.quality === 'lg') {
                    resolution = 'standard_resolution';
                }

                var tempData = {
                    link: instaItem.link,
                    image: instaItem.images[resolution].url,
                    caption: instaItem.caption
                };

                $this.append(templating(tempData, options.template));
            }
        }).fail(function (a) {
            $this.html('<div class="col-12">' + options.failText + '</div>');
            $.error(a.responseText);
        });
    });
}

/*------------------------------------------------------------------

  Init Twitter

  -------------------------------------------------------------------*/
  function _initTwitter() {
    var self = this;
    var $twtFeeds = $('.nk-twitter-list');
    if (!$twtFeeds.length || !self.options.templates.twitter) {
        return;
    }

    /**
     * Templating a tweet using '{{ }}' braces
     * @param  {Object} data Tweet details are passed
     * @return {String}      Templated string
     */
     function templating(data, temp) {
        var tempVariables = ['date', 'tweet', 'avatar', 'url', 'retweeted', 'screen_name', 'user_name'];

        for (var _i3 = 0, len = tempVariables.length; _i3 < len; _i3++) {
            temp = temp.replace(new RegExp('{{' + tempVariables[_i3] + '}}', 'gi'), data[tempVariables[_i3]]);
        }

        return temp;
    }

    $twtFeeds.each(function eachTwitterFeed() {
        var $this = $(this);
        var options = {
            username: $this.attr('data-twitter-user-name') || null,
            list: null,
            hashtag: $this.attr('data-twitter-hashtag') || null,
            count: $this.attr('data-twitter-count') || 2,
            hideReplies: $this.attr('data-twitter-hide-replies') === 'true',
            template: $this.attr('data-twitter-template') || self.options.templates.twitter,
            loadingText: self.options.templates.twitterLoadingText,
            failText: self.options.templates.twitterFailText,
            apiPath: self.options.templates.twitterApiPath
        };

        // stop if running in file protocol
        if (window.location.protocol === 'file:') {
            $this.html(options.failText);
            console.error('You should run you website on webserver with PHP to get working Twitter');
            return;
        }

        // Set loading
        $this.html('<span>' + options.loadingText + '</span>');

        // Fetch tweets
        $.getJSON(options.apiPath, {
            username: options.username,
            list: options.list,
            hashtag: options.hashtag,
            count: options.count,
            exclude_replies: options.hideReplies
        }, function (twt) {
            $this.html('');

            for (var _i4 = 0; _i4 < options.count; _i4++) {
                var tweet = false;
                if (twt[_i4]) {
                    tweet = twt[_i4];
                } else if (twt.statuses && twt.statuses[_i4]) {
                    tweet = twt.statuses[_i4];
                } else {
                    break;
                }

                var tempData = {
                    user_name: tweet.user.name,
                    date: tweet.date_formatted,
                    tweet: tweet.text_entitled,
                    avatar: '<img src="' + tweet.user.profile_image_url + '" />',
                    url: 'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str,
                    retweeted: tweet.retweeted,
                    screen_name: '@' + tweet.user.screen_name
                };

                $this.append(templating(tempData, options.template));
            }
        }).fail(function (a) {
            $this.html(options.failText);
            $.error(a.responseText);
        });
    });
}

/*------------------------------------------------------------------

  Init Cookie Alert

  -------------------------------------------------------------------*/
  function _initCookieAlert() {
    var self = this;
    var confirmedCookieName = 'nk_cookie_alert_dismissed';
    var expiration = 365;
    var showTimeout = 2000;

    // stop if already dismissed
    if (!self.options.enableCookieAlert || document.cookie.indexOf(confirmedCookieName) > -1 || window.navigator && window.navigator.CookiesOK) {
        return;
    }

    // create alert
    var $alert = $('<div class="nk-cookie-alert">').hide().append(self.options.templates.cookieAlert).appendTo($body);

    // hide alert
    function hideAlert() {
        tween.to($alert, 0.5, {
            opacity: 0,
            display: 'none'
        });
    }

    // show alert
    function showAlert() {
        tween.set($alert, {
            opacity: 0,
            display: 'none',
            y: 20
        });
        tween.to($alert, 0.5, {
            opacity: 1,
            display: 'block',
            y: 0,
            force3D: true
        });
    }

    // set cookie after confirmation
    function setConfirmed() {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiration);
        exdate = exdate.toUTCString();
        document.cookie = confirmedCookieName + '=yes;expires=' + exdate + ';path=/';
    }

    $wnd.on('load', function () {
        setTimeout(showAlert, showTimeout);
    });
    $alert.on('click', '.nk-cookie-alert-confirm', function () {
        hideAlert();
        setConfirmed();
    });
    $alert.on('click', '.nk-cookie-alert-close', hideAlert);
}

/*------------------------------------------------------------------

  Init Plugin Sticky Sidebar

  -------------------------------------------------------------------*/
  function _initPluginStickySidebar() {
    if (typeof $.fn.stick_in_parent === 'undefined') {
        return;
    }

    $('.nk-sidebar-sticky').each(function eachStickySidebar() {
        var $this = $(this);
        var $parent = $this.parent();

        $parent.addClass('nk-sidebar-sticky-parent');

        $this.wrapInner('<div>').children().stick_in_parent({
            parent: $parent,
            recalc_every: 50,
            offset_top: parseInt($this.attr('data-offset-top'), 10) || 50,

            // fixed ADS reloading issue https://github.com/leafo/sticky-kit/issues/45
            spacer: false
        }

        // we need to set min height on parent block (in theme it is equal height column) to prevent sidebar content jumping
        ).on('sticky_kit:unbottom sticky_kit:stick sticky_kit:bottom', function onStick() {
            $parent.css('min-height', $(this).height());
        }).on('sticky_kit:unstick', function () {
            $parent.css('min-height', '');
        });
    });
}

/* FastClick */
function _initPluginFastClick() {
    if (typeof FastClick !== 'undefined') {
        FastClick.attach(document.body);
    }
}

/* Nano Scroller */
function _initPluginNano($context) {
    if (typeof $.fn.nanoScroller !== 'undefined') {
        ($context || $doc).find('.nano').nanoScroller();
    }
}

/* Jarallax */
function _initPluginJarallax() {
    if (typeof $.fn.jarallax === 'undefined') {
        return;
    }
    var self = this;

    // header parallax
    var $parallaxHeader = $('.nk-header-title-parallax, .nk-header-title-parallax-opacity').eq(0);
    if ($parallaxHeader.length) {
        var $headerImage = $parallaxHeader.find('> .bg-image > div');
        var $headerContent = $parallaxHeader.find('> .bg-image');
        var headerParallaxScroll = $parallaxHeader.hasClass('nk-header-title-parallax');
        var headerParallaxOpacity = $parallaxHeader.hasClass('nk-header-title-parallax-opacity');
        $parallaxHeader.jarallax({
            type: 'custom',
            imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            imgWidth: 1,
            imgHeight: 1,
            onScroll: function onScroll(calc) {
                var scrollImg = Math.min(100, 100 * (1 - calc.visiblePercent));
                var scrollInfo = Math.max(0, Math.min(1, calc.visiblePercent + 0.3 * (calc.visiblePercent - 1)));

                // fix if top banner not on top
                if (calc.beforeTop > 0) {
                    scrollImg = 0;
                    scrollInfo = 0;
                }

                if (headerParallaxScroll) {
                    $headerImage.css({
                        transform: 'translateY(' + scrollImg + 'px) translateZ(0)'
                    });
                    $headerContent.css({
                        transform: 'translateY(' + scrollInfo + 'px) translateZ(0)'
                    });
                }
                if (headerParallaxOpacity) {
                    $headerContent.css({
                        opacity: calc.visiblePercent < 0 || calc.beforeTop > 0 ? 1 : calc.visiblePercent
                    });
                }
            }
        });
    }

    // footer parallax
    var $parallaxFooter = $('.nk-footer-parallax, .nk-footer-parallax-opacity').eq(0);
    if ($parallaxFooter.length) {
        var $content = $parallaxFooter.find('> .container');
        var footerParallaxOpacity = $parallaxFooter.hasClass('nk-footer-parallax-opacity');
        $parallaxFooter.jarallax({
            type: 'custom',
            imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            imgWidth: 1,
            imgHeight: 1,
            onScroll: function onScroll(calc) {
                if (footerParallaxOpacity) {
                    var percent = Math.max(0, Math.min(1, calc.visiblePercent + 0.3 * (calc.visiblePercent - 1)));
                    $content.css({
                        opacity: percent
                    });
                }
            }
        });
    }

    // video backgrounds
    $('.bg-video[data-video]').each(function eachBgVideo() {
        $(this).attr('data-jarallax-video', $(this).attr('data-video'));
        $(this).removeAttr('data-video');
    });

    // primary parallax
    $('.bg-image-parallax, .bg-video-parallax').jarallax({
        speed: self.options.parallaxSpeed
    });

    // video without parallax
    $('.bg-video:not(.bg-video-parallax)').jarallax({
        speed: 1
    });
}

/* Flickity */
function _initPluginFlickity() {
    if (typeof window.Flickity === 'undefined') {
        return;
    }

    var self = this;

    function addDefaultArrows($carousel) {
        $('<div class="nk-flickity-arrow nk-flickity-arrow-prev"><span class="nk-icon-arrow-left"></span></div>').on('click', function () {
            $carousel.flickity('previous');
        }).appendTo($carousel);

        $('<div class="nk-flickity-arrow nk-flickity-arrow-next"><span class="nk-icon-arrow-right"></span></div>').on('click', function () {
            $carousel.flickity('next');
        }).appendTo($carousel);
    }

    function updateCustomArrows($carousel) {
        var data = $carousel.children('.nk-carousel-inner').data('flickity');
        var currIndex = data.selectedIndex;
        var nextIndex = void 0;
        var prevIndex = void 0;

        // get next and prev cells
        if (currIndex === 0) {
            nextIndex = 1;
            prevIndex = data.cells.length - 1;
        } else if (currIndex === data.cells.length - 1) {
            nextIndex = 0;
            prevIndex = data.cells.length - 2;
        } else {
            nextIndex = currIndex + 1;
            prevIndex = currIndex - 1;
        }
        var $nextCell = $(data.cells[nextIndex].element);
        var $prevCell = $(data.cells[prevIndex].element);
        var $currCell = $(data.cells[currIndex].element);

        // get name and sources
        var nextName = $nextCell.find('.nk-carousel-item-name').text();
        var prevName = $prevCell.find('.nk-carousel-item-name').text();
        var currName = $currCell.find('.nk-carousel-item-name').html();
        var currLinks = $currCell.find('.nk-carousel-item-links').html();

        // add info to buttons
        $carousel.find('.nk-carousel-next > .nk-carousel-arrow-name').html(nextName);
        $carousel.find('.nk-carousel-prev > .nk-carousel-arrow-name').html(prevName);
        $carousel.find('.nk-carousel-current > .nk-carousel-name').html(currName);
        $carousel.find('.nk-carousel-current > .nk-carousel-links').html(currLinks);
    }

    // prevent click event fire when drag carousel
    function noClickEventOnDrag($carousel) {
        $carousel.on('dragStart.flickity', function carouselOnDragStart() {
            $(this).find('.flickity-viewport').addClass('is-dragging');
        });
        $carousel.on('dragEnd.flickity', function carouselOnDragEnd() {
            $(this).find('.flickity-viewport').removeClass('is-dragging');
        });
    }

    // carousel 1
    var $carousel1 = $('.nk-carousel');
    if ($carousel1.length) {
        $carousel1.children('.nk-carousel-inner').each(function eachCarousel1() {
            $(this).flickity({
                pageDots: $(this).parent().attr('data-dots') === 'true' || false,
                autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
                prevNextButtons: false,
                wrapAround: true,
                cellAlign: $(this).parent().attr('data-cell-align') || 'center'
            });
            if ($(this).parent().attr('data-arrows') === 'true') {
                addDefaultArrows($(this));
            }
            updateCustomArrows($(this).parent());
        }).on('select.flickity', function carousel1OnSelect() {
            updateCustomArrows($(this).parent());
        });
        $carousel1.on('click', '.nk-carousel-next', function carousel1NextOnClick() {
            $(this).parent().children('.nk-carousel-inner').flickity('next');
        });
        $carousel1.on('click', '.nk-carousel-prev', function carousel1PrevOnClick() {
            $(this).parent().children('.nk-carousel-inner').flickity('previous');
        });
        noClickEventOnDrag($carousel1.children('.nk-carousel-inner'));
    }

    // carousel 2
    $('.nk-carousel-2 > .nk-carousel-inner').each(function eachCarousel2() {
        $(this).flickity({
            pageDots: $(this).parent().attr('data-dots') === 'true' || false,
            autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
            prevNextButtons: false,
            wrapAround: true,
            cellAlign: $(this).parent().attr('data-cell-align') || 'center'
        });
        if ($(this).parent().attr('data-arrows') === 'true') {
            addDefaultArrows($(this));
        }
        noClickEventOnDrag($(this));
    });

    // carousel 3
    var $carousel3 = $('.nk-carousel-3');
    // set height for items
    function setHeightCarousel3() {
        $carousel3.each(function eachCarousel3() {
            var $allImages = $(this).find('img');
            var size = $(this).attr('data-size') || 0.8;
            var resultH = wndH * size;
            var maxItemW = Math.min($(this).parent().width(), wndW) * size;
            $allImages.each(function eachCarousel3Images() {
                if (this.naturalWidth && this.naturalHeight && resultH * this.naturalWidth / this.naturalHeight > maxItemW) {
                    resultH = maxItemW * this.naturalHeight / this.naturalWidth;
                }
            });
            $allImages.css('height', resultH);
            $(this).children('.nk-carousel-inner').flickity('reposition');
        });
    }
    if ($carousel3.length) {
        $carousel3.children('.nk-carousel-inner').each(function eachCarousel3() {
            $(this).flickity({
                pageDots: $(this).parent().attr('data-dots') === 'true' || false,
                autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
                prevNextButtons: false,
                wrapAround: true,
                cellAlign: $(this).parent().attr('data-cell-align') || 'center'
            });
            updateCustomArrows($(this).parent());
            if ($(this).parent().attr('data-arrows') === 'true') {
                addDefaultArrows($(this));
            }
        }).on('select.flickity', function carousel3OnSelect() {
            updateCustomArrows($(this).parent());
        });
        $carousel3.on('click', '.nk-carousel-next', function carousel3OnNextClick() {
            $(this).parents('.nk-carousel-3:eq(0)').children('.nk-carousel-inner').flickity('next');
        });
        $carousel3.on('click', '.nk-carousel-prev', function carousel3OnPrevClick() {
            $(this).parents('.nk-carousel-3:eq(0)').children('.nk-carousel-inner').flickity('previous');
        });
        setHeightCarousel3();
        self.debounceResize(setHeightCarousel3);
        noClickEventOnDrag($carousel3.children('.nk-carousel-inner'));
    }

    // update products carousel
    var $storeCarousel = $('.nk-carousel-1, .nk-carousel-2, .nk-carousel-3').filter('.nk-store');
    function updateStoreProducts() {
        $storeCarousel.each(function eachStoreCarousel() {
            var currentTallest = 0;
            var currentRowStart = 0;
            var rowDivs = [];
            var topPosition = 0;
            var currentDiv = 0;
            var $el = void 0;
            $(this).find('.nk-product').each(function eachProduct() {
                $el = $(this);
                $el.css('height', '');
                topPosition = $el.position().top;

                if (currentRowStart !== topPosition) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].css('height', currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = $el.innerHeight();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = currentTallest < $el.innerHeight() ? $el.innerHeight() : currentTallest;
                }
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].css('height', currentTallest);
                }
            });
        });
    }
    if ($storeCarousel.length) {
        self.debounceResize(updateStoreProducts);
        updateStoreProducts();
    }

    // check for images loaded and call resize
    if (typeof $.fn.imagesLoaded !== 'undefined') {
        $('.nk-carousel, .nk-carousel-1, .nk-carousel-2, .nk-carousel-3').each(function eachCarousel() {
            if ($(this).find('img').length) {
                $(this).imagesLoaded({}, function () {
                    self.debounceResize();
                });
            }
        });
    }
}

/* Isotope */
function _initPluginIsotope() {
    if (typeof window.Isotope === 'undefined') {
        return;
    }
    var self = this;

    $('.nk-isotope').each(function eachIsotope() {
        var $grid = $(this).isotope({
            itemSelector: '.nk-isotope-item'
        });
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });
        $grid.on('arrangeComplete', function () {
            self.debounceResize();
        });

        // filter
        var $filter = $(this).prev('.nk-isotope-filter');
        if ($filter.length) {
            $filter.on('click', '[data-filter]', function isotopeFilterOnClick(e) {
                e.preventDefault();
                var filter = $(this).attr('data-filter');

                $(this).addClass('active').siblings().removeClass('active');

                $grid.isotope({
                    filter: filter === '*' ? '' : '[data-filter*=' + filter + ']'
                });
            });
        }
    });
}

/* PhotoSwipe */
function _initPluginPhotoswipe() {
    var $gallery = $('.nk-popup-gallery');
    if (typeof PhotoSwipe === 'undefined' || !$gallery.length) {
        return;
    }

    // prepare photoswipe markup
    var markup = '<div id="gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n          <div class="pswp__bg"></div>\n          <div class="pswp__scroll-wrap">\n            <div class="pswp__container">\n              <div class="pswp__item"></div>\n              <div class="pswp__item"></div>\n              <div class="pswp__item"></div>\n            </div>\n            <div class="pswp__ui pswp__ui--hidden">\n              <div class="pswp__top-bar">\n                <div class="pswp__counter"></div>\n                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\n                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\n                <div class="pswp__preloader">\n                  <div class="pswp__preloader__icn">\n                    <div class="pswp__preloader__cut">\n                      <div class="pswp__preloader__donut"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="pswp__loading-indicator"><div class="pswp__loading-indicator__line"></div></div>\n              <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>\n              <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>\n              <div class="pswp__caption">\n                <div class="pswp__caption__center">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>';
    $body.append(markup);

    // init code
    function parseThumbnailElements(el) {
        var thumbElements = $(el).find('a.nk-gallery-item');
        var items = [];
        var childElements = void 0;
        var descrElement = void 0;
        var size = void 0;
        var item = void 0;

        thumbElements.each(function eachThumbs() {
            childElements = $(this).find('img');
            descrElement = $(this).next('.photoswipe-description');
            size = (this.getAttribute('data-size') || '1920x1080').split('x');

            // create slide object
            item = {
                src: this.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
                author: this.getAttribute('data-author')
            };

            if (childElements.length > 0) {
                // thumbnail url
                item.msrc = childElements[0].getAttribute('src');
                if (descrElement.length) {
                    item.title = descrElement.html();
                }
            }

            var mediumSrc = this.getAttribute('data-med') || item.src;
            if (mediumSrc) {
                size = (this.getAttribute('data-med-size') || this.getAttribute('data-size') || '1920x1080').split('x');
                // "medium-sized" image
                item.m = {
                    src: mediumSrc,
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
            }
            // original image
            item.o = {
                src: item.src,
                w: item.w,
                h: item.h
            };
            items.push(item);
        });

        return items;
    }

    function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = $('.pswp')[0];
        var items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        var options = {
            captionAndToolbarShowEmptyCaptions: false,
            mainClass: 'pswp--minimal--dark',
            barsSize: { top: 0, bottom: 0 },
            captionEl: true,
            fullscreenEl: false,
            shareEl: false,
            bgOpacity: 0.85,
            tapToClose: true,
            tapToToggleControls: false,
            showHideOpacity: true,

            // Function builds caption markup
            addCaptionHTMLFn: function addCaptionHTMLFn(item, captionEl) {
                // item      - slide object
                // captionEl - caption DOM element
                // isFake    - true when content is added to fake caption container
                //             (used to get size of next or previous caption)

                if (!item.title && !item.author) {
                    captionEl.children[0].innerHTML = '';
                    return false;
                }
                var caption = '';
                if (item.title) {
                    caption += item.title;
                }
                if (item.author) {
                    if (item.title) {
                        caption += '<br>';
                    }
                    caption += '<small>' + item.author + '</small>';
                }
                captionEl.children[0].innerHTML = caption;
                return true;
            },


            galleryUID: galleryElement.getAttribute('data-pswp-uid')
        };

        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid === index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

        // see: http://photoswipe.com/documentation/responsive-images.html
        var realViewportWidth = void 0;
        var useLargeImages = false;
        var firstResize = true;
        var imageSrcWillChange = void 0;

        gallery.listen('beforeResize', function () {
            var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
            dpiRatio = Math.min(dpiRatio, 2.5);
            realViewportWidth = gallery.viewportSize.x * dpiRatio;

            if (realViewportWidth >= 1200 || !gallery.likelyTouchDevice && realViewportWidth > 800 || screen.width > 1200) {
                if (!useLargeImages) {
                    useLargeImages = true;
                    imageSrcWillChange = true;
                }
            } else if (useLargeImages) {
                useLargeImages = false;
                imageSrcWillChange = true;
            }

            if (imageSrcWillChange && !firstResize) {
                gallery.invalidateCurrItems();
            }

            if (firstResize) {
                firstResize = false;
            }

            imageSrcWillChange = false;
        });

        gallery.listen('gettingData', function (idx, item) {
            if (useLargeImages) {
                item.src = item.o.src;
                item.w = item.o.w;
                item.h = item.o.h;
            } else {
                item.src = item.m.src;
                item.w = item.m.w;
                item.h = item.m.h;
            }
        });

        gallery.init();
    }

    function photoswipeParseHash() {
        var hash = window.location.hash.substring(1);
        var params = {};

        if (hash.length < 5) {
            // pid=1
            return params;
        }

        var vars = hash.split('&');
        for (var _i5 = 0; _i5 < vars.length; _i5++) {
            if (!vars[_i5]) {
                continue;
            }
            var pair = vars[_i5].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    }

    // select all gallery elements
    var i = 0;
    $gallery.each(function eachGallery() {
        var $thisGallery = $(this);
        $thisGallery.attr('data-pswp-uid', i + 1);

        $thisGallery.on('click', 'a.nk-gallery-item', function onGalleryItemClick(e) {
            e.preventDefault();
            var index = 0;
            var clicked = this;
            $thisGallery.find('a.nk-gallery-item').each(function eachGalleryItem(idx) {
                if (this === clicked) {
                    index = idx;
                    return false;
                }
                return true;
            });
            openPhotoSwipe(index, $thisGallery[0]);
        });
        i++;
    });

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, $gallery.get(hashData.gid - 1), true, true);
    }
}

/* Bootstrap Tabs */
function _initPluginTabs() {
    var self = this;
    $wnd.on('shown.bs.tab', function () {
        self.debounceResize();
    });
}

/* Bootstrap Accordions */
function _initPluginAccordions() {
    var self = this;
    $wnd.on('shown.bs.collapse', function () {
        self.debounceResize();
    });
}

/* Countdown */
function _initPluginCountdown() {
    if (typeof $.fn.countdown === 'undefined' || typeof moment === 'undefined' || typeof moment.tz === 'undefined') {
        return;
    }
    var self = this;

    $('.nk-countdown').each(function eachCountdown() {
        var tz = $(this).attr('data-timezone');
        var end = $(this).attr('data-end');
        end = moment.tz(end, tz).toDate();

        $(this).countdown(end, function onCountdownTick(event) {
            $(this).html(event.strftime(self.options.templates.countdown));
        });
    });
}

/* Typed.js */
function _initPluginTypedjs() {
    $('.nk-typed').each(function eachTyped() {
        var $this = $(this);
        var strings = [];
        $this.children('span').each(function eachTypedChild() {
            strings.push($(this).html());
        });
        if (!strings.length) {
            return;
        }
        $this.html('');

        var loop = $this.attr('data-loop') ? $this.attr('data-loop') === 'true' : true;
        var shuffle = $this.attr('data-shuffle') ? $this.attr('data-shuffle') === 'true' : false;
        var typeSpeed = $this.attr('data-type-speed') ? parseInt($this.attr('data-type-speed'), 10) : 30;
        var startDelay = $this.attr('data-start-delay') ? parseInt($this.attr('data-start-delay'), 10) : 0;
        var backSpeed = $this.attr('data-back-speed') ? parseInt($this.attr('data-back-speed'), 10) : 0;
        var backDelay = $this.attr('data-back-delay') ? parseInt($this.attr('data-back-delay'), 10) : 1000;
        var cursor = $this.attr('data-cursor');

        if (!cursor) {
            cursor = '|';
        } else if (cursor === 'false') {
            cursor = false;
        }

        $('<span>').appendTo($this).typed({
            strings: strings,
            typeSpeed: typeSpeed,
            startDelay: startDelay,
            backSpeed: backSpeed,
            backDelay: backDelay,
            shuffle: shuffle,
            loop: loop,
            loopCount: false,
            showCursor: !!cursor,
            cursorChar: cursor
        });

        // typed js used timeout from startDelay option
        setTimeout(function () {
            $this.addClass('ready');
        }, 0);
    });
}

/*------------------------------------------------------------------

  Init Blog

  -------------------------------------------------------------------*/
  function _initPluginSummernote() {
    if (typeof $.fn.summernote === 'undefined') {
        return;
    }

    var $summernote = $('.nk-summernote');

    if (!$summernote.length) {
        return;
    }

    // insert block in body to style bootstrap modal
    $('body').append('<div class="nk-summernote-modal-style">');

    $summernote.summernote({
        height: 300,
        dialogsInBody: true,
        toolbar: [
        // [groupName, [list of button]]
        ['style', ['bold', 'italic', 'underline']], ['fontsize', ['fontsize']], ['color', ['color']], ['insert', ['link', 'picture', 'video']], ['para', ['ul', 'ol', 'paragraph']], ['height', ['height']], ['misc', ['codeview']]]
    });

    // fix after load popovers are visible
    $('.note-popover').hide();
}

/*------------------------------------------------------------------

  GODIKE Class

  -------------------------------------------------------------------*/

  var GODLIKE = function () {
    function GODLIKE() {
        _classCallCheck(this, GODLIKE);

        this.options = options;
    }

    _createClass(GODLIKE, [{
        key: 'init',
        value: function init() {
            var self = this;
            self.initNavbar();
            self.initNavbarSide();
            self.initNavbarFullscreen();
            self.initNavbarDropEffect1();
            self.initSearchBlock();
            self.initCart();
            self.initSignForm();
            self.initHeaderTitle();
            self.initSideButtons();
            self.initBlog();
            self.initActionsLike();
            self.initBackgroundVideo();
            self.initBackgroundAudio();
            self.initLinkEffects();
            self.initCounters();
            self.initAnchors();
            self.initLinesForBoxes();
            self.initImageBoxes();
            self.initVideoBlocks();
            self.initGIF();
            self.initInfoBoxes();
            self.initForms();
            self.initFormsMailChimp();
            self.initTeamMembers();
            self.initAudioPlayer();
            self.initFacebook();
            self.initInstagram();
            self.initTwitter();
            self.initShortcuts();
            self.initCookieAlert();

            // init plugins
            self.initPluginStickySidebar();
            self.initPluginFastClick();
            self.initPluginNano();
            self.initPluginFlickity();
            self.initPluginIsotope();
            self.initPluginPhotoswipe();
            self.initPluginTabs();
            self.initPluginAccordions();
            self.initPluginJarallax();
            self.initPluginCountdown();
            self.initPluginTypedjs();
            self.initPluginSummernote();

            self.initPreloader();

            self.initParallaxMouse();
            $wnd.on('resize scroll load', function () {
                self.initParallaxMouse();
            });

            return self;
        }
    }, {
        key: 'setOptions',
        value: function setOptions(newOpts) {
            return _setOptions.call(this, newOpts);
        }
    }, {
        key: 'debounceResize',
        value: function debounceResize(func) {
            return _debounceResize.call(this, func);
        }
    }, {
        key: 'throttleScroll',
        value: function throttleScroll(callback) {
            return _throttleScroll.call(this, callback);
        }
    }, {
        key: 'bodyOverflow',
        value: function bodyOverflow(type) {
            return _bodyOverflow.call(this, type);
        }
    }, {
        key: 'isInViewport',
        value: function isInViewport($item, returnRect) {
            return _isInViewport.call(this, $item, returnRect);
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo($to, callback) {
            return _scrollTo.call(this, $to, callback);
        }
    }, {
        key: 'key',
        value: function key(name, callback) {
            return _key.call(this, name, callback);
        }
    }, {
        key: 'initPreloader',
        value: function initPreloader() {
            return _initPreloader.call(this);
        }
    }, {
        key: 'initParallaxMouse',
        value: function initParallaxMouse() {
            return _initParallaxMouse.call(this);
        }
    }, {
        key: 'initShortcuts',
        value: function initShortcuts() {
            return _initShortcuts.call(this);
        }
    }, {
        key: 'initBackgroundVideo',
        value: function initBackgroundVideo() {
            return _initBackgroundVideo.call(this);
        }
    }, {
        key: 'initBackgroundAudio',
        value: function initBackgroundAudio() {
            return _initBackgroundAudio.call(this);
        }
    }, {
        key: 'initLinkEffects',
        value: function initLinkEffects() {
            return _initLinkEffects.call(this);
        }
    }, {
        key: 'initHeaderTitle',
        value: function initHeaderTitle() {
            return _initHeaderTitle.call(this);
        }
    }, {
        key: 'initNavbar',
        value: function initNavbar() {
            return _initNavbar.call(this);
        }
    }, {
        key: 'initNavbarSide',
        value: function initNavbarSide() {
            return _initNavbarSide.call(this);
        }
    }, {
        key: 'initNavbarFullscreen',
        value: function initNavbarFullscreen() {
            return _initNavbarFullscreen.call(this);
        }
    }, {
        key: 'initNavbarDropEffect1',
        value: function initNavbarDropEffect1() {
            return _initNavbarDropEffect.call(this);
        }
    }, {
        key: 'initSearchBlock',
        value: function initSearchBlock() {
            return _initSearchBlock.call(this);
        }
    }, {
        key: 'initCart',
        value: function initCart() {
            return _initCart.call(this);
        }
    }, {
        key: 'initSignForm',
        value: function initSignForm() {
            return _initSignForm.call(this);
        }
    }, {
        key: 'initCounters',
        value: function initCounters() {
            return _initCounters.call(this);
        }
    }, {
        key: 'initSideButtons',
        value: function initSideButtons() {
            return _initSideButtons.call(this);
        }
    }, {
        key: 'initActionsLike',
        value: function initActionsLike() {
            return _initActionsLike.call(this);
        }
    }, {
        key: 'initBlog',
        value: function initBlog() {
            return _initBlog.call(this);
        }
    }, {
        key: 'initAnchors',
        value: function initAnchors() {
            return _initAnchors.call(this);
        }
    }, {
        key: 'initLinesForBoxes',
        value: function initLinesForBoxes() {
            return _initLinesForBoxes.call(this);
        }
    }, {
        key: 'initImageBoxes',
        value: function initImageBoxes() {
            return _initImageBoxes.call(this);
        }
    }, {
        key: 'initVideoBlocks',
        value: function initVideoBlocks() {
            return _initVideoBlocks.call(this);
        }
    }, {
        key: 'initGIF',
        value: function initGIF() {
            return _initGIF.call(this);
        }
    }, {
        key: 'initInfoBoxes',
        value: function initInfoBoxes() {
            return _initInfoBoxes.call(this);
        }
    }, {
        key: 'initForms',
        value: function initForms() {
            return _initForms.call(this);
        }
    }, {
        key: 'initFormsMailChimp',
        value: function initFormsMailChimp() {
            return _initFormsMailChimp.call(this);
        }
    }, {
        key: 'initTeamMembers',
        value: function initTeamMembers() {
            return _initTeamMembers.call(this);
        }
    }, {
        key: 'initAudioPlayer',
        value: function initAudioPlayer() {
            return _initAudioPlayer.call(this);
        }
    }, {
        key: 'initFacebook',
        value: function initFacebook() {
            return _initFacebook.call(this);
        }
    }, {
        key: 'initInstagram',
        value: function initInstagram() {
            return _initInstagram.call(this);
        }
    }, {
        key: 'initTwitter',
        value: function initTwitter() {
            return _initTwitter.call(this);
        }
    }, {
        key: 'initCookieAlert',
        value: function initCookieAlert() {
            return _initCookieAlert.call(this);
        }
    }, {
        key: 'initPluginStickySidebar',
        value: function initPluginStickySidebar() {
            return _initPluginStickySidebar.call(this);
        }
    }, {
        key: 'initPluginFastClick',
        value: function initPluginFastClick() {
            return _initPluginFastClick.call(this);
        }
    }, {
        key: 'initPluginNano',
        value: function initPluginNano($context) {
            return _initPluginNano.call(this, $context);
        }
    }, {
        key: 'initPluginJarallax',
        value: function initPluginJarallax($context) {
            return _initPluginJarallax.call(this, $context);
        }
    }, {
        key: 'initPluginFlickity',
        value: function initPluginFlickity($context) {
            return _initPluginFlickity.call(this, $context);
        }
    }, {
        key: 'initPluginIsotope',
        value: function initPluginIsotope($context) {
            return _initPluginIsotope.call(this, $context);
        }
    }, {
        key: 'initPluginPhotoswipe',
        value: function initPluginPhotoswipe($context) {
            return _initPluginPhotoswipe.call(this, $context);
        }
    }, {
        key: 'initPluginTabs',
        value: function initPluginTabs($context) {
            return _initPluginTabs.call(this, $context);
        }
    }, {
        key: 'initPluginAccordions',
        value: function initPluginAccordions($context) {
            return _initPluginAccordions.call(this, $context);
        }
    }, {
        key: 'initPluginCountdown',
        value: function initPluginCountdown($context) {
            return _initPluginCountdown.call(this, $context);
        }
    }, {
        key: 'initPluginTypedjs',
        value: function initPluginTypedjs($context) {
            return _initPluginTypedjs.call(this, $context);
        }
    }, {
        key: 'initPluginSummernote',
        value: function initPluginSummernote($context) {
            return _initPluginSummernote.call(this, $context);
        }
    }]);

return GODLIKE;
}();

/*------------------------------------------------------------------

  Init Godlike

  -------------------------------------------------------------------*/


  window.Godlike = new GODLIKE();
}());
