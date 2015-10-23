
var managermentTitle = "경영관리"
var managermentTitle2 = "선급금 관리"

var useAllowDataTitle = "사용허락"
var useAllowDataTitle2 = "신규 신청"


var managermentCalcArray = [
  [	""           ,"실시간 매출액"            ,"월간 목표액"        ,"달성률"		],
  [	"매출액"      ,"232,429,378"             ,"500,000,000"        ,"46.51%"		],
  [	"사용료"      ,"162,770,565"             ,"350,000,000"        ,"46.51%"		],
  [	"매출총이익"   ,"69,758,813"            ,"150,000,000"        ,"46.51%"		],
  [	"일반관리비"   ,"32,700,000"            ,"50,000,000"       ,"65.40%"		],
  [	"영업이익"     ,"37,058,813"             ,"100,000,000"        ,"37.06%"		],
  [	"순이익"      ,"31,499,991"             ,"85,000,000"        ,"37.06%"		],
];


var managermentCalcArray2 = [
  [	"개리"            ,"W10023456"            ,"0"      		],
  [	"김동현"          ,"W10023455"             ,"-5,000,000"  		],
  [	"김도훈"          ,"W10023454"            ,"-2,143,000"  		],
  [	"브라더수"         ,"W10023453"           ,"0"   	],
  [	"서원진"          ,"W10023452"           ,"-1,000,000"   ],
  [	"용감한형제"       ,"W10023451"            ,"0"  		],
  [	"이단옆차기"       ,"W10023450"            ,"-2,000,000"   	],
  [	"전용준"          ,"W10023449"            ,"0"   	],
  [	"차쿤"            ,"W10023448"            ,"0"   	],
  [	"전용준"          ,"W10023447"            ,"0"   	],
  [	"ZOIN.T"        ,"W10023446"            ,"0"   	],
];
var useAllowDataArray1  = [
                  [	"신규 신청","<span style='color:red'>2</span>"],
                  [	"신청 진행","<span style='color:blue'>34</span>"],
                  [	"사용허락 계약목록","3,122"]
        				];

var useAllowDataArray2 = [
                  [	""           ,"신규 신청"            ,"신규 진행"        ,"사용허락"		],
                  [	"2015년 10월"      ,"12"             ,"2"        ,"10"		],
                  [	"2015년 09월"      ,"24"             ,"0"        ,"24"		],
                  [	"2015년 08월"   ,"26"            ,"1"        ,"25"		],
                  [	"2015년 07월"   ,"38"            ,"5"       ,"31"		],
                  [	"2015년 06월"     ,"20"             ,"0"        ,"20"		],
                  [	"2015년 05월"      ,"30"             ,"1"        ,"29"		],
                  [	"2015년 04월"      ,"35"             ,"1"        ,"34"		],
                  [	"2015년 03월"      ,"12"             ,"3"        ,"9"		],
                  [	"2015년 02월"      ,"13"             ,"2"        ,"11"		],
                  [	"2015년 01월"      ,"17"             ,"4"        ,"13"		],
                  [	"합계"      ,"227"             ,"19"        ,"206"		],
                ];

var managermentlist1 = [
					[	"현금흐름표"],
                    [	"대차대조표"]
				];

var managermentlist2 = [
                  [	"선급금관리","-10,143,000"],
        					[	"미수금관리","47,203,000"],
        				];


var createSubtitle = function(subtitle){
  return '<div style="width:100%;clear:both;padding-top:5px;padding-bottom:5px;background-color:#2d4462;color:white;text-align:center;">'+subtitle+'</div>';
}



