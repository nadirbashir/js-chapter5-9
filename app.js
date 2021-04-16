// var item1_price = 650;
// var item2_price = 100;
// var charges = 100
// var quantity = prompt("Item 1 for 650", "Enter Quantity");

// var total_item1 = item1_price*quantity;

// document.write("Price of item 1 is"+item1_price+"<br>");
// document.write("Quantity of item 1 is "+ quantity+"<br>");


// quantity = prompt("Item 2 for 100", "Enter Quantity");
// var total_item2 = item2_price*quantity;
// document.write("Price of item 2 is "+item2_price+"<br>");
// document.write("Quantity of item 2 is "+quantity+"<br>");
// document.write("Shipping charges 100 <br>")

// document.write("Total cost of your order is "+(total_item1+total_item2+charges));




// var table = prompt("Print the Table of given number","Enter Number");
// for(var i=1;i<=10;i++){
//     document.write(table+" x "+i+" = "+table*i+"<br>");
// }

//**********Celcius to Farhenhite *************//

// var temp = +prompt("Enter Temparature in centi","Enter temparature");

// var far=  (temp*9/5)+32;

// document.write("Temparature in farhanhite is "+far);


// var arr = ['monday','tuesday','friday',"saturday"];

// // arr.splice(2,2,'wednesday','thursday');
// var arr2 = arr.slice(1,4);
// console.log(arr2)

//*******Marks sheet ************/

// var totalMarks = 980;
// var obtainMarks = 820;
// var percentage = (obtainMarks/totalMarks) * 100;

// document.write("<h4> Total Marks: "+ totalMarks + "</h4>");
// document.write("<h4> obtain Marks: "+ obtainMarks + "</h4>");
// document.write("<h4> Percentage: "+ percentage + "% </h4>");


//********* currency in pkr ********/

//  var dollar = 154;
//  var riyal = 41;
// document.write("<h2>Currency in pkr</h4>")
// document.write("Total currency in pkr: "+ (+(dollar * 10) + +(riyal * 25)));


//******** Life time supply calculator ******/

// var favSnack = "chocolate chip";
// var age = 25;
// var maxAge = 65;
// var consumePerDay =  3;
// var totalSnacks = 3*30*12*(65-25);

// document.write("you will need "+ totalSnacks+ " " + favSnack + " to last you until you ripe the old age of " +maxAge);


//********* Take input from user and calculate the percentage of three subjects ************/

// var sub1 = prompt("Enter Subject 1");
// var marksObtain1 = +prompt("Enter marks obtained in subject 1 out of 100");
// var sub2 = prompt("Enter Subject 2");
// var marksObtain2 = +prompt("Enter marks obtained in subject 2 out of 100");
// var sub3 = prompt("Enter Subject 3");
// var marksObtain3 = +prompt("Enter marks obtained in subject 3 out of 100");
// var totalMarks = 100;


// document.write("<table><tr><td>Subject</td><td>Total Marks</td> <td>Obtained Marks</td> <td>Percentage</td> </tr> <tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+marksObtain1+"</td><td>"+marksObtain1/totalMarks*100+"%</td></tr> <tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+marksObtain2+"</td><td>"+marksObtain2/totalMarks*100+"%</td></tr> <tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+marksObtain3+"</td><td>"+marksObtain3/totalMarks*100+"%</td></tr> <tr><td></td><td></td><td></td><td></td></tr> </table>")