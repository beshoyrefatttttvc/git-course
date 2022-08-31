//assignment one
document.getElementById("task").style.color = "blue";
document.getElementById("task").style.fontSize = "80px";
document.getElementById("task").style.fontWeight = "bold";
document.getElementById("task").style.textAlign = "center";
document.getElementById("task").style.fontFamily = "Arial";

//assignment two
console.log(
  "%cElzero %cweb %cschool",
  "color:red; font-Size: 40px;",
  "color:green; font-Weight: bold; font-Size: 40px;",
  "background:blue; color:white; font-Size: 40px;"
);


//assignment three 
console.group("groub one")
console.log("one ")
console.log("two ")
console.group("child groub one")
console.log("one ")
console.log("two ")
console.group("grandchild groub one")
console.log("one ")
console.log("two ")
console.groupEnd() // for parent groub
console.groupEnd() // for child groub
console.groupEnd() // for grandchild groub
console.group("groub two")
console.log("one ")
console.log("two ")


//assignment four
console.table(["one" ,"two" ,3 ,])


//assignment five 

// console.log("Iam In Console");
// document.write("Iam In Page");

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/