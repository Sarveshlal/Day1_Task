var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    for(var i in array)
    {
        var obj = {}
        for(var j in array[i])
        {
            for(var k in array[i][j])
            {
                //console.log(i,j,k)
                obj[array[i][j][k]] = array[i][j][1];
                break;
            }
            //console.log("outside break");
        }
        //console.log(str);
        tranformEmployeeList.push(obj);
    }
    console.log(tranformEmployeeList)
}
transformEmployeeData(array);