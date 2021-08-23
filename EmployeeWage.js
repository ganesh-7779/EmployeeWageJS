/*
 *Purpose : Check employee is present or absent.
 *@Since  : 19-08-2021
 */
//UC1
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random()*10)%2;
    if (empCheck==IS_ABSENT){
    console.log("UC1 - employee is Absent.");
    return;
    }else{
      console.log("UC1 - employee is Present");
    }
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAY = 20;
const MAx_HRS_IN_MONTH = 100;

//UC5 - Calculating Wages till Number of Working Days or Total Working Hours per month is Reached.

function getWorkingHours(empCheck){
  switch(empCheck){
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;    
  
    }
}

function calcDailyWage(empHrs){
  return empHrs*WAGE_PER_HOURS;
}

let totalEmpHr = 0;
let totalWorkingDay = 0;
let empDailyWageArr = new Array();

while(totalEmpHr <= MAx_HRS_IN_MONTH &&
   totalWorkingDay < NUM_OF_WORKING_DAY ){
   totalWorkingDay++;
   let empCheck = Math.floor(Math.random()*10)%3;
   totalEmpHr += getWorkingHours(empCheck);
   empDailyWageArr.push(calcDailyWage(totalEmpHr)) // pushing total emp wage into array
}
let empWage = calcDailyWage(totalEmpHr);
console.log("UC6 - Total Day: "+totalWorkingDay+ " Total Emp Hrs: "+totalEmpHr+ " Emp Wage: "+empWage );
console.log(empDailyWageArr);

// Array helper Function UC7A
let totalEmpWage = 0; 
function sum(dailyWage){
  totalEmpWage +=dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A - Total Day: "+totalWorkingDay+ " Total Emp Hrs: "+totalEmpHr+ " Emp Wage: "+totalEmpWage );

function totalWages(totalWage, dailyWage){
  return totalWage + dailyWage;
}
console.log("UC7A- Emp Wage With Reduce: "+ empDailyWageArr.reduce(totalWages,0));