var createManagermentMoneytable = function(data){
	var temp = '';
	data.forEach(function(el,idx){
	if(idx==0){
	//border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;
  var customStyle="font-size:9pt;color:black;text-align:center;background-color:white;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row" style="padding-top: 0px;">'+
		'<div style="width:20%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[0]+'</div>'+
		'<div style="width:30%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[1]+'</div>'+
		'<div style="width:30%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[2]+'</div>'+
		'<div style="width:20%;'+customStyle+'">'+el[3]+'</div>'+
		'</div>';
	}else{
		var customStyle="font-size:9pt;color:black;text-align:center;background-color:white;border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-top:5px;padding-bottom:5px;";
		temp += '<div class="row">'+
		'<div style="width:20%;'+customStyle+'">'+el[0]+'</div>'+
		'<div style="width:30%;'+customStyle+rightStyle+'">'+el[1]+'</div>'+
		'<div style="width:30%;'+customStyle+rightStyle+'">'+el[2]+'</div>'+
		'<div style="width:20%;'+customStyle+rightStyle+'">'+el[3]+'</div>'+
		'</div>';
	}
	});
  return temp;
}


  var createManagermentMoneytable2 = function(data){
  	var temp = '';
  	data.forEach(function(el,idx){
  	if(idx==0){
  	//border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;
  		var customStyle="font-size:9pt;color:black;text-align:center;background-color:white;padding-top:5px;padding-bottom:5px;";
  		temp += '<div class="row" style="padding-top: 0px;">'+
  		'<div style="width:25%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[0]+'</div>'+
  		'<div style="width:25%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[1]+'</div>'+
  		'<div style="width:25%;'+customStyle+'border-right:1px #f6f6f6 solid;">'+el[2]+'</div>'+
  		'<div style="width:25%;'+customStyle+'">'+el[3]+'</div>'+
  		'</div>';
  	}else{
  		var customStyle="font-size:9pt;color:black;text-align:center;background-color:white;border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-top:5px;padding-bottom:5px;";
  		temp += '<div class="row">'+
  		'<div style="width:25%;'+customStyle+'">'+el[0]+'</div>'+
  		'<div style="width:25%;'+customStyle+rightStyle+'">'+el[1]+'</div>'+
  		'<div style="width:25%;'+customStyle+rightStyle+'">'+el[2]+'</div>'+
  		'<div style="width:25%;'+customStyle+rightStyle+'">'+el[3]+'</div>'+
  		'</div>';
  	}
  	});

return temp;
}

var ManagementlistcommonHeight = "53px";
var createManagementListElement = function(mydata){
  var alllist = "";
  mydata.forEach(function(el,idx){
    alllist +=   '<a class="item item-icon-right" style="width:100%;margin:0px;">'+
  					     '        <div style="border-top:1px #f6f6f6 solid;height:'+ManagementlistcommonHeight+';border-bottom:1px #f6f6f6 solid;padding-right:20px;line-height:'+ManagementlistcommonHeight+';">'+
  					     '          <span class="description" style="margin-left:20px;font-size:9pt;font-weight:bold;">'+el[0]+'</span>'+
  					     '        </div>'+
  					     '        <i class="icon ion-ios-arrow-forward"></i>'+
  					     '      </a>';

  })

  return alllist;
}



var createManagementListElement2 = function(mydata){
  var alllist = "";
  var customrbutton = "text-align:right;min-width:20px;width:90px;min-height:25px;max-height:25px;margin-top:13px;line-height:0px;background-color:white;";

//  var customrbutton = "min-width:20px;width:90px;min-height:25px;max-height:25px;margin-top:15px;padding:0px;line-height:0px;background-color:white;";
  mydata.forEach(function(el,idx){
    var uridata = "";
    var textcolor = "";
    if(el[0] == "선급금관리"){
      uridata = "app.managerment2";
      textcolor = "color:red;";
    }else{
      uridata = "#";
      textcolor = "color:blue;";
    }

    alllist +=   '<a class="item item-icon-right" style="width:100%;margin:0px;" ui-sref="'+uridata+'">'+
  					     '        <div style="border-top:1px #f6f6f6 solid;height:'+ManagementlistcommonHeight+';border-bottom:1px #f6f6f6 solid;padding-left:20px;line-height:'+ManagementlistcommonHeight+'">'+
                 '          <span class="description" style="font-size:9pt;font-weight:bold;">'+el[0]+'</span>'+
                 '<button class="button btn-default" style="float:right;margin-right:45px;'+textcolor+'font-size:9pt;'+customrbutton+'">'+el[1]+'</button>'+
  					     '        </div>'+
  					     '        <i class="icon ion-ios-arrow-forward"></i>'+
  					     '      </a>';

  })

  return alllist;
}

var createUseAllowListElement2 = function(mydata){
  var alllist = "";
  var customrbutton = "text-align:right;padding-right:15px;min-width:20px;width:90px;min-height:25px;max-height:25px;margin-top:13px;line-height:0px;background-color:white;";
  mydata.forEach(function(el,idx){


    var uridata = "";
    if(el[0] == "신규 신청")
      uridata = "app.useallow2";
    else
      uridata = "#";

    alllist +=   '<a class="item item-icon-right" style="width:100%;margin:0px;" ui-sref="'+uridata+'">'+
  					     '        <div style="border-top:1px #f6f6f6 solid;height:'+ManagementlistcommonHeight+';border-bottom:1px #f6f6f6 solid;padding-left:20px;line-height:'+ManagementlistcommonHeight+'">'+
                 '          <span class="description" style="font-size:9pt;font-weight:bold;">'+el[0]+'</span>'+
                 '<button class="button btn-default" style="float:right;margin-right:45px;font-size:9pt;'+customrbutton+'">'+el[1]+'</button>'+
  					     '        </div>'+
  					     '        <i class="icon ion-ios-arrow-forward"></i>'+
  					     '      </a>';

  })

  return alllist;
}

