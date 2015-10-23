 angular.module("your_app_name.views", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/app/bookmarks.html","<ion-view class=\"bookmarks-view\">\n  <ion-nav-title>\n    <span>Bookmarks</span>\n  </ion-nav-title>\n  <ion-content>\n    <div ng-if=\"(bookmarks.wordpress.length == 0 && bookmarks.feeds.length == 0)\" class=\"row bookmarks-container\">\n      <div class=\"col col-center\">\n        <div class=\"empty-results\">\n          <i class=\"icon ion-bookmark\"></i>\n          <h3 class=\"no-bookmarks\">There\'s nothing here yet. Start exploring!</h3>\n        </div>\n      </div>\n    </div>\n    <ul ng-if=\"(bookmarks.wordpress.length > 0 || bookmarks.feeds.length > 0)\" class=\"bookmarks-list\">\n      <div ng-if=\"bookmarks.feeds.length > 0\" class=\"item item-divider\">\n        Feeds Bookmarks\n      </div>\n      <li class=\"bookmark-item\" ng-repeat=\"bookmark in bookmarks.feeds\">\n        <a ng-click=goToFeedPost(bookmark.link)>\n          <h2 class=\"post-title\" ng-bind-html=\"bookmark.title | rawHtml\"></h2>\n          <p class=\"post-date\">Posted <span class=\"post-time\" am-time-ago=\"bookmark.date\"></span></p>\n        </a>\n      </li>\n      <div ng-if=\"bookmarks.wordpress.length > 0\" class=\"item item-divider\">\n        Wordpress bookmarks\n      </div>\n      <li class=\"bookmark-item\" ng-repeat=\"bookmark in bookmarks.wordpress\">\n        <a ng-click=goToWordpressPost(bookmark.id)>\n          <h2 class=\"post-title\" ng-bind-html=\"bookmark.title | rawHtml\"></h2>\n          <p class=\"post-date\">Posted <span class=\"post-time\" am-time-ago=\"bookmark.date\"></span></p>\n        </a>\n      </li>\n    </ul>\n  </ion-content>\n</ion-view>\n");


$templateCache.put("views/app/forms.html",formsViewSource);
$templateCache.put("views/app/profile.html",profileviewSource);
$templateCache.put("views/app/settings.html",settingsViewSource); // 환경설정 페이지
$templateCache.put("views/app/side-menu.html",sideMenuSource);
$templateCache.put("views/auth/auth.html", authouterSource);
$templateCache.put("views/auth/forgot-password.html", forgotpasswordSource);
$templateCache.put("views/auth/login.html", loginSource);
$templateCache.put("views/auth/signup.html", signupSource);
$templateCache.put("views/auth/walkthrough.html", walkthroughSource);
$templateCache.put("views/common/ionic-youtube-video.html", ionicyoutubevideoSource);
$templateCache.put("views/common/multi-bg.html",  multibgSource);
$templateCache.put("views/common/my-tab.html",   mytabSource);
$templateCache.put("views/common/my-tabs.html",  mytabsSource);
$templateCache.put("views/common/pre-img.html",  preimgSource);
$templateCache.put("views/common/show-hide-password.html",  showhidepasswordSource);
$templateCache.put("views/app/feeds/category-feeds.html", categoryfeedsSource);
$templateCache.put("views/app/feeds/feed-entries.html",  feedentriesSource);
$templateCache.put("views/app/feeds/feeds-categories.html", feedscategoriesSource);
$templateCache.put("views/app/layouts/layouts.html",        regSource);
$templateCache.put("views/app/layouts/slider.html",         sliderSource);
$templateCache.put("views/app/layouts/tinder-cards.html",   tindercardsSource);
$templateCache.put("views/app/miscellaneous/image-picker.html",   imagepickerSource);
$templateCache.put("views/app/miscellaneous/maps.html",    mapsSource);
//$templateCache.put("views/app/miscellaneous/miscellaneous.html",  miscellaneousSource);
$templateCache.put("views/app/miscellaneous/miscellaneous.html",  wordpressSource);
//$templateCache.put("views/app/wordpress/wordpress.html", wordpressSource);
$templateCache.put("views/app/wordpress/wordpress.html", sliderSource);
$templateCache.put("views/app/notebook.html", notebook);
$templateCache.put("views/app/notebookpost.html", notebookpost);
$templateCache.put("views/app/notebookpost2.html", notebookpost2);


$templateCache.put("views/app/calc.html", calcSource);
$templateCache.put("views/app/calcauthor.html", calcAuthorSource);
$templateCache.put("views/app/calcdetail.html", calcdetailSource);
$templateCache.put("views/app/mainStreamDetail.html", mainStreamSource);


$templateCache.put("views/app/wordpress/wordpress_post.html","<ion-view class=\"post-view\">\n  <ion-content>\n    <div class=\"post-heading item item-text-wrap\">\n      <h1 class=\"post-title\">{{post.title}}</h1>\n      <p class=\"post-author\">\n        By <span>{{post.author.nickname}}</span> <span am-time-ago=\"post.date\"></span>\n      </p>\n    </div>\n    <div class=\"post-content item item-text-wrap\" post-content>\n      <p class=\"post-text\" dynamic-anchor-fix ng-bind-html=\"post.content | rawHtml\"></p>\n    </div>\n    <div class=\"post-tags item item-text-wrap\">\n      <span class=\"post-tag button button-small button-outline button-stable\" ng-repeat=\"category in post.categories\">{{category.title}}</span>\n    </div>\n  </ion-content>\n  <ion-footer-bar class=\"post-footer bar bar-footer bar-dark\">\n    <div class=\"row\">\n      <div class=\"col col-20 col-center\">\n        <a class=\"button button-icon icon icon-right ion-plus\" bigger-text=\".post-view .post-text\">A</a>\n      </div>\n      <div class=\"col col-20 col-center\">\n        <a class=\"button button-icon icon icon-right ion-minus\" smaller-text=\".post-view .post-text\">A</a>\n      </div>\n      <div class=\"col col-20 col-offset-20 col-center\">\n        <a class=\"button button-icon icon ion-heart\"></a>\n      </div>\n      <div class=\"col col-20 col-center\">\n        <a class=\"button button-icon icon ion-android-share-alt\" ng-click=\"sharePost(post.url)\"></a>\n      </div>\n    </div>\n  </ion-footer-bar>\n</ion-view>\n");}]);


//formsViewSource, profileviewSource,settingsViewSource,authouterSource,forgotpasswordSource,loginSource,
//signupSource,walkthroughSource, ionicyoutubevideoSource, multibgSource, mytabSource, mytabsSource,
// preimgSource,showhidepasswordSource,categoryfeedsSource,feedentriesSource,feedscategoriesSource,layoutsSource,sliderSource,
//imagepickerSource,mapsSource,miscellaneousSource,sliderSource




var sideMenuSource = "<ion-side-menus enable-menu-with-back-views=\"false\">\n"+
" <ion-side-menu-content class=\"post-size-14px\">\n"+
" <ion-nav-bar class=\"bar app-top-bar\">\n"+
" <ion-nav-back-button>\n"+
" </ion-nav-back-button>\n"+
"  "+
"  <ion-nav-buttons side=\"right\">\n"+
" <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"right\">\n"+
" </button>\n"+
"  </ion-nav-buttons>\n"+
"  "+
" </ion-nav-bar>\n"+
" "+
" <ion-nav-view name=\"menuContent\"></ion-nav-view>\n"+
" </ion-side-menu-content>\n\n"+
""+
" <ion-side-menu side=\"right\" class=\"main-menu\" expose-aside-when=\"large\">\n"+
" <ion-content>\n"+
" <ion-list>\n"+
" <ion-item class=\"heading-item item item-avatar\" nav-clear menu-close ui-sref=\"app.profile\">\n"+
" <div class=\"user-image-container\">\n"+
" <pre-img ratio=\"_1_1\" helper-class=\"rounded-image\">\n"+
" <img class=\"user-image\" ng-src=\"https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg\" spinner-on-load>\n"+
" </pre-img>\n"+
" </div>\n"+
//" <h2 class=\"greeting\">Hi Brynn</h2>\n"+
//" <p class=\"message\">Welcome back</p>\n"+
" </ion-item>\n"+
" <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.profile\">\n"+
" <i class=\"icon ion-android-person\"></i>\n"+
" <h2 class=\"menu-text\">개인정보</h2>\n"+
" </ion-item>\n"+
" <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.settings\">\n"+
" <i class=\"icon ion-gear-a\"></i>\n"+
" <h2 class=\"menu-text\">환경설정</h2>\n"+
" </ion-item>\n"+
" <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.wordpress\">\n"+
" <i class=\"icon ion-home\"></i>\n"+
" <h2 class=\"menu-text\">HOME</h2>\n"+
" </ion-item>\n"+
" <ion-item style='' class=\"item-icon-left\" nav-clear menu-close ui-sref=\"#\">\n"+
" <i class=\"icon ion-android-notifications\"></i>\n"+
" <h2 class=\"menu-text\">공지사항</h2>\n"+
" </ion-item>\n"+
" <ion-item class=\"item-icon-left item-grays\" nav-clear menu-close ui-sref=\"app.notebook\">\n"+
" <i class=\"icon ion-social-buffer\"></i>\n"+
" <h2 class=\"menu-text\">권리등록</h2>\n"+
" </ion-item>\n"+
" <ion-item class=\"item-icon-left item-grays\" nav-clear menu-close ui-sref=\"#\">\n"+
" <i class=\"icon ion-ribbon-b\"></i>\n"+
" <h2 class=\"menu-text\">사용허락</h2>\n"+
" </ion-item>\n"+
" <ion-item class=\"item-icon-left item-grays\" nav-clear menu-close ui-sref=\"app.calc\">\n"+
" <i class=\"icon ion-ios-pie\"></i>\n"+
" <h2 class=\"menu-text\">정산분배</h2>\n"+
" </ion-item>\n\n"+
" <ion-item class=\"item-icon-left item-grays\" nav-clear menu-close ui-sref=\"#\">\n"+
" <i class=\"icon ion-android-apps\"></i>\n"+
" <h2 class=\"menu-text\">경영관리</h2>\n"+
" </ion-item>\n\n"+
" </ion-list>\n"+
" </ion-content>\n"+
" </ion-side-menu>\n"+
"  </ion-side-menus>\n"

















