// 声明 Three.js 模块
declare module 'three/examples/jsm/controls/OrbitControls.js' {
  import { Camera } from 'three'
  export class OrbitControls {
    constructor(camera: Camera, domElement?: HTMLElement)
    update(): void
    enableDamping: boolean
    dampingFactor: number
    rotateSpeed: number
    minDistance: number
    maxDistance: number
  }
}

// 声明 Tween.js 模块
declare module '@tweenjs/tween.js' {
  export class Tween {
    constructor(object: any)
    to(props: any, duration?: number): this
    start(): this
    onUpdate(callback: (object: any) => void): this
    onComplete(callback: () => void): this
    easing(easing: (k: number) => number): this
    delay(delay: number): this
    repeat(times: number): this
    yoyo(yoyo: boolean): this
    stop(): this
  }

  export function update(time?: number): boolean
}