var createManagementListElement3 = function(mydata){
  var alllist = "";
  var customrbutton = "color:blue;text-align:right;padding-right:15px;min-width:20px;width:90px;min-height:25px;max-height:25px;margin-top:13px;line-height:0px;background-color:white;";


  mydata.forEach(function(el,idx){
    alllist +=   '<a class="item item-icon-right" style="width:100%;margin:0px;">'+
  					     '        <div style="border-top:1px #f6f6f6 solid;height:'+ManagementlistcommonHeight+';border-bottom:1px #f6f6f6 solid;margin-right:20px;line-height:'+ManagementlistcommonHeight+'">'+
                 '          <span class="description" style="margin-left:20px;font-size:9pt;font-weight:bold;width:100px;">'+el[0]+' ('+el[1]+')</span>'+
                 '<button class="button btn-default" style="float:right;margin-right:35px;font-size:9pt;'+customrbutton+'">'+el[2]+'</button>'+
                 '        </div>'+
  					     '        <i class="icon ion-ios-arrow-forward"></i>'+
  					     '      </a>';

  })

  return alllist;
}

/*
'	<div><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;">{{title}} ({{number}})</span></div>'+
'	<div style="float:right;padding-bottom:5px;"><span style="color:white;font-size:9pt;padding-right:10px;">지급예정일 : 2015.12.25</span></div>'+
*/

var managermentSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">'+managermentTitle+'</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="padding-top:20px;background-color:transparent;">'+
'	 <div style="padding-bottom:20px;"><span style="margin-left:20px;color:white;font-weight:bold;font-size:14pt;">[ Mainstream Music ]</span></div>'+
'	<div style="float:right;padding-bottom:5px;"><span style="color:white;font-size:9pt;padding-right:10px;">2015.10.16 현재</span></div>'+
    createSubtitle('손익계산서')+
    createManagermentMoneytable(managermentCalcArray)+
'<div style="width:100%;height:15px;"></div>'+
'    <div class="list layouts-functionalities" style="margin-bottom:0px;">'+
    createManagementListElement(managermentlist1)+
'    </div>'+
    createSubtitle('기타관리')+
'    <div class="list layouts-functionalities" style="margin-bottom:0px;">'+
    createManagementListElement2(managermentlist2)+
'    </div>'+
'<div style="width:100%;height:50px;"></div>'+

'  </ion-content>'+
test+
'</ion-view>';



var managermentDetailSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">'+managermentTitle2+'</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="background-color:transparent;">'+
'<div class="bar bar-header item-input-inset" style="background-color:transparent;border:0px;">'+
'  <label class="item-input-wrapper">'+
//'    <i class="icon ion-ios-search placeholder-icon"></i>'+
'    <input type="search" placeholder="Search">'+
'  </label>'+
'  <button class="button button-clear" onkeyup="clickevent()" ui-sref="app.resultSearch">'+
'    <i class="icon ion-android-search" style="color:#bff5ff"></i>'+
'  </button>'+
'</div>'+
'  <div style="margin-top:15px;width:100%;height:25px;clear:both;background-color:#404B5D;font-size:8.5pt;color:white;text-align:center;line-height:25px;"> 총 11 건이 검색되었습니다. </div>'+
'    <div class="list layouts-functionalities" style="margin-bottom:0px;">'+
    createManagementListElement3(managermentCalcArray2)+
'    </div>'+
'<div style="width:100%;height:50px;"></div>'+
'  </ion-content>'+
test+
'</ion-view>';


var useallowbuttoncss = "width:95%;background-color: #8ca6c9;border-color: transparent;color: white;margin: 0px 10px 10px 10px;font-size:11pt;";
var useallowSource=
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">'+useAllowDataTitle+'</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="background-color:transparent;">'+
'    <div class="list layouts-functionalities" style="margin-bottom:0px;">'+
    createUseAllowListElement2(useAllowDataArray1)+
'<div style="width:100%;height:10px;"></div>'+
    createManagermentMoneytable2(useAllowDataArray2)+
'<div style="width:100%;height:10px;"></div>'+
'<div style="width:100%"><button style="'+useallowbuttoncss+'" class="button btn-default" >사용허락 계약서 생성</button></div>'+
'<div style="width:100%"><button style="padding:0px;'+useallowbuttoncss+'" class="button btn-default" >사용허락 계약서 보기</button></div>'+
'<div style="width:100%;height:50px;"></div>'+
'    </div>'+
'  </ion-content>'+
test+
'</ion-view>';

