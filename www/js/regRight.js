
var regRightData = [
      [	"LION HEART",			  	             "JOY FACTORY / 최소영 / ALEXANDER SEAN MICHAEL / SMITH DARREN ELLIS /",			   	"소녀시대"],
			[	"바람이나좀쐐 (Feat. MIWOO)",			  	"개리 / GroovyRoom","개리"],
			[	"어깨",			                        "브라더수 / 김도훈",			  "소유, 권정열"],
			[	"취향저격",			                     "B.I / BOBBY / KUSH / CHOICE37", "",			  "IKON"],
			[	"SUGAR",			                     "POSNER MICHAEL / WALTER HENRY / LEVINE ADAM / COLEMAN JOSHUA / HINDLIN",			  "MAROON 5"],
			[	"너나잘해",			  "이단옆차기 / LONG CANDY / EASTWEST",			  "에일리"],
			[	"위잉위잉",			  "오혁",			  "혁오"],
			[	"양화대교","ZION.T / KUSH / 전용준 / 서원진", "ZION.T"],
			[	"심쿵해 (HEART ATTACK)",    "용감한 형제 / 차쿤 / MR.강", "AOA"],
      ["(태양을사랑한) 얼음꽃"        ,"황규동" ,"이안"],
		  ["015B INSPIRED W-신인류의사랑" ,"정석원/배영준/한채원/..","W"],
      ["01사랑의시작01"               ,"김성율" ,"이안"],
      ["02사랑의시작02"               ,"김성율" ,"이안"],
      ["03사랑의시작03"               ,"임하영" ,"이안"],
      ["03사랑의느낌"                 ,"임하영" ,""],
      ["04사랑의시작01"               ,"김성율" ,"이안"],
      ["05사랑의시작02"               ,"김성율" ,"이안"],
      ["06사랑의시작03"               ,"임하영" ,"이안"],
      ["07사랑의느낌"                 ,"임하영" ,"이안"],
		  ["LOVE ME RIGHT", "김동현/JHUN RYAN SEWON/오유원/HARAMBASIC NERMIN…","EXO"]
        			];
var convertnRegRightDataToHTML = function(mydata,idx){
	resultRegRightData += '<a class="item item-icon-right" ui-sref="app.notebookpost({id:'+idx+'})"  style="width:100%;margin:0px;">'+
					'        <div style="border-top:1px #f6f6f6 solid;border-bottom:1px #f6f6f6 solid;padding-left:20px;padding-top:5px;padding-bottom:5px;">'+
					'          <span class="title" style="font-size:9pt;font-weight:bold;overflow: hidden;text-overflow:ellipsis;max-width:300px;">'+mydata[0]+'</span>'+
					'          <p class="description" style="font-size:9pt;font-weight:bold;overflow: hidden;text-overflow:ellipsis;max-width:300px;">('+mydata[1]+')</p>'+
					'          <p class="description" style="font-size:9pt;font-weight:bold;overflow: hidden;text-overflow:ellipsis;max-width:300px;color:#152538">'+mydata[2]+'</p>'+
					'        </div>'+
					'        <i class="icon ion-ios-arrow-forward"></i>'+
					'      </a>';
}
var resultRegRightData = "";
regRightData.forEach(convertnRegRightDataToHTML)

var regRightTree = [];
var regRightListSource =

      createLevel('ion-view','class="layouts-view"',regRightTree)+
        getTitle('작품목록',regRightTree)+

        createLevel('ion-content','',regRightTree)+
          getSearchForm(regRightTree)+
          getSubTitle("총 32,123 건이 검색되었습니다.",regRightTree)+
          getListData(resultRegRightData,regRightTree)+
          getFooterMargin()+
        endLevelUntil('ion-content',regRightTree)+

        getFooterButon()+
      completeTree(regRightTree);
