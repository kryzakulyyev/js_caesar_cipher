

const alpha  = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const alphaArr = alpha.split(" ");
const criptoWord = "Hello World";


function criptoMessage (data, num) {
  let cripto = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i] === " "){
      cripto = cripto + " ";
    } else {
      for (let j = 0; j < alphaArr.length; j++) {
        if (data[i].toLowerCase() === alphaArr[j]) {

          if ((num > 0 && (j + num) < alphaArr.length) || (num < 0 && (j + num) > 0)) {
            cripto = cripto + alphaArr[j + num];
          } else if (num > 0 && (j + num) > alphaArr.length) {
            let n = alphaArr.length - 1 - j;    // Because last index is less than length
            n = num - n - 1;         // Because index starts with 0
            
            cripto = cripto + alphaArr[n];
          } else if (num < 0 && (j + num) < 0) {
            let a = -(num) - j;
            a = alphaArr.length - a;
            
            cripto = cripto + alphaArr[a];
          }
        }
      }
    }
    
  }

  return cripto;
}

console.log(criptoMessage(criptoWord, 5));   // mjqqt btwqi
console.log(criptoMessage("eat", -3));       // bxq

//DECRIPTION
function deCripto (data, num) {

}
