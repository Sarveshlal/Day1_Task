var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
    //var obj = JSON.stringify(newObject);
    console.log("{"+arr[0][0]+":"+JSON.stringify(arr[0][1])+","+arr[1][0]+":"+JSON.stringify(arr[1][1])+","+arr[2][0]+":"+arr[2][1]+"}");
}
fromListToObject(arr);