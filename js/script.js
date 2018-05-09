let me = [];
const data = (function(){
	if(localStorage.getItem("words") == null){
		let arr = [{one: "milk"}, {two: "cookies"}];
		arr = JSON.stringify(arr);
		localStorage.setItem("words", arr);


	}else{
		let content = localStorage.getItem("words");
		content = JSON.parse(content);
		content.push({three: "peanuts"});
		content = JSON.stringify(content)
		localStorage.setItem("words", content);
	}


})();