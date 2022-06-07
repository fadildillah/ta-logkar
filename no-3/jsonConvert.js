const obj = {
    'address.street': 'Jalan sakura',
    'address.provice': 'banten',
    'address.city': 'tangerang',
    'person.name': 'john',
    'person.email': 'john@doe.com',
    'userType': 'admin',
    'accessLevel': 'QA'
}


function jsonConvert(obj) {
    let address = {};
    let person = {};
    let userType = {};
    let accessLevel = {};
    for (let key in obj) {
        if (key.includes('address')) {
            address[key.split('.')[1]] = obj[key];
        } else if (key.includes('person')) {
            person[key.split('.')[1]] = obj[key];
        }
        else if (key.includes('userType')) {
            userType = obj[key];
        }
        else if (key.includes('accessLevel')) {
            accessLevel = obj[key];
        }
    }
    return {
        address,
        person,
        userType,
        accessLevel
    }
}

console.log(jsonConvert(obj));
