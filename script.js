var gradient_code = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body-bg");

// console.log(gradient_code);
// console.log(color1);
// console.log(color2);


// color1.addEventListener("input", function(){
//     // console.log(color2.value);
//     body.style.background = "linear-gradient( to right ,"+ color1.value + ","+ color2.value+ ")";

// });
// color2.addEventListener("input", function(){
//     // console.log(color2.value);
//     body.style.background = "linear-gradient( to right ,"+ color1.value + ","+ color2.value+ ")";

// });
function gradient(){
    // console.log(color2.value);
    body.style.background = "linear-gradient( to right ,"+ color1.value + ","+ color2.value+ ")";
    gradient_code.textContent = body.style.background+ ";";
    
}
color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient); 