var TabSource = ' <ion-tabs class="tabs-positive tabs-icon-only" style="background:rgba(255,255,255,.05);color:#c1f5ff">'+
''+
'   <ion-tab title="권리등록" icon-on="ion-social-buffer-outline" icon-off="ion-social-buffer-outline" style="color:#c1f5ff">'+
'     <!-- Tab 1 content -->'+
'   </ion-tab>'+
''+
'   <ion-tab title="사용허락" icon-on="icon ion-document" icon-off="icon ion-document">'+
'     <!-- Tab 2 content -->'+
'   </ion-tab>'+
''+
'   <ion-tab title="정산분배" icon-on="icon ion-stats-bars" icon-off="icon ion-stats-bars">'+
'     <!-- Tab 3 content -->'+
'   </ion-tab>'+
''+
''+
'   <ion-tab title="경영관리" icon-on="icon ion-ios-calculator" icon-off="icon ion-ios-calculator">'+
'     <!-- Tab 4 content -->'+
'   </ion-tab>'+
''+
' </ion-tabs>';

function testo(){
 console.log("haha");
}

var ActiveTabSource = ' <ion-tabs class="tabs-stable tabs-icon-only" >'+
''+
'   <ion-tab title="권리등록" icon-on="ion-social-buffer-outline" icon-off="ion-social-buffer-outline" style="color:#c1f5ff"  ui-sref=\"app.notebook\">'+
'     <!-- Tab 1 content -->'+
'   </ion-tab>'+
''+
'   <ion-tab title="사용허락" icon-on="icon ion-document" icon-off="icon ion-document">'+
'     <!-- Tab 2 content -->'+
'   </ion-tab>'+
''+
'   <ion-tab title="정산분배" icon-on="icon ion-stats-bars" icon-off="icon ion-stats-bars">'+
'     <!-- Tab 3 content -->'+
'   </ion-tab>'+
''+
''+
'   <ion-tab title="경영관리" icon-on="icon ion-ios-calculator" icon-off="icon ion-ios-calculator">'+
'     <!-- Tab 4 content -->'+
'   </ion-tab>'+
''+
' </ion-tabs>';

var test= 
'<ion-footer-bar align-title="left" style="background:rgba(255,255,255,.05);">'+
		'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:9pt;font-weight:bold;" ui-sref=\"app.notebook\"><i class="icon ion-social-buffer-outline"  style="font-size:50px;color:#c1f5ff;"></i><br>권리등록</div>'+
		'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:9pt;font-weight:bold; "><i class="icon ion-document"  style="font-size:50px;color:#c1f5ff;"></i><br>사용허락</div>'+
		'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:9pt;font-weight:bold;"  ui-sref=\"app.calc\"><i class="icon ion-stats-bars"  style="font-size:50px;color:#c1f5ff;"></i><br>정산분배</div>'+
		'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:9pt;font-weight:bold;" ><i class="icon ion-ios-calculator"  style="font-size:50px;color:#c1f5ff;"></i><br>경영관리</div>'+
'</ion-footer-bar>';


var beforetab = '<div class="row" style="background:rgba(255,255,255,.05);height:100px;">'+
		'<div style="text-align:center;width:25%;color:#c1f5ff;font-size:9pt;font-weight:bold;" ui-sref=\"app.notebook\"><i class="icon ion-social-buffer-outline"  style="font-size:50px;color:#c1f5ff;"></i><br>권리등록</div>'+
		'<div style="text-align:center;width:25%;color:#c1f5ff;font-size:9pt;font-weight:bold; "><i class="icon ion-document"  style="font-size:50px;color:#c1f5ff;"></i><br>사용허락</div>'+
		'<div style="text-align:center;width:25%;color:#c1f5ff;font-size:9pt;font-weight:bold;"  ui-sref=\"app.calc\"><i class="icon ion-stats-bars"  style="font-size:50px;color:#c1f5ff;"></i><br>정산분배</div>'+
		'<div style="text-align:center;width:25%;color:#c1f5ff;font-size:9pt;font-weight:bold;" ><i class="icon ion-ios-calculator"  style="font-size:50px;color:#c1f5ff;"></i><br>경영관리</div>'+
	'</div>'




var sliderSource =
'<ion-view class="slider-view">'+
'  <ion-nav-buttons side="left">'+
' <img src="../img/logo.png" style="margin-left:10px;margin-top:10px;width:10*0px;height:30px;"/>'+
//'    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>'+
'  </ion-nav-buttons>'+
'  <ion-content scroll="false">'+
'        <div class="item" style="background-color:transparent;border:0;margin-bottom:*0;padding-top:80px;padding-bottom:10px;">'+
'			<div style="font-family:Dotum;font-weight:bold;font-size:16pt;color:#c1f5ff;">2015년 3분기</div>'+
'        </div>'+
'        <div class="item" style="background-color:transparent;border:0;">'+
'			<div style="font-size:25pt;color:#ffffff;font-family:gothic"><span style="font-size:30pt;color:#ffffff;font-family:dotum">123,456,789</span>원</div>'+
'        </div>'+
'    <ion-slide-box show-pager="true">'+
'      <ion-slide>'+
//'      <ion-slide>'+
'        <div class="list card" style="background-color: #000000; opacity:0.4;box-shadow: 0 0px 0px;">'+
'          <div class="item item-image" style="background-color: transparent;">'+
'			<div id="chart" style="height:300px;"><svg></svg></div>'+
//'            <img ng-src="img/feeds/logos/graph.png">'+
'          </div>'+
'        </div>'+
//'      </ion-slide>'+
'      </ion-slide>'+
'      <ion-slide>'+
//'      <ion-slide>'+
'        <div class="list card" style="background-color: #000000; opacity:0.4;;box-shadow: 0 0px 0px;">'+
'          <div class="item item-image" style="background-color: transparent;">'+
'			<div id="chart2" style="height:300px;"><svg></svg></div>'+
//'            <img ng-src="img/feeds/logos/graph.png">'+
'          </div>'+
'        </div>'+
//'      </ion-slide>'+
'      </ion-slide>'+
'      <ion-slide>'+
//'      <ion-slide>'+
'        <div class="list card" style="background-color: #000000; opacity:0.4;box-shadow: 0 0px 0px;">'+
'          <div class="item item-image" style="background-color: transparent;">'+
'			<div id="chart3" style="height:300px;"><svg></svg></div>'+
//'            <img ng-src="img/feeds/logos/graph.png">'+
'          </div>'+
'        </div>'+
//'      </ion-slide>'+
'      </ion-slide>'+
'    </ion-slide-box>'+
test
'  </ion-content>'+
'</ion-view>'



var tindercardsSource = '<ion-view class="tinder-cards-view">'+
'  <ion-nav-title>'+
'    <span>Tinder Cards</span>'+
'  </ion-nav-title>'+
'  <ion-content scroll="false">'+
'    <td-cards>'+
'      <td-card id="td-card" ng-repeat="card in cards" on-transition-left="transitionLeft(card)" on-transition-right="transitionRight(card)" on-transition-out="transitionOut(card)" on-destroy="cardDestroyed($index)" on-swipe-left="cardSwipedLeft($index)" on-swipe-right="cardSwipedRight($index)" on-partial-swipe="cardPartialSwipe(amt)">'+
'        <div class="image">'+
'          <div class="no-text overlayBox">'+
'            <div class="noBox boxed">'+
'              Nope'+
'            </div>'+
'          </div>'+
'          <img ng-src="{{card.image}}">'+
'          <div class="yes-text overlayBox">'+
'            <div class="yesBox boxed">'+
'              Yes'+
'            </div>'+
'          </div>'+
'        </div>'+
'        <div class="title">'+
'          {{card.name}}'+
'        </div>'+
'      </td-card>'+
'    </td-cards>'+
'  </ion-content>'+
'</ion-view>'




var imagepickerSource = '<ion-view class="image-picker-view">'+
'  <ion-nav-title>'+
'    <span>Image picker</span>'+
'  </ion-nav-title>'+
'  <ion-content class="padding">'+
'    <button class="button button-block button-dark" ng-click="selImages()">'+
'      Select Images'+
'    </button>'+
'    <button ng-show="images.length > 0" class="button button-block button-stable" ng-click="shareAll()">'+
'      Share All'+
'    </button>'+
'    <div class="list card" ng-repeat="img in images">'+
'      <div class="item item-image">'+
'        <img ng-src="{{img}}">'+
'      </div>'+
'      <div class="item tabs tabs-secondary tabs-icon-left">'+
'        <a class="tab-item image-option" href="#" ng-click="shareImage(img)">'+
'          <i class="icon ion-share"></i>'+
'          Share'+
'        </a>'+
'        <a class="tab-item assertive image-option" href="#" ng-click="removeImage(img)">'+
'          <i class="icon ion-trash-a assertive"></i>'+
'          Remove'+
'        </a>'+
'      </div>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'




