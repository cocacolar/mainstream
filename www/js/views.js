 angular.module("your_app_name.views", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/app/bookmarks.html","<ion-view class=\"bookmarks-view\">\n  <ion-nav-title>\n    <span>Bookmarks</span>\n  </ion-nav-title>\n  <ion-content>\n    <div ng-if=\"(bookmarks.wordpress.length == 0 && bookmarks.feeds.length == 0)\" class=\"row bookmarks-container\">\n      <div class=\"col col-center\">\n        <div class=\"empty-results\">\n          <i class=\"icon ion-bookmark\"></i>\n          <h3 class=\"no-bookmarks\">There\'s nothing here yet. Start exploring!</h3>\n        </div>\n      </div>\n    </div>\n    <ul ng-if=\"(bookmarks.wordpress.length > 0 || bookmarks.feeds.length > 0)\" class=\"bookmarks-list\">\n      <div ng-if=\"bookmarks.feeds.length > 0\" class=\"item item-divider\">\n        Feeds Bookmarks\n      </div>\n      <li class=\"bookmark-item\" ng-repeat=\"bookmark in bookmarks.feeds\">\n        <a ng-click=goToFeedPost(bookmark.link)>\n          <h2 class=\"post-title\" ng-bind-html=\"bookmark.title | rawHtml\"></h2>\n          <p class=\"post-date\">Posted <span class=\"post-time\" am-time-ago=\"bookmark.date\"></span></p>\n        </a>\n      </li>\n      <div ng-if=\"bookmarks.wordpress.length > 0\" class=\"item item-divider\">\n        Wordpress bookmarks\n      </div>\n      <li class=\"bookmark-item\" ng-repeat=\"bookmark in bookmarks.wordpress\">\n        <a ng-click=goToWordpressPost(bookmark.id)>\n          <h2 class=\"post-title\" ng-bind-html=\"bookmark.title | rawHtml\"></h2>\n          <p class=\"post-date\">Posted <span class=\"post-time\" am-time-ago=\"bookmark.date\"></span></p>\n        </a>\n      </li>\n    </ul>\n  </ion-content>\n</ion-view>\n");


 $templateCache.put("views/app/wordpress/wordpress.html", mainSource);

 



$templateCache.put("views/app/forms.html",formsViewSource);
$templateCache.put("views/app/profile.html",profileviewSource);
$templateCache.put("views/app/settings.html",settingsViewSource); // 환경설정 페이지
$templateCache.put("views/app/side-menu.html",sideMenuSource);
$templateCache.put("views/auth/auth.html", authouterSource);
$templateCache.put("views/auth/forgot-password.html", forgotpasswordSource);
$templateCache.put("views/auth/login.html", loginSource);
$templateCache.put("views/auth/signup.html", signupSource);

//$templateCache.put("views/app/intropage.html", IntroPageSource);
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
$templateCache.put("views/app/layouts/tinder-cards.html",   tindercardsSource);
$templateCache.put("views/app/miscellaneous/image-picker.html",   imagepickerSource);
$templateCache.put("views/app/miscellaneous/maps.html",    mapsSource);
//$templateCache.put("views/app/miscellaneous/miscellaneous.html",  miscellaneousSource);
$templateCache.put("views/app/miscellaneous/miscellaneous.html",  wordpressSource);
//$templateCache.put("views/app/wordpress/wordpress.html", wordpressSource);
$templateCache.put("views/app/notebook.html", regRightListSource);
$templateCache.put("views/app/notebookpost.html", notebookpost);
$templateCache.put("views/app/notebookpost2.html", notebookpost2);


$templateCache.put("views/app/calc.html", calcSource);
$templateCache.put("views/app/calcna.html",calcNewAuthorSource);
$templateCache.put("views/app/calcnada.html",calcNewAuthorDetailSource);
$templateCache.put("views/app/calcl.html",calcLocalSource);
$templateCache.put("views/app/calcld.html",calcLocalDetailSource);
$templateCache.put("views/app/calcdd.html",calcDateDetailSource);

$templateCache.put("views/app/calcauthor.html", calcAuthorSource);
$templateCache.put("views/app/calcdetail.html", calcdetailSource);
$templateCache.put("views/app/mainStreamDetail.html", mainStreamSource);
$templateCache.put("views/app/resultSearch.html", resultSearch);
$templateCache.put("views/app/managerment.html", managermentSource);
$templateCache.put("views/app/managerment2.html", managermentDetailSource);
$templateCache.put("views/app/useallow.html", useallowSource);
$templateCache.put("views/app/useallow2.html", useallowSource2);

$templateCache.put("views/app/wordpress/wordpress_post.html","<ion-view class=\"post-view\">\n  <ion-content>\n    <div class=\"post-heading item item-text-wrap\">\n      <h1 class=\"post-title\">{{post.title}}</h1>\n      <p class=\"post-author\">\n        By <span>{{post.author.nickname}}</span> <span am-time-ago=\"post.date\"></span>\n      </p>\n    </div>\n    <div class=\"post-content item item-text-wrap\" post-content>\n      <p class=\"post-text\" dynamic-anchor-fix ng-bind-html=\"post.content | rawHtml\"></p>\n    </div>\n    <div class=\"post-tags item item-text-wrap\">\n      <span class=\"post-tag button button-small button-outline button-stable\" ng-repeat=\"category in post.categories\">{{category.title}}</span>\n    </div>\n  </ion-content>\n  <ion-footer-bar class=\"post-footer bar bar-footer bar-dark\">\n    <div class=\"row\">\n      <div class=\"col col-20 col-center\">\n        <a class=\"button button-icon icon icon-right ion-plus\" bigger-text=\".post-view .post-text\">A</a>\n      </div>\n      <div class=\"col col-20 col-center\">\n        <a class=\"button button-icon icon icon-right ion-minus\" smaller-text=\".post-view .post-text\">A</a>\n      </div>\n      <div class=\"col col-20 col-offset-20 col-center\">\n        <a class=\"button button-icon icon ion-heart\"></a>\n      </div>\n      <div class=\"col col-20 col-center\">\n        <a class=\"button button-icon icon ion-android-share-alt\" ng-click=\"sharePost(post.url)\"></a>\n      </div>\n    </div>\n  </ion-footer-bar>\n</ion-view>\n");}]);


//formsViewSource, profileviewSource,settingsViewSource,authouterSource,forgotpasswordSource,loginSource,
//signupSource,walkthroughSource, ionicyoutubevideoSource, multibgSource, mytabSource, mytabsSource,
// preimgSource,showhidepasswordSource,categoryfeedsSource,feedentriesSource,feedscategoriesSource,layoutsSource,sliderSource,
//imagepickerSource,mapsSource,miscellaneousSource,sliderSource

var allfontsize = "12pt";


var customButton = "min-width:20px;width:30px;min-height:20px;height:20px;padding:0px;line-height:0px;";
var customButton2 = "margin-bottom:-15px;margin-top:-3px;min-height:15px;height:24px;padding:0px;line-height:0px;width:110px;font-weight:bold";

var notebookpost2bottommiddlestyle = "width:40%;font-size:12pt;color:white;font-weight:bold;margin-left:10px;font-weight:bold;";
var notebookpost2bottomstyle1 = "padding-top:5px;padding-bottom:5px;width:30%;font-size:"+allfontsize+";color:white;margin-left:10px;";
var notebookpost2bottomstyle2 = "padding-top:5px;padding-bottom:5px;width:60%;font-size:"+allfontsize+";color:#97fc92;margin-left:10px;";
var notebookpost2bottomstyle3 = "padding-top:5px;padding-bottom:5px;width:10%;font-size:"+allfontsize+";color:#97fc92;margin-left:10px;font-weight:bold";
var beforemore = '<button class="button button-calm" style="margin-left:10px;min-width: 20px;width: 30px;min-height: 15px;height: 15px;padding: 0px;line-height: 0px;font-size:10px;margin-top:5px;">more</button>';
var moreimage = '<img ng-src="img/more.png" style="height:14px;width:30px;line-height:10px;vertical-align:middle;">';
var notebookpost2bottom1 = '<div style=\''+notebookpost2bottomstyle1+'\'>아티스트</div>' +
						   '<div style=\''+notebookpost2bottomstyle2+'\'><button class="button" style='+customButton2+'>EXO</button> &nbsp;'+moreimage+'</div>' +
						   '<div style=\''+notebookpost2bottomstyle3+'\'>Y</div>';

var notebookpost2bottom2 = '<div style=\''+notebookpost2bottomstyle1+'\'>앨범</div>' +
						   '<div style=\''+notebookpost2bottomstyle2+'\'>LOVE ME RIGHT</div>' +
						   '<div style=\''+notebookpost2bottomstyle3+'\'></div>';

