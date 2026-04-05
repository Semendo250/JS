const Math=document.getElementById("input1");
const Physics=document.getElementById("input2");
const English=document.getElementById("input3");
const Kiswahili=document.getElementById("input4");
const Geography=document.getElementById("input5");
const History=document.getElementById("input6");
const Computer=document.getElementById("input7");
const Agriculture=document.getElementById("agr");
const Bussiness=document.getElementById("input9");
const Chemistry=document.getElementById("input10");
const Biology=document.getElementById("input11");
const Home_Science=document.getElementById("input12");
const Total_Marks=document.getElementById("totalMarks");
const Average_Grade=document.getElementById("avgGrade");

let sum;
let avMark;
function totalMarksFunction(){
  
    // We use the variables you already declared at the top
    // We add Number() or parseInt() to make sure they are treated as numbers
    sum = (Number(Math.value) || 0) +
          (Number(Physics.value) || 0) +
          (Number(English.value) || 0) +
          (Number(Kiswahili.value) || 0) +
          (Number(Geography.value) || 0) +
          (Number(History.value) || 0) +
          (Number(Computer.value) || 0) +
          (Number(Agriculture.value) || 0) +
          (Number(Bussiness.value) || 0) +
          (Number(Chemistry.value) || 0) +
          (Number(Biology.value) || 0) +
          (Number(Home_Science.value) || 0);

    // Now update your display element

  avMark=sum/12;
 
 
  let display=document.getElementById("res-total").innerHTML="Total Marks: "+ sum  ;
  let averageMark=document.getElementById("res-avg").innerHTML="Average Mark: "+ avMark.toFixed(2);
}

  

let avg;
function averageGradeFunction(){
  avg=sum/12;
  if(avg>=80){
    document.getElementById("res-grade").style.color="green"
    document.getElementById("res-grade").innerHTML="Grade: A"
    
    

  }
  else if(avg >=70 && avg<80){
    document.getElementById("res-grade").innerHTML="Grade: B"
    document.getElementById("res-grade").style.color="blue"
  }
  else if(avg>=60 && avg<70){
    document.getElementById("res-grade").innerHTML="Grade: C"
    document.getElementById("res-grade").style.color="pink"
  }
  else if(avg>=50 && avg<60){
    document.getElementById("res-grade").innerHTML="Grade: D"
    document.getElementById("res-grade").style.color="yellow"
  }
  else if(avg>=40 && avg<50){
    document.getElementById("res-grade").innerHTML="Grade: E"
    document.getElementById("res-grade").style.color="grey"
  }
  else if(avg<40){
    document.getElementById("res-grade").innerHTML="Grade: F"
    document.getElementById("res-grade").style.color="red"
  }
  
}

function about() {
  var x = document.getElementById("footContent");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}








