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
   let empHrs = getWorkingHours(empCheck);
   totalEmpHr += empHrs;
   empDailyWageArr.push(calcDailyWage(empHrs)) // pushing total emp wage into array
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

// UC7B - show the day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
  dailyCntr++;
  return dailyCntr + "=" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C- show day when full time wage of 160 ware earned.
function fullTimeWage(dailyWage){
  return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log(fullDayWageArr);
 
//UC7D -Find the first occurrence when full time wage was earned using find function.
function findFullTimeWage(dailyWage){
  return dailyWage.includes("160");
}
console.log("UC7 D - First time full time wage was earned on day" +mapDayWithWageArr.find(findFullTimeWage));

//UC7E - check if every elem of full wage is truely holding full time wage
function isAllFullTimeWage(dailyWage){
  return dailyWage.includes("160");
}
console.log("UC7E - check all ele have full time wage " +fullDayWageArr.every(isAllFullTimeWage));

//UC7 - check if there is any part time wage.
function isAnyPartTimeWage(dailyWage){
  return dailyWage.includes("80");
}
console.log("UC7F- Check if any part time wage: "+ mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G -find the number of day employee worked
function totalDayWorked(numOfDays,dailyWage){
  if(dailyWage>0) return numOfDays+1;
  return numOfDays;
}
console.log ("UC7G- Number Of Day Emp Worked: "+ empDailyWageArr.reduce(totalDayWorked,0))