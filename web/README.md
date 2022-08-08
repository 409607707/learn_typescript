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
