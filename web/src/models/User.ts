import { Eventing } from './Eventing'
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
/**
 * attributes: Attributes ---- Gives us the ability to store properties tied to this user(name, age, etc)
 * events: Events ---- Gives us the ability to tell other parts of our application whenever data tied to a particular user is changed
 * 
 * sync: Sync ---- Gives us the ability to save this persons data to a remote server, then retrieve it in the future
 */
export class User {
  public events: Eventing = new Eventing()
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
}