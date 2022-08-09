/**
 * The goal of this file right here is to implement a class that's going to be responsible for handling all the different events tied to a user
 */
export type Callback = () => void
export class Eventing {
  /**
   * we don't know the names of the different events that we're going to have
   * we don't know what the different keys are going to be, we have no idea
   * but we do know that they will be strings, in all these different keys are going to
   * point at values are an array of callback functions.
   */
   private events: {[key: string]: Callback[]} = {}
  /**
   * Registers an event handler with this object,
   * so other parts of the app know when something changes
   * 
   * 我们将创建一个对象，该对象将存储所有添加的不同事件侦听器给这个对象内的用户
   */
   on(eventName: string, callback: Callback): void {
    // 第一次创建用户时，可能会有两种类型的值：一种是Callback[]，一种是undefined
    // this.events[eventName]

    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }
  /**
   * Triggers an event to tell other parts of the app that something has changed
   */
  trigger(eventName: string): void {
    const handlers = this.events[eventName]
    if (!handlers || handlers.length === 0) {
      return
    }
    handlers.forEach(callback => {
      callback()
    })

  }
}