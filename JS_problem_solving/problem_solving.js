function withdraw(event){
    event.preventDefault();
    let amount=document.getElementById("amount").value;
    let pin=document.getElementById("pin").value;
    let user_pin=2002;
    let user_balance=1000;
    if(pin!=user_pin){
        alert("Incorrect PIN");
        return;
    }
    if(amount%100!==0){
        alert("Enter amount in multiples of 100");
        return;
    }
    if(amount>user_balance){
        alert("Insufficient Funds");
        return;
    }
    else{
        alert("Successfully Withdrawl "+ amount);
        document.getElementById("amount").value = "";
        document.getElementById("pin").value = "";
    }
    
}
function discount(event){
    event.preventDefault();
    let amount=document.getElementById("amount2");
    let dis=document.getElementsByClassName("dis")[0];
    let total=amount.value;
    
        
    if(amount.value>1000){
        total=total-(20/100)*parseFloat(amount.value);
        
    }
    if(amount.value>=500 && amount.value<=1000){
        total=total-(10/100)*parseFloat(amount.value);
    }
    if(amount.value<50){
        total=parseFloat(total)+10;
    }
    if(amount.value>50 && amount.value<500){
        total=parseFloat(amount.value);
    }
    dis.innerHTML=total.toFixed(2);
    amount.value="";
}
function cal_grade(event){
    event.preventDefault();
    let marks=document.getElementById("marks");
    let att=document.getElementById("att");
    let grade=document.getElementsByClassName("tot")[0];
    let total_marks=parseFloat(marks.value);
    let g="";
    if(att.value>90){
        total_marks=total_marks+5;
    }
    if(total_marks>90){
        g="A";
        
    }
    if(total_marks>=80 && total_marks<=90){
        g="B";
        
    }
    if(total_marks>=70 && total_marks<=79){
        g="C";
        
    }
    if(total_marks>=60 && total_marks<=69){
        g="D";
        
    }
    if(total_marks<60){
        g="E";
        
    }
    grade.innerText=g;
}
function trafficLightControl(density) {
    if (density === "Heavy") return 60;
    if (density === "Moderate") return 40;
    if (density === "Light") return 20;
    return 0;
}

function startTrafficLight() {
    event.preventDefault();
    let density = document.getElementById("traffic-density").value;
    let time = trafficLightControl(density);
    document.getElementById("time-display").textContent = `Green Light Duration: ${time} seconds`;
    
    let greenLight = document.getElementById("green-light");
    greenLight.classList.add("green");
    setTimeout(() => greenLight.classList.remove("green"), time * 1000);
}
function TicketPrice(event){
    event.preventDefault();
    let ticket=document.getElementById("select");
    let movie=document.getElementById("movie");
    let finalprice=12.0;
    if(ticket.value==""){
        alert("select option");
        return;
    }
    else if(ticket.value=="Matinee"){
        finalprice=parseFloat(12.0-(20/100)*12.0);
        
    }
    else if(ticket.value=="senior"){
        finalprice=parseFloat(12.0-(30/100)*12.0);
    }
    else if(ticket.value=="child"){
        finalprice=parseFloat(12.0-(40/100)*12.0);
    }

    
    movie.innerHTML=finalprice.toFixed(2);
}
function isEligibleForJob(event){
    event.preventDefault();
    let age=document.getElementById("age");
    let exp=document.getElementById("exp");
    let YN=document.getElementById("YN");
    let degree=document.querySelector('input[name="degree_batch"]:checked');
    let eligibilty="No";
    if(degree.value=="other"){
        alert("you are not eligible");
        return;
    }
    else if(degree.value=="degree" && (age.value>=21 && age.value<=55) && (exp.value>=2 )){
        eligibilty="Yes";
        
    }
    

    YN.textContent=eligibilty;
} 
function applyCoupon(event) {
    event.preventDefault();
    let orderAmount = parseFloat(document.getElementById("orderAmount").value);
    let couponCode = document.getElementById("couponCode").value.trim().toUpperCase();
    let finalPrice = orderAmount;
    let message = "";

    if (isNaN(orderAmount) || orderAmount <= 0) {
        message = "Please enter a valid order amount.";
    } else if (couponCode === "DISCOUNT10") {
        if (orderAmount > 500) {
            finalPrice = orderAmount * 0.9;
            message = "10% discount applied!";
        } else {
            message = "DISCOUNT10 is valid only for orders above $500.";
        }
    } else if (couponCode === "FREESHIP") {
        if (orderAmount > 200) {
            message = "Free shipping applied!";
        } else {
            message = "FREESHIP is valid only for orders above $200.";
        }
    } else if (couponCode !== "") {
        message = "Invalid coupon code.";
    }

    document.getElementById("finalPrice").textContent = `Final Price: $${finalPrice.toFixed(2)}`;
    document.getElementById("message").textContent = message;
    document.getElementById("orderAmount").value="";
    document.getElementById("couponCode").value="";
}
function choosePlan(event) {
    event.preventDefault(); 

    
    let gym = document.querySelector('input[name="gym"]:checked');

   
    let monthly = document.getElementById("amount");

  
    if (!monthly) {
        console.error("Element with ID 'amount' not found.");
        return;
    }

    
    if (!gym) {
        alert("Please select a GYM plan.");
        return;
    }

    
    if (gym.value === "basic") {
        monthly.textContent = "20";
    } else if (gym.value === "premium") {
        monthly.textContent = "50";
    } else if (gym.value === "VIP") {
        monthly.textContent = "80";
    }
}
function calculateElectricityBill(event){
    event.preventDefault();
    let bill=document.getElementById("bill_amount");
    let cal=document.getElementById("bill_cal");
    let total=bill.value;
    if(bill.value<100){
        total*=5;
        cal.textContent="$"+total;
    }
    else if(bill.value>=100 && bill.value<=300){
        total*=4
        cal.textContent="$"+total;
    }
    else if(bill.value>300){
        total*=3;
        cal.textContent="$"+total;
    }
}
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let totalFare = baseFare;

   
    if (classType === "business") {
        totalFare += 200;
    } else if (classType === "first") {
        totalFare += 500;
    }

    
    if (luggageWeight > 20) {
        let extraWeight = luggageWeight - 20;
        let extraCharge = Math.ceil(extraWeight / 10) * 50; 
        totalFare += extraCharge;
    }

    
    if (isStudent) {
        totalFare *= 0.85; 
    } else if (isSenior) {
        totalFare *= 0.90; 
    }

    return totalFare.toFixed(2); 
}

function calculateAndDisplayFare() {
    let classType = document.getElementById("classType").value;
    let luggageWeight = parseFloat(document.getElementById("luggageWeight").value) || 0;
    let isStudent = document.getElementById("isStudent").checked;
    let isSenior = document.getElementById("isSenior").checked;

    let finalFare = calculateFlightFare(classType, luggageWeight, isStudent, isSenior);
    document.getElementById("finalFare").textContent = finalFare;
}



