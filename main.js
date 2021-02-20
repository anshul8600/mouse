array=[]
function submit(){
var student_1=document.getElementById("name_1").value;
var student_2=document.getElementById("name_2").value;
var student_3=document.getElementById("name_3").value;
var student_4=document.getElementById("name_4").value;
array.push(student_1);
array.push(student_2);
array.push(student_3);
array.push(student_4);
document.getElementById("displaynames").innerHTML=array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function sorting(){
array.sort();
document.getElementById("displaynames").innerHTML=array;
}