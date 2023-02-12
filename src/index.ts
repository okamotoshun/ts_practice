import World from './world'

const root: HTMLElement | null = document.getElementById('root')
const world = new World('Hello Shun!!!')
world.sayHello(root)

// 基本の型定義
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic/index'
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 関数の型定義
import { logMessage } from './function/basic'
logMessage('Hello')
