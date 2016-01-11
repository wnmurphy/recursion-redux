// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // handle strings w ""
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  
  // handle arrays w [] / recursive
  if(Array.isArray(obj)){
  	var results = [];
  	for (var i = 0; i < obj.length; i += 1) {
  		results.push(stringifyJSON(obj[i]));
  	}
    return '[' + results.join(',') + ']';
  }
  
  // handle objects w {} / recursive
  if(typeof obj === "object" && obj !== null){
  	var results = [];
  	if(Object.keys(obj).length === 0){
  	  return '{}';
  	}
  	for (var prop in obj){
  		if(typeof obj[prop] === 'undefined' || typeof obj[prop] === 'function'){
  			continue;
  		} else {
  			results.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
  		}
  	}
    return '{' + results.join(',') + '}';
  }
  
  return '' + obj;
};