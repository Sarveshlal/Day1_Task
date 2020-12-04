var obj = {name : "RajiniKanth", 
age : 33,
hasPets : false
};
function printAllValues(obj) {
    var arr = [];
    for(var i in obj)
    {
        var key = i;
        var val = obj[i];
        arr.push(val);
    }
    console.log(arr);
}
printAllValues(obj);