var mapsSource =
'<ion-view class="maps-view">'+
'  <ion-nav-title>'+
'    <span>Maps</span>'+
'  </ion-nav-title>'+
'  <ion-content scroll="false">'+
'    <div class="mapWrap" data-tap-disabled="true">'+
'      <div class="row center-map-action">'+
'        <div class="col">'+
'          <div class="list">'+
'            <div class="item item-input-inset">'+
'              <a class="button button-icon icon ion-pinpoint" ng-click="centerOnMe()"></a>'+
'              <label class="item-input-wrapper">'+
'                <input type="text" placeholder="My Location" disabled="" ng-model="my_location">'+
'              </label>'+
'            </div>'+
'          </div>'+
'        </div>'+
'      </div>'+
'      <map center="{{center_position.lat}},{{center_position.lng}}" zoom="15">'+
'        <marker position="{{current_position.lat}},{{current_position.lng}}" title="Hello Marker" visible="true">'+
'        </marker>'+
'        <info-window id="1" position="{{info_position.lat}},{{info_position.lng}}" visible="true">'+
'          <div ng-non-bindable="">'+
'            <b>The best restaurant</b><br>'+
'            This is html so you can put whatever <br>'+
'            you want such as images and <a href="">links</a> <br>'+
'            <img style=" border-radius: 24px;" src="http://lorempixel.com/50/50/food/?v=1">'+
'            <img style=" border-radius: 24px;" src="http://lorempixel.com/50/50/food/?v=2">'+
'            <img style=" border-radius: 24px;" src="http://lorempixel.com/50/50/food/?v=3">'+
'          </div>'+
'        </info-window>'+
'      </map>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'


var miscellaneousSource = '<ion-view class="miscellaneous-view">'+
//'  <ion-nav-buttons side="left">'+
//'    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>'+
//'  </ion-nav-buttons>'+
'  <ion-nav-title>'+
'    <span>Miscellaneous</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'    <div class="list miscellaneous-functionalities">'+
'      <div dynamic-anchor-fix="">'+
'        <a class="item item-icon-left item-icon-right" href="http://www.ionicthemes.com">'+
'          <i class="icon ion-ios-browsers-outline"></i>'+
'          <div>'+
'            <span class="title">In App Browser</span>'+
'            <p class="description">Show web browser view with external links</p>'+
'          </div>'+
'          <i class="icon ion-arrow-right-c"></i>'+
'        </a>'+
'      </div>'+
'      <a class="item item-icon-left item-icon-right" ui-sref="app.maps">'+
'        <i class="icon ion-map"></i>'+
'        <div>'+
'          <span class="title">Maps &amp; GeoLocation</span>'+
'          <p class="description">Show map &amp; access user\'s current location</p>'+
'        </div>'+
'        <i class="icon ion-arrow-right-c"></i>'+
'      </a>'+
'      <a class="item item-icon-left item-icon-right" ui-sref="app.image-picker">'+
'        <i class="icon ion-images"></i>'+
'        <div>'+
'          <span class="title">Image Picker</span>'+
'          <p class="description">Select and share images from your phone</p>'+
'        </div>'+
'        <i class="icon ion-arrow-right-c"></i>'+
'      </a>'+
'      <a class="item item-icon-left item-icon-right" href="#" ng-controller="AdsCtrl" ng-click="manageAdMob()">'+
'        <i class="icon ion-social-usd-outline"></i>'+
'        <div>'+
'          <span class="title">AdMob</span>'+
'          <p class="description">Show Google AdMob mobile ads</p>'+
'        </div>'+
'      </a>'+
'      <a class="item item-icon-left item-icon-right" href="#" ng-controller="AdsCtrl" ng-click="manageiAd()">'+
'        <i class="icon ion-social-usd-outline"></i>'+
'        <div>'+
'          <span class="title">iAd</span>'+
'          <p class="description">Show Apple iAd mobile ads</p>'+
'        </div>'+
'      </a>'+
'      <a class="item item-icon-left item-icon-right" href="#" ng-controller="RateApp" ng-click="rateApp()">'+
'        <i class="icon ion-ios-star-half"></i>'+
'        <div>'+
'          <span class="title">Rate the app</span>'+
'          <p class="description">Rate this app in Google and Apple stores</p>'+
'        </div>'+
'      </a>'+
'      <a class="item item-icon-left item-icon-right" href="#" ng-controller="SendMailCtrl" ng-click="sendMail()">'+
'        <i class="icon ion-email"></i>'+
'        <div>'+
'          <span class="title">Send email</span>'+
'          <p class="description">Access your phone native email sender provider</p>'+
'        </div>'+
'      </a>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'






var wordpressSource ='<ion-view class="wordpress-view">'+
//'  <ion-nav-buttons side="left">'+
//'    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>'+
//'  </ion-nav-buttons>'+
'  <ion-nav-title>'+
'    <span>WordPress</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'    <!-- Refresh to get the new posts -->'+
'    <ion-refresher pulling-text="Pull to refresh..." on-refresh="doRefresh()">'+
'    </ion-refresher>'+
''+
'    <div class="posts-list">'+
'      <div ng-repeat="post in posts" class="list card post-item">'+
'        <div class="post-heading item item-text-wrap">'+
'          <h2 class="post-title" ng-bind-html="post.title | rawHtml"></h2>'+
'          <p class="post-author">'+
'            By <span>{{post.author.nickname}}</span> <span am-time-ago="post.date"></span>'+
'          </p>'+
'        </div>'+
'        <div class="post-content item item-text-wrap" post-content="">'+
'          <p class="post-excerpt" dynamic-anchor-fix="" ng-bind-html="post.content | rawHtml"></p>'+
'          <div class="post-actions row">'+
'            <div class="actions col col-center col-66">'+
'              <a class="button button-icon icon ion-bookmark" ng-click="bookmarkPost(post)"></a>'+
'            </div>'+
'            <div class="read-more col col-center col-33">'+
'              <a ui-sref="app.post({postId: post.id})" class="button button-small button-block button-assertive">'+
'                Read more'+
'              </a>'+
'            </div>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
''+
'    <!-- Infinit scroll -->'+
'    <ion-infinite-scroll ng-if="moreDataCanBeLoaded()" on-infinite="loadMoreData()" distance="1%" icon="ion-loading-c">'+
'    </ion-infinite-scroll>'+
'  </ion-content>'+
'</ion-view>'








var regSource =
'<ion-view class="layouts-view">'+
//'  <ion-nav-buttons side="left">'+
//'    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>'+
//'  </ion-nav-buttons>'+
'  <ion-nav-title>'+
'    <span>List</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'    <div class="list layouts-functionalities">'+
'      <a class="item item-icon-left item-icon-right" ui-sref="app.tinder-cards">'+
'        <i class="icon ion-happy-outline"></i>'+
'        <div>'+
'          <span class="title">Tinder Cards</span>'+
'          <p class="description">Awesome Tinder Cards</p>'+
'        </div>'+
'        <i class="icon ion-arrow-right-c"></i>'+
'      </a>'+
'      <a class="item item-icon-left item-icon-right" ui-sref="app.slider">'+
'        <i class="icon ion-arrow-swap"></i>'+
'        <div>'+
'          <span class="title">Slider</span>'+
'          <p class="description">Example of sliding cards</p>'+
'        </div>'+
'        <i class="icon ion-arrow-right-c"></i>'+
'      </a>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'



var mydatas = [["(태양을사랑한) 얼음꽃","황규동","이안"]
			,["015B INSPIRED W-신인류의사랑","정석원/배영준/한채원/..","W"]
			,["01사랑의시작01","김성율",""]
			,["02사랑의시작02","김성율",""]
			,["03사랑의시작03","임하영",""]
			,["03사랑의느낌","임하영",""]
			,["04사랑의시작01","김성율",""]
			,["05사랑의시작02","김성율",""]
			,["06사랑의시작03","임하영",""]
			,["07사랑의느낌","임하영",""]
			];
			
var mydataresult = "";
//var mydataresultDetail = "";
var mydatatoData = function(mydata,idx){
	mydataresult += '<a class="item item-icon-right" ui-sref="app.notebookpost({id:'+idx+'})">'+
					'        <div>'+
					'          <span class="title" style="font-weight:bold;font-family:Dotum;">'+mydata[0]+'</span>'+
					'          <p class="description" style="font-weight:bold;font-family:Dotum;">('+mydata[1]+')</p>'+
					'          <p class="description" style="font-weight:bold;font-family:Dotum;">'+mydata[2]+'</p>'+
					'        </div>'+
					'        <i class="icon ion-arrow-right-c"></i>'+
					'      </a>';
}


var tableData1 = [
	["구분"	 ,"권리자"						,"지분율"	,"CTL"												,"KOMCA"],
	["A" ,"김동현"						,"5.55"		,'Y'												,"KOMCA"],
	["A" ,"JHUN RYAN SEWON"				,"5.55"		,""													,"KOMCA"],
	["A" ,"오유원"						,"16.67"	,""													,"SESAC"],
	["CA","HATAMBASIC MERMIN"			,"16.67"	,""													,"ASCAP"],
	["CA","DENZIL REMEDIOS"				,"16.67"	,""													,"ASCAP"],
	["CA","GIBSON JARAH LAFAYETTE"		,"16.67"	,""													,"BMI"],
	["CA","WOOLSEY COURTNEY JEANNE"		,"16.67"	,""													,"ASCAP"],
	["CA","TAMBAKIS PETER"				,"5.56"		,""													,"ASCAP"],
	["OP","SM엔터테이먼트"				,"5.56"		,'Y'												,"KOMCA"],
	["OP","WARNER/CHAPPELLE MUSIC KOREA","16.67"	,""													,"KOMCA"],
	["OP","W B MUSIC COPR"				,"16.67"	,""													,"ASCAP"],
	["OP","JARAHGIBSONPUBLISHING"		,"16.67"	,""													,"ASCAP"]

];

