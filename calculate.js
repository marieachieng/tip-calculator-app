function myFunction() {
  var x = document.getElementById("inputBill").value;
  var y = document.getElementById("inputTip").value;
  var z = document.getElementById("noOfPle").value;
  var i = document.getElementById("errorMsg");
  var totalTip;
  var totalAmount;
  if (z <= "0" || z == ""){
	document.getElementById('errorMsg').style.color = "red";
	i.style.display = "block";  
  }else {
  	i.style.display = "none";
  }
  	totalTip = function(){
	  	return ((x*y)/z);
  	}
  	totalAmount = function(){
	  	return (Number(x) + Number(totalTip()));
  	}
  
  document.getElementById("tipAmount").innerHTML = totalTip();
  document.getElementById("totalAmount").innerHTML = totalAmount();
}

function myReset(){	
  document.getElementById("myForm").reset();
}