// Object property shorthand

const firstName = 'Andrew'
const userAge = 22

const user = {
    firstName,
    userAge
}

console.log(user)

// Object destructuring

const product = {
    lable: 'Book stores',
    print: 20,
    stock: 22,
    salePrice: undefined
}


// Destructuring

const {lable, print} = product

console.log(lable)
console.log(print)