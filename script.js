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
    document.getElementById("res-grade").innerHTML="Grade: A"

  }
  else if(avg >=70 && avg<80){
    document.getElementById("res-grade").innerHTML="Grade: B"
  }
  else if(avg>=60 && avg<70){
    document.getElementById("res-grade").innerHTML="Grade: C"
  }
  else if(avg>=50 && avg<60){
    document.getElementById("res-grade").innerHTML="Grade: D"
  }
  else if(avg>=40 && avg<50){
    document.getElementById("res-grade").innerHTML="Grade: E"
  }
  else if(avg<40){
    document.getElementById("res-grade").innerHTML="Grade: F"
  }
  
}

function about(){
  let about=document.getElementById("footContent").textContent="THIS PROGRAM IS DESIGNED BY DOUGLAS SEMENDO USING JAVASCRIPT,CASCADING STYLESHEET AND HYPERTEXT MARK-UP LANGUAGE. THE PROGRAM TAKES STUDENT SUBJECT-MARKS SCORED IN VARIOUS SUBJECTS AS INPUTS, AND THEN COMPUTES TO ASSIGN VARIOUS GRADES IN ACCORDANCE TO THE SCORE. THE SCORES ENTERED IS THEN USED TO DETERMINE THE GRADE WHICH IS LATER DISPLAYED IN FORM OF A CONFIRM MESSAGE WHICH POPS UP AS A NOTIFICATION. TWO SEPARATE PARAGRAPH ELEMENTS ARE USED TO DISPLAY THE TOTAL MARKS AND  THE AVERAGE MARK VALUE RESPECTIVELY AFTER CALCULATION. THERE IS ALSO THE USE OF BOTH LIBRARY FUNCTIONS SUCH AS parseInt() function AND USER-DEFINED FUNCTIONS WHICH ARE TRIGGERED TO FUNCTION UPON THE CLICKING OF THE BUTTONS."
 
}









