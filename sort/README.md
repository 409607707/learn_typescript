#### 使用到的第三方模块
 nodemon：allow us to rerun node anytime when a file changes inside of our project. nodemon is going to be responsibel for actually executing our code once it has been compiled

 concurrently: it is going to be responsible for helping us run multiple scripts at the same time


#### interface VS abastract class
##### interface
 * sets up a contract between different classes  给不同的类设置联系
 * Use when we have very different objects that we want to work together
 * Promotes loose coupling  降低耦合性
 推荐使用接口，当不同的对象想要一块工作
 首先将接口作为代码重用的解决方案，除非我们的对象处于关系紧密的时候考虑抽象类
##### abastract class
 * sets up a contract between different classes
 * Use when we are trying to build up a definition of an object
 * Strongly couples classes together
