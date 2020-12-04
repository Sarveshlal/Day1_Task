var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
    console.log("{")
    for(var i in array)
    {
        for(var j in array)
        {
            if(i>=0 && j < 2)
            {
                console.log(array[i][j] + ":" + JSON.stringify(array[i][1]));
                break;
            }
        }
    }
    console.log("}");
}
fromListToObject(array)