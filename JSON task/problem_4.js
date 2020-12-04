var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    console.log("var object = {"+arr[0]+":"+JSON.stringify(arr[arr.length-1])+"}");
}
transformFirstAndLast(arr);