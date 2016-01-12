// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, node){
  
  node = node || document.body;
  
  var results = [];

  if(node.classList && node.classList.contains(className)){
  	results.push(node);
  }

  /*
  if(node.className){
    var parts = node.className.split(' ');
    if(parts.indexOf(className)){
		  results.push(node);
		}
  }
	*/
  if(node.childNodes.length){
  	for(var i=0; i < node.childNodes.length; i+=1){
  		var childResults = getElementsByClassName(className, node.childNodes[i]);
  		results = results.concat(childResults);
  			
  	}
  }
  
  return results;
};