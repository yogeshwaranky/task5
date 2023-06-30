var json = [{
    "id" : "yogesh", 
    "task"   : "task day 5",
    "number" : "9994746956",
    "mail": "yogeshwaranky2103@gmail.com"
},
{
    "id" : "yogesh49", 
    "task"   : "task day 5",
    "number" : "9994746956",
    "mail": "yogeshwaranky2103@gmail.com"
    
}];

//for loop

for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.task);
    console.log(obj.number);
    console.log(obj.mail);

}

//for Each

json.forEach(function(obj) { console.log(obj.task); });

//for In

for (var key in json) {
if (json.hasOwnProperty(key)) {
console.log(json[key].mail);
  //console.log(json[key].number);
 
}
}

//for Of

let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);