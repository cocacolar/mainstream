
var sideMenuSource =
"<ion-side-menus isHome='false' enable-menu-with-back-views=\"false\">\n"+
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
"<div style='width:100%;height:27px;'></div>"+
" <ion-item style=\"margin-top:8px;margin-bottom:8px;\" class=\"item-icon-right\" nav-clear menu-close ui-sref=\"app.settings\" isTranparent=\"true\">\n"+
" <i class=\"icon ion-gear-a\" onclick='function(){alert('test')}'></i>\n"+
" <h2 class=\"menu-text\"></h2>\n"+
" </ion-item>\n"+
" <ion-item style='margin-top: -40px;background-color: transparent;' class='ismenu' isMenu='true'>\n"+
" <p class=\"greeting\" style='color:white;font-size:13pt;overflow:visible'>Young Hur</p>\n"+
" <p class=\"message\"  style='color:white;font-size:8pt;overflow:visible'>Mainstream Music Inc.</p>\n"+
" <hr class=\"menu-text\" color='#444444'></hr>\n"+
" </ion-item>\n"+
//" <ion-item class=\"heading-item item item-avatar\" nav-clear menu-close ui-sref=\"app.profile\">\n"+
//" <div class=\"user-image-container\">\n"+
//" <pre-img ratio=\"_1_1\" helper-class=\"rounded-image\">\n"+
//" <img class=\"user-image\" ng-src=\"https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg\" spinner-on-load>\n"+
//" </pre-img>\n"+
//" </div>\n"+
//" <h2 class=\"greeting\">Hi Brynn</h2>\n"+
//" <p class=\"message\">Welcome back</p>\n"+
//" </ion-item>\n"+
//" <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.profile\">\n"+
//" <i class=\"icon ion-android-person\"></i>\n"+
//" <h2 class=\"menu-text\">개인정보</h2>\n"+
//" </ion-item>\n"+
//" <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.settings\">\n"+
//" <i class=\"icon ion-gear-a\"></i>\n"+
//" <h2 class=\"menu-text\">환경설정</h2>\n"+
//" </ion-item>\n"+
" <ion-item class=\"item-icon-left ismenu\" nav-clear menu-close ui-sref=\"app.wordpress\" isMenu='true'>\n"+
" <i class=\"icon ion-home\"></i>\n"+
" <h2 class=\"menu-text\">HOME</h2>\n"+
" </ion-item>\n"+
" <ion-item style='' class=\"item-icon-left ismenu\" nav-clear menu-close ui-sref=\"#\" isMenu='true'>\n"+
" <i class=\"icon ion-android-notifications\"></i>\n"+
" <h2 class=\"menu-text\">공지사항</h2>\n"+
" </ion-item>\n"+
" <ion-item class=\"item-grays item-icon-left ismenu\" nav-clear menu-close ui-sref=\"app.notebook\" isMenu='true'>\n"+
//" <i class=\"icon ion-social-buffer\"></i>\n"+
" <div style='float:left;position:absolute;left:11px;width:32px;height:32px;'><img ng-src='img/kr_circle.png' style='width:32px;height:32px;'></img></div>"+
" <div><h2 class=\"menu-text\" style='padding-top:5px;'>권리등록</h2></div>\n"+
"</ion-item>\n"+
" <ion-item class=\"item-icon-left item-grays ismenu\" nav-clear menu-close ui-sref=\"app.useallow\" isMenu='true'>\n"+
" <div style='float:left;position:absolute;left:11px;width:32px;height:32px;'><img ng-src='img/sa_circle.png' style='width:32px;height:32px;'></img></div>"+
" <div><h2 class=\"menu-text\" style='padding-top:5px;'>사용허락</h2></div>\n"+
//" <i class=\"icon ion-ribbon-b\"></i>\n"+
//" <h2 class=\"menu-text\">사용허락</h2>\n"+
" </ion-item>\n"+
" <ion-item class=\"item-icon-left item-grays ismenu\" nav-clear menu-close ui-sref=\"app.calc\" isMenu='true'>\n"+
" <div style='float:left;position:absolute;left:11px;width:32px;height:32px;'><img ng-src='img/jh_circle.png' style='width:32px;height:32px;'></img></div>"+
" <div><h2 class=\"menu-text\" style='padding-top:5px;'>정산분배</h2></div>\n"+
//" <i class=\"icon ion-ios-pie\"></i>\n"+
//" <h2 class=\"menu-text\">정산분배</h2>\n"+
" </ion-item>\n\n"+
" <ion-item class=\"item-icon-left item-grays ismenu\" nav-clear menu-close ui-sref=\"app.managerment\" isMenu='true'>\n"+
" <div style='float:left;position:absolute;left:11px;width:32px;height:32px;'><img ng-src='img/gm_circle.png' style='width:32px;height:32px;'></img></div>"+
" <div><h2 class=\"menu-text\" style='padding-top:5px;'>경영관리</h2></div>\n"+
//" <i class=\"icon ion-android-apps\"></i>\n"+
//" <h2 class=\"menu-text\">경영관리</h2>\n"+
" </ion-item>\n\n"+
" </ion-list>\n"+
" </ion-content>\n"+
" </ion-side-menu>\n"+
"  </ion-side-menus>\n"
