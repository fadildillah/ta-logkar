// object yang diberikan
const givenObject = {
    "address.street" : "jalan sakura",
    "address.provice" : "banten",
    "address.city" : "tangerang",
    "person.name" : "john",
    "person.email" : "john@doe.com",
    "userType" : "admin",
    "accessLevel" : "QA",
};

// function manual
function parseNestedJSON(obj) {
    const result = {};

    for (const objectPath in obj) {
        const parts = objectPath.split('.');

        let target = result;

        while (parts.length > 1) {
            const part = parts.shift();
            target = target[part] = target[part] || {};
        }
        target[parts[0]] = obj[objectPath];
    };

    return result;
};

const implementFun = parseNestedJSON(givenObject);

// stringify untuk melihat bentuk object
console.log(JSON.stringify(implementFun));