let arr = [{one: "milk"}, {two: "cookies"}];
const data = (function(arr){
	if(localStorage.getItem("words") == null){
		arr = JSON.stringify(arr);
		localStorage.setItem("words", arr);


	}else{
		let content = localStorage.getItem("words");
		content = JSON.parse(content);
		content.push({three: "peanuts"}, {four: "cards"});
		content = JSON.stringify(content)
		localStorage.setItem("words", content);
	}


})(arr);