var addTable = function(data){
	var idx = 0;
	var tempData = '	<div class="row" style="padding:0px;width:100%;height:20px;height:30px;line-height:30px;">'+
	'	  <div style="border-right:1px #445973 solid;background-color:#2d4462;width:15%;text-align:center;color:white;font-size:9pt;">'+data[idx][0]+'</div>'+
	'	  <div style="border-right:1px #445973 solid;background-color:#2d4462;width:55%;text-align:center;color:white;font-size:9pt;">'+data[idx][1]+'</div>'+
	'	  <div style="border-right:1px #445973 solid;background-color:#2d4462;width:15%;text-align:center;color:white;font-size:9pt;">'+data[idx][2]+'</div>'+
	'	  <div style="background-color:#2d4462;width:15%;text-align:center;color:white;font-size:9pt;">'+data[idx][3]+'</div>'+
	'	</div>';
	idx++;

	for(;idx<data.length;idx++){
	if(data[idx][3] == 'Y'){
	
	var customColor = "#f6f6f6";
		tempData += '	<div class="row" style="padding-top:10px;padding-bottom:10px;width:100%;background-color: '+customColor+';">'+
	'	  <div style="font-size:9pt;background-color:'+customColor+';width:15%;text-align:center;padding-top:10px;"><span style="font-weight:bold">'+data[idx][0]+'</span></div>'+
	'	  <div style="font-size:9pt;padding-left:10px;background-color:'+customColor+';width:55%;text-align:left;"><span style="font-weight:bold">'+data[idx][1] +'</span><BR>' + data[idx][4]+'</div>'+
	'	  <div style="font-size:9pt;background-color:'+customColor+';width:15%;text-align:center;padding-top:10px;">'+data[idx][2]+'</div>'+
	'	  <div style="font-size:9pt;background-color:'+customColor+';width:15%;text-align:center;padding-top:10px;font-weight:bold">'+data[idx][3]+'</div>'+
	'	</div>';
	}else{
		tempData += '	<div class="row" style="padding-bottom:10px;width:100%;background-color: #ffffff;;">'+
	'	  <div style="font-size:9pt;border-bottom:1px #f0f0f0 solid;background-color:white;width:15%;text-align:center;padding-top:10px;"><span style="font-weight:bold">'+data[idx][0]+'</span></div>'+
	'	  <div style="font-size:9pt;border-bottom:1px #f0f0f0 solid;padding-left:10px;background-color:white;width:55%;text-align:left;"><span style="font-weight:bold">'+data[idx][1] + '</span><BR>' + data[idx][4]+'</div>'+
	'	  <div style="font-size:9pt;border-bottom:1px #f0f0f0 solid;background-color:white;width:15%;text-align:center;padding-top:10px;">'+data[idx][2]+'</div>'+
	'	  <div style="font-size:9pt;border-bottom:1px #f0f0f0 solid;background-color:white;width:15%;text-align:center;padding-top:10px;">'+data[idx][3]+'</div>'+
	'	</div>';
	}
	}
	return tempData; 
}
var customButton = "min-width:20px;width:30px;min-height:20px;height:20px;padding:0px;line-height:0px;";
var notebookpost =
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-family:gothic;font-weight:bold;">작품 상세</span>'+
'  </ion-nav-title>'+
'  <ion-content style="background-color:#22334f;padding-top:20px;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;font-family:Dotum;">{{title}}<button class="button button-calm" style="margin-left:10px;min-width: 20px;width: 30px;min-height: 15px;height: 15px;padding: 0px;line-height: 0px;font-size:10px;margin-top:5px;">more</button></span></div>'+
'	<div style="float:right;"><span style="color:white;font-size:9pt;">공표일 : 2015-06-03</span></div>'+
addTable(tableData1)+
'  </ion-content>'+
test+
'</ion-view>';

var mydatatoDataDetail = function(id){
}

//mydata.forEach(function(e,i){return (e[0])})
mydatas.forEach(mydatatoData)

var notebook =
'<ion-view class="layouts-view">'+
'  <ion-nav-title>'+
'    <span style="font-family:gothic;font-weight:bold;">작품 목록</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'<div class="bar bar-header item-input-inset" style="background-color:transparent;border:0px;">'+
'  <label class="item-input-wrapper">'+
'    <i class="icon ion-ios-search placeholder-icon"></i>'+
'    <input type="search" placeholder="Search">'+
'  </label>'+
'  <button class="button button-clear">'+
'    <i class="icon ion-android-search" style="color:#bff5ff"></i>'+
'  </button>'+
'</div>'+
'  <div style="width:100%;height:40px;border:0px;clear:both;background-color:#23344e;font-size:10pt;font-family:Dotum;color:white;text-align:center;line-height:40px;"> 총 32,123 건이 검색되었습니다. </div>'+
'    <div class="list layouts-functionalities">'+
mydataresult+
'    </div>'+
'  </ion-content>'+
test+
'</ion-view>'

//====================== new start ===================== //

var mydatas2 = [
			["김동현"		,"10023456"	,"123,456,789원"],
			["남동현"		,"10023455"	,"123,456,789원"],
			["도동현"		,"20023454"	,"123,456,789원"],
			["마동현"		,"10023453"	,"123,456,789원"],
			["박동현"		,"10023452"	,"123,456,789원"],
			["성동현"		,"40023451"	,"123,456,789원"],
			["김가현"		,"10023466"	,"123,456,789원"],
			["남가현"		,"10023465"	,"123,456,789원"],
			["도가현"		,"60023464"	,"123,456,789원"],
			["마가현"		,"10023463"	,"123,456,789원"],
			["박나현"		,"17023462"	,"123,456,789원"],
			["성나현"		,"10723461"	,"123,456,789원"],
			["김나현"		,"10053476"	,"123,456,789원"],
			["남나현"		,"10024475"	,"123,456,789원"],
			["도나현"		,"10023274"	,"123,456,789원"],
			["마동다"		,"10022473"	,"123,456,789원"],
			["박동다"		,"10053472"	,"123,456,789원"],
			["성동다"		,"10523471"	,"123,456,789원"],
			["김동다"		,"16023486"	,"123,456,789원"],
			["라동현"		,"10623485"	,"123,456,789원"],
			["도라현"		,"20023484"	,"123,456,789원"],
			["마동라"		,"10023483"	,"123,456,789원"],
			["박마현"		,"50023482"	,"123,456,789원"],
			["심동현"		,"15023481"	,"123,456,789원"]
			];
			

var mydataresult2 = "";
//var mydataresultDetail = "";
var mydatatoData2 = function(mydata,idx){
console.log(idx);
	mydataresult2 += '<a class="item item-icon-right" ui-sref="app.calcdetail({id:'+idx+'})">'+
					'        <div>'+
					'          <span class="title">'+mydatas2[idx][0]+'('+mydatas2[idx][1]+')</span>'+
					'        </div>'+
					'        <i class="icon ion-arrow-right-c"></i>'+
					'      </a>';
}
			
mydatas2.forEach(mydatatoData2)		

		
var calcSource=
'<ion-view class="layouts-view">'+
'  <ion-nav-title>'+
'    <span style="font-family:gothic;font-weight:bold;">정산분배</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'    <div class="list layouts-functionalities">'+
'		<a class="item item-icon-right" ui-sref="app.calcmainstream">'+
'        <div>'+
'          <span class="title">메인스트림</span>'+
'        </div>'+
'        <i class="icon ion-arrow-right-c"></i>'+
'      </a>'+
'		<a class="item item-icon-right" ui-sref="app.calcauthor">'+
'        <div>'+
'          <span class="title">작가별</span>'+
'        </div>'+
'        <i class="icon ion-arrow-right-c"></i>'+
'      </a>'+
'		<a class="item item-icon-right" ui-sref="app.notebookpost2">'+
'        <div>'+
'          <span class="title">작품별</span>'+
'        </div>'+
'        <i class="icon ion-arrow-right-c"></i>'+
'      </a>'+
'    </div>'+
'  </ion-content>'+
test+
'</ion-view>';

	
var calcAuthorSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    <span style="font-family:gothic;font-weight:bold;">정산분배 (작가별)</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'<div class="bar bar-header item-input-inset" style="background-color:transparent">'+
'  <label class="item-input-wrapper">'+
'    <i class="icon ion-ios-search placeholder-icon"></i>'+
'    <input type="search" placeholder="Search">'+
'  </label>'+
'  <button class="button button-clear">'+
'    검색'+
'  </button>'+
'</div>'+
'    <div class="list layouts-functionalities">'+
mydataresult2+
'    </div>'+
'  </ion-content>'+
test+
'</ion-view>';

var moneytable1 = function(data){
	var temp = '';
	data.forEach(function(el,idx){
		temp += '<div class="row" style="padding-bottom:10px;"><div style="width:50%;color:white;font-size:9pt;">'+el+'</div><div style="text-align:right;width:50%;color:white;font-size:9pt;">{{money}}</div></div>';
	});
	return temp;
}
	
var moneytable2 = function(data){
	var temp = '';
	data.forEach(function(el,idx){
	 
	if(idx==0){
		
		var customStyle="width:25%;font-size:9pt;color:white;text-align:center;background-color:#2d4462;height:30px;padding-top:5px;";
		temp += '<div class="row"><div style="'+customStyle+'">'+el[0]+'</div><div style="'+customStyle+'">'+el[1]+'</div><div style="'+customStyle+'">'+el[2]+'</div><div style="'+customStyle+'">'+el[3]+'</div></div>';
	}else{
		var customStyle="width:25%;font-size:9pt;color:black;text-align:center;background-color:white;height:30px;padding-top:5px;";
		temp += '<div class="row"><div style="'+customStyle+'">'+el[0]+'</div><div style="'+customStyle+'">'+el[1]+'</div><div style="'+customStyle+'">'+el[2]+'</div><div style="'+customStyle+'">'+el[3]+'</div></div>';

	}
	});

return temp;
}

