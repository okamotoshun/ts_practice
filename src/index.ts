import World from './world'

const root: HTMLElement | null = document.getElementById('root')
const world = new World('Hello Shun!!!')
world.sayHello(root)

// 基本の型定義
import { primitiveSample } from './basic/index'
import { notExistSample } from './basic/index'
import { anySample } from './basic/index'
import { unknownSample } from "./basic/index";
primitiveSample()
notExistSample()
anySample()
unknownSample()
