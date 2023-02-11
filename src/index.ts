import World from './world'

const root: HTMLElement | null = document.getElementById('root')
const world = new World('Hello Shun!!!')
world.sayHello(root)
