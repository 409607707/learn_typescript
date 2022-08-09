> 这个项目是使用Typescript来构建一个Web应用App

### Model Class

* Handle data, used to represent Users, Blog Posts, Images, etc
* Remember a model class is something that is going to represent some data or some thing inside of application

### View Classes

* Handle Html and events caused by the user(like clicks)

### distinct purposes

* Probably need to create a class to represent a User and all of its data (like name and age)
* User class needs to have the ability to store some data, retrieve it, and change it
* Also needs to have the ability to notify the rest of the app when some data is changed
* User needs to be able to persist data to an outside server, and then retrieve it at some future point

### Extraction Approach

* Build class User as a 'mega' class with tons of methods
* Refactor User to use composition
* Refactor User to be a reusable class that can represent any piece of data, not just a User

### Refactor composition

* I want to have one class that's going to be responsible for storing data related to a user.
* I want to have another that's responsible for all that eventually logic.
* And then one more to handle the actual like persistence of data

#### How are we going to really get that eventing class into the user

* Accept dependencies as second constructor arguments

  ```typescript
  constructor(private data: UserProps, private events: Eventing) {}
  ```

  - Every single time we create a user we have to create a eventing class as well
* Only accept dependencies into constructor , Define a static class method to preconfigure; User and assign properties afterwards

  ```typescript
  static fromData(data: UserProps) {
  	const user = new User(new Eventing())
  	user.set(data)
  	return user
  }
  private data: UserProps;
  /**
  	we're going to say that the constructor is always dedicated 100 percent to receiving configuration or kind of like sub modules or the class
  */
  constructor(private events: Eventing) {}
  ```
* Only accept properties into constructor; Hard code dependencies as class properties

  ```typescript
  events: Eventing = new Eventing()
  ```
