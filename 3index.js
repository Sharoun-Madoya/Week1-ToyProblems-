// const basicSalary = (grossPay- totalAllowances)
// payee-Tax
// nhifdeductions
// nssfdeductions
// grossSalary
// netsalary


// Information about Basic Salary,Tax, NHIF and NSSF ratesconst NHIF_RATE = 0.025;const NSSF_RATE = 0.06;
const BASIC_SALARY = 150000;const TAX_RATE = 0.3; 
 
// basic salary and benefits               
 const basicSalary = parseFloat(prompt("What is your basic salary: "));const benefits = parseFloat(prompt(" What is the total amount of benefits received: ")); 
    
 // How to get gross salary 
const grossSalary = BASIC_SALARY + basicSalary + benefits; 

  //The process of Deductionsconst nssfDeduction = grossSalary * NSSF_RATE;
const taxDeduction = grossSalary * TAX_RATE;const nhifDeduction = grossSalary * NHIF_RATE; 

 //this process give us the net salary
const netSalary = grossSalary - taxDeduction - nhifDeduction - nssfDeduction; 
