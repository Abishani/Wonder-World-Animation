//Code to change the font size.
var fontsize=20;
function zoomIn() {
	fontsize +=2;
	document.getElementById("products").style.fontSize= fontsize + "px";
}
function zoomOut() {
	fontsize -=2;
	document.getElementById("products").style.fontSize= fontsize + "px";
}

//Code to buy products.
function placeOrder(){
	var quantity1=document.getElementById("quantity1").value;
	var price1= 300.00;
	var quantity2=document.getElementById("quantity2").value;
	var price2= 450.00;
	var quantity3=document.getElementById("quantity3").value;
	var price3= 550.00;
	var quantity4=document.getElementById("quantity4").value;
	var price4= 350.00;
	var quantity5=document.getElementById("quantity5").value;
	var price5= 250.00;
	var quantity6=document.getElementById("quantity6").value;
	var price6= 300.00;
	var totalBill=" ";
	var Total=0;
	var name=document.getElementById("fullName");
	var Name=document.getElementById("fullName").value;
	var contactNo=document.getElementById("contactNo");
	var email=document.getElementById("email");
	var Email=document.getElementById("email").value;
	if(!name.checkValidity()){
		alert("Your Name is required");
	}
	else if(!contactNo.checkValidity()){
		alert("Your Contact Number is required");
	}
	else if(!email.checkValidity()){
		alert("Your Email ID is required");
	}
	else {
		if(document.getElementById("cart1").textContent=="Added"){
			if(quantity1==null || quantity1<=0 || quantity1>10  ){
				alert("Please Check your No of Quantity!!!")
			}else{
				var total1=price1*quantity1;
				totalBill=totalBill + "Zootopia: "+price1+" * " +quantity1+" = "+total1+"\n";
				Total=Total+total1;
			}
		}
		if(document.getElementById("cart2").textContent=="Added"){
			if(quantity2==null || quantity2<=0 || quantity2>10  ){
				alert("Please Check your No of Quantity!!!")
			}else{
				var total2=price2*quantity2;
				totalBill=totalBill + "Snow White: "+price2+" * " +quantity2+" = "+total2+"\n";
				Total=Total+total2;
			}
		}
		if(document.getElementById("cart3").textContent=="Added"){
			if(quantity3==null || quantity3<=0 || quantity3>10  ){
				alert("Please Check your No of Quantity!!!")
			}else{
				var total3=price3*quantity3;
				totalBill=totalBill + "Finding Nemo: "+price3+" * " +quantity3+" = "+total3+"\n";
				Total=Total+total3;
			}
		}
		if(document.getElementById("cart4").textContent=="Added"){
			if(quantity4==null || quantity4<=0 || quantity4>10  ){
				alert("Please Check your No of Quantity!!!")
			}else{
				var total4=price4*quantity4;
				totalBill=totalBill + "Cinderella: "+price4+" * " +quantity4+" = "+total4+"\n";
				Total=Total+total4;
			}
		}
		if(document.getElementById("cart5").textContent=="Added"){
			if(quantity5==null || quantity5<=0 || quantity5>10  ){
				alert("Please Check your No of Quantity!!!")
			}else{
				var total5=price5*quantity5;
				totalBill=totalBill + "Hotel transylvania: "+price5+" * " +quantity5+" = "+total5+"\n";
				Total=Total+total5;
			}
		}
		if(document.getElementById("cart6").textContent=="Added"){
			if(quantity6==null || quantity6<=0 || quantity6>10  ){
				alert("Please Check your No of Quantity!!!")
			}else{
				var total6=price6*quantity6;
				totalBill=totalBill + "Boss Baby: "+price6+" * " +quantity6+" = "+total6+"\n";
				Total=Total+total6;
			}
		}
		var Bill="Hi " +Name+ " your bill,\n"+ totalBill + "Total = "+ Total + "\nYour bill details will be sent to "+Email;
		alert(Bill);
	}
}

function added(obj,quan){
	var quantity=document.getElementById(quan).value;
	if(quantity>0 && quantity<=10){
		document.getElementById(obj).innerHTML="Added";
	}else{
		alert("No of quantity must be between 1 and 10!!! ");
		document.getElementById(obj).innerHTML="Add To Cart";
	}
	
}





