const coution = "1~9999までの数字"
console.log(coution)

// 引数 number を受け取る関数
const genkiFunction = function(number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す//
  for (let n = 1; n <= number; n++) {
    //x or yに何も入っていないときに元気じゃない数字を表示する//
    let x = null
    let y = null

    //１の位//
    if (n % 10 === 3) {
      console.log(n + "!!!!!!!")
      let x = "a"
    }
    //１０の位//
    if (((n - (n % 10)) / 10) % 10 === 3 && x !== "a") {
      console.log(n + "!!!!!!!")
      let y = "b"
    }
    //１００の位//
    if (((n - (n % 100)) / 100) % 10 === 3 && (x !== "a" || y !== "b")) {
      console.log(n + "!!!!!!!")
    }
    //元気じゃない数字の表示//
    if (x === null && y === null) {
      console.log(n)
    }
  }
}
