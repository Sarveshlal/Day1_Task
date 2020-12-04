var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    for(var i in array)
    {
        var str = "";
        str = str + "{"
        for(var j in array[i])
        {
            for(var k in array[i][j])
            {
                //console.log(i,j,k)
                str+=array[i][j][k]+":"+JSON.stringify(array[i][j][1])+",";
                break;
            }
            //console.log("outside break");
        }
        str = str + "}"
        //console.log(str);
        tranformEmployeeList.push(str);
    }
    console.log(tranformEmployeeList)
}
transformEmployeeData(array);