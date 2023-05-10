const temperature_calc = () => {
    
    const num = document.getElementById('searchnow').value;
    console.log(num);
    
    const tempselected=document.getElementById('selection');
    
    const value_temp=selection.options[tempselected.selectedIndex].value;
    console.log(value_temp);
    
    const celToFah = (num)=>{
        let val= Math.round((num*9/5)+32);
        return val;
    }
    
    const fahToCel = (num)=>{
        return Math.round((num-32)*5/9);
    }


    let result;

    if(value_temp=='cel'){
        result=celToFah(num);
        document.getElementById('Resultcontainer').innerHTML=`= ${result}°Fahrenheit`;
    }
    else{
        result=fahToCel(num);
        document.getElementById('Resultcontainer').innerHTML=`= ${result}°Celsius`;
    }
}