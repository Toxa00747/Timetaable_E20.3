"use strict";

let dayWeek = new Date('June 03, 2022 12:30:00').getDay()
let hour =    new Date('June 03, 2022 12:30:00').getHours();
let min =     new Date('June 03, 2022 12:30:00').getMinutes();
console.log(`${hour}:${min}`)

let day = document.querySelector(`.day-${dayWeek}>.list_block>.list`)
console.log(day)

if (dayWeek > 0){
    if((hour == 13 && min > 10) || (hour == 14) ){        // 4 ПАРА
        let cls = day.children[3]
        cls.classList.add('now-class')


    }else if((hour == 11 && min > 20) || (hour == 12) || (hour == 13 && min <= 10)){ // 3 ПАРА
        let cls = day.children[2]
        cls.classList.add('now-class')


    }else if((hour == 9 && min > 50) || (hour == 10) || (hour == 11 && min <= 20)){ // 2 ПАРА
        let cls = day.children[1]
        cls.classList.add('now-class')


    }else if((hour == 8 && min >= 10) || (hour == 9 && min <= 50)){ // 1 ПАРА
        let cls = day.children[0]
        cls.classList.add('now-class')
    }else if(hour < 8 || hour > 15){
        
    }
}
