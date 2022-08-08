import axios, { AxiosResponse } from "axios";

/**
 * Interfaces are not only used to shomehow get some amount of code reuse between different
 * classes
 * they are also used to create types that describe object
 */
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
type Callback = () => void
export class User {
  /**
   * we don't know the names of the different events that we're going to have
   * we don't know what the different keys are going to be, we have no idea
   * but we do know that they will be strings, in all these different keys are going to
   * point at values are an array of callback functions.
   */
  private events: {[key: string]: Callback[]} = {}
  /**
   * private data: UserProps
   * Ojbect to store information about a particular user(name, age)
   */
  constructor(private data: UserProps) {}
  /**
   *  Gets a single piece of info about this user(name, age)
   */
  get(propName: string): string | number{
    return this.data[propName]
  }
  /**
   * changes information about this user(name, age)
   */
  set(update: UserProps): void {
    Object.assign(this.data, update)
  }
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
  /**
   * Fetches some data from the server about a particular user
   */
  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
    .then((res: AxiosResponse): void => {
      this.set(res.data)
    })
  }
  /**
   * Saves some data about this user to the server
   */
  save(): Promise<unknown> {
    return new Promise((resolve, reject) => {

    })
  }

}