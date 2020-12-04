var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}
var totalWeight = 0;
cat.height = 2;
cat.weight = 10;
cat.name = "Fluffyy";
for(var i in cat.catFriends)
    console.log(cat.catFriends[i].activities);

for(var i in cat.catFriends)
    console.log(cat.catFriends[i].name);

for(var i in cat.catFriends)
    totalWeight = totalWeight + cat.catFriends[i].weight;
console.log(totalWeight);

console.log(cat.activities);
for(var i in cat.catFriends)
    console.log(cat.catFriends[i].activities);

cat.catFriends[0].furcolor = "Brown";
cat.catFriends[0].activities.push("active","happy");
cat.catFriends[1].activities.push("lazy","sad");
console.log(cat);
