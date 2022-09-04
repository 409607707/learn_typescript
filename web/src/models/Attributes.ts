
export class Attributes<T> {
  /**
   * private data: UserProps
   * Ojbect to store information about a particular user(name, age)
   */
   constructor(private data: T) {}
   /**
    *  Gets a single piece of info about this user(name, age)
    */
   get(propName: string): string | number{
     return this.data[propName]
   }
   /**
    * changes information about this user(name, age)
    */
   set(update: T): void {
     Object.assign(this.data, update)
   }
} 