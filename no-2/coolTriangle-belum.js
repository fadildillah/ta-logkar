let n = 8
let string = ""

for (let i = 1; i<= n - 1; i++) {
    for (let  j = 1; j <= i ; j++) {
        if (i == n || j == 1 || j == i ) {
            string += "*"
        }
        else {
            string += " "
        }
    }
    string += "\n"
}
console.log(string)