var moneytable3 = function(data){
	var temp = '';
	data.forEach(function(el,idx){ 
		if(idx==0){
			var customStyle="width:20%;font-size:9pt;color:white;text-align:center;background-color:#2d4462;height:30px;padding-top:5px;";
			temp += '<div class="row"><div style="'+customStyle+'">'+el[0]+'</div><div style="'+customStyle+'">'+el[1]+'</div><div style="'+customStyle+'">'+el[2]+'</div><div style="'+customStyle+'">'+el[3]+'</div><div style="'+customStyle+'">'+el[4]+'</div></div>';
		}else{
			var customStyle="width:20%;font-size:9pt;color:black;text-align:center;background-color:white;height:30px;padding-top:5px;";
			temp += '<div class="row"><div style="'+customStyle+'">'+el[0]+'</div><div style="'+customStyle+'">'+el[1]+'</div><div style="'+customStyle+'">'+el[2]+'</div><div style="'+customStyle+'">'+el[3]+'</div><div style="'+customStyle+'">'+el[4]+'</div></div>';
		}
	});

return temp;
}

var moneydata2 = [[''	 ,'합계'		 ,'국내'		 ,'해외'],
				  ['복제','123,456,789원','123,456,789원','123,456,789원'],
				  ['공연','123,456,789원','123,456,789원','123,456,789원'],
				  ['방송','123,456,789원','123,456,789원','123,456,789원'],
				  ['전송','123,456,789원','123,456,789원','123,456,789원'],
				  ['싱크','123,456,789원','123,456,789원','123,456,789원'],
				  ['출판','123,456,789원','123,456,789원','123,456,789원'],
				  ['기타','123,456,789원','123,456,789원','123,456,789원'],
				  ['합계','123,456,789원','123,456,789원','123,456,789원']];
				  
