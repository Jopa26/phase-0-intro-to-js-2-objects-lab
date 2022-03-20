// Write your solution in this file!


const employee = {

    name: "Luis",
    streetAddress: "2011 Ave",
};



function updateEmployeeWithKeyAndValue(employee,key,value){

    const newInfo = {...employee};

    newInfo[key] = value;

    return newInfo;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){

   employee[key] = value;

    
return employee;
}

function deleteFromEmployeeByKey(employee,key){

    const newInfo = {...employee};

    delete newInfo[key];

    return newInfo;
}

function  destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];
    
    return employee;
}