import { Eventing } from './Eventing'
import { Sync } from './Sync'
/**
 * Interfaces are not only used to shomehow get some amount of code reuse between different
 * classes
 * they are also used to create types that describe object
 */
export interface UserProps {
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
const rootUrl = 'http://localhost:3000/users'
export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync(rootUrl)
}