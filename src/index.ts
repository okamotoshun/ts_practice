import World from './world'

const root: HTMLElement | null = document.getElementById('root')
const world = new World('Hello Shun!!!')
world.sayHello(root)

// 基本の型定義
import { primitiveSample } from './basic/index'

primitiveSample()
