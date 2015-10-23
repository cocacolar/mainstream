
// OUTPUT

var getTitle = function(value,tree){
  var result =
  createLevel('ion-nav-title','',tree)+
    appendLevel('span',value,'style="font-weight:bold;"',tree)+
  endLevelUntil('ion-nav-title',tree);
  return result;
}

var getSearchForm = function(tree){
  var result =
  createLevel('div','class="bar bar-header item-input-inset" style="background-color:transparent;border:0px;"',tree)+
    createLevel('label','class="item-input-wrapper"',tree)+
      appendLevel('input','','type="search" placeholder="Search"',tree)+
    endLevelUntil('label',tree)+

    createLevel('button','class="button button-clear" onkeyup="clickevent()" ui-sref="app.resultSearch"',tree)+
      appendLevel('i','','class="icon ion-android-search" style="color:#bff5ff"',tree)+
    endLevelUntil('button',tree)+
  endLevelUntil('div',tree);
  return result;
}

var getSubTitle = function(value,tree){
  var result =
  createLevel('div','style="margin-top:15px;width:100%;height:25px;clear:both;background-color:#404B5D;font-size:8.5pt;color:white;text-align:center;line-height:25px;"',tree)+
    appendLevel('',value,"",tree)+
  endLevelUntil('div',tree);
  return result;
}
var getListData = function(listData,tree){
  var result =
        createLevel('div','class="list layouts-functionalities"',tree)+
          listData+
        popLevel(regRightTree);

  return result;

}
var getFooterMargin = function(){
  return pagefootermargin;
}
var getFooterButon = function(){
  return test;
}
