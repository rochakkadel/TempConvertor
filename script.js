function convert(){
   let input = document.getElementById("input1").value;
   let ToFahrenheit = document.getElementById("ToFahrenheit").checked;
   let ToCelius = document.getElementById("ToCelius").checked;
   let result;
   
   
   
   
     if(ToFahrenheit){
        result = input * 9/5 + 32;
        result = result.toFixed(1);
        document.getElementById("h12").textContent = +input+ "°C  is " +result+ "°F";
     }
      else if(ToCelius){
        result = (input - 32) * 5/9;
        result = result.toFixed(1);
        document.getElementById("h12").textContent = +input+ "°F  is " +result+ "°C";
     }
   
   
     if (result > 90) {
        document.getElementById("h12").style.color = "red";
     } else {
        document.getElementById("h12").style.color = "cyan";
     }
   
   
   }
   