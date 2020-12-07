var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6};
var testName = "detects that two objects are equal";
function assertObjectsEqual(actual, expected, testName)
{
    if(JSON.stringify(expected) == JSON.stringify(actual))
        console.log("Passed");   
    else
        console.log("FAILED [my test] Expected "+JSON.stringify(expected) + ", but got" + JSON.stringify(actual));
}
assertObjectsEqual(actual, expected, testName)