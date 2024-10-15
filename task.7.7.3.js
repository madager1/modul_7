const users = [
    {name: 'Игорь', age: 21},
    {name: 'Аскар', age: 22},
    {name: 'Федор', age: 14},
    {name: 'Марк', age: 16},
    {name: 'Леонид', age: 51}
];

const adults = users.filter(user => user.age >= 18);
const adultsName = adults.map(user => user.name);

console.log(adultsName);