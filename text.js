let result = document.getElementById("result")
let button = document.getElementsByClassName("button")


function clickButton(button){
    let value = button.innerHTML;
    let maxLength = 19;
    
    if (value === "AC"){
        result.innerHTML = "0";
    //ACを押したら0に
    }else if (value === "="){
        result.innerHTML = eval(result.innerHTML);
    //ACではなく=を押したらevalで計算式を表示
             if(result.innerHTML >= maxLength){
                result.innerHTML = result.innerHTML.substr(0,maxLength);
             }
    //ACでも無く=でも無くそれ以外を押したら(value)     
    }else{
        if (result.innerHTML === "0"){
        //0だったら
            if(value === "0" || value ==="00"){
                result.innerHTML = "0";
        //0表示の場合に0,00を使うと0表示のまま
            }else if(value === "+" || value === "-" || value === "." ){
                result.innerHTML = "0" + value;
    　　//+,-,.,だったら0以降選択出来るように
            }else if(value === "*" || value === "/"){
                result.innerHTML = "0";
        //0表示の時は*,/は選択無しで0表示に
            }else{    
                result.innerHTML = value;
            }    
        //それ以外はvalue表示
          
        }else if(result.innerHTML.substr(-1,1) === "+" || result.innerHTML.substr(-3,-1) === "-" || result.innerHTML.substr(-1,1) === "*" || result.innerHTML.substr(-1,1) === "/"){
            if(value === "00" || value === "+" || value === "-" || value === "*" || value === "/" || value === "."){
                result.innerHTML += '';
        //substrで最後のvalueから1文字に上記のを入れられるように
            }else{
                result.innerHTML += value;   
            } 
        //それ以外はvalue
        
        }else if(result.innerHTML.substr(-1,1 ) === "."){
            if(value==="." || value === "+" || value === "-" || value === "*" || value === "/"){
                result.innerHTML += "";
        //.の次にに上記のボタンを押した場合には何も入らないように
            }else{
                result.innerHTML += value;
            }
            
        }else if(result.innerHTML.length === 19) {
                result.innerHTML += '';
        }else{
             if(value === "+"){
               result.innerHTML += value;
            }else if(value === "-"){
               result.innerHTML += value;
            }else if(value === "*"){
               result.innerHTML += value;
            }else if(value === "/"){
               result.innerHTML += value;
            }else{
                result.innerHTML += value;
            }
        }    
　 }
}