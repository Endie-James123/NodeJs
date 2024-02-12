const characters =
  "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberOfToken = 8;
let token = "";
for (let i = 0; i < numberOfToken; i++) {
  token += characters.charAt(Math.floor(Math.random() * characters.length));
}

// module.exports = {token}
console.log(token);
