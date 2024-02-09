const users = [
    { name: 'John', email: 'john@example.com',team:'Manchester united',id: 3},
    { name: 'Jane', email: 'jane@example.com',team:'Manchester united',id: 4},
    { name: 'Mary', email:'mary@example.com',team:'Manchester united',id: 5},
    { name: 'Peter', email: 'peter@example.com',team:'Manchester united',id: 6}
]
const oneUser = users.filter((user) => {
    return user.name !== 'John'
})
module.exports ={oneUser}
console.log(oneUser);