var student = {name:"mithu", id:200110, phone:1780};
var student2 = {name:"rudro", id:200124, phone:727};

//excess the property of an object
var phnPropName = "phone";
var phoneNo = student.phone;   
var id = student["id"];      
var phoneNo2 = student[phnPropName];

//update phone number
student2.phone = 8463;
student2["phone"] = 9732;
student2[phnPropName] = 345667;

//adding new property
student2.cinema = "Avengers";

console.log(student);
console.log(student2);
console.log(phoneNo);
console.log(id);
console.log(phoneNo2);