var notebookpost2bottom3 = '<div style=\''+notebookpost2bottomstyle1+'\'>제작자</div>' +
						   '<div style=\''+notebookpost2bottomstyle2+'\'>SM엔터테인먼트</div>' +
						   '<div style=\''+notebookpost2bottomstyle3+'\'></div>';

var notebookpost2bottom4 = '<div style=\''+notebookpost2bottomstyle1+'\'>유통사</div>' +
						   '<div style=\''+notebookpost2bottomstyle2+'\'>KT뮤직</div>' +
						   '<div style=\''+notebookpost2bottomstyle3+'\'>Y</div>';

var absoluteStyle =
'<style>'+
'ion-header-bar{padding-left:10px !important;padding-right:10px !important;padding-top:10px !important;}'+
'ion-header-bar > .buttons-right{right:10px !important;top:10px !important;}'+
'ion-header-bar > .title{top:5px !important;}'+
'.row{padding:0px;}'+
'.right-buttons > button{display:block !important;}'+
'*{font-family:"Spoqa Han Sans", "Sans-serif" !important;}'+
'.nav-bar-title > span{line-height:53px !important;}'+ // 상세페이지 중앙정렬
'.item:not([isMenu="true"]){padding:0px}'+ // 메뉴가 맞으면 모두 padding 0
'.slider{padding:0px}'+
'.bar{background-image:none !important}'+
'.slider-slide > div{margin:23px}'+
'path{fill-opacity: 1 !important;}'+
'g[class=" nv-group nv-series-0"]{stroke-width:2.5px !important}'+
'ion-item[isTranparent="true"]{background-color:transparent !important;z-index:9999 !important;padding-left: 90px !important;}'+
'ion-item[isTranparent="true"] > a{background-color:transparent !important;}'+
'.nav-bar-block[nav-bar="active"] > ion-header-bar{ background:rgba(255,255,255,.03) ;height:80px !important;box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15);}'+
'.nav-bar-block[nav-bar="cached"] > ion-header-bar{ background:rgba(255,255,255,.03) ;height:80px !important;box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15);}'+
'.nav-bar-block > ion-header-bar {background:rgba(255,255,255,.03) ;height:80px !important;box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15);}'+
'.nav-bar-block {height:80px !important;}'+
'.has-header{top: 80px !important}'+
'</style>';

var boxShadowstyle = '<style>'+
'</style>'; //box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15);
















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


var pagefootermargin = '<div style="width:100%;height:20px;"></div>';
var test =
absoluteStyle+'<ion-pull-up-footer style="background-color:#23364d;height:30px;border:0px;" class="bar-energized" on-expand="footerExpand()" on-collapse="footerCollapse()">'+
'<ion-pull-up-bar>'+
'<div style="width:100%;border-top:1px solid #3b4b5e;margin-left:7px;margin-right:7px;">'+
'<div style="width:100%;padding-top:5px;text-align:center;" ion-pull-up-trigger><img ng-src="img/bottom.png" style="width:30px;height:7px;margin-bottom:2px;"></i></div></div>'+
'</ion-pull-up-bar>'+
'<div style="padding-top:40px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;" ui-sref=\"app.notebook\"><img ng-src=\"img/kr.png\" style=\"display:block;width:46px;height:52px;;margin:0 auto;\" "></div>'+
'<div style="padding-top:40px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;" ui-sref=\"app.useallow\"><img ng-src=\"img/sa.png\" style=\"display:block;width:46px;height:52px;margin:0 auto;\" "></div>'+
'<div style="padding-top:40px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;" ui-sref=\"app.calc\"><img ng-src=\"img/jh.png\" style=\"display:block;width:46px;height:52px;margin:0 auto;\" "></div>'+
'<div style="padding-top:40px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;" ui-sref=\"app.managerment\" ><img ng-src=\"img/gm.png\" style=\"display:block;width:46px;height:52px;margin:0 auto;\" "></div>'+
'</ion-pull-up-footer>'



var test2=
absoluteStyle+'<ion-footer-bar align-title="left" style="background:rgba(255,255,255,.05);height:85px;">'+
'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;" ui-sref=\"app.notebook\"><img ng-src=\"img/kr.png\" style=\"display:block;width:46px;height:52px;;margin:0 auto;\" "></div>'+
'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;"" ui-sref=\"app.useallow\"><img ng-src=\"img/sa.png\" style=\"display:block;width:46px;height:52px;margin:0 auto;\" "></div>'+
'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;"  ui-sref=\"app.calc\"><img ng-src=\"img/jh.png\" style=\"display:block;width:46px;height:52px;margin:0 auto;\" "></div>'+
'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;" ui-sref=\"app.managerment\" ><img ng-src=\"img/gm.png\" style=\"display:block;width:46px;height:52px;margin:0 auto;\" "></div>'+
'</ion-footer-bar>';
/*
var test2=
'<ion-footer-bar align-title="left" style="background:rgba(255,255,255,.05);">'+
		'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;" ui-sref=\"app.notebook\"><i class="icon ion-social-buffer-outline"  style="font-size:50px;color:#c1f5ff;"></i><br>권리등록</div>'+
		'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold; "><i class="icon ion-document"  style="font-size:50px;color:#c1f5ff;"></i><br>사용허락</div>'+
		'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;"  ui-sref=\"app.calc\"><i class="icon ion-stats-bars"  style="font-size:50px;color:#c1f5ff;"></i><br>정산분배</div>'+
		'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;" ><i class="icon ion-ios-calculator"  style="font-size:50px;color:#c1f5ff;"></i><br>경영관리</div>'+
'</ion-footer-bar>';
*/
var beforetab = '<div class="row" style="background:rgba(255,255,255,.05);height:100px;">'+

'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;" ui-sref=\"app.notebook\"><img ng-src=\"img/kr.png\" style=\"display:block;width:46px;height:52px;;margin:0 auto;\" "></div>'+
'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold; "><img ng-src=\"img/sa.png\" style=\"display:block;width:46px;height:52px;margin:0 auto;\" "></div>'+
'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;"  ui-sref=\"app.calc\"><img ng-src=\"img/jh.png\" style=\"display:block;width:46px;height:52px;margin:0 auto;\" "></div>'+
'<div style="padding-top:10px;text-align:center;width:25%;color:#c1f5ff;font-size:11pt;font-weight:bold;" ><img ng-src=\"img/gm.png\" style=\"display:block;width:46px;height:52px;margin:0 auto;\" "></div>'+
	'</div>'


function createStyleAttribute(attr,value){
	return  attr+":"+value+";"
}
function createStyle(datas){
	var styleText = " style=\"";
	datas.forEach(function(ele){
		if(ele[1] !== "nagoSkip"){
			styleText+= createStyleAttribute(ele[0],ele[1]);
		}
	})
	return styleText+ "\"";
}





var mainDesignLeftTopLogoArray = [["margin-left"	,"10px"	], // 24px = border(5px) + 19
								  ["margin-top"		,"10px"	], // 25px = border + 20
							      ["width"			,"100px"],
							      ["height"			,"27px"	]];

var mainDesignLeftTopLable1Array = [["background-color"	,"transparent"],
									["padding-top"		,"80px" ],
									["padding-bottom"	,"13px" ],
									["margin-left"	,"23px"	]];

var mainDesignLeftTopLable2Array = [["font-weight"	,"nagoSkip"],
									["font-size"	,"14pt"],
									["color"		,"#c1f5ff"]];

var mainDesignLeftTopLable3Array = [
                  ["background-color"	,"transparent"],
									["border"		  	,"0"],
									["margin-left"	,"21px"	]];

var mainItemiconRightArray		 = [
                  ["padding-top","4px"],
                  ["font-size"	,"19pt"],
									["color"		,"#ffffff"]];

var mainLargeTextArray			 = [["font-size"	,"28pt"],
									["color"		,"#ffffff"]];
var mainLargeText2Array			 = [["font-size"	,"19pt"],
									["color"		,"#ffffff"]];


var mainCardBackgroundArray = [["background","rgba(0,0,0,.25)"],
							   ["box-shadow","0 0px 0px rgba(0,0,0,0.15)"]];

var mainDesignLeftTopLogo = createStyle(mainDesignLeftTopLogoArray); // 로고
var mainDesignLeftTopLable1 = createStyle(mainDesignLeftTopLable1Array);
var mainDesignLeftTopLable2 = createStyle(mainDesignLeftTopLable2Array);
var mainDesignLeftTopLable3 = createStyle(mainDesignLeftTopLable3Array);
var mainItemiconRight = createStyle(mainItemiconRightArray);
var mainLargeText = createStyle(mainLargeTextArray);
var mainLarge2Text = createStyle(mainLargeText2Array);
var mainCardBackground = createStyle(mainCardBackgroundArray);

  var rightStyle="text-align:right;padding-right:10px;";
