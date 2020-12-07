var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
    var obj = {};
    for(var i in array)
    {
        for(var j in array)
        {
            if(i>=0 && j < 2)
            {
                obj[array[i][j]] =  array[i][1];
                break;
            }
        }
    }
    return obj;
}
console.log(fromListToObject(array))