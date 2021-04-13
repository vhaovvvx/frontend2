let outPut = [];


let inputDay = Number(prompt("Enter a day"));

let inputMonth = Number(prompt("Enter a Month"));

let inputYear = Number(prompt("Enter a Year"));

switch(inputMonth){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        if(inputDay > 0 && inputDay <= 31){
            console.log(` Day${inputDay} Month:${inputMonth} Year:${inputYear} Invalid`);
            break;

        }else{
            console.log(` Day${inputDay} Month:${inputMonth} Year:${inputYear} is not Invalid`);
            break;
        }
    case 4: case 6: case 9: case 11:
        if(inputDay > 0 && inputDay <= 30){
            console.log(` Day${inputDay} Month:${inputMonth} Year:${inputYear} Invalid`);
            break;
        }else{
            console.log(` Day${inputDay} Month:${inputMonth} Year:${inputYear} is not Invalid`);
            break;
        }
    case 2:
        if(inputYear%4 === 0 && inputYear%100 != 0){
            if(inputDay > 0 && inputDay <= 29){
                console.log(` Day${inputDay} Month:${inputMonth} Year:${inputYear} Invalid`);
                break;
            }else{
                console.log(` Day${inputDay} Month:${inputMonth} Year:${inputYear} is not Invalid`);
                break;

            }
        }else if(inputYear%4 === 0){   
            if(inputDay > 0 && inputDay <= 28){
                console.log(` Day${inputDay} Month:${inputMonth} Year:${inputYear} Invalid`);
                break;
            }else{
                console.log(` Day${inputDay} Month:${inputMonth} Year:${inputYear} is not Invalid`);
                break;
            }
        }
    default:
        console.log(` Day${inputDay} Month:${inputMonth} Year:${inputYear} is not Invalid`);
        break;
}


//1 3 5 7 8 10 12