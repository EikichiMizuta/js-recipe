const addButton = document.getElementById("add-button")
const memoInput = document.getElementById("memo-input")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function() {
  const memo = document.createElement("div")
  const removeButton = document.createElement("button")
  //追加ボタンを押すとメモタグと削除ボタンを作る

  memo.className = "memo"
  memo.textContent = memoInput.value //inputに入れた内容はvalueのプロパティに入る
  //メモタグに名前をつけ、入力した値を代入する

  removeButton.className = "remove"
  removeButton.textContent = "削除"
  //削除ボタンに名前をつけ、「削除」と表示する

  memo.append(removeButton)
  memoContainer.append(memo)
  //削除ボタンをメモタグに入れて、メモタグをメモコンテナに入れる

  memoInput.value = ""
  //入力欄を空にする

  removeButton.onclick = function() {
    memo.remove()
  }
  //削除ボタンを押したらメモタグを消す
}