var middletext = ' style="font-size:20pt;color:white;padding-left:5px;"';
var middletext2 = ' style="font-size:24pt;color:white;padding-left:5px;float:right;padding-right:25px;"';

var mainSource =boxShadowstyle+'<ion-view isHome="true" class="slider-view">'+
' <ion-nav-buttons side="left">'+
''+
' <img ng-src="img/logo.png"'+mainDesignLeftTopLogo+'/>'+
//'    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>'+
'  </ion-nav-buttons>'+
'  <ion-content scroll="false">'+
'        <div class="item"'+mainDesignLeftTopLable1+'>'+
'			<div'+mainDesignLeftTopLable2+'>2015년 4분기 현재</div>'+
'        </div>'+ //<img ng-src="img/rightarrow.png" style="margin-left:3px">
'        <div class="item"'+mainDesignLeftTopLable3+'>'+
'			<div class="icon-right"'+mainItemiconRight+'"><span'+mainLargeText+'>232,529,378</span><span'+middletext+'>원<i'+middletext2+' class="icon ion-ios-arrow-forward"></i></span></div>'+
'        </div>'+
'    <ion-slide-box show-pager="false">'+
//'      <ion-slide>'+
'      <ion-slide>'+
'        <div class="list card"'+mainCardBackground+'>'+
'          <div class="item item-image" style="background-color: transparent;">'+
'			<div id="chart2" style="width:325px;height:300px;"><svg></svg></div>'+
//'            <img ng-src="img/feeds/logos/graph.png">'+
'          </div>'+
'        </div>'+
'      </ion-slide>'+
//'      </ion-slide>'+
/*
'      <ion-slide>'+
//'      <ion-slide>'+
'        <div class="list card"'+mainCardBackground+'>'+
'          <div class="item item-image" style="background-color: transparent;">'+
'			<div id="chart" style="width:330px;height:300px;"><svg></svg></div>'+
//'            <img ng-src="img/feeds/logos/graph.png">'+
'          </div>'+
'        </div>'+
//'      </ion-slide>'+
'      </ion-slide>'+
*/
/*
'      <ion-slide>'+
//'      <ion-slide>'+
'        <div class="list card"'+mainCardBackground+'>'+
'          <div class="item item-image" style="background-color: transparent;">'+
'			<div id="chart3" style="height:300px;"><svg></svg></div>'+
//'            <img ng-src="img/feeds/logos/graph.png">'+
'          </div>'+
'        </div>'+
//'      </ion-slide>'+
'      </ion-slide>'+*/
'    </ion-slide-box>'+
test2
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
'          <i class="icon ion-ios-arrow-forward"></i>'+
'        </a>'+
'      </div>'+
'      <a class="item item-icon-left item-icon-right" ui-sref="app.maps">'+
'        <i class="icon ion-map"></i>'+
'        <div>'+
'          <span class="title">Maps &amp; GeoLocation</span>'+
'          <p class="description">Show map &amp; access user\'s current location</p>'+
'        </div>'+
'        <i class="icon ion-ios-arrow-forward"></i>'+
'      </a>'+
'      <a class="item item-icon-left item-icon-right" ui-sref="app.image-picker">'+
'        <i class="icon ion-images"></i>'+
'        <div>'+
'          <span class="title">Image Picker</span>'+
'          <p class="description">Select and share images from your phone</p>'+
'        </div>'+
'        <i class="icon ion-ios-arrow-forward"></i>'+
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
'        <i class="icon ion-ios-arrow-forward"></i>'+
'      </a>'+
'      <a class="item item-icon-left item-icon-right" ui-sref="app.slider">'+
'        <i class="icon ion-arrow-swap"></i>'+
'        <div>'+
'          <span class="title">Slider</span>'+
'          <p class="description">Example of sliding cards</p>'+
'        </div>'+
'        <i class="icon ion-ios-arrow-forward"></i>'+
'      </a>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'



//151008 김준호


var mydatas2 = [
				["LOVE ME RIGHT", "김동현/JHUN RYAN SEWON/오유원/HARAMBASIC NERMIN…","EXO"]
				];

var mydataresult2 = "";
var mydataresult3 = "";
//var mydataresultDetail = "";



var mydatatoDataA = function(mydata,idx){
	mydataresult3 += '<a class="item item-icon-right" ui-sref="app.calcNewAuthorDetail"  style="width:100%;margin:0px;">'+
					'        <div style="border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;">'+
					'          <span class="title" style="font-size:9pt;font-weight:bold;">'+mydata[0]+'</span>'+
					'          <p class="description" style="font-size:9pt;font-weight:bold;">('+mydata[1]+')</p>'+
					'        </div>'+
					'        <i class="icon ion-ios-arrow-forward"></i>'+
					'      </a>';
}

/*

var mydatatoData = function(mydata,idx){
	mydataresult += '<a class="item item-icon-right" ui-sref="app.notebookpost({id:'+idx+'})"  style="padding:11px 16px 10px 20px;height:87px;">'+
					'        <div>'+
					'          <span class="title" style="font-weight:bold;">'+mydata[0]+'</span>'+
					'          <p class="description" style="font-weight:bold;">('+mydata[1]+')</p>'+
					'          <p class="description" style="font-weight:bold;">'+mydata[2]+'</p>'+
					'        </div>'+
					'        <i class="icon ion-ios-arrow-forward"></i>'+
					'      </a>';
}

*/



var mydatatoDataSearch = function(mydata,idx){
	mydataresult2 += '<a class="item item-icon-right" ui-sref="app.notebookpost({id:19})"  style="width:100%;margin:0px;">'+
					'        <div style="border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;">'+
					'          <span class="title" style="font-size:9pt;font-weight:bold;overflow: hidden;text-overflow:ellipsis;max-width:300px;">'+mydata[0]+'</span>'+
					'          <p class="description" style="font-size:9pt;font-weight:bold;overflow: hidden;text-overflow:ellipsis;max-width:300px;">'+mydata[1]+'</p>'+
					'          <p class="description" style="font-size:9pt;font-weight:bold;overflow: hidden;text-overflow:ellipsis;max-width:300px;color:#152538;">'+mydata[2]+'</p>'+
					'        </div>'+
					'        <i class="icon ion-ios-arrow-forward"></i>'+
					'      </a>';
}



