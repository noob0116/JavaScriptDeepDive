function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {
    sayHello() {
        console.log(`Hi! My name is ${this.name}`);
    }
};

// 1.me 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me, parent);
// 위 코드는 아래의 코드와 동일하게 동작한다.
// me.__proto__ = parent;

me.sayHello();   // Hi! My name is Lee

// ⬆️ 19.9.1절 "생성자 함수에 의한 프로토타입의 교체"와 마찬가지로 프로토타입으로 교체한 객체에는 constructor 프로퍼티가 없으므로 constructor 프로퍼티와 생성자 함수
// 간의 연결이 파괴된다. 따라서 프로토타입의 constructor 프로퍼티로 me 객체의 생성자 함수를 검새하면 Person이 아닌 Object가 나온다.

// 프로토타입을 교체함녀 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === Person);
console.log(me.constructor === Object);