var moneydata3 = [[''	 ,'3Q14'	   ,'4Q14'	 ,'5Q14'    ,'6Q14'],
				  ['복제','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['공연','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['방송','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['전송','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['싱크','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['출판','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['기타','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['합계','3,456,789','3,456,789','3,456,789','3,456,789']]

var calcdetailSource =
'<ion-view class="layouts-view">'+
'  <ion-nav-title>'+
'    	<span style="font-family:gothic;font-weight:bold;">2015년 2분기</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="padding-top:20px;background-color:#22334e;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;">{{title}} ( {{number}})</span></div>'+
'	<div style="float:right;"><span style="color:white;font-size:9pt;padding-right:10px;">지급예정일 : 2015-09-25</span></div>'+
'	<div style="width:100%;clear:both;background-color:#2d4462;color:white;height:26px;line-height:26px;text-align:center;">계정요약(Account Summary)</div>'+
'<div style="width:100%;height:10px;"></div>'+
moneytable1(['기초잔액','2015년 2분기 사용료','선급금 상계액','정산사용료','실 지급액'])+
'<div style="margin-top:5px;">'+moneytable2(moneydata2)+'</div>'+
'  </ion-content>'+
test+
'</ion-view>';



var mainStreamSource =
'<ion-view class="layouts-view">'+
'  <ion-nav-title>'+
'    	<span style="font-family:gothic;font-weight:bold;">2015년 2분기(기간)</span>'+
'  </ion-nav-title>'+
'  <ion-content style="padding-top:20px;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;"><i class="ion-stats-bars" style="color:#ffffff"></i> 메인스트림 (001) </span></div>'+
'<div class="list card" style="background-color: #000000; opacity:0.4;box-shadow: 0 0px 0px;">'+
'          <div class="item item-image" style="background-color: transparent;">'+
'			<div id="chart5" style="height:300px;"><svg></svg></div>'+
'          </div>'+
'        </div>'+
'<div style="margin-top:5px;">'+moneytable3(moneydata3)+'</div>'+
'  </ion-content>'+
test+
'</ion-view>';

// 작품상세




var tableData2 = [
	["구분"	 ,"권리자"						,"복제"	,"공연"	,""		,"관리"],
	["A"	 ,"김동현"						,"5.56"	,"5.56"	,"KOMCA",""],
	["A"	 ,"김동현"						,"5.56"	,"5.56"	,"KOMCA",""],
	["A" 	 ,"오유원"						,"5.56"	,"5.56"	,"KOMCA",""],
	["OP"	 ,"SM엔터테이먼트"				,"16.67",'16.67',"KOMCA","Y"]

];

var addTable2 = function(data){
	var idx = 0;
	var tempData = '	<div class="row" style="padding:0px;width:100%;height:20px;height:30px;line-height:30px;">'+
	'	  <div style="border-right:1px #445973 solid;background-color:#2d4462;width:15%;text-align:center;color:white;font-size:9pt;">'+data[idx][0]+'</div>'+
	'	  <div style="border-right:1px #445973 solid;background-color:#2d4462;width:40%;text-align:center;color:white;font-size:9pt;">'+data[idx][1]+'</div>'+
	'	  <div style="border-right:1px #445973 solid;background-color:#2d4462;width:15%;text-align:center;color:white;font-size:9pt;">'+data[idx][2]+'</div>'+
	'	  <div style="border-right:1px #445973 solid;background-color:#2d4462;width:15%;text-align:center;color:white;font-size:9pt;">'+data[idx][3]+'</div>'+
	'	  <div style="background-color:#2d4462;width:15%;text-align:center;color:white;font-size:9pt;">'+data[idx][5]+'</div>'+
	'	</div>';
	idx++;

	for(;idx<data.length;idx++){
	if(data[idx][3] == 'Y'){
	
	var customColor = "#f6f6f6";
		tempData += '	<div class="row" style="padding-top:10px;padding-bottom:10px;width:100%;background-color: '+customColor+';">'+
	'	  <div style="font-size:9pt;background-color:'+customColor+';width:15%;text-align:center;padding-top:10px;"><span style="font-weight:bold">'+data[idx][0]+'</span></div>'+
	'	  <div style="font-size:9pt;padding-left:10px;background-color:'+customColor+';width:40%;text-align:left;"><span style="font-weight:bold">'+data[idx][1] +'</span><BR>' + data[idx][4]+'</div>'+
	'	  <div style="font-size:9pt;background-color:'+customColor+';width:15%;text-align:center;padding-top:10px;">'+data[idx][2]+'</div>'+
	'	  <div style="font-size:9pt;background-color:'+customColor+';width:15%;text-align:center;padding-top:10px;font-weight:bold">'+data[idx][3]+'</div>'+
	'	  <div style="font-weight:bold;font-size:9pt;background-color:'+customColor+';width:15%;text-align:center;padding-top:10px;font-weight:bold">'+data[idx][5]+'</div>'+
	'	</div>';
	}else{
		tempData += '	<div class="row" style="padding-top:10px;padding-bottom:10px;width:100%;background-color: #ffffff;;">'+
	'	  <div style="font-size:9pt;border-bottom:1px #f0f0f0 solid;background-color:white;width:15%;text-align:center;padding-top:10px;"><span style="font-weight:bold">'+data[idx][0]+'</span></div>'+
	'	  <div style="font-size:9pt;border-bottom:1px #f0f0f0 solid;padding-left:10px;background-color:white;width:40%;text-align:left;"><span style="font-weight:bold">'+data[idx][1] + '</span><BR>' + data[idx][4]+'</div>'+
	'	  <div style="font-size:9pt;border-bottom:1px #f0f0f0 solid;background-color:white;width:15%;text-align:center;padding-top:10px;">'+data[idx][2]+'</div>'+
	'	  <div style="font-size:9pt;border-bottom:1px #f0f0f0 solid;background-color:white;width:15%;text-align:center;padding-top:10px;">'+data[idx][3]+'</div>'+
	'	  <div style="font-weight:bold;font-size:9pt;border-bottom:1px #f0f0f0 solid;background-color:white;width:15%;text-align:center;padding-top:10px;">'+data[idx][5]+'</div>'+
	'	</div>';
	}
	}
	return tempData; 
}
var customButton = "min-width:20px;width:200px;min-height:20px;height:30px;padding:0px;line-height:0px;font-weight:bold;";
var notebookpost2bottommiddlestyle = "width:40%;font-size:14pt;color:white;font-weight:bold;margin-left:10px;font-weight:bold;";
var notebookpost2bottomstyle1 = "padding-top:5px;padding-bottom:5px;width:30%;font-size:10pt;color:white;margin-left:10px;";
var notebookpost2bottomstyle2 = "padding-top:5px;padding-bottom:5px;width:60%;font-size:10pt;color:#97fc92;margin-left:10px;";
var notebookpost2bottomstyle3 = "padding-top:5px;padding-bottom:5px;width:10%;font-size:10pt;color:#97fc92;margin-left:10px;font-weight:bold";

var notebookpost2bottom1 = '<div style=\''+notebookpost2bottomstyle1+'\'>아티스트</div>' +
						   '<div style=\''+notebookpost2bottomstyle2+'\'>EXO<button class="button button-calm" style="margin-left:10px;min-width: 20px;width: 30px;min-height: 15px;height: 15px;padding: 0px;line-height: 0px;font-size:10px;margin-top:5px;">more</button></div>' +
						   '<div style=\''+notebookpost2bottomstyle3+'\'>Y</div>';

var notebookpost2bottom2 = '<div style=\''+notebookpost2bottomstyle1+'\'>앨범</div>' +
						   '<div style=\''+notebookpost2bottomstyle2+'\'>LOVEMERIGHT</div>' +
						   '<div style=\''+notebookpost2bottomstyle3+'\'></div>';
						   
var notebookpost2bottom3 = '<div style=\''+notebookpost2bottomstyle1+'\'>제작자</div>' +
						   '<div style=\''+notebookpost2bottomstyle2+'\'>SM엔터테이먼트</div>' +
						   '<div style=\''+notebookpost2bottomstyle3+'\'></div>';
						   
var notebookpost2bottom4 = '<div style=\''+notebookpost2bottomstyle1+'\'>유통사</div>' +
						   '<div style=\''+notebookpost2bottomstyle2+'\'>KT뮤직<button class="button button-calm" style="margin-left:10px;min-width: 20px;width: 30px;min-height: 15px;height: 15px;padding: 0px;line-height: 0px;font-size:10px;margin-top:5px;">more</button></div>' +
						   '<div style=\''+notebookpost2bottomstyle3+'\'>Y</div>';

var notebookpost2 =
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-family:gothic;font-weight:bold;">작품 상세</span>'+
'  </ion-nav-title>'+
'  <ion-content style="background-color:#22334f;padding-top:20px;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;font-family:Dotum;">LOVE ME RIGHT<button class="button button-calm" style="margin-left:10px;min-width: 20px;width: 30px;min-height: 15px;height: 15px;padding: 0px;line-height: 0px;font-size:10px;margin-top:5px;">more</button></span></div>'+
'	<div style="float:right;"><span style="color:white;font-size:9pt;">공표일 : 2015-06-03</span></div>'+
addTable2(tableData2)+
'	<div class="row" style=\'margin-top:20px;\'><div style=\''+notebookpost2bottommiddlestyle+'\'>관리 지분율</div><div style=\'width:60%\'><button class="button" style='+customButton+'>5.56%</button></div></div>'+
'	<div class="row" style=\'margin-top:10px;\'><div style=\''+notebookpost2bottommiddlestyle+'\'>관리 지역</div><div style=\'width:60%\'><button class="button" style='+customButton+'>KOREA</button></div></div></div>'+
'	<div class="row" style=\'margin-top:10px;border-bottom:1px #515e6e solid;\'></div>'+
'	<div class="row" style=\'margin-top:10px;\'>'+notebookpost2bottom1+'</div>'+
'	<div class="row" style=\'margin-top:10px;\'>'+notebookpost2bottom2+'</div>'+
'	<div class="row" style=\'margin-top:10px;\'>'+notebookpost2bottom3+'</div>'+
'	<div class="row" style=\'margin-top:10px;\'>'+notebookpost2bottom4+'</div>'+
'	<div class="row" style=\'margin-top:10px;border-bottom:1px #515e6e solid;\'></div>'+
'  </ion-content>'+
test+
'</ion-view>';



// CHART DATA Start

var mcmchartdata = 'try{(function(){'+
'var testdata = ['+
'  {                    '+
'    "key": "Series 1", '+
'    "values": [        '+
'	                    '+
'	[ 13.50 , 2500000] , [ 13.75 , 2900000] , [ 14.00 , 2200000] , [ 14.25 , 3200000] ,'+
'	[ 14.50 , 3000000] , [ 14.75 , 4200000] , [ 15.00 , 3500000] , [ 15.25 , 5200000] ]'+
'  }                       '+
'];                        '+
'                          '+
'( function(data) {        '+
'  nv.addGraph(function() {'+
'    var chart = nv.models.lineChart()              '+
'				  .margin({left: 20})'+
'                  .x(function(d,i) { return d[0] })'+
'                  .y(function(d) { return d[1] })'+
'                	.showYAxis(false) '+
'					.showLegend(false)'+
'                  .color(["#ffffff", "#7b94b5", "#486192"])              '+
'                  .useInteractiveGuideline(true)                     '+
'					.tooltips(true)'+
'                  ;                                                  '+
'                                                                     '+
'     chart.xAxis                                                     '+
'		.showMaxMin(false)'+
'		.tickValues([13.50,13.75,14.00,14.25,14.50,14.75,15.00,15.25])'+
'		.tickFormat(function(d) {                          '+
'			var yearData = (d+"").split(".")[0];           '+
'			var numberData = (d+"").split(".")[1];         '+
'			                                               '+
'			try{                                           '+
'				if(numberData.length == 2){                '+
'					numberData = numberData*1;             '+
'				}else{                                     '+
'					numberData = numberData*1 * 10;			'+
'				}                                          '+
'			}catch(e){                                     '+
'			                                               '+
'			}                                              '+
'			                                               '+
'			                                               '+
'			if(numberData == undefined ||numberData < 25){ '+
'				return "1Q"+yearData;                       '+
'			}else if(numberData < 50){                     '+
'				return "2Q"+yearData;                       '+
'			}else if(numberData < 75){                     '+
'				return "3Q"+yearData;                       '+
'			                                               '+
'			}else{                                         '+
'				console.log(numberData);                   '+
'				return "4Q"+yearData;                       '+
'			}                                              '+
'      });                                                 '+
'		                                                   '+
'     chart.yAxis                                          '+
'		.showMaxMin(false)'+
'        .tickFormat(function(d) {                         '+
'            return d3.format(\',f\')(d)                     '+
'          });                                             '+
'                                                          '+
'                                                          '+
'    d3.select("#chart2 svg")                               '+
'        .datum(data)                                      '+
'        .call(chart);                                     '+
'                                                          '+
'    nv.utils.windowResize(chart.update);                  '+
'                                                          '+
'    return chart;                                         '+
'  });                                                     '+
'                                                          '+
'  nv.addGraph(function() {                                '+
'    var chart = nv.models.multiBarChart()                 '+
'                  .x(function(d,i) { return d[0] })       '+
'                  .y(function(d) { return d[1] }) '+
'				  	.margin({left: 20})'+
'                	.showYAxis(false) '+
'					.showLegend(false)'+
'				  ;                                                    '+
'                                                                      '+
'                                                                      '+
'     chart.xAxis                                                      '+
'		.tickValues([13.50,13.75,14.00,14.25,14.50,14.75,15.00,15.25]) '+
'		.tickFormat(function(d) {                                      '+
'			var yearData = (d+"").split(".")[0];                       '+
'			var numberData = (d+"").split(".")[1];                     '+
'			                                                           '+
'			try{                                                       '+
'				if(numberData.length == 2){                            '+
'					numberData = numberData*1;                         '+
'				}else{                                                 '+
'					numberData = numberData*1 * 10;			           '+
'				}                                                      '+
'			}catch(e){                                                 '+
'			                                                           '+
'			}                                                          '+
'			                                                           '+
'			                                                           '+
'			if(numberData == undefined ||numberData < 25){             '+
'				return "\'"+yearData+" 1Q";                             '+
'			}else if(numberData < 50){                '+
'				return "\'"+yearData+" 2Q";            '+
'			}else if(numberData < 75){                '+
'				return "\'"+yearData+" 3Q";            '+
'			                                          '+
'			}else{                                    '+
'				console.log(numberData);              '+
'				return "\'"+yearData+" 4Q";            '+
'			}                                         '+
'      });                                             '+
'		                                              '+
'     chart.yAxis                                     '+
'        .tickFormat(function(d) {                    '+
'            return d3.format(\',f\')(d)                '+
'          });                                        '+
'    d3.select("#chart svg")                         '+
'        .datum(data)                                 '+
'      .transition().duration(500).call(chart);       '+
'                                                     '+
'    nv.utils.windowResize(chart.update);             '+
'                                                     '+
'    return chart;                                    '+
'  });                                                '+
'                                                     '+
'                                                     '+
'    nv.addGraph(function() {                         '+
'      var chart = nv.models.stackedAreaChart()       '+
'                  .x(function(d,i) { return d[0] })  '+
'                  .y(function(d) { return d[1] }) '+
'				  	.margin({left: 20})'+
'                	.showYAxis(false) '+
'					.showLegend(false)'+
'				  ;                                                   '+
'                                                                     '+
'     chart.xAxis                                                     '+
'		.tickValues([13.50,13.75,14.00,14.25,14.50,14.75,15.00,15.25])'+
'		.tickFormat(function(d) {                  '+
'			var yearData = (d+"").split(".")[0];   '+
'			var numberData = (d+"").split(".")[1]; '+
'			                                       '+
'			try{                                   '+
'				if(numberData.length == 2){        '+
'					numberData = numberData*1;     '+
'				}else{                             '+
'					numberData = numberData*1 * 10;'+
'				}                                  '+
'			}catch(e){                             '+
'			                                       '+
'			}                                      '+
'			                                       '+
'			                                       '+
'			if(numberData == undefined ||numberData < 25){            '+
'				return "1Q"+yearData;               '+
'			}else if(numberData < 50){             '+
'				return "2Q"+yearData;               '+
'			}else if(numberData < 75){             '+
'				return "3Q"+yearData;               '+
'			                                       '+
'			}else{                                 '+
'				console.log(numberData);           '+
'				return "4Q"+yearData;               '+
'			}                                      '+
'      });                                         '+
'		                                           '+
'     chart.yAxis                                  '+
'        .tickFormat(function(d) {                 '+
'            return d3.format(\',f\')(d)             '+
'          });                                     '+
'                                                  '+
'      d3.select("#chart3 svg")                    '+
'        .datum(data)                              '+
'          .transition().duration(2000).call(chart);'+
'                                                  '+
'      nv.utils.windowResize(chart.update);        '+
'                                                  '+
'      return chart;                               '+
'  });        '+
'             '+
'             '+
'})(testdata);'+
'             '+
'})();}catch(e){eval(mcmchartdata)}        '




var mcmchartdata2 = 'try{(function(){'+
'var testdata2 = ['+
'  {                    '+
'    "key": "Series 1", '+
'    "values": [        '+
'	                    '+
'	[ 14.00 , 2200000] , [ 14.25 , 3200000],  [ 14.50 , 3000000] , [ 14.75 , 4200000]]'+
'  }                       '+
'];                        '+
'                          '+
'( function(data) {        '+
'  nv.addGraph(function() {'+
'    var chart = nv.models.lineChart()              '+
'				  .margin({left: 20})'+
'                  .x(function(d,i) { return d[0] })'+
'                  .y(function(d) { return d[1] })'+
'                	.showYAxis(false) '+
'					.showLegend(false)'+
'                  .color(["#ffffff", "#7b94b5", "#486192"])              '+
'                  .useInteractiveGuideline(true)                     '+
'					.tooltips(true)'+
'                  ;                                                  '+
'                                                                     '+
'     chart.xAxis                                                     '+
'		.showMaxMin(false)'+
'		.tickValues([13.50,13.75,14.00,14.25,14.50,14.75,15.00,15.25])'+
'		.tickFormat(function(d) {                          '+
'			var yearData = (d+"").split(".")[0];           '+
'			var numberData = (d+"").split(".")[1];         '+
'			                                               '+
'			try{                                           '+
'				if(numberData.length == 2){                '+
'					numberData = numberData*1;             '+
'				}else{                                     '+
'					numberData = numberData*1 * 10;			'+
'				}                                          '+
'			}catch(e){                                     '+
'			                                               '+
'			}                                              '+
'			                                               '+
'			                                               '+
'			if(numberData == undefined ||numberData < 25){ '+
'				return "1Q"+yearData;                 '+
'			}else if(numberData < 50){                     '+
'				return "2Q"+yearData;                 '+
'			}else if(numberData < 75){                     '+
'				return "3Q"+yearData;                 '+
'			                                               '+
'			}else{                                         '+
'				console.log(numberData);                   '+
'				return "4Q"+yearData;                 '+
'			}                                              '+
'      });                                                 '+
'		                                                   '+
'     chart.yAxis                                          '+
'		.showMaxMin(false)'+
'        .tickFormat(function(d) {                         '+
'            return d3.format(\',f\')(d)                     '+
'          });                                             '+
'                                                          '+
'                                                          '+
'    d3.select("#chart5 svg")                               '+
'        .datum(data)                                      '+
'        .call(chart);                                     '+
'                                                          '+
'    nv.utils.windowResize(chart.update);                  '+
'                                                          '+
'    return chart;                                         '+
'  });                                                     '+
'})(testdata2);'+
'             '+
'})();}catch(e){eval(mcmchartdata2)}      '


// CHART DATA END


//eval(mcmchartdata)
var mcmchartpage = 
'<link href="http://localhost:8100/css/nv.d3.css" rel="stylesheet" type="text/css">'+
'<script src="http://localhost:8100/js/d3.min.js"></script>'+
'<script src="http://localhost:8100/js/nv.d3.min.js"></script>'+
'<ion-view class="layouts-view">'+
'  <ion-nav-title>'+
'    <span>mcmchart</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'    <div class="list layouts-functionalities">'+
'    </div>'+
'  </ion-content>'+
'</ion-view>';










// ===== 필요없는것들


var formsViewSource = '<ion-view class="forms-view">'+
//'  <ion-nav-buttons side="left">'+
//'    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>'+
//'  </ion-nav-buttons>'+
'  <ion-nav-title>'+
'    <span>Forms</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'    <ul class="list">'+
''+
'      <div class="item item-divider">Inline Labels</div>'+
'      '+
'      <label class="item item-input">'+
'        <span class="input-label">First Name</span>'+
'        <input type="text">'+
'      </label>'+
'      <label class="item item-input">'+
'        <span class="input-label">Last Name</span>'+
'        <input type="text">'+
'      </label>'+
'      <label class="item item-input">'+
'        <span class="input-label">Email</span>'+
'        <input type="email">'+
'      </label>'+
''+
'      <div class="item item-divider">Floating Labels</div>'+
''+
'      <label class="item item-input item-floating-label">'+
'        <span class="input-label">Telephone</span>'+
'        <input type="tel" placeholder="Your phone">'+
'      </label>'+
'      <label class="item item-input item-floating-label">'+
'        <span class="input-label">Number</span>'+
'        <input type="number" placeholder="Some number">'+
'      </label>'+
''+
'      <div class="item item-divider">Stacked Labels</div>'+
''+
'      <label class="item item-input item-stacked-label">'+
'        <span class="input-label">Birth date</span>'+
'        <input type="date">'+
'      </label>'+
'      <label class="item item-input item-stacked-label">'+
'        <span class="input-label">Month</span>'+
'        <input type="month">'+
'      </label>'+
''+
'      <div class="item item-divider">Placeholder Labels</div>'+
''+
'      <label class="item item-input">'+
'        <textarea placeholder="Description"></textarea>'+
'      </label>'+
'      <label class="item item-input">'+
'        <input type="password" placeholder="Your password">'+
'      </label>'+
''+
'      <div class="item item-divider">Inset Inputs</div>'+
''+
'      <div class="item item-input-inset">'+
'        <label class="item-input-wrapper">'+
'          <input type="text" placeholder="Search...">'+
'        </label>'+
'        <button class="button button-small">'+
'          Submit'+
'        </button>'+
'      </div>'+
'    </ul>'+
'  </ion-content>'+
'</ion-view>';

// 프로필

var profileviewSource = '<ion-view class="profile-view">'+
'  <ion-nav-title>'+
'    <span>Profile</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'    <div class="top-content row">'+
'      <div class="profile-container">'+
'        <div class="user-image-container">'+
'          <pre-img ratio="_1_1" helper-class="rounded-image">'+
'            <img class="user-image" ng-src="https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" spinner-on-load="">'+
'          </pre-img>'+
'        </div>'+
'        <div class="user-name">Brynn Evans</div>'+
'        <div class="user-twitter">@brynn</div>'+
'      </div>'+
'      <div class="user-background-image-outer">'+
'        <div multi-bg="[\'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg\']"></div>'+
'      </div>'+
'    </div>'+
'    <div class="bottom-content">'+
'      <div class="user-bio">'+
'        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>'+
'      </div>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>';



// 로그인관련



var settingsViewSource = '<ion-view class="settings-view">'+
//'  <ion-nav-buttons side="left">'+
//'    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>'+
//'  </ion-nav-buttons>'+
'  <ion-nav-title>'+
'    <span>Settings</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'    <ul class="list">'+
''+
'      <div class="item item-divider">TOGGLE</div>'+
''+
'      <ion-toggle ng-model="airplaneMode" toggle-class="toggle-assertive">Airplane Mode</ion-toggle>'+
'      <ion-toggle ng-model="wifi" toggle-class="toggle-positive">Wi-Fi</ion-toggle>'+
'      <ion-toggle ng-model="bluetooth" toggle-class="toggle-calm">Bluetooth</ion-toggle>'+
'      <ion-toggle ng-model="personalHotspot" toggle-class="toggle-dark">Personal Hotspot</ion-toggle>'+
''+
'      <div class="item item-divider">CHECKBOXES</div>'+
''+
'      <ion-checkbox ng-model="checkOpt1">Option 1</ion-checkbox>'+
'      <ion-checkbox ng-model="checkOpt2">Option 2</ion-checkbox>'+
'      <ion-checkbox ng-model="checkOpt3">Option 3</ion-checkbox>'+
''+
'      <div class="item item-divider">RADIO</div>'+
''+
'      <ion-radio ng-model="radioChoice" ng-value="\'A\'">Choose A</ion-radio>'+
'      <ion-radio ng-model="radioChoice" ng-value="\'B\'">Choose B</ion-radio>'+
'      <ion-radio ng-model="radioChoice" ng-value="\'C\'">Choose C</ion-radio>'+
''+
'      <div class="item item-divider">RANGES</div>'+
''+
'      <div class="range">'+
'        <i class="icon ion-volume-low"></i>'+
'        <input type="range" name="volume">'+
'        <i class="icon ion-volume-high"></i>'+
'      </div>'+
'      <div class="item range range-positive">'+
'        <i class="icon ion-ios-sunny-outline"></i>'+
'        <input type="range" name="volume" min="0" max="100" value="33">'+
'        <i class="icon ion-ios-sunny"></i>'+
'      </div>'+
''+
'      <div class="item item-divider"></div>'+
''+
'      <button class="button button-block button-assertive" ng-click="showLogOutMenu()">'+
'        Logout'+
'      </button>'+
'    </ul>'+
'  </ion-content>'+
'</ion-view>';



var authouterSource = '<ion-nav-view class="auth-outer">'+
' <div multi-bg="[\'img/bg-gif.gif\']"></div>'+
' <!-- <div multi-bg="[\'img/bg-img.jpg\']"></div> -->'+
'</ion-nav-view>';








var forgotpasswordSource = '<ion-view class="forgot-password-view auth-view" cache-view="false">'+
'  <ion-content scroll="false">'+
'    <div class="row">'+
'      <div class="col col-center">'+
'        <div class="card forgot-password-container">'+
'          <form name="forgot_password_form" class="" novalidate="">'+
'            <div class="item item-body">'+
'              <label class="item item-input">'+
'                <input type="email" placeholder="Email" name="user_email" ng-model="user.email" required="">'+
'              </label>'+
'            </div>'+
'            <div class="item item-body bottom-content">'+
'              <button type="submit" class="button button-positive button-block" ng-click="recoverPassword()" ng-disabled="forgot_password_form.$invalid">'+
'                Recover it'+
'              </button>'+
'            </div>'+
'          </form>'+
'        </div>'+
'        <div class="alternative-actions">'+
'          <a class="log-in button button-small button-clear button-light" ui-sref="auth.login">'+
'            Log In'+
'          </a>'+
'          <a class="sign-up button button-small button-clear button-light" ui-sref="auth.signup">'+
'            Sign Up'+
'          </a>'+
'        </div>'+
'      </div>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'








var loginSource =
'<ion-view class="login-view auth-view" cache-view="false">'+
'  <ion-content scroll="false">'+
'    <div class="row">'+
'      <div class="col col-center">'+
'        <div class="card login-container" content-tabs="" tabsdata="tabsdata">'+
'          <form name="login_form" class="" novalidate="" ng-cloak="">'+
'            <my-tabs>'+
'              <my-tab title="Email">'+
'                <div class="list">'+
'                  <label class="item item-input">'+
'                    <input type="email" placeholder="Email" name="user_email" ng-model="user.email" required="">'+
'                  </label>'+
'                  <label class="item item-input" show-hide-container="">'+
'                    <input type="password" placeholder="Password" name="user_password" ng-model="user.password" required="" show-hide-input="">'+
'                  </label>'+
'                </div>'+
'              </my-tab>'+
'              <my-tab title="Phone">'+
'                <div class="list">'+
'                  <label class="item item-input">'+
'                    <input type="text" placeholder="Phone number" name="user_phone" ng-model="user.phone" required="">'+
'                  </label>'+
'                  <label class="item item-input" show-hide-container="">'+
'                    <input type="password" placeholder="PIN" name="user_pin" ng-model="user.pin" required="" valid-pin="user.pin" show-hide-input="">'+
'                  </label>'+
'                </div>'+
'              </my-tab>'+
'            </my-tabs>'+
'            <div class="item item-body bottom-content">'+
'              <button type="submit" class="button button-positive button-block" ng-click="doLogIn()" ng-disabled="(selected_tab==\'Email\') ? (login_form.user_email.$invalid || login_form.user_password.$invalid) : ((selected_tab==\'Phone\') ? (login_form.user_phone.$invalid || login_form.user_pin.$invalid) : false)">'+
'                Log In'+
'              </button>'+
'            </div>'+
'          </form>'+
'        </div>'+
'        <div class="alternative-actions">'+
'          <a class="forgot-password button button-small button-clear button-light" ui-sref="auth.forgot-password">'+
'            Forgot Password?'+
'          </a>'+
'          <a class="sign-up button button-small button-clear button-light" ui-sref="auth.signup">'+
'            Sign Up'+
'          </a>'+
'        </div>'+
'      </div>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'


var signupSource = '<ion-view class="signup-view auth-view" cache-view="false">'+
'  <ion-content scroll="false">'+
'    <div class="row">'+
'      <div class="col col-center">'+
'        <div class="card sign-up-container">'+
'          <form name="signup_form" class="" novalidate="">'+
'            <div class="item item-body">'+
'              <label class="item item-input">'+
'                <input type="email" placeholder="Email" name="user_email" ng-model="user.email" required="">'+
'              </label>'+
'              <label class="item item-input" show-hide-container="">'+
'                <input type="password" placeholder="Password" name="user_password" ng-model="user.password" required="" show-hide-input="">'+
'              </label>'+
'            </div>'+
'            <div class="item item-body bottom-content">'+
'              <button type="submit" class="button button-assertive button-block" ng-click="doSignUp()" ng-disabled="signup_form.$invalid">'+
'                Sign Up'+
'              </button>'+
'            </div>'+
'          </form>'+
'        </div>'+
'        <div class="alternative-actions">'+
'          <a class="log-in button button-small button-clear button-light" ui-sref="auth.login">'+
'            Log In'+
'          </a>'+
'        </div>'+
'      </div>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'






var walkthroughSource = '<ion-view class="walkthrough-view" cache-view="false">'+
'  <ion-content scroll="false">'+
'    <div class="top-content row">'+
'      <div class="col col-center">'+
'        <img ng-src="img/logo.png">'+
'      </div>'+
'    </div>'+
'    <div class="bottom-content row">'+
'      <div class="col col-center">'+
'        <a class="login button button-block button-stable" ui-sref="auth.login">'+
'          Log In'+
'        </a>'+
'        <a class="sign-up button button-block button-stable" ui-sref="auth.signup">'+
'          Sign Up'+
'        </a>'+
'      </div>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'






var ionicyoutubevideoSource = '<youtube-video video-id="videoId" player="yt_video" player-vars="playerVars"></youtube-video>';






var multibgSource =
'<div class="multi-bg-outer" ng-class="{ \'finish-loading\': loaded }">'+
' <img bg="" class="multi-bg {{ helperClass }}" ng-src="{{ bg_img }}">'+
' <span class="bg-overlay"></span>'+
' <ion-spinner ng-show="!loaded" class="spinner-on-load"></ion-spinner>'+
' <!-- <span ng-show="!loaded" class="spinner-on-load ion-load-c"></span> -->'+
' <ng-transclude></ng-transclude>'+
'</div>'










var mytabSource = '<div class="tab-content ng-cloak ng-hide" ng-cloak="" ng-show="selected" ng-transclude=""></div>';


var mytabsSource = '<div class="item item-divider card-heding">'+
' <div class="tabs-striped">'+
' <div class="tabs">'+
' <a ng-repeat="tab in tabs" ng-click="select(tab)" ng-class="{ active: tab.selected }" class="tab-item">{{tab.title}}</a>'+
' </div>'+
' </div>'+
'</div>'+
'<div class="item item-body">'+
' <div class="tabs-content" ng-transclude=""></div>'+
'</div>';






var preimgSource = '<div class="pre-img {{ratio}} {{ helperClass }}" ng-class="{ \'finish-loading\': loaded }">'+
' <ion-spinner ng-show="!loaded" class="spinner-on-load"></ion-spinner>'+
' <!-- <span ng-show="!loaded" class="spinner-on-load ion-load-c"></span> -->'+
' <ng-transclude></ng-transclude>'+
'</div>'




var showhidepasswordSource ='<div class="show-hide-input" ng-transclude="">'+
'</div>'+
'<a class="toggle-view-anchor" on-touch="toggleType($event)">'+
' <span class="ion-eye-disabled" ng-show="show"></span>'+
' <span class="ion-eye" ng-show="!show"></span>'+
'</a>'


var categoryfeedsSource = '<ion-view class="category-feeds-view">'+
'  <ion-nav-title>'+
'    <span>{{categoryTitle}} feeds</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'    <div class="list category-feeds">'+
'      <a ng-repeat="source in category_sources" class="item item-icon-right" ui-sref="app.feed-entries({categoryId: categoryId, sourceId: (source.title | slugify)})">'+
'        <div class="thumbnail-outer">'+
'          <pre-img ratio="_1_1" helper-class="">'+
'            <img class="thumbnail" ng-src="{{source.image}}" spinner-on-load="">'+
'          </pre-img>'+
'        </div>'+
'        <div>'+
'          <span class="title">{{source.title}}</span>'+
'          <p class="description">{{source.description}}</p>'+
'        </div>'+
'        <i class="icon ion-arrow-right-c"></i>'+
'      </a>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'


var feedentriesSource =
'<ion-view class="feed-entries-view">'+
'  <ion-nav-title>'+
'    <span>{{sourceTitle}}</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'    <!-- Refresh to get the new posts -->'+
'    <ion-refresher pulling-text="Pull to refresh..." on-refresh="doRefresh()">'+
'    </ion-refresher>'+
''+
'    <div class="entries-list">'+
'      <div ng-repeat="entry in feed.entries" class="list card entry-item">'+
'        <div class="entry-heading item item-text-wrap">'+
'          <h2 class="entry-title" ng-bind-html="entry.title | rawHtml"></h2>'+
'          <p class="entry-author">'+
'            Published <span>{{ entry.publishedDate | parseDate | amTimeAgo }}</span>'+
'          </p>'+
'        </div>'+
'        <div class="entry-content item item-text-wrap">'+
'          <p class="entry-excerpt" dynamic-anchor-fix="" ng-bind-html="entry.contentSnippet | rawHtml"></p>'+
'          <div class="entry-actions row">'+
'            <div class="actions col col-center col-66">'+
'              <a class="button button-icon icon ion-bookmark" ng-click="bookmarkPost(entry)"></a>'+
'            </div>'+
'            <div class="read-more col col-center col-33" dynamic-anchor-fix="">'+
'              <a class="button button-small button-block button-assertive" ng-href="{{entry.link}}">'+
'                Read more'+
'              </a>'+
'            </div>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'


var feedscategoriesSource = '<ion-view class="feeds-categories-view">'+
//'  <ion-nav-buttons side="left">'+
//'    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>'+
//'  </ion-nav-buttons>'+
'  <ion-nav-title>'+
'    <span>Feeds Categories</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'     <div>test</div>'+
'    <div class="row categories-list">'+
'      <div ng-repeat="category in feeds_categories" class="col col-50">'+
'        <a class="feed-category" ui-sref="app.category-feeds({categoryId: (category.title | slugify)})">'+
'          <pre-img ratio="_1_1" helper-class="square-image">'+
'            <img class="category-image" ng-src="{{category.image}}" spinner-on-load="">'+
'          </pre-img>'+
'          <div class="category-bg"></div>'+
'          <span class="category-title">{{category.title}}</span>'+
'        </a>'+
'      </div>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'


var layoutsSource =
'<ion-view class="layouts-view">'+
//'  <ion-nav-buttons side="left">'+
//'    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>'+
//'  </ion-nav-buttons>'+
'  <ion-content>'+
'    <div class="list layouts-functionalities">'+
'      <a class="item item-icon-left item-icon-right" ui-sref="app.tinder-cards">'+
'        <i class="icon ion-happy-outline"></i>'+
'        <div>'+
'          <span class="title">Tinder Cards</span>'+
'          <p class="description">Awesome Tinder Cards</p>'+
'        </div>'+
'        <i class="icon ion-arrow-right-c"></i>'+
'      </a>'+
'      <a class="item item*-icon-left item-icon-right" ui-sref="app.slider">'+
'        <i class="icon ion-arrow-swap"></i>'+
'        <div>'+
'          <span class="title">Slider</span>'+
'          <p class="description">Example of sliding cards</p>'+
'        </div>'+
'        <i class="icon ion-arrow-right-c"></i>'+
'      </a>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'