var detailfontsize = "9pt"; //작품상세 폰트
var tableData1 = [
			[""	 ,"권리자"			,"복제"		,"공연"		,"관리"	,	""	],
			["A" ,"김동현"				,"5.56"		,"2.78"		,'Y'	,	"KOMCA"],
			["A" ,"JHUN RYAN SEWON"			,"5.55"		,"2.78"		,''	,	"KOMCA"],
			["A" ,"오유원"				,"5.55"		,"2.77"		,''	,	"KOMCA"],
			["CA","HARAMBASIC NERMIN"		,"16.67"	,"8.34"		,''	,	      "SESAC"],
			["CA","DENZIL REMEDIOS"			,"16.67"	,"8.34"		,''	,	      "ASCAP"],
			["CA","GIBSON JARAH LAFAYETTE"		,"16.67"	,"8.33"		,''	,	"ASCAP"],
			["CA","WOOLSEY COURTNEY JEANNE"		,"16.67"	,"8.33"		,''	,	"BMI"],
			["CA","TAMBAKIS PETER"			,"16.67"	,"8.33"		,''	,	"ASCAP"],
			["OP","SM뮤직퍼블리싱"			,"5.56"		,"2.78"		,'Y'	,	"KOMCA"],
			["OP","WARNER/CHAPPELLE MUSIC KOREA"	,"5.55"		,"2.78"		,''	,	"KOMCA"],
			["OP","W B MUSIC COPR"			,"16.67"	,"8.34"		,''	,	"ASCAP"],
			["OP","JARAHGIBSONPUBLISHING"		,"16.67"	,"8.33"		,''	,	"ASCAP"],
			["OP","UNIVERSAL MUSIC PUBLISHING US"	,"16.67"	,"8.34"		,''	,	"KOMCA"],
			["&nbsp;","PUBLISHER UNKNOWN"		,"38.88"	,"19.43"	,''	,	"UNKNOWN"]
];
// 작동 안
var addTable = function(data){
	var idx = 0;
	var tempData = '	<div class="row" style="margin-top:0px;padding:0 0 0 0;width:100%;height:20px;height:25px;line-height:24px;">'+
	'	  <div style="width:10%;text-align:center;color:black;font-size:8pt;background-color:white;border-right:1px #f6f6f6 solid;">'+data[idx][0]+'</div>'+ // before #2d4462
	'	  <div style="width:47%;text-align:center;color:black;font-size:8pt;background-color:white;border-right:1px #f6f6f6 solid;">'+data[idx][1]+'</div>'+
	'	  <div style="width:17%;text-align:center;color:black;font-size:8pt;background-color:white;border-right:1px #f6f6f6 solid;">'+data[idx][2]+'</div>'+
	'	  <div style="width:15%;text-align:center;color:black;font-size:8pt;background-color:white;border-right:1px #f6f6f6 solid;">'+data[idx][3]+'</div>'+
	'	  <div style="width:11%;text-align:center;color:black;font-size:8pt;background-color:white;">'+data[idx][4]+'</div>'+
	'	</div>';
	idx++;

	for(;idx<data.length;idx++){
	if(data[idx][4] == 'Y'){

	var customColor = "#f6f6f6";
	var commoncss1 = "font-size:"+detailfontsize+";background-color:"+customColor+";padding-bottom: 5px";
	var commoncss2 = "font-size:"+detailfontsize+";background-color:white;padding-bottom: 5px;";

		tempData += '	<div class="row" style="margin-top:0px;padding:0 0 0 0;width:100%;border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;background-color: '+customColor+';">'+
	'	  <div style="'+commoncss1+';width:10%;text-align:center;padding-top:15px;"><span style="font-weight:bold;">'+data[idx][0]+'</span></div>'+
	'	  <div style="'+commoncss1+';width:47%;text-align:left;  padding-top:5px;padding-left:10px;"><span style="font-weight:bold;overflow: hidden;text-overflow:ellipsis;max-width:150px;white-space: nowrap;">'+data[idx][1] +'</span>';
      if(data[idx][5] != "UNKNOWN"){
        tempData += '<BR>' + data[idx][5];
      }

  tempData += '</div>';

	tempData += '	  <div style="'+commoncss1+';width:17%;text-align:center;padding-top:5px;">'+data[idx][2]+'</div>'+
	'	  <div style="'+commoncss1+';width:15%;text-align:center;padding-top:5px;">'+data[idx][3]+'</div>'+
	'	  <div style="'+commoncss1+';width:11%;text-align:center;padding-top:5px;font-weight:bold">'+data[idx][4]+'</div>'+
	'	</div>';
	}else{
		tempData += '	<div class="row" style="margin-top:0px;padding:0 0 0 0;width:100%;border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;background-color: #ffffff;">'+
	'	  <div style="'+commoncss2+';width:10%;text-align:center;padding-top:17px;"><span style="font-weight:bold">'+data[idx][0]+'</span></div>';
  if(data[idx][5] != "UNKNOWN"){
	   tempData +='	  <div style="'+commoncss2+';width:47%;text-align:left; ;padding-top:5px;padding-left:10px"><span style="font-weight:bold;overflow: hidden;text-overflow:ellipsis;max-width:150px;white-space: nowrap;">'+data[idx][1] + '</span><BR>' + data[idx][5] + '</div>';
  }else{
    tempData +='	  <div style="'+commoncss2+';width:47%;text-align:left; ;padding-top:5px;padding-left:10px"><span style="font-weight:bold;overflow: hidden;text-overflow:ellipsis;max-width:150px;white-space: nowrap;">'+data[idx][1] + '</span></div>';
  }
	tempData += '	  <div style="'+commoncss2+';width:17%;text-align:center;padding-top:5px;">'+data[idx][2]+'</div>'+
	'	  <div style="'+commoncss2+';width:15%;text-align:center;padding-top:5px;">'+data[idx][3]+'</div>'+
	'	  <div style="'+commoncss2+';width:11%;text-align:center;padding-top:5px;font-weight:bold">'+data[idx][4]+'</div>'+
	'	</div>';
	}
	}
	return tempData;
}


var customButton2 = "min-width:20px;width:200px;min-height:25px;height:25px;padding:0px;line-height:0px;font-weight:bold;";
var customButton3 = "min-width:20px;width:200px;min-height:15px;height:15px;padding:0px;line-height:0px;font-weight:bold;";
var notebookpost =
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">작품 상세</span>'+
'  </ion-nav-title>'+
'  <ion-content style="background-color:transparent;padding-top:15px;">'+
'	<div><span style="margin-left:20px;color:white;font-size:14pt;overflow: hidden;text-overflow:ellipsis;max-width:300px;">{{title}} '+moreimage+'</span></div>'+
'	<div style="float:right;padding-bottom:2px;"><span style="padding-right:10px;color:white;font-size:9pt;">공표일 : 2015.06.03</span></div>'+
addTable(tableData1)+
'	<div class="row" style=\'margin-top:20px;\'><div style=\''+notebookpost2bottommiddlestyle+'\'>관리 지분율</div><div style=\'width:60%\'><button class="button" style='+customButton2+'>5.56%</button></div></div>'+
'	<div class="row" style=\'margin-top:10px;\'><div style=\''+notebookpost2bottommiddlestyle+'\'>관리 지역</div><div style=\'width:60%\'><button class="button" style='+customButton2+'>KOREA</button></div></div></div>'+
'	<div class="row" style=\'margin-top:10px;border-bottom:1px solid #3b4b5e;margin-left:7px;margin-right:7px;\'></div>'+
'	<div class="row" style=\'margin-top:15px;\'>'+notebookpost2bottom1+'</div>'+
'	<div class="row" style=\'margin-top:0px;\'>'+notebookpost2bottom2+'</div>'+
'	<div class="row" style=\'margin-top:0px;\'>'+notebookpost2bottom3+'</div>'+
'	<div class="row" style=\'margin-top:0px;\'>'+notebookpost2bottom4+'</div>'+
//'	<div class="row" style=\'margin-top:0px;border-bottom:1px #515e6e solid;\'></div>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>';

var mydatatoDataDetail = function(id){
}

//mydata.forEach(function(e,i){return (e[0])})
mydatas2.forEach(mydatatoDataSearch);



var mydatas3 = [	[	"CALL ME BABY"				,"2015년 3분기 :  7,385,495 원"		],
					[	"CALL ME BABY(CHINESE VERSION)"		,"2015년 3분기 :  241,351 원"		],
					[	"ICE CREAM CAKE"			,"2015년 3분기 :  1,687,646  원"	],
					[	"LOVE ME RIGHT"				,"2015년 3분기 :  2,777,309 원"		],
					[	"ROCK MY WORLD"				,"2015년 3분기 :  1,312,331 원"		],
					[	"SWEETHER"				,"2015년 3분기 :  153,854 원"		],
					[	"TICK TOCK"				,"2015년 3분기 :  12,315 원"		],
					[	"TOO HIGH"				,"2015년 3분기 :  134,659 원"		]
];
mydatas3.forEach(mydatatoDataA);




var resultSearch =
'<ion-view class="layouts-view">'+
'  <ion-nav-title>'+
'    <span style="font-weight:bold;">검색 결과</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'<div class="bar bar-header item-input-inset" style="background-color:transparent;border:0px;">'+
'  <label class="item-input-wrapper">'+
//'    <i class="icon ion-ios-search placeholder-icon"></i>'+
'    <input type="search" placeholder="Search">'+
'  </label>'+
'  <button class="button button-clear">'+
'    <i class="icon ion-android-search" style="color:#bff5ff"></i>'+
'  </button>'+
'</div>'+
'  <div style="margin-top:15px;width:100%;height:25px;clear:both;background-color:#404B5D;font-size:8.5pt;color:white;text-align:center;line-height:25px;"> 총 1 건이 검색되었습니다. </div>'+
'    <div class="list layouts-functionalities">'+
mydataresult2+
'    </div>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>'



//====================== new start ===================== //

var mydatas2 = [
			["개리"			     ,"W10023456"	],
			["김동현"			  ,"W10023455"	],
			["김도훈"			  ,"W10023454"	],
			["브라더수"		   ,"W10023453"	],
			["서원진"			 ,"W10023452"	],
			["용감한형제"		,"W10023451"	],
			["이단옆차기"		,"W10023452"	],
			["전용준"			,"W10023450"	],
			["차쿤"			,"W10023449"		],
			["최소영"			,"W10023448"		],
			["ZION.T"		,"W10023447"		]
			];


var mydataresult2 = "";
//var mydataresultDetail = "";

