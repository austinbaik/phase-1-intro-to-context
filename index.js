// Your code here

//fxn createEmployeeRecord - 
// takes in 4 element array and loads element to object properties

function createEmployeeRecord(fourElementArray) {

    let employeeRecord = { //declare object variable
        firstName: '',
        familyName: '',
        title: '',
        payPerHour: '',
        timeInEvents: [],
        timeOutEvents: [],
    }

    employeeRecord.firstName = fourElementArray[0]
    employeeRecord.familyName = fourElementArray[1]
    employeeRecord.title = fourElementArray[2]
    employeeRecord.payPerHour = fourElementArray[3]
    return employeeRecord

}


//fxn createEmployeeRecords -
//takes in array of arrays as its argument and returns array of object; 
//Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array

function createEmployeeRecords(arrayofArrays) {
    let newArray = []
    arrayofArrays.forEach((array) => {

        newArray.push(createEmployeeRecord(array))
        // console.log('NewArray', newArray)
    })
    return newArray //QQ: why does the 'return' need to be here? 
}

    // ---------FOR TESTING-----------
    // let twoRows = [
    // ["moe", "sizlak", "barkeep", 2],
    //     ["bartholomew", "simpson", "scamp", 3]
    //   ]
    // ----

    // let testObject = { //declare object variable
    //     firstName: '',
    //     familyName: '',
    //     title: '',
    //     payPerHour: '',
    //     timeInEvents: [
    //         {
    //         type: "TimeIn",
    //         hour: '',
    //         date: '',
    //         }, 
    //         ],
    //     timeOutEvents: [
    //         {
    //         type: "TimeOut",
    //         hour: '',
    //         date: '',
    //     }
    //     ],
    // }


    // --------

function createTimeInEvent(employeeObject, dateStamp) {
    let newEmployeeObject = employeeObject
    newEmployeeObject.timeInEvents.push({
        type: "TimeIn",
        hour: '',
        date: '',
    })
    let arrayPlace = newEmployeeObject.timeInEvents.length - 1
    newEmployeeObject.timeInEvents[arrayPlace].hour = parseInt(dateStamp.substring(11, 15))
    newEmployeeObject.timeInEvents[arrayPlace].date = dateStamp.substring(0, 10)
    // console.log(newEmployeeObject)
    return newEmployeeObject
}

// --------------



function createTimeOutEvent(employeeObject, dateStamp){
    let newEmployeeObject = employeeObject
    newEmployeeObject.timeOutEvents.push({
        type: "TimeOut",
        hour: '',
        date: '',
    })
    let arrayPlace = newEmployeeObject.timeOutEvents.length - 1
    newEmployeeObject.timeOutEvents[arrayPlace].hour = parseInt(dateStamp.substring(11, 15))
    newEmployeeObject.timeOutEvents[arrayPlace].date = dateStamp.substring(0, 10)
    // console.log(newEmployeeObject)
    return newEmployeeObject
}


function hoursWorkedOnDate(employeeObject, specificDate){
    const timeInMatch = employeeObject.timeInEvents.find(timeObject => timeObject.date === specificDate)
    const timeOutMatch = employeeObject.timeOutEvents.find(timeObject => timeObject.date === specificDate)
    
        return ((timeOutMatch.hour-timeInMatch.hour)/100) 
}

function wagesEarnedOnDate(employeeObject, specificDate) {
    let hourWorked = hoursWorkedOnDate(employeeObject, specificDate)
    return (hourWorked * employeeObject.payPerHour)
}

function allWagesFor(employeeObject){
    //take the employeeObject, go through the array and pass each date through the wagesEarnedOnDate fxn
    //add to a new array 
    // sum vlaues in the new array 
    //    let earnedWagesArray = []
       return employeeObject.timeInEvents.map(dates => wagesEarnedOnDate(employeeObject, dates.date)).reduce((a, b) => a+b)

}


function calculatePayroll(arrayOfRecords) {
     return arrayOfRecords.map(eachRecord => allWagesFor(eachRecord)).reduce((a,b) => a+b)
}


// let cRecord = [
// {
//     firstName: 'Julius',
//     familyName: 'Caesar',
//     title: 'General',
//     payPerHour: 1000,
//     timeInEvents: [ { type: 'TimeIn', hour: 900, date: '0044-03-15'}] ,
//     timeOutEvents: [ { type: 'TimeOut', hour: 1100, date: '0044-03-15'} ],
//   },
//   {
//     firstName: 'Julius II',
//     familyName: 'Caesar II',
//     title: 'General',
//     payPerHour: 1000,
//     timeInEvents: [ { type: 'TimeIn', hour: 900, date: '0044-03-15'}] ,
//     timeOutEvents: [ { type: 'TimeOut', hour: 1100, date: '0044-03-15'} ],
//   }
// ]

// calculatePayroll(cRecord)

