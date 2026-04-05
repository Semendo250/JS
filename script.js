
let sum;
let avMark;
function totalMarksFunction(){
  sum=parseInt(document.getElementById("input1").value)|| 0 +parseInt(document.getElementById("input2").value)|| 0 +parseInt(document.getElementById("input3").value ) || 0 +parseInt(document.getElementById("input4").value) || 0+parseInt(document.getElementById("input5").value)|| 0 +parseInt(document.getElementById("input6").value)|| 0 +parseInt(document.getElementById("input7").value)|| 0 +parseInt(document.getElementById("agr").value)|| 0 +parseInt(document.getElementById("input9").value) || 0 +parseInt(document.getElementById("input10").value)|| 0 +parseInt(document.getElementById("input11").value)|| 0 +parseInt(document.getElementById("input12").value)|| 0 ;
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