var mydatatoData2 = function(mydata,idx){
console.log(idx);
	mydataresult2 += '<a class="item item-icon-right" ui-sref="app.calcdetail({id:'+idx+'})" style="width:100%;margin:0px;">'+
					'        <div style="border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;">'+
					'          <span class="title" style="font-size:9pt;font-weight:bold;">'+mydatas2[idx][0]+"</span>"+
					"<p class='description' style='font-size:9pt;'>"+''+mydatas2[idx][1]+'</p>'+
					'        </div>'+
					'        <i class="icon ion-ios-arrow-forward"></i>'+
					'      </a>';
}

mydatas2.forEach(mydatatoData2)


var calcSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    <span style="font-weight:bold;">정산분배</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'<div class="bar bar-header item-input-inset" style="background-color:transparent;border:0px;">'+
'  <label class="item-input-wrapper">'+
//'    <i class="icon ion-ios-search placeholder-icon"></i>'+
'    <input type="search" placeholder="Search">'+
'  </label>'+
'  <button class="button button-clear">'+
'    <i class="icon ion-android-search" style="color:#bff5ff"></i>'+
'  </button>'+
'</div>'+
'  <div style="margin-top:15px;width:100%;height:25px;clear:both;background-color:#404B5D;font-size:8.5pt;color:white;text-align:center;line-height:25px;"> 총 3,123 명이 검색되었습니다. </div>'+
'    <div class="list layouts-functionalities">'+
mydataresult2+
'    </div>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>';


var calcAuthorSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    <span style="font-weight:bold;">정산분배 (작가별)</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'<div class="bar bar-header item-input-inset" style="background-color:transparent">'+
'  <label class="item-input-wrapper">'+
//'    <i class="icon ion-ios-search placeholder-icon"></i>'+
'    <input type="search" placeholder="Search">'+
'  </label>'+
'  <button class="button button-clear">'+
'    검색'+
'  </button>'+
'</div>'+
'    <div class="list layouts-functionalities">'+
mydataresult2+
'    </div>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>';





var moneytable1 = function(data){
	var temp = '';
	var customStyle = "font-size:10pt;color:white;background-color:transparent;padding-top:5px;padding-bottom:5px;";
	data.forEach(function(el,idx){
		temp += '<div class="row">'+
		'<div style="width:50%;padding-left:10px;'+customStyle+'">'+el[0]+'</div>'
		+'<div style="text-align:right;padding-right:20px;width:50%;'+rightStyle+customStyle+';">'+el[1]+'</div>'
		+'</div>';
	});
	return temp;
}


var moneytables2 = function(data){
	var temp = '';
	var customStyle = "font-size:10pt;color:white;background-color:transparent;padding-top:5px;padding-bottom:5px;";
	data.forEach(function(el,idx){
		temp += '<div class="row">'+
		'<div style="width:50%;'+customStyle+';padding-left:5px;">'+el[0]+'</div>'
		+'<div style="text0align:right;width:50%;'+rightStyle+customStyle+';">'+el[1]+'</div>'
		+'</div>';
	});
	return temp;
}


/*


var mydatatoData2 = function(mydata,idx){
console.log(idx);
	mydataresult2 += '<a class="item item0icon-right" ui-sref="app.calcdetail({id:'+idx+'})" style="padding:12px;">'+
					'        <div>'+
					'          <span class="title">'+mydatas2[idx][0]+'('+mydatas2[idx][1]+')</span>'+
					'        </div>'+
					'        <i class="icon ion-ios-arrow-forward"></i>'+
					'      </a>';
}

	mydataresult2 += '<a class="item item-icon-right" ui-sref="app.notebookpost({id:'+idx+'})"  style="width:100%;margin:0px;">'+
					'        <div style="border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;">'+
					'          <span class="title" style="font-size:9pt;font-weight:bold;">'+mydata[0]+'</span>'+
					'          <p class="description" style="font-size:9pt;font-weight:bold;">('+mydata[1]+')</p>'+
					'          <p class="description" style="font-size:9pt;font-weight:bold;">'+mydata[2]+'</p>'+
					'        </div>'+
					'        <i class="icon ion-ios-arrow-forward"></i>'+
					'      </a>';
*/


var moneytable2c = function(data){
	var temp = '';
	data.forEach(function(el,idx){

	if(idx==0){
	//border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;

		var customStyle="font-size:9pt;color:black;text-align:center;background-color:white;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row" style="padding-top: 0px;">'+
		'<div style="width:13%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[0]+'</div>'+
		'<div style="width:29%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[1]+'</div>'+
		'<div style="width:29%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[2]+'</div>'+
		'<div style="width:29%;'+customStyle+'">'+el[3]+'</div>'+
		'</div>';
	}else if(idx>4 && idx<8){
		var customStyle="font-size:9pt;color:black;text-align:center;background-color:#ffffff;border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row">'+
		'<div style="width:13%;'+customStyle+'">'+el[0]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[1]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[2]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[3]+'</div>'+
		'</div>';

	}else{
		var customStyle="font-size:9pt;color:black;text-align:center;background-color:white;border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row">'+
		'<div style="width:13%;'+customStyle+'">'+el[0]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[1]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[2]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[3]+'</div>'+
		'</div>';

	}
	});
  return temp;
}



var moneytable2 = function(data){
	var temp = '';
	data.forEach(function(el,idx){

	if(idx==0){
	//border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;

		var customStyle="font-size:9pt;color:black;text-align:center;background-color:white;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row" style="padding-top: 0px;">'+
		'<div style="width:13%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[0]+'</div>'+
		'<div style="width:29%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[1]+'</div>'+
		'<div style="width:29%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[2]+'</div>'+
		'<div style="width:29%;'+customStyle+'">'+el[3]+'</div>'+
		'</div>';
	}else{
		var customStyle="font-size:9pt;color:black;text-align:center;background-color:white;border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row">'+
		'<div style="width:13%;'+customStyle+'">'+el[0]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[1]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[2]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[3]+'</div>'+
		'</div>';

	}
	});

return temp;
}


var moneytable2s = function(data,p1,p2){
	var temp = '';
	data.forEach(function(el,idx){

	if(idx==0){
	//border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;

		var customStyle="font-size:9pt;color:black;text-align:center;background-color:white;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row" style="padding-top: 0px;">'+
		'<div style="width:'+p1+';'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[0]+'</div>'+
		'<div style="width:'+p2+';'+customStyle+'">'+el[1]+'</div>'+
		'</div>';
	}else{
		var customStyle="font-size:9pt;color:black;background-color:white;padding-left:25px;border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row">'+
		'<div style="width:'+p1+';'+customStyle+';overflow: hidden;text-overflow:ellipsis;white-space:nowrap;width:202px">'+el[0]+'</div>'+
		'<div style="width:'+p2+';'+customStyle+rightStyle+'">'+el[1]+'</div>'+
		'</div>';

	}
	});

return temp;
}


var moneytable2l = function(data){
	var temp = '';
	data.forEach(function(el,idx){

	if(idx==0){
	//border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;

		var customStyle="font-size:9pt;color:black;text-align:center;background-color:white;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row" style="padding-top: 0px;">'+
		'<div style="width:13%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[0]+'</div>'+
		'<div style="width:29%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[1]+'</div>'+
		'<div style="width:29%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[2]+'</div>'+
		'<div style="width:29%;'+customStyle+'">'+el[3]+'</div>'+
		'</div>';
	}else{
		var customStyle="font-size:9pt;color:black;background-color:white;border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row">'+
		'<div style="width:13%;'+customStyle+'text-align:center;" ui-sref="app.calcLocalDetail"><span style="color:#2d4462;font-weight:bold">'+el[0]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[1]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[2]+'</div>'+
		'<div style="width:29%;'+customStyle+rightStyle+'">'+el[3]+'</div>'+
		'</div>';

	}
	});

return temp;
}


var moneytable2long = function(data){
	var temp = '';
	data.forEach(function(el,idx){

	if(idx==0){
	//border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;

		var customStyle="font-size:9pt;color:black;text-align:center;background-color:white;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row" style="padding-top: 0px;">'+
		'<div style="width:20%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[0]+'</div>'+
		'<div style="width:20%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[1]+'</div>'+
		'<div style="width:20%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[2]+'</div>'+
		'<div style="width:20%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[3]+'</div>'+
		'<div style="width:20%;'+customStyle+'">'+el[4]+'</div>'+
		'</div>';
	}else{
		var customStyle="font-size:9pt;color:black;background-color:white;border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row">'+
		'<div style="width:20%;'+customStyle+'text-align:center;">'+el[0]+'</div>'+
		'<div style="width:20%;'+customStyle+'text-align:right;padding-right:5px;">'+el[1]+'</div>'+
		'<div style="width:20%;'+customStyle+'text-align:right;padding-right:5px;">'+el[2]+'</div>'+
		'<div style="width:20%;'+customStyle+'text-align:right;padding-right:5px;">'+el[3]+'</div>'+
		'<div style="width:20%;'+customStyle+'text-align:right;padding-right:5px;">'+el[4]+'</div>'+
		'</div>';

	}
	});

return temp;
}

