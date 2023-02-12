export default function notExistSample() {
  let name = null
  console.log(typeof name, name)
  name = 'shun'

  if (name) {
    console.log('名前は' + name)
  } else {
    console.log('名前はまだ' + name)
  }

  let age = undefined
  console.log(typeof age, age)
  age = 26
  if (!age) {
    console.log('年齢は秘密')
  } else {
    console.log('年齢は' + age)
  }
}

// TypeScriptはanyを回避するゲーム
