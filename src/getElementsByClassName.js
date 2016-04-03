var getElementsByClassName = function(className, node) {

  node = node || document.body;

  var results = [];

  if (node.classList && node.classList.contains(className)) {
  	results.push(node);
  }

  if (node.childNodes.length) {
  	for (var i=0; i < node.childNodes.length; i+=1) {
  		var childResults = getElementsByClassName(className, node.childNodes[i]);
  		results = results.concat(childResults);
  	}
  }
  
  return results;
};
