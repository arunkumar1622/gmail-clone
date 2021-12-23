//Date
d = new Date();
console.log(d);                 //2021-08-12T05:03:17.607Z

//utcstring
console.log(d.toUTCString());  //Thu, 12 Aug 2021 05:03:17 GMT

//toDateString
console.log(d.toDateString()); // thu aug 12 2021

//toISOString
console.log(d.toISOString());  //2021-08-12T05:03:17.607Z

//parsing date convters date to millisecond
console.log(Date.parse("may 22 2015")); // 1432233000000

//get time return a milliseconds
date_1 = new Date();
console.log(date_1.getTime());      //1432233000000

//getFullyear
console.log(date_1.getFullYear());   //2021

//getmonth
console.log(date_1.getMonth());      //7(august)

//getminutes
console.log(date_1.getMinutes());    //53(mintues)

//getsecond
console.log(date_1.getSeconds());     //58 seconds

//getDay
console.log(date_1.getDay());          //4(thursday)

//getMillisecond
console.log(date_1.getMilliseconds()); // 966

//setday
date_1.setDate(22);
console.log(date_1);

//setyear
date_1.setYear(99);
console.log(date_1);

//setminutes
date_1.setMinutes(30);
console.log(date_1);

//date.now it is also gives milliseconds
date_1 = Date.now()
console.log(date_1);        //1628748248760
