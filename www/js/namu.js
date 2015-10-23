/*

*/

var createLevel = function(element,attr,tree){
  var result = "";

  tree.push(element);
  console.log("[PUSH] create Tree : "+tree);
  result += "<"+element+" "+attr+">\n";
  return result;
}

var popLevel = function(tree){
  var temp = tree.pop();
  console.log("[POP] after Tree : "+temp);
  return "</" + temp + ">\n";
}

var endLevelUntil = function(tag,tree){
  var temp = tree.pop();
  var result = "";
  while(temp != tag){
    result += "</" + temp + ">\n";
    temp = tree.pop();
  }
  result += "</" + temp + ">\n";

  return result;
}

var appendLevel = function(element,value,attr,tree){

  var temp = "";
  if(element != "")  temp = "<"+element+" "+attr+">";
  temp += value;
  if(element != "")  temp += "</"+element+">\n";

/*
  if(tree[tree.length - 1] != "treepeek"){
    tree.push("treepeek");
  }*/

  return temp;


}

var completeTree =  function(tree){
  var temp = "";
  while(tree.length > 0){
    var closeElement = tree.pop();
    temp += "</" + closeElement + ">\n";
  }
  return temp;
}