var useallow2css = "margin-top:0px;margin-left:9px;margin-right:9px;margin-bottom:10px";
var useallowbuttoncss2 = "width:44%;background-color: #8ca6c9;border-color: transparent;color: white;margin: 0px 10px 10px 10px;font-size:11pt;";
var useallowSource2=
'<style>'+
'.ptitle{padding-left:5px;text-align:left;font-weight:bold;}'+
'.ptitle > span{color:white;font-size:10pt;}'+
'.pdescription{padding-left:20px;text-align:left;color:white;}'+
'.pdescription > span{color:white;font-size:9pt;}'+
'</style>'+
'<ion-view class="layouts-view" >'+
'  <ion-nav-title>'+
'    	<span style="font-weight:bold;">'+useAllowDataTitle2+'</span>'+
'  </ion-nav-title>'+
'  <ion-content  style="background-color:transparent;">'+
'  <div style="margin-top:0px;width:100%;height:25px;clear:both;background-color:#404B5D;font-size:8.5pt;color:white;text-align:center;line-height:25px;"> 총 2 건이 검색되었습니다. </div>'+
moneytable1([["2.신청일 : 2015.10.16 20:13","신청ID : musicuser"]])+
'		<div class="list card" style="background:rgba(0,0,0,0.4);box-shadow: 0 0px 0px;'+useallow2css+'">'+
'          <div class="item item-image" style="background-color: transparent;">'+
'			<div style="height:260px;padding-top:5px;">'+
'<p class="ptitle"><span>신청작품</span></p>'+
'<p class="pdescription"><span>LION HEART</span></p>'+
'<p class="pdescription"><span>JOY FACTORY/최소영/ALEXANDER SEAN..</span></p>'+
'<p class="pdescription"><span>소녀시대</span></p>'+
'<p class="ptitle"><span>신청 상세내역</span></p>'+
'<p class="pdescription"><span>신청인 : (주)제일기획</span></p>'+
'<p class="pdescription"><span>사용형태 : 싱크로나이제이션</span></p>'+
'<p class="pdescription"><span>사용매체 : 모든 매체</span></p>'+
'<p class="pdescription"><span>희망사용료 : 8,000,000원(100%)</span></p>'+
'<p class="pdescription"><span>사용시작일 : 2016.01.15</span></p>'+
'<p class="pdescription"><span>사용지역 : 대한민국</span></p>'+
'</div>'+
'          </div>'+
'        </div>'+
'<div style="text-align: center;"><button style="'+useallowbuttoncss2+'" class="button btn-default" >진행</button><button style="'+useallowbuttoncss2+'" class="button btn-default" >거절</button></div>'+
'<div style="background-color:#d7d9da;height:1px;margin-left:7px;margin-right:7px;margin-top:15px;margin-bottom:15px;">&nbsp;</div>'+
moneytable1([["1.신청일 : 2015.10.16 18:42","신청ID : sbscon70"]])+
'		<div class="list card" style="background:rgba(0,0,0,0.4);box-shadow: 0 0px 0px;'+useallow2css+'">'+
'          <div class="item item-image" style="background-color: transparent;">'+
'			<div style="height:260px;padding-top:5px;">'+
'<p class="ptitle"><span>신청작품</span></p>'+
'<p class="pdescription"><span>바람이나좀쐐 (Feat.MIWOO)</span></p>'+
'<p class="pdescription"><span>개리/GroovyRoom</span></p>'+
'<p class="pdescription"><span>개리</span></p>'+
'<p class="ptitle"><span>신청 상세내역</span></p>'+
'<p class="pdescription"><span>신청인 : (주)SBS</span></p>'+
'<p class="pdescription"><span>사용형태 : 싱크로나이제이션,음반복제</span></p>'+
'<p class="pdescription"><span>사용매체 : 모든 매체</span></p>'+
'<p class="pdescription"><span>희망사용료 : 6,000,000원(100%)</span></p>'+
'<p class="pdescription"><span>사용시작일 : 2015.12.01</span></p>'+
'<p class="pdescription"><span>사용지역 : 대한민국</span></p>'+
'</div>'+
'          </div>'+
'        </div>'+
'<div style="text-align: center;"><button style="'+useallowbuttoncss2+'" class="button btn-default" >진행</button><button style="'+useallowbuttoncss2+'" class="button btn-default" >거절</button></div>'+
'<div style="width:100%;height:50px;"></div>'+
'  </ion-content>'+
test+
'</ion-view>';
