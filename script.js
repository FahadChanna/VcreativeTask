var button = document.querySelector(".ri-filter-3-line");
var filter = document.querySelector(".filterDetail");
var textArea = document.querySelector("#textArea");
var postBtn = document.querySelector("#postButton");
var showCommentParagraph = document.querySelector(".showComment");


var flag = 0;
button.addEventListener("click",function(){
	if (flag == 0 && filter.style.display === "none") {
	button.style.backgroundColor = "#5c93ff";
	filter.style.display = "block";
	flag = 1;
}else{
	button.style.backgroundColor = "transparent";
	filter.style.display = "none";
	flag = 0;
}
});

postBtn.addEventListener("click", function() {
    
    var commentText = textArea.value;

    if (commentText.trim() !== "") {
        showCommentParagraph.textContent = commentText;
        textArea.value = "";
    }
});