var moneytable3 = function(data){
	var temp = '';
	data.forEach(function(el,idx){
		if(idx==0){
			var customStyle="width:20%;font-size:"+allfontsize+";color:black;text-align:center;background-color:white;height:30px;padding-top:5px;";
			temp += '<div class="row"><div style="'+customStyle+'">'+el[0]+'</div><div style="'+customStyle+'">'+el[1]+'</div><div style="'+customStyle+'">'+el[2]+'</div><div style="'+customStyle+'">'+el[3]+'</div><div style="'+customStyle+'">'+el[4]+'</div></div>';
		}else{
			var customStyle="width:20%;font-size:"+allfontsize+";color:black;background-color:white;height:30px;padding-top:5px;"+rightStyle;
			temp += '<div class="row"><div style="'+customStyle+'">'+el[0]+'</div><div style="'+customStyle+'">'+el[1]+'</div><div style="'+customStyle+'">'+el[2]+'</div><div style="'+customStyle+'">'+el[3]+'</div><div style="'+customStyle+'">'+el[4]+'</div></div>';
		}
	});

return temp;
}

var moneydata2 = [ [''	 ,	'국내'	 	,'해외'	 	,'합계'		],
				  ['복제',	'1,100,000'	,'4,556,550'	,'5,656,550'	],
				  ['싱크',	'300,000'		,'2,384,920'	,'2,684,920'	],
				  ['출판',	'125,000'		,'516,609'	,'641,809'	],
				  ['기타',	'40,000'		,'110,125'	,'150,125'	],
				  ['공연',	'160,000'	,'620,668'	,'780,668'	],
				  ['방송',	'560,000'		,'1,196,871'	,'1,756,871'	],
				  ['전송',	'980,000'	,'1,054,017'	,'2,034,017'	],
				  ['합계',	'3,265,000'	,'10,439,960'	,'13,704,960'	]];

var moneydatas3 = [	  [''	 ,	'국내'	 	,'해외'	 	,'합계'		],
				  ['복제',	'219,600'	,'173,996'	,'393,596'	],
				  ['싱크',	'-'		,'5,981,541'	,'5,981,541'	],
				  ['출판',	'1,980'		,'232,912'	,'234,892'	],
				  ['기타',	'16,000'		,'21,082'	,'37,082'	],
				  ['공연',	'194,000'	,'254,377'	,'448,377'	],
				  ['방송',	'-'		,'11,470'	,'11,470'	],
				  ['전송',	'198,500'	,'80,037'	,'278,537'	],
				  ['합계',	'630,080'	,'6,755,415'	,'7,385,495'	]

];

var moneydata4 = [
  [''	 ,	'복제'	 	,'공연'	 	,'합계'		],
  ['한국',	'126,580'	,'192,500'	,'319,080'	],
  ['일본',	'194,300'	,'226,716'	,'421,016'	],
  ['대만',	'107,630'	,'80,860'	,'188,490'	],
  ['중국',	'71,400'	,'77,207'	,'148,607'	],
  ['홍콩',	'19,681'	,'-'		,'19,681'	],
  ['프랑스',	'54,120'	,'26,687'	,'80,807'	],
  ['영국',	'71,036'	,'64,654'	,'135,690'	],
  ['호주',	'4,077'		,'11,870'	,'15,947'	],
  ['미국',	'5,961,607'	,'31,320'	,'5,992,927'	],
  ['캐나다',	'36,680'	,'26,570'	,'63,250'	],
  ['합계',	'6,647,111'	,'738,384'	,'7,385,495'	]
        ];



  var moneydata422 = [
    [''	 ,	'복제'	 	,'공연'	 	,'합계'		],
    ['한국',	'237,580'	,'392,500'	,'630,080'	],
    ['일본',	'-'	,'-'	,'-'	],
    ['대만',	'190,930'	,'107,576'	,'298,506'	],
    ['중국',	'71,400'	,'77,207'	,'148,607'	],
    ['홍콩',	'19,681'	,'-'		,'19,681'	],
    ['프랑스',	'54,120'	,'26,687'	,'80,807'	],
    ['영국',	'71,036'	,'64,654'	,'135,690'	],
    ['호주',	'4,077'		,'11,870'	,'15,947'	],
    ['미국',	'5,961,607'	,'31,320'	,'5,992,927'	],
    ['캐나다',	'36,680'	,'26,570'	,'63,250'	],
    ['합계',	'6,647,111'	,'738,384'	,'7,385,495'	]
  ];




var moneydata41 = [[""		,"합계"		],
					["복제"		,"115,377"	],
					["싱크"		,"21,779"	],
					["출판"		,"46,694"	],
					["기타"		,"10,450"	],
					["공연"		,"124,350"	],
					["방송"		,"2,000"	],
					["전송"		,"100,366"	],
					["합계"		,"421,016"	]]

var moneydata42 = [["작품명"				,"금액"		],
					["CALL ME BABY"				,"226,880"	],
					["CALL ME BABY(CHINESE VERSION)"	,"7,410"	],
					["ICE CREAM CAKE"			,"51,840"	],
					["LOVE ME RIGHT"			,"85,319"	],
					["ROCK MY WORLD"			,"40,322"	],
					["SWEETHER"				,"4,724"	],
					["TICK TOCK"				,"380"		],
					["TOO HIGH"				,"4,141"	]]


var moneydata31 = [[''	 ,'4Q14'	   ,'1Q15'	 ,'2Q15'    ,'3Q15'],
				  ['복제','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['공연','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['방송','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['전송','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['싱크','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['출판','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['기타','3,456,789','3,456,789','3,456,789','3,456,789'],
				  ['합계','3,456,789','3,456,789','3,456,789','3,456,789']]



var moneydata32 = [[''	 ,'4Q13'	   ,'1Q14'	 ,'2Q14'    ,'3Q14'],
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
'    	<span style="font-weight:bold;">2015년 3분기</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="padding-top:20px;background-color:#transparent;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;">{{title}} ({{number}})</span></div>'+
'	<div style="float:right;padding-bottom:5px;"><span style="color:white;font-size:9pt;padding-right:10px;">지급예정일 : 2015.12.25</span></div>'+
'	<div style="width:100%;clear:both;padding-top:5px;padding-bottom:5px;background-color:#2d4462;color:white;text-align:center;">지급예정 금액</div>'+
//'<div style="width:100%;height:10px;"></div>'+
moneytable1([['기지급 잔액','-5,000,000원'],['미지급 잔액','0원'],['2015년 3분기 사용료','13,704,960원'],['정산사용료','8,704,960원'],['실 지급액(세액공제 반영)','7,900,000원']])+
//'<div style="width:100%;height:10px;"></div>'+

'	<div style="width:100%;clear:both;padding-top:5px;padding-bottom:5px;background-color:#2d4462;color:white;text-align:center;">정산내역 요약</div>'+
'<div style="margin-top:0px;">'+moneytable2c(moneydata2)+'</div>'+
'<div style="width:100%;height:10px;"></div>'+
'<a class="item item-icon-right" ui-sref="app.calcNewAuthor" style="width:100%;margin:0px;">'+
'        <div style="border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;">'+
'          <span class="title" style="font-size:10pt;font-weight:bold;">'+"작품별 정산내역"+"</span>"+
"<p class='description' style='font-size:9pt;'>"+''+"8개 작품"+'</p>'+
'        </div>'+
'        <i class="icon ion-ios-arrow-forward"></i>'+
'      </a>'+
'<a class="item item-icon-right" ui-sref="app.calcLocal" style="width:100%;margin:0px;">'+
'        <div style="border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;">'+
'          <span class="title" style="font-size:10pt;font-weight:bold;">'+"지역별 정산내역"+"</span>"+
"<p class='description' style='font-size:9pt;'>"+''+"10개 지역"+'</p>'+
'        </div>'+
'        <i class="icon ion-ios-arrow-forward"></i>'+
'      </a>'+
'<a class="item item-icon-right" ui-sref="app.calcDateDetailSource" style="width:100%;margin:0px;">'+
'        <div style="border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;">'+
'          <span class="title" style="font-size:10pt;font-weight:bold;">'+"기간별 정산내역"+"</span>"+
"<p class='description' style='font-size:9pt;'>"+''+"직전 2년간"+'</p>'+
'        </div>'+
'        <i class="icon ion-ios-arrow-forward"></i>'+
'      </a>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>';



// restart

/*
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">2015년 3분기</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="padding-top:20px;background-color:#22334e;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;">{{title}} ( {{number}})</span></div>'+
'	<div style="float:right;"><span style="color:white;font-size:9pt;padding-right:10px;">지급예정일 : 2015-09-25</span></div>'+

*/



var calcNewAuthorSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">2015년 3분기 [작품별]</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="padding-top:20px;background-color:transparant;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;">권리자 : 김동현 (W10023456)</span></div>'+
'	<div style="float:right;padding-bottom:5px"><span style="color:white;font-size:9pt;padding-right:10px;padding-bottom:5px;">총 8개의 작품</span></div>'+
'    <div class="list layouts-functionalities">'+
mydataresult3+
'    </div>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>';






var calcNewAuthorDetailSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">2015년 3분기 [작품별]</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="padding-top:20px;background-color:transparant;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;">CALL ME BABY</span></div>'+
'	<div style="float:right;"><span style="color:white;font-size:9pt;padding-right:10px;padding-bottom:5px;">(김동현 외 6)</span></div>'+
'<div style="width:100%;height:10px;"></div>'+
'	<div style="width:100%;clear:both;padding-top:5px;padding-bottom:5px;background-color:#2d4462;color:white;text-align:center;">2015년 3분기</div>'+
'<div style="width:100%;height:10px;"></div>'+
moneytables2([['사용형태별','7,385,495원']])+
'<div style="margin-top:0px;">'+moneytable2c(moneydatas3)+'</div>'+
moneytables2([['지역별','']])+
'<div style="margin-top:0px;">'+moneytable2(moneydata4)+'</div>'+
'<div style="width:100%;height:10px;"></div>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>';





var calcLocalSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">2015년 3분기 [지역별]</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="padding-top:20px;background-color:transparent;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;">권리자 : 김동현 (W10023456)</span></div>'+
'	<div style="float:right;padding-bottom:5px;"><span style="color:white;font-size:9pt;padding-right:10px;padding-bottom:5px;">총 8개의 작품</span></div>'+
'<div style="width:100%;height:10px;"></div>'+
'	<div style="width:100%;clear:both;padding-top:5px;padding-bottom:5px;background-color:#2d4462;color:white;text-align:center;">2015년 3분기</div>'+
'<div style="width:100%;height:10px;"></div>'+
moneytables2([['지역별','7,385,495원']])+
'<div style="margin-top:0px;">'+moneytable2l(moneydata4)+'</div>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>';




var calcLocalDetailSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">2015년 3분기 [일본]</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="padding-top:20px;background-color:transparent;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;">CALL ME BABY</span></div>'+
'	<div style="float:right;padding-bottom:5px;"><span style="color:white;font-size:9pt;padding-right:10px;padding-bottom:5px;">총 8개의 작품</span></div>'+
'<div style="width:100%;height:10px;"></div>'+
'	<div style="width:100%;clear:both;padding-top:5px;padding-bottom:5px;background-color:#2d4462;color:white;text-align:center;">2015년 3분기</div>'+
'<div style="width:100%;height:10px;"></div>'+
moneytables2([['사용형태별','421,016원']])+
'<div style="margin-top:0px;">'+moneytable2s(moneydata41,"40%","60%")+'</div>'+
moneytables2([['작품별','']])+
'<div style="margin-top:0px;">'+moneytable2s(moneydata42,"60%","50%")+'</div>'+
'<div style="width:100%;height:10px;"></div>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>';





var calcDateDetailSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">2015년 3분기 [기간별]</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="padding-top:20px;background-color:transparent;">'+
'	<div><span style="margin-left:5px;color:white;font-weight:bold;font-size:14pt;">권리자 : 김동현 (W10023456)</span></div>'+
'<div style="width:100%;height:10px;"></div>'+
'		<div class="list card" style="background:rgba(0,0,0,0.4);box-shadow: 0 0px 0px;">'+
'          <div class="item item-image" style="background-color: transparent;">'+
'			<div id="chart5" style="height:300px;"><svg></svg></div>'+
'          </div>'+
'        </div>'+
'<div style="margin-top:0px;">'+moneytable2long(moneydata31)+'</div>'+
'<div style="width:100%;height:10px"></div>'+
'<div style="margin-top:0px;">'+moneytable2long(moneydata32)+'</div>'+
'<div style="width:100%;height:10px;"></div>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>';














var divisionSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">2015년 3분기 [일본]</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="padding-top:20px;background-color:transparent;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;">CALL ME BABY</span></div>'+
'	<div style="float:right;padding-bottom:5px;"><span style="color:white;font-size:9pt;padding-right:10px;padding-bottom:5px;">총 8개의 작품</span></div>'+
'<div style="width:100%;height:10px;"></div>'+
'	<div style="width:100%;clear:both;padding-top:5px;padding-bottom:5px;background-color:#2d4462;color:white;text-align:center;">2015년 3분기</div>'+
'<div style="width:100%;height:10px;"></div>'+
moneytables2([['사용형태별','421,016원']])+
'<div style="margin-top:0px;">'+moneytable2s(moneydata41,"40%","60%")+'</div>'+
moneytables2([['작품별','']])+
'<div style="margin-top:0px;">'+moneytable2s(moneydata42,"60%","50%")+'</div>'+
'<div style="width:100%;height:10px;"></div>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>';









var mainStreamSource =
'<ion-view class="layouts-view">'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">2015년 2분기(기간)</span>'+
'  </ion-nav-title>'+
'  <ion-content style="padding-top:20px;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;"><i class="ion-stats-bars" style="color:#ffffff"></i> 메인스트림 (001) </span></div>'+
'<div class="list card" style="background-color: #000000; opacity:0.4;box-shadow: 0 0px 0px;">'+
'          <div class="item item-image" style="background-color: transparent;">'+
'			<div id="chart5" style="height:300px;"><svg></svg></div>'+
'          </div>'+
'        </div>'+
'<div style="margin-top:5px;">'+moneytable3(moneydata31)+'</div>'+
'  </ion-content>'+
test+
'</ion-view>';

// 작품상세




var tableData2 = [
	["구분"	 ,"권리자"						,"복제"	,"공연"	,""		,"권리"],
	["A"	 ,"김동현"						,"5.56"	,"5.56"	,"KOMCA",""],
	["A"	 ,"김동현"						,"5.56"	,"5.56"	,"KOMCA",""],
	["A" 	 ,"오유원"						,"5.56"	,"5.56"	,"KOMCA",""],
	["OP"	 ,"SM뮤직퍼블리싱"				,"16.67",'16.67',"KOMCA","Y"]

];

var addTable2 = function(data){
	var idx = 0;
	var tempData = '	<div class="row" style="padding:0px;width:100%;height:20px;height:30px;line-height:30px;">'+
	'	  <div style="border-right:1px #f6f6f6 solid;background-color:white;width:15%;text-align:center;color:black;font-size:'+allfontsize+';">'+data[idx][0]+'</div>'+
	'	  <div style="border-right:1px #f6f6f6 solid;background-color:white;width:40%;text-align:center;color:black;font-size:'+allfontsize+';">'+data[idx][1]+'</div>'+
	'	  <div style="border-right:1px #f6f6f6 solid;background-color:white;width:15%;text-align:center;color:black;font-size:'+allfontsize+';">'+data[idx][2]+'</div>'+
	'	  <div style="border-right:1px #f6f6f6 solid;background-color:white;width:15%;text-align:center;color:black;font-size:'+allfontsize+';">'+data[idx][3]+'</div>'+
	'	  <div style="background-color:white;width:15%;text-align:center;color:black;font-size:'+allfontsize+';">'+data[idx][5]+'</div>'+
	'	</div>';
	idx++;

	for(;idx<data.length;idx++){
	if(data[idx][3] == 'Y'){

	var customColor = "#f6f6f6";
		tempData += '	<div class="row" style="padding-bottom:10px;width:100%;margin-top:0px;background-color: '+customColor+';">'+
	'	  <div style="font-size:'+allfontsize+';background-color:'+customColor+';width:15%;text-align:center;padding-top: 17px;padding-bottom: 10px;"><span style="font-weight:bold">'+data[idx][0]+'</span></div>'+
	'	  <div style="font-size:'+allfontsize+';padding-left:10px;background-color:'+customColor+';width:40%;text-align:left;padding-top: 10px;padding-bottom: 10px;"><span style="font-weight:bold">'+data[idx][1] +'</span><BR>' + data[idx][4]+'</div>'+
	'	  <div style="font-size:'+allfontsize+';background-color:'+customColor+';width:15%;text-align:center;padding-top:10px;padding-top: 10px;padding-bottom: 10px;">'+data[idx][2]+'</div>'+
	'	  <div style="font-size:'+allfontsize+';background-color:'+customColor+';width:15%;text-align:center;padding-top:10px;font-weight:bold;padding-top: 10px;padding-bottom: 10px;">'+data[idx][3]+'</div>'+
	'	  <div style="font-weight:bold;font-size:10px;background-color:'+customColor+';width:15%;text-align:center;font-weight:bold;padding-top: 17px;padding-bottom: 10px;">'+data[idx][5]+'</div>'+
	'	</div>';
	}else{
		tempData += '	<div class="row" style="padding-bottom:10px;width:100%;margin-top:0px;background-color: #ffffff;;">'+
	'	  <div style="font-size:'+allfontsize+';background-color:white;width:15%;text-align:center;padding-top:10px;"><span style="font-weight:bold;padding-top: 17px;padding-bottom: 10px;">'+data[idx][0]+'</span></div>'+
	'	  <div style="font-size:'+allfontsize+';padding-left:10px;background-color:white;width:40%;text-align:left;padding-top: 10px;padding-bottom: 10px;"><span style="font-weight:bold">'+data[idx][1] + '</span><BR>' + data[idx][4]+'</div>'+
	'	  <div style="font-size:'+allfontsize+';background-color:white;width:15%;text-align:center;padding-top: 10px;padding-bottom: 10px;">'+data[idx][2]+'</div>'+
	'	  <div style="font-size:'+allfontsize+';background-color:white;width:15%;text-align:center;padding-top: 10px;padding-bottom: 10px;">'+data[idx][3]+'</div>'+
	'	  <div style="font-weight:bold;font-size:'+allfontsize+';background-color:white;width:15%;text-align:center;padding-top: 17px;padding-bottom: 10px;">'+data[idx][5]+'</div>'+
	'	</div>';
	}
	}
	return tempData;
}

var notebookpost2 =
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">작품 상세</span>'+
'  </ion-nav-title>'+
'  <ion-content style="background-color:#22334f;padding-top:20px;">'+
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;;">LOVE ME RIGHT<button class="button button-calm" style="margin-left:10px;min-width: 20px;width: 30px;min-height: 15px;height: 15px;padding: 0px;line-height: 0px;font-size:10px;margin-top:5px;">more</button></span></div>'+
'	<div style="float:right;;padding-bottom:2px;"><span style="color:white;font-size:9pt;">공표일 : 2015.06.03</span></div>'+
addTable2(tableData2)+
'	<div class="row" style=\'margin-top:20px;\'><div style=\''+notebookpost2bottommiddlestyle+'\'>관리 지분율</div><div style=\'width:60%\'><button class="button" style='+customButton+'>5.56%</button></div></div>'+
'	<div class="row" style=\'margin-top:10px;\'><div style=\''+notebookpost2bottommiddlestyle+'\'>관리 지역</div><div style=\'width:60%\'><button class="button" style='+customButton+'>KOREA</button></div></div></div>'+
'	<div class="row" style=\'margin-top:10px;border-bottom:1px #515e6e solid;\'></div>'+
'	<div class="row" style=\'margin-top:10px;\'>'+notebookpost2bottom1+'</div>'+
'	<div class="row" style=\'margin-top:10px;\'>'+notebookpost2bottom2+'</div>'+
'	<div class="row" style=\'margin-top:10px;\'>'+notebookpost2bottom3+'</div>'+
'	<div class="row" style=\'margin-top:10px;\'>'+notebookpost2bottom4+'</div>'+
//'	<div class="row" style=\'margin-top:10px;border-bottom:1px #515e6e solid;\'></div>'+
pagefootermargin+
'  </ion-content>'+
test+
'</ion-view>';
var sayonarachart = '';
/*
var sayonarachart = ' '+
'<div class=\"nvtooltip xy-tooltip nv-pointer-events-none\" id=\"sayonarachart\" style=\"top: 0px; left: 0px; opacity: 1; -webkit-transform: translate(145px, 4px); transform: translate(145px, 4px) !important;\">'+
'<table><thead><tr><td colspan=\"3\"><strong class=\"x-value\">2Q15</strong></td></tr></thead><tbody><tr><td class=\"legend-color-guide\">'+
'<div style=\"background-color: rgb(255, 255, 255);\"></div></td><td class=\"key\">Series 1</td>'+
'<td class=\"value\">5,200,000</td></tr></tbody></table></div>'
*/
// CHART DATA Start

var mcmchartdata = 'try{(function(){'+
'var testdata = ['+
'  {                    '+
'    "key": "", '+
'    "values": [        '+
'	                    '+
'	[ 13.75 , 2500000] , [ 14.00 , 2900000] , [ 14.25 , 2200000] , [ 14.50 , 3200000] ,'+
'	[ 14.75 , 3000000] , [ 15.00 , 4200000] , [ 15.25 , 3500000] , [ 15.50 , 5200000] ]'+
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
'		.tickValues([13.75,14.00,14.25,14.50,14.75,15.00,15.25,15.50])'+
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
'                                                   '+
'	 setTimeout(function(){console.log("hihi");dmj("#chart2").append(\''+sayonarachart+'\');dmj("#chart2").bind("mouseover",function(){dmj("#sayonarachart").remove()})},100);                                                  '+
'      return chart;                               '+
'  });        '+
'          '+
'             '+
'})(testdata);'+
'          '+
'})();}catch(e){eval(mcmchartdata)}        '




var mcmchartdata2 = 'try{(function(){'+
'var testdata2 = ['+
'  {                    '+
'    "key": "", '+
'    "values": [        '+
'	                    '+
'	[ 13.75 , 2200000] , [ 14.00 , 3200000],  [ 14.25 , 3000000] , [ 14.50 , 4200000],'+
'	[ 14.75 , 2200000] , [ 15.00 , 3200000],  [ 15.25 , 3000000] , [ 15.50 , 4200000]]'+
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
'		.tickValues([13.75,14.00,14.25,14.50,14.75,15.00,15.25,15.50])'+
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
'				return "4Q"+yearData+""                '+
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
'  }); '+
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


/*'    <ul class="list">'+
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
'    </ul>'+*/
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





/*
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
*/


var introcss = "background-color:#000000 !important;background-image:url('img/intro.gif') !important;width:100% !important;height:100% !important;background-repeat: no-repeat !important;background-position: center;background-size: 375px 677px;";


var walkthroughSource = absoluteStyle+'<ion-view class="walkthrough-view" cache-view="false">'+
'  <ion-content scroll="false">'+
'  <div class="loading" style="'+introcss+'"></div>OOO'+
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
'        <i class="icon ion-ios-arrow-forward"></i>'+
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
'        <i class="icon ion-ios-arrow-forward"></i>'+
'      </a>'+
'      <a class="item item*-icon-left item-icon-right" ui-sref="app.slider">'+
'        <i class="icon ion-arrow-swap"></i>'+
'        <div>'+
'          <span class="title">Slider</span>'+
'          <p class="description">Example of sliding cards</p>'+
'        </div>'+
'        <i class="icon ion-ios-arrow-forward"></i>'+
'      </a>'+
'    </div>'+
'  </ion-content>'+
'</ion-view>'



var calcSourceOld=
'<ion-view class="layouts-view">'+
'  <ion-nav-title>'+
'    <span style="font-weight:bold;">정산분배</span>'+
'  </ion-nav-title>'+
'  <ion-content>'+
'    <div class="list layouts-functionalities">'+
'		<a class="item item-icon-right" ui-sref="app.calcmainstream"  style="padding:12px;">'+
'        <div>'+
'          <span class="title" style="font-weight:bold">메인스트림</span>'+
'        </div>'+
'        <i class="icon ion-ios-arrow-forward"></i>'+
'      </a>'+
'		<a class="item item-icon-right" ui-sref="app.calcauthor"  style="padding:12px;">'+
'        <div>'+
'          <span class="title" style="font-weight:bold">작가별</span>'+
'        </div>'+
'        <i class="icon ion-ios-arrow-forward"></i>'+
'      </a>'+
'		<a class="item item-icon-right" ui-sref="app.notebookpost2"  style="padding:12px;">'+
'        <div>'+
'          <span class="title" style="font-weight:bold">작품별</span>'+
'        </div>'+
'        <i class="icon ion-ios-arrow-forward"></i>'+
'      </a>'+
'    </div>'+
'  </ion-content>'+
test+
'</ion-view>';
