var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
    var arr=[];
    for(var i in obj)
    {
        var key = i;
        var val = obj[i];
        arr.push([key,val]);
    }
    console.log(arr);
}
convertListToObject(obj);