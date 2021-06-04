function radioValue(radioArray){
	var i;
	for (i=0; i<radioArray.length; i++){
	if(radioArray[i].checked){
		return radioArray[i].value;
		}
	}
	return "";
	}
	var timer=window.setTimeout("sendAnswers()",240000);
	var sTime = new Date();
	document.getElementById("sendAnswers").addEventListener("click",sendAnswers)
	
	function sendAnswers(){
	window.clearTimeout(timer);
	var eTime =new Date();
	var totTime = eTime-sTime;
	var mark;
	var correct=0;
	var incorrect=0;
	var Answer1= radioValue(document.getElementsByName("Q1")); 
	if (Answer1 == "1"){
	         correct ++;
			 document.getElementById("1").innerHTML="&#10004";
		}else{	
			incorrect ++;
			 document.getElementById("1").innerHTML="&#x2718";
		}
	
	var Answer2 =radioValue(document.getElementsByName("Q2"));	
	if(Answer2 =="2"){
		correct ++;
		document.getElementById("2").innerHTML="&#10004";
	  }else {
			incorrect ++;
			document.getElementById("2").innerHTML="&#x2718";
	  }
	 
	 var Answer3 =radioValue(document.getElementsByName("Q3"));
	if(Answer3 =="2"){
		correct ++;
		document.getElementById("3").innerHTML="&#10004";
	  }else {
			incorrect ++;
			document.getElementById("3").innerHTML="&#x2718";
	  }
	 
	 var Answer4 =radioValue(document.getElementsByName("Q4"));
	  if(Answer4 =="4"){
		correct ++;
		document.getElementById("4").innerHTML="&#10004";
	  }else {
			incorrect ++;
			document.getElementById("4").innerHTML="&#x2718";
	  }
	 
	 var Answer5 =radioValue(document.getElementsByName("Q5"));
	  if(Answer5 =="3"){
		correct ++;
		document.getElementById("5").innerHTML="&#10004";
	  }else {
			incorrect ++;
			document.getElementById("5").innerHTML="&#x2718";
	  }
	 
	 var Answer6 =radioValue(document.getElementsByName("Q6"));
	  if(Answer6 =="2"){
		correct ++;
		document.getElementById("6").innerHTML="&#10004";
	  }else {
			incorrect ++;
			document.getElementById("6").innerHTML="&#x2718";
	  }
	 
	 var Answer7 =radioValue(document.getElementsByName("Q7"));
	  if(Answer7 =="4"){
		correct ++;
		document.getElementById("7").innerHTML="&#10004";
	  }else {
			incorrect ++;
			document.getElementById("7").innerHTML="&#x2718";
	  }
	 
	 var Answer8 =radioValue(document.getElementsByName("Q8"));
	  if(Answer8 =="4"){
		correct ++;
		document.getElementById("8").innerHTML="&#10004";
	  }else {
			incorrect ++;
			document.getElementById("8").innerHTML="&#x2718";
	  }
	
	var Answer9 =radioValue(document.getElementsByName("Q9"));
	  if(Answer9 =="3"){
		correct ++;
		document.getElementById("9").innerHTML="&#10004";
	  }else {
			incorrect ++;
			document.getElementById("9").innerHTML="&#x2718";
	  }
	 
	 var Answer10 =radioValue(document.getElementsByName("Q10"));
	  if(Answer10 =="2"){
		correct ++;
		document.getElementById("10").innerHTML="&#10004";
	  }else {
			incorrect ++;
			document.getElementById("10").innerHTML="&#x2718";
	  }
	  mark=((correct)*2)-incorrect;
	  document.getElementById("totalScore").innerHTML="Your total Marks is "+mark;
	  document.getElementById("time").innerHTML="You have finished the Quiz in "+totTime/1000+"seconds";
	  
	  if (mark>10){
		 document.getElementById("div").style.backgroundColor= "#00bf19";
	  }else{
		  
		 document.getElementById("div").style.backgroundColor= "#bd0000";
	  }
	  if(totTime<240001){
	  document.getElementById("time").innerHTML="You have finished the Quiz in "+totTime/1000+"seconds";
	  }else{alert("Your time is over try again")
	  }
     
	}	