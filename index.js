//<<<switch문을 이용한 윤년계산 코드>>>
var year = 2000;
var month = 2;
var days = 0;

 switch(month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;

    case 4: case 6: case 9: case 11:
        days = 30;
        break;

    case 2:
        days =((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;

        default:
            console.log('Invalid month');
}

console.log(days);




//<<<for 문 기본예제>>>
for(var i = 0 ; i<5; i++){
    console.log(i);
}



//<<<이중 for문을 이용한 두개의 주사위를 던졌을때 합이 6이 되는 모든 경우의수>>>
for(var i = 1; i < 6 ; i++){
    for(var j =1;j<6;j++){
        if(i+j === 6 ) console.log('['+ i +','+ j +']');
        //`[${i} , ${j}]` 괄호안을 이걸로 대체해도 똑같이 동작함 이게 더 가독성이 좋은것같음
    }
}



//<<<while문 무한루프에서 특정조건을 만족했을때 탈출하는법>>>
var count = 0;
while(true){
    console.log(count);
    count ++;
    if(count === 3) break;
}



//<<<do-while 문 코드블럭을 먼저 실행하고 조건식을 평가한다.(무조건 코드블록을 한번이상 실행한다)>>>
var count = 0;
do{
    console.log(count);
    count++;
}
while(count < 3);



//<<<레이블 문 예제>>>
foo: {
    console.log(1);
    break foo;
    console.log(2);
}
console.log('Done!');



//<<<중첩 for문에서 내부 for문이 아닌 외부 for문을 탈출하고싶을때 레이블문의 사용법>>>
outer: for(var i = 0;i < 3; i++) {
    for(var j = 0 ;j < 3; j++){
        if(i+j === 3) break outer;
        console.log(`inner [${i},${j}]`);
    }
}
console.log('Done');



//<<<for문을 이용해 문자열에서 특정 인덱스를 검색하는 예>>>
var string ='Hello World.';
var search ='l';
var index;

for(var i = 0; i<string.length; i++){
    if(string[i] === search) {
        index = i;
        break;
    }
}
console.log(index);
//console.log(string.indexOf(search));위에 코드대신 이 코드를 사용해도 똑같은 값이 출력된다.



// <<<continue 문을 이용한 문자열에서 특정문자의 개수를 세는 예>>>
var string ='Hello World.';
var search ='l';
var count = 0;
for (var i = 0; i<string.length ; i++){
    if(string[i] !== search) continue;
    count ++;
}
console.log(count);

const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length);  //위에 console.log(count); 대신 이 두코드를 써도 똑같이 동작한다.



//<<<위의 방식보다 좀더 쉽게 해결할수 있다.if문내에서 실행해야 할 코드가 한줄이라면 continue문을 사용했을때보다 간편하고 가독성
//도 좋지만 if 문 내에서 실행해야 할 코드가 길다면 들여쓰기가 한 단계 더 깊어지므로 continue 문으로 사용하는편이 가독성이 좋다.>>>
var string = 'Hello Wolrd.';
var search = 'l';
var count = 0;

for(var i = 0 ; i<string.length ; i++){
    if(string[i]===search) count ++;
}

console.log(count);



//<<<개발자가 의도적으로 값의 타입을 변환(명시적 타입변환 or 타입캐스팅)>>>
//x변수의 값이 변경된것은 아니다.
var x = 10;
var str = x.toString();
console.log(typeof str , str);
console.log(typeof x, x);



//<<<개발자의 의도와는 상관없는 타입변환(암묵적 타입변환 or 타입 강제 변환)>>>
//x 변수의 값이 변경된것은 아니다.
//때로는 toString()보다 x+''; 가 더 가독성이 좋을수있기때문에 암묵적 타입변환도 잘 이해해둬야한다. 
var x = 10;
var str = x +'';
console.log(typeof str , str);
console.log(typeof x , x);



//<<<문자열 타입으로 변환>>>
console.log(String(1));
console.log(String(NaN));
console.log((1).toString()); //1.toString 이 아니라 (1).toString인것에 주의한다.
console.log((true).toString());
console.log(1+'');
console.log(true+'');



//<<<숫자 타입으로 변환>>>
console.log(Number('123'));
console.log(Number(true));
console.log(parseInt('0')); //parseInt 는 문자열만 숫자로 변환할수있다.
console.log(+'0');
console.log(+'10.53');
console.log(+true);
console.log(+false);
console.log('-1'* 1);
console.log(true * 1);



//<<<불리언 타입으로 변환>>>9.3.3
console.log(Boolean('x'));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean({})); // true
console.log(!!'x');
console.log(!!(''));
console.log(!!Infinity);



//<<<단축평가>>>9.4 
console.log('Cat' || 'Dog'); // || 연산자에서는 cat이 truthy값이므로 굳이 우항을 평가하지않고 cat을 반환한다.
console.log('Cat' && 'Dog'); // && 연산자는 양항이 모두 truthy여야 true 이므로 cat이 truthy로 평가되면 dog를 반환한다.



//<<<단축 평가를 사용하면 if 문을 대체할 수 있다. 어떤 조건이 Truthy 값일 경우>>>09-20
var done = true;
var message = '';
//if (done) message = '완료';
message = done && '완료';
console.log(message);



//<<<단축 평가를 사용하면 if 문을 대체할 수 있다. 어떤 조건이 Falsy값 일경우>>>09-21
var done = false;
var message = '';
//console.log(Boolean(done));
// if(!done) message = '미완료';
message = done || '미완료';
console.log(message);



//<<<삼항 조건 연산자는 if...else 문을 대체할 수 있다>>>
var done = false;
var message = '';
message = done ? '완료' : '미완료';
console.log(message);



//<<<객체 리터럴에 의한 객체 생성>>>10.2
var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};    //코드 블록의 닫는 중괄호 뒤에는 세미콜론을 붙이지않지만, 객체 리터럴은 값으로 평가되는 표현식이므로 닫는 중괄호 뒤에 세미콜론을 붙인다.
console.log(typeof person);
console.log(person);
person.sayHello();



//<<<프로퍼티 키를 사용할때 식별자 네이밍 규칙을 따르는경우와 그렇지 않은경우>>>
var person = {
    firstName: 'Ung-mo',
    'last-name': 'Lee'         //식별자 네이밍 규칙을 따르지 않을경우 따옴표를 사용해야 한다.
};
console.log(person);



//<<<프로퍼티키를 동적을 생성할 수 있다.>>>10-06
var obj = {};
var key = 'hello';
obj[key] = 'world';   //var obj = {[key]: 'world'};
console.log(obj);



//<<<이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한것이 먼저 선언한것을 덮어쓴다.>>>10-10
var foo = {
    name: 'Lee',
    name: 'Kim'
};
console.log(foo);



//<<<메서드란 객체에 묶여 있는 함수를 의미한다.>>>
var circle = {
    radius: 5,                         //<-프로퍼티
    getDiamneter: function(){          //<- 메서드
        return 2 * this.radius;
    }
};
console.log(circle.getDiamneter());



//<<<프로퍼티 접근>>>
var person = {
    name: 'Lee'
};
// //프로퍼티 키가 식별자 네이밍 규칙을 지키면 마침표 표기법과 대괄호 표기법 둘다 사용할수있다. 이때 대괄호 안에는 꼭 따옴표를 써야한다. 그렇지않으면 식별자로 해석한다.
console.log(person.name); //마침표 표기법에 의한 프로퍼티 접근
console.log(person['name']); //대괄호 표기법에 의한 프로퍼티 접근

var person = {
    name: 'Lee'
};
console.log(person[name]); //ReferenceError 발생(따옴표를 쓰지 않았음)
console.log(person.age); //Undefined 발생(이때 ReferenceError가 발생되지않는다는것에 주의)



//<<<프로퍼티의 키의 이름이 식별자 네이밍규칙을 따르지않은경우에는 따옴표를 꼭 써줘야하며 이름 호출할때는 꼭 대괄호를 써야한다.>>>10-15
var person = {
    'last-name': 'Lee',
    1: 10
};
console.log(person['last-name']);
//프로퍼티가 숫자로 이루어진 문자열일경우 따옴표를 생략할수있다.
console.log(person.1); //syntax error.
console.log(person[1]); //10
console.log(person['1']); //10



//<<<프로퍼티 값 갱신>>>10-16
var person = {
    name: 'Lee'
};
person.name = 'Kim';
console.log(person.name);



//<<<프로퍼티 동적 생성(존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티값이 할당된다.>>>
var person = {
    name: 'Lee'
};
person.age = 20;
console.log(person);



//<<<프로퍼티 삭제>>>10.8
var person = {
    name: 'Lee'
};
person.age = 20;
delete person.name;
delete person.address;   //존재하지 않는 프로퍼티를 삭제하려고해도 에러가 나지 않는다.
console.log(person);



//<<<프로퍼티 축약 표현>>>
var x = 1; y = 2;
var obj = {
    x: x, 
    y: y
};
console.log(obj);

let x = 1,y = 2;
const obj = {x,y};    //프로퍼티 축약 표현
console.log(obj);



//<<<계산된 프로퍼티 이름>>>10.9.2
//ES5에서는 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면 객체 리터럴 외부에서 대괄호 기법을 사용해야 한다.
var prefix = 'prop';
var i = 0;
var obj = {};
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
console.log(obj);

//ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.
const prefix = 'prop';
let i = 0;
const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
};
console.log(obj);



//<<<메서드 축약 표현>>>
//ES5
var obj = {
    name: 'Lee',
    sayHi: function(){
        console.log('Hi!'+ this.name);
    }
};
obj.sayHi();

//ES6
const obj = {
    name:'Lee',
    sayHi(){                       //function키워드를 생략하고도 메서드를 정의할수있다.(메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당한 함수와 다르게 동작한다.)
        console.log('Hi!'+this.name)   
    }
};
obj.sayHi();



//<<<원시값>>>
str변수의 값을 변경하더라도 메모리에 'Hello' 와 'world'가 둘다 있다 단지 식별자 str이 Hello를 가리키고 있다가 world를 가리키게 된것 뿐이다.
var str = 'Hello';
console.log(str);
str = 'world';
console.log(str);



//<<<유사 배열 객체>>>
//유사 배열 객체란 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고, length 프로퍼티를 갖는 객체를 말한다. 문자열은 마치 배열처럼 인덱스를 통해 각 문자에 접근할 수 있으며, length 프로퍼티를 갖기 떄문에 유사 배열 객체이고 for 문으로 순회할 수도 있다.
var str = 'string';
console.log(str[0]);
console.log(str.length);
console.log(str.toUpperCase());

//문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있지만, 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
var str = 'string';
str[0] = 'S';
console.log(str); //string



//<<<값에 의한 전달>>>
//score에 있는 원시값을 복사하여 전달하는데 이때의 score변수의 변수값과 copy변수의 변수값을 서로 다른 메모리에 저장된다. 따라서 score 변수의 변수값을 재할당했다고 해도 copy 변수의 변수값에는 아무런 영향을 끼치지않는다.
var score = 80;
var copy = score;

console.log(score); //80
console.log(copy);  //80

score = 100;

console.log(score); //100
console.log(copy);  //80




//<<<참조에 의한 전달(자바스크립트에서 이러한 전달을 나타내는 공식적인 언어가 없다 포인터가 존재하는 다른 프로그래밍 언어의 "참조에 의한 전달"과 의미가 정확히 일치하지 않는다)>>>11.2.2
var person = {
    name: 'Lee'
};
var copy = person; //이런경우 원본 person과 사본 copy는 저장된 메모리 주소는 다르지만 동일한 참조 값을 갖는다. 다시말해 둘다 동일한 객체를 가리키고, 둘중 한쪽에서라도 객체를 변경하면 서로 영향을 주고 받는다.
console.log(copy === person);
copy.name = 'Kim';
person.address = 'Seoul';
console.log(person);
console.log(copy);



//<<<함수 기본 예제>>>
function add(x,y){     //함수 리터럴
    return x + y;
}
console.log(add(10,30));



//<<<함수 리터럴과 함수 선언문은 형태가 동일하지만 함수 선언문에서는 함수명을 생략할수없다>>>12.4.1
//변수에 함수 리터럴을 할당
var f = function(x,y) {
    return x + y;
};
console.log(f(4,4));
//기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
//함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() {console.log('foo');}
foo();

함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
//함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar() {console.log('bar');})
bar();
//함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다. 따라서 함수 외부에서는 함수이름을 가지고 함수를 참조할수 없다.
//하지만 위에 foo또한 함수이름이므로 함수 내부에서만 참조할 수 있어야 하지만, 외부에서도 참조할수있는것은 자바스크립트 엔진이
//암묵적으로 이름이 같은 foo 식별자를 생성한것이다. 자바스크립트 엔진은 함수 선언문을 해석해 함수 객체를 생성한다.
//이때 함수 이름은 함수 몸체 내부에서만 유효한 식별자이므로 함수 이름과는 별도로 생성된 함수 객체를 가리키는 식별자가 필요하다.
//함수 객체를 가리키는 식별자가 없으면 생성된 함수 객체를 참조할 수 없으므로 호출할 수도 없다. 따라서 자바스크립트 엔진은 생성된
//함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다.
 


//<<함수 표현식>>
var add = function(x,y) {                  //함수표현식에서는 함수이름을 생략할수있다.
    return x + y;
};
console.log(add(3,4));

//<<기명 함수 표현식>>
var add = function foo(x,y){
    return x + y;
};
console.log(add(3,4));    //함수를 호출할때는 식별자의 이름으로 호출해야한다. 함수의 이름은 함수의 내부에서만 참조할수있다.
console.log(foo(3,4));    //함수외부에서 함수의 이름으로 호출하려고 하면 ReferenceError 가 발생한다.



//<<<함수 생성 시점과 함수 호이스팅>>>
//함수선언문은 모든 선언문이 그렇듯 코드가 한 줄씩 순차적으로 실행되는 시점인 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행된다. 
console.dir(add);                       //함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있다.
console.dir(sub);                       //함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다.

console.log(add(2,5));
console.log(sub(2,5));

function add(x,y) {
    return x + y;
}
var sub = function (x,y) {
    return x - y;
};
// 호이스팅 이란 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징이다.
// 변수 호이스팅과 함수 호이스팅은 비슷하지만 다른 차이점이 있다. 둘다 런타임 이전에 먼저 실행된다는 공통점이있다.
// 둘의 차이점은 변수 호이스팅은 var 키워드로 선언된 변수가 undefined로 초기화 되고, 함수 선언문에 의해 정의된 함수의 호이스팅은
// 함수 선언문을 통해 암묵적으로 생성된 식별자가 함수 객체로 초기화되면서 선언문 이전에 호출해도 함수 객체를 참조할수있다.
// 변수 할당문의 값은 할당문이 실행되는 시점, 즉 런타임에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 
// 평가되어 함수 객체가 된다. 따라서 함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다.




//<<<Function 생성자 함수>>>12.4.4
//Function 생성자 함수로 함수를 생성하는 방식은 일반적이지 않으며 바람직하지도 않다. Function 함수는 클로저를 생성하지 않는 등
//함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.
var add = new Function('x','y','return x + y');
console.log(add(2,5));




//<<<화살표 함수>>>
//ES6에서 도입된 함수로 function 키워드 대신 화살표 => 를 사용해 좀더 간략한 방법으로 함수를 선언할 수 있다.
//화살표 함수는 항상 익명 함수로 정의한다.
const add = (x,y) => x + y;
console.log(add(2,5));




//<<<함수의 매개변수는 함수 몸체 내부에서만 참조할 수 있다>>>
  function add(x,y) {
      console.log(x,y);
      return x + y;
  }
  add(2,5);
  console.log(x,y); //add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.


//<<매개변수보다 인수가 더 적은경우>>
//인수가 할당되지않으면 매개변수의 값은 undefined 이다. 따라서 2 + undefined 이므로 NaN 이 반환된다.
function add(x,y) {
    return x + y;
}
console.log(add(2));


//<<매개변수보다 인수가 더 많은경우>>
//매겨변수의 수보다 초과된 인수는 무시된다.하지만 이것이 그냥 버려지는것은 아니고 arfuments 객체의 프로퍼티로 보관된다.
function add(x,y) {
    return x + y;
}
console.log(add(2, 5, 10));




//<<<함수를 정의할 때 적절한 인수가 전달되었는지 확인할 필요가 있다>>>
//자바스크립트 문법상 전혀 문제가 없다 
function add(x,y) {
    return x + y;
}
console.log(add(2));
console.log(add('a','b'));

//<<자바스크립트의 경우 함수를 정의할 때 적절한 인수가 전달되었는지 확인할 필요가 있다.>>
function add(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
    return x + y;
}
console.log(add(2));
console.log(add('a','b'));


//<<단축 평가를 사용해 매개변수에 기본값을 할당하는 방법도 있다.>>
// function add(a,b,c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}
console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());


//<<ES6에서 도입된 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할 수 있다.>>
function add(a = 0, b = 0, c = 0) {
    return a + b + c;
}
console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());




//<<<반환문>>>
//반환문은 두 가지 역할을 한다. 첫째, 반환문은 함수의 실행을 중단하고 함수 몸체를 빠져나간다. 따라서 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다. 둘째 반환문은 return 키워드 뒤에 오는 표현식을 평가해 반환한다. return 키워드 뒤에 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 undefined가 반환된다.
function multiply(x,y) {
    return x * y;
    console.log('실행되지 않는다');
}
console.log(multiply(3,5));


//<<return 키워드와 반환값으로 사용할 표현식 사이에 줄바꿈이 있으면 세미콜론 자동삽입 기능에 의해 세미콜론이 추가된다.>>
function multiply(x,y) {
    return
    x * y;
}
console.log(multiply(3, 5)); //undefined




//<<<참조에 의한 전달과 외부 상태의 변경>>>
//이렇듯 외부참조에 의해 함수객체의 정보가 바뀌면 여러 문제가 생길수있다. 따라서 객체를 불변 객체로 만들어 사용하는 방법이 있다. 객체의 복사본을 새롭게 생성하는 비용은 들지만 객체를 마치 원시 값처럼 변경 불가능한 값으로 동작하게 만드는 것이다. 이러한 함수를 순수 함수라고 한다.
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}
var num = 100;
var person = { name: 'Lee'};

console.log(num);
console.log(person);

//원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
//원시 값은 변경 불가능한 값이고 객체는 변경 가능한 값이므로 원본이 훼
changeVal(num,person);
//원시 값은 원본이 훼손되지 않는다.
console.log(num);
//객체는 원본이 훼손된다.
console.log(person);



//[[[[다향한 함수의 형태]]]]12.7



//<<<즉시 실행 함수>>>12.7.1
//함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수 라고 한다. 즉시 실행 함수는 단 한 번만 호출되며 다시 호출할 수 없다.
//즉시 실행 함수는 함수 이름이 없는 익명 함수를 사용하는 것이 일반적이다.
(function (){
    var a = 3;
    var b = 5;
    return a * b;
}());             


//<<기명 즉시 실행 함수>>
(function foo(){
    var a = 3;
    var b = 5;
    return a * b;
}());
//그룹 연산자 내의 기명 함수는 함수 선언문이 아니라 함수 리터럴로 평가되며 함수 이름은 함수 몸체에서만 참조할 수 있는 식별자이므로 즉시 실행 함수를 다시 호출할 수는 없다.
foo(); //ReferenceError: foo is not defined


//<<즉시 실행 함수는 반드시 그룹 연산자로 감싸야 한다.>>
function(){
    var a = 3;
    var b = 5;
    return a * b;
}();     //SyntaxError 함수 선언문은 함수이름을 생략할 수 없다.


function foo(){
    var a = 3;
    var b = 5;
    return a * b;
}();     //SyntaxError 자바스크립트의 세미콜론 자동 삽입 기능에 의해 함수 선언문이 끝나는 위치, 즉 함수 코드 블록의 닫는 중괄화 뒤에 ';'이 암묵적으로 추가되기 때문이다.


//즉시 실행 함수도 일반 함수처럼 값을 반환할 수도
var res = (function(){
    var a = 3;
    var b = 5;
    return a * b;
}());
console.log(res);
//인수를 전달할 수도 있다.
res = (function(a,b){
    return a * b;
}(3,5));
console.log(res);



//<<<재귀함수(재귀함수는 함수가 자기자신을 호출하는것을 의미한다)>>>
//10부터 0까지 출력하는 재귀함수
function countdown(n) {
    if(n < 0) return;
    console.log(n);
    countdown(n - 1);
}
countdown(10);



//<<재귀함수를 이용해서 팩토리얼을 계산하는 코드>>
function factorial(n) {
    if (n <= 1)return 1;
    return n * factorial(n - 1);
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));

//factorial 함수 내부에서 자기 자신을 호출할 때 사용한 식별자 factorial은 함수 이름이다. 함수 이름은 함수 몸체 내부에서만
//유용하다. 함수를 가리키는 식별자로 자기 자신을 재귀 호출 할수도 있다.(아래에 있는 코드처럼)
//재귀 함수는 자신을 무한 재귀 호출하기때문에 재귀 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다.

var factorial = function foo (n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);       //함수를 가리키는 식별자로 자기 자신을 재귀 호출
};
console.log(factorial(5));


//<<대부분의 재귀함수는 for 문이나 while 문으로 구현 가능하다. 위 팩토리얼 예제를 반복문으로 구현하면 다음과 같다.>>
//재귀 함수는 반복문을 사용하는 것보다 재귀 함수를 사용하는 편이 더 직관적으로 이해하기 쉬울 때만 한정적으로 사용하는 것이 바람직하다.
function factorial (n){
    if (n <= 1) return 1;

    var res = n;
    while (--n) res *= n;   
    return res;
}
console.log(factorial(0));
console.log(factorial(5));



//<<중첩 함수>>
//함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수라 한다. 중첩 함수를 포함하는 함수는 외부 함수라 부른다. 중첩 함수는 
//외부 함수 내부에서만 호출할 수 있다. 일반적으로 중첩함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수의 역할을 한다.
function outer() {
    var x = 1;
    
    function inner() {
        var y = 2;
        console.log(x + y);
    }
    inner();
}
outer();



//<<<콜백 함수>>>12.7.4
//어떤 일을 반복 수행하는 repeat 함수 정의
function repeat(n) {
    for (var i = 0; i < n ; i++) console.log(i);
}
repeat(5);

//repeat 함수는 console.log(i)에 강하게 의존하고 있어 다른 일을 할 수 없다. 따라서 만약 repeat 함수의 반복문 내부에서
//다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.
function repeat1(n) {
    for (var i = 0; i < n; i ++)console.log(i);
}
repeat1(5);

function repeat2(n){
    for(var i = 0; i < n; i++){
        if(i % 2)console.log(i);
    }
}
repeat2(5);   // 1 3



//아래의 repeat 함수는 경우에 따라 변경되는 일을 함수 f로 추상화했고 이를 외부에서 전달받는다. 자바스크립트의 함수는 일급 객체
//이므로 함수의 매개변수를 통해 함수를 전달할 수 있다. repeat 함수는 더 이상 내부로직에 강력히 의존하지 않고 위부에서 로직의
//일부분을 함수로 전달받아 수행하므로 더욱 유연한 구조를 갖게 되었다. 이처럼 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 
//함수를 콜백 함수 라고 하며, 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수 라고 한다.
//고차함수는 콜백 함수를 자신의 이부분으로 합성한다.
function repeat(n, f) { 
    for (var i = 0; i < n; i++){
        f(i);
    }
}
var logAll = function (i) {
    console.log(i);
};

repeat(5, logAll);

var logOdds = function (i) {
    if (i % 2)console.log(i);
};

repeat(5, logOdds);

//콜백 함수가 고차 함수 내부에만 호출된다면 콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달하는 것이 일반적이다.
//콜백 함수를 다른 곳에서도 호출할 필요가 있거나, 콜백 함수를 전달받는 함수가 자주 호출된다면 함수 외부에서 콜백 함수를 정의한 후 
//함수 참조를 고차 함수에 전달하는 편이 효율적이다.
repeat(5, function (i) {
    if (i % 2) console.log(i);
});




//<<<순수 함수와 비순수 함수>>> 
//순수 함수는 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 즉 부수 효과가 없는 함수이다.
//비순수 함수는 부수 효과가 있는 함수를 말한다.

//순수 함수 예시 코드//
//순수 함수는 일반적으로 최소 하나 이상의 인수를 전달받는다. 순수 함수는 인수의 불변성을 유지한다.
 var count = 0;

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
 function increase(n) {
     return ++n;
 }

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count);

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);




//비순수 함수 코드 예시//
//비순수 함수는 함수의 외부 상태에 따라 반환값이 달라지는 함수, 다시 말해 외부 상태에 의존하는 함수를 비순수 함수라고 한다.
var count = 0;

function increase() {
    return ++count;      //외부 상태에 의존하며 외부 상태를 변경한다.
}
//비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
//비순수 함수를 최대한 줄이는 것은 부수 효과를 최대한 억제하는 것과 같다.
increase();
console.log(count);

increase();
console.log(count);
//함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과를 최대한 억제해 오류를 피하고 프로그램의 안정성을 높이려는 노력의 일환이라 할 수 있다.




//<<<스코프>>>
//매개변수의 스코프는 함수 몸체 내부에서만이다.
function add(x, y) {
    console.log(x, y);
    return x + y;
}
add(2, 5);
console.log(x,y);  //ReferenceError 발생

//변수의 스코프
//모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다. 이를 스코프라 한다. 즉, 스코프는 식별자가 유효한 범위를 말한다.
var var1 = 1; //코드의 가장 바깥 영역에서 선언한 변수

if(true) {          
    var var2 = 2;   //코드 블록 내에서 선언한 변수
    if(true) {
        var var3 = 3;  //중첩된 코드 블록 내에서 선언한 변수
    }
}

function foo() {
    var var4 = 4;     //함수 내에서 선언한 변수

    function bar() {
        var var5 = 5;   //중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1);  //1
console.log(var2);  //2
console.log(var3);  //3
console.log(var4);  //ReferenceError
console.log(var5);  //ReferenceError


//변수의 식별자 이름이 동일하지만, 스코프의 범위가 다른 별개의 변수
var x ='global';

function foo() {
    var x = 'local';
    console.log(x);
}

foo();              //함수 내부에서 선언된 x의 변수는 함수 내부에서만 참조할수있다
console.log(x);     //코드의 가장 바깥 영역에 선언된 x 변수는 어디서든 참조할 수 있다.




//var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다. 이는 의도치 않게 변수값이 재할당되어 변경되는 부작용을 발생시킨다.
function foo() {
    var x = 1;
    var x = 2;
    console.log(x);
}
foo();    //2 
//하지만 let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
function bar() {
    let x = 1;
    let x = 2;   //SyntaxError: Identifier 'x' has already been declared
}
bar();

//<<스코프 체인>>13.3
//변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색 한다.
//상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만 하위 스코프ㅔ서 유효한 변수를 상위 스코프에서 참조할 수 없다.

function foo() {
    console.log('global function foo');
}

function bar() {
    function foo() {
        console.log('local function foo');
    }
    foo();
}
bar();     // local function foo



//<<함수 레벨 스코프>>
//c나 자바 등을 비롯한 대부분의 프로그래밍 언어는 함수 몸체만이 아니라 모든 코드 블록(if, for, while, try/catch 등)이 지역 스코프를 만든다.
//이러한 특성을 블록 레벨 스코프라 한다. 하지만 var 키워드로 선언된 변수는 오로지 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
//이러한 특성을 함수 레벨 스코프라 한다.

//예제 1
var x = 1;
if(true) {
//var 키워드로 선언된 변수는 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
//함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
//따라서 x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x변수는 중복 선언된다.
//이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
    var x =10;
}
console.log(x);



//예제 2
var i = 10;
//for 문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for(var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);   // 5



//<<렉시컬 스코프>>
//함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정하는것을 렉시컬 스코프 또는 정적 스코프라 한다. 자바스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 호출했는지가 아니라 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다. 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다. 즉, 함수의 상위 스코프는 언제나 자신이 정의된 스코프다.
var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo();
bar();



//<<<전역 변수의 문제점>>>14
//전역 변수의 무분별한 사용은 위험하다. 전역 변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역 변수를 사용해야 한다. 

//<<지역 변수의 생명 주기>>14.1.1
//전역 변수의 생명주기는 애플리케이션의 생명 주기와 같다. 하지만 함수 내부에서 선언된 지역 변수는 함수가 호출되면 생성되고 함수가 종료하면 소멸한다.
function foo() {
    var x = 'local';
    console.log(x);
    return x;
}
foo();
console.log(x);   //ReferenceError: x is not defined



//예제
var x = 'global';

function foo() {
    console.log(x);         //이미 이 시점에 변수 x 는 선언되었고 undefined로 초기화되어 있다. 따라서 전역 변수 x를 참조하는 것이 아니라 지역 변수 x를 참조해 값을 출력한다. 즉, 지역 변수는 함수 전체에서 유효하다. 단 변수 할당문이 실해되기 이전까지는 undefined 값을 갖는다.
    var x = 'local';       
}

foo();           //undefined
console.log(x);
//브라우저 환경에서 전역 객체는 window이므로 브라우저 환경에서 var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다. 전역 객체 window는 웹페이지를 닫기 전까지 유효하다. 따라서 브라우저 환경에서 var 키워드로 선언한 전역 변수는 웹페이지를 닫을 때까지 유효하다. 즉 var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치한다.
//자바스크립트의 가장 큰 문제점 중 하나는 파일이 분리되어 있다 해도 하나의 전역 스코프를 공유한다는 것이다. 따라서 다른 파일 내에서 동일한 이름으로 명명된 전역 변수나 전역 함수가 같은 스코프 내에 존재할 경우 예상치 못한 결과를 가져올 수 있다.


//<<전역 변수의 사용을 억제하는 방법>>14.3
//즉시 실행 함수 14.3.1
//모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.
(function() {
    var foo = 10;     //즉시 실행 함수의 지역 변수
    //...
}());
console.log(foo);    //ReferenceError: foo is not defined


//네임스페이스 객체 14.3.2
//전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 시은 변수를 프로퍼티로 추가하는 방법이다.
var MYAPP = {};
MYAPP.name = 'Lee';
console.log(MYAPP.name);
//네임스페이스 객체에 또 다른 네임스페이스 객체를 프로퍼티로 추가해서 네임스페이스를 계층적으로 구성할 수도 있다.
var MYAPP = {};
MYAPP.person = {
    name: 'Lee',
    address: 'Seoul'
};
console.log(MYAPP.person.name);
//네임스페이스를 분리해서 식별자 충돌을 방지하는 효과는 있으나 네임스페이스 객체 자체가 전역 변수에 할당되므로 그다지 유용해 보이지는 않는다.


//모듈 패턴
//모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다. 모듈 패턴의 특징은 전역 변수의 억제는 물론 캡슐화까지 구현할 수 있다는 것이다.
//자바스크립트는 public, private, protected 등의 접근 제한자를 제공하지 않는다. 모듈 패턴은 전역 네임스페이스의 오염을 막는 기능은 물론 한정적이기는 하지만 정보 은닉을 구현하기 위해 사용한다.

var Counter = (function() {
    //private 변수
    var num = 0;

    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

//private 변수는 외부로 노출되지 않는다.
//console.log(Counter.num); //Undefined
console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
console.log(Counter.decrease()); //1
console.log(Counter.decrease()); //0
//위 예제의 즉시 실행 함수는 객체를 반환한다. 이 객체에는 외부에 노출하고 싶은 변수나 함수를 담아 반환한다. 이때 반환되는 객체의 프로퍼티는 외부에 노출되는 퍼블릭 멤버다. 외부로 노출하고 싶지 않은 변수나 함수는 반환하는 객체에 추가하지 않으면 외부에서 접근할 수 없는 프라이빗 멤버가 된다.


//ES6 모듈 //14.3.4



//<<<let, const 키워드와 블록 레벨 스코프>>>
//var 키워드로 선언한 변수의 문제점
//변수 중복 선언 허용
var x = 1;
var y = 1;
// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var x = 100;
var y;     //초기화문이 없는 변수 선언문은 무시된다.
console.log(x);  //100
console.log(y);  //1



//<<변수 호이스팅>> 15.1.3
//이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다
//변수 foo는 undefined로 초기화된다
console.log(foo); //undefined

//변수에 값을 할당
foo = 123;

console.log(foo); //123

//변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
var foo;



//<<<let 키워드>>>15.2
// 변수 중복 선언 금지 15.2.1
var foo = 123;
var foo = 456;
let bar = 123;
// let 이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
let bar = 456;  //SyntaxError: Identifier 'bar' has already been declared



// 블록 레벨 스코프 15.2.2
//var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스포크로 인정하는 함수 레벨 스코프를 따른다. 하지만 let 키워드로 선언한 변수는 모든 코드 블록(함수, if문, for 문, while 문, try/catch 문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.
let foo = 1;   //전역 변수
{
    let foo = 2;   // 지역 변수
    let bar = 3;   // 지역 변수
}
console.log(foo); //1
console.log(bar); //ReferenceError: bar is not defined
//let 키워드로 선언된 변수는 블록 레벨 스코프를 따른다. 따라서 위 예제의 코드 블록 내에서 선언된 foo 변수와 bar 변수는 지역 변수다. 전역에서 선언된 foo 변수와 코드 블록 내에서 선언된 foo 변수는 다른 별개의 변수다. 또한 bar 변수도 블록 레벨 스코프를 갖는 지역 변수다. 따라서 전역에서는 bar 변수를 참조할 수 없다. 함수도 코드 블록이므로 스코프를 만든다. 이때 함수 내의 코드 블록은 함수 레벨 스코프에 중첩된다.


// 변수 호이스팅 15.2.3
//var 키워드로 선언한 변수와 달리 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.

console.log(foo); //ReferenceError: Cannot access 'foo' before initialization
let foo;            


//let 키워드로 선얺나 변수는 "선언 단계"와 "초기화 단계"가 분리되어 진행된다. 즉, 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언 단계가 먼저 실행되지만 초기화 단계는 변수 선언문에 도달했을 때 실행된다.
//런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
//초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.
console.log(foo);    //ReferenceError: Cannot access 'foo' before initialization

let foo;             // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo);    // undefined

foo = 1;             // 할당문에서 할당 단계가 실행된다.
console.log(foo);    // 1



//<<전역 객체와 let>> 15.2.4
//이 예제는 브라우저 환경에서 실행해야 한다.
// 전역 변수
var x = 1;

// 암묵적 전역
y = 2;
// 전역 함수
function foo() {}

// var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
console.log(window.x); // 1
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(x); // 1

// 암묵적 전역은 전역 객체 window의 프로퍼티다.
console.log(window.y); // 2
console.log(y);  // 2

// 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
console.log(window.foo);  // f foo() {}
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(foo); // f foo() {}


// let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. 즉, window.foo와 같이 접근할 수 없다.
// 이 예제는 브라우저 환경에서 실행해야 한다.
let x = 1;

//let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.x); // undefined
console.log(x);




// <<<const 키워드>>> 15.3
// const 키워드는 상수를 선언하기 위해 사용한다. 하지만 반드시 상수만을 위해 사용하지는 않는다.

// <<선언과 초기화>> 15.3.1
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.
const foo = 1;

const foo;  // SyntaxError: Missing initializer in const declaration


// <<재할당 금지>> 15.3.2
// var 또는 let 키워드로 선언한 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지 된다.
const foo = 1;
foo = 2;    // TypeError: Assignment to constant variable.


// <<상수>> 15.3.3
// const 키워드로 선언한 변수에 원시 값을 할당한 경우 변수 값을 변경할 수 없다. 원시 값은 변경 불가능한 값 이므로 재할당 없이 값을 변경할 수 있는 방법이 없기 때문이다. 이러한 특징을 이용해 const 키워드를 상수를 표현하는데 사용하기도 한다.
// 변수의 상대 개념인 상수는 재할당이 금지된 변수를 말한다. 상수도 값을 저장하기 위한 메모리 공간이 필요하므로 변수라고 할 수 있다. 단, 변수는 언제든지 재할당을 통해 변수 값을 변경할 수 있지만 상수는 재할당이 금지된다.
// 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 한다.

// <<예제>>
let preTaxPrice = 100;

// 세후 가격
// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

console.log(afterTaxPrice); // 110


// 위의 예제를 상수를 이용해서 가독성을 높인 경우
// 일반적으로 상수의 이름은 대문자로 선언해 상수임을 명확히 나타낸다. 여러 단어로 이뤄진 경우에는 언더스 코어(_)로 구분해서 스네이크 케이스로 표현하는 것이 일반적이다.
const TAX_RATE = 0.1;

let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);
console.log(afterTaxPrice);   // 110



// <<const 키워드와 객체>> 15.3.4
// const 키워드로 선언된 변수에 원시 값을 할당한 경우 값을 변경할 수 없다. 하지만 const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
const person = {
    name: 'Lee'
};
// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = 'Kim';
console.log(person.name);



// <<<내부 슬릇과 내부 메서드>>> 16.1
// <<프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체>>
// 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다. 프로퍼티의 상태란 프로퍼티의 값, 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부를 말한다.
// 프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDexcriptor 메서드를 사용하여 간접적으로 확인할 수는 있다.
// <<데이터 프로퍼티>> 16.3.1
  // 데이터 프로퍼티는 다음과 같은 프로퍼티 어트리뷰트를 갖는다. 이 프로퍼티 어트리뷰트는 자바스크립트 엔진이 프로퍼티를 생성할 때 기본값으로 자동 정의된다.
const person = {
    name: 'Lee'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name')); // { value: 'Lee', writable: true, enumerable: true, configurable: true }



// ES8에서 도입괸 Object.getOwnPropertyDescriptors 메서드는 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
const person = {
    name: 'Lee'
};
// 프로퍼티 동적 생성
person.age = 20;
// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
console.log(Object.getOwnPropertyDescriptors(person)); 
 /*{
    name: {value: 'Lee', writable: true, enumerable: true, configurable: true},
    age: { value: 20, writable: true, enumerable: true, configurable: true }
  }*/



// <<접근자 프로퍼티>> 16.3.2
// 접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근 함수로 구성된 프로퍼티다.
// 접근자 함수는 getter / setter 함수라고도 부른다. 접근자 프로퍼티는 getter와 setter 함수를 모두 정의할 수도 있고 하나만 정의할 수도 있다.
const person = {
    // 데이터 프로퍼티
    firstName: 'Ungmo',
    lastName: 'Lee',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set fullName(name) {
        // 배열 디스트럭처링 할당: "31.1 배열 디스트럭처링 할당" 참고
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(person.firstName+ ' ' + person.lastName);  // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = 'Heegon Lee';
console.log(person);      // { firstName: 'Heegon', lastName: 'Lee', fullName: [Getter/Setter] }

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName);   // Heegon Lee

// firstName은 데이터 프로퍼티다
//let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);  
// {value: 'Heegon', writable: true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티다.
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);
// {get: [Function: get fullName], set: [Function: set fullName], enumerable: true, configurable: true}



// <<접근자 프로퍼티와 데이터 프로퍼티를 구별하는 방법>>
// 일반 객체의 __proto__ 는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// {get: f, set: f, enumerable: false, configurable: true}

// 함수 객체의 prototype은 데이터 프로퍼티다.
Object.getOwnPropertyDescriptor(function() {}, 'prototype');
// {value: {...}, writable: true, enumerable: false, configurable: false}



// <<<프로퍼티 정의>>> 16.4
// Object.defineProperty 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다. 인수로는 객체의 참조와 데이터 프로퍼티의 키인 문자열, 프로퍼티 디스크립터 객체를 전달한다.
const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName',{
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: 'Lee'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);
// firstName {value: 'Ungmo', writable: true, enumerable: true, configurable: true}

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
// lastName {value: 'Lee', writable: false, enumerable: false, configurable: false}

// [[Enumerable]]의 값이 false인 경우
// 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.
// lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person)); // ["firstName"]

// [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
// lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
// 이때 값을 변경하면 에러는 발생하지 않고 무시된다.
person.lastname = 'Kim';

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
// lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 삭제할 수 없다.
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
delete person.lastName;

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
// Object.defindeProperty(person, 'lastName', { enumerable: true});
// Uncaught TypeError: Cannot redefine property: lastName

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
//lastName {value: 'Lee', writable: false, enumerable: false, configurable: false}

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    // getter 함수
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);
// fullName {get: [Function: get], set: [Function: set], enumerable: true, configurable: true}

person.fullName = 'Heegun Lee';
console.log(person); // { firstName: 'Heegun', lastname: 'Kim', fullName: [Getter/Setter] }




// Object.defineProperty 메서드는 한번에 하나의 프로퍼티만 정의할 수 있지만 Object.defineProperties 메서드를 사용하면 여래 개의 프로퍼티를 한 번에 정의할 수 있다.
const person = {};

Object.defineProperties(person, {
    firstName: {
        value: 'Ungmo',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Lee',
        writable: true,
        enumerable: true,
        configurable: true
    },
    // 접근자 프로퍼티 정의
    fullName: {
        //getter 함수
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        // setter 함수
        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});
person.fullName = 'Heegon Lee';
console.log(person); // { firstName: 'Heegon', lastName: 'Lee', fullName: [Getter/Setter] }



// <<<객체 변경 방지>>> 16.5
// <<객체 확장 금지>> 16.5.1
// Object.perventExtensions 메서드는 객체의 확장을 금지한다. 객체 확장 금지란 프로퍼티 추가 금지를 의미한다. 즉, 확장이 금지된 객체는 프로퍼티 추가가 금지된다. 프로퍼티는 프로퍼티 동적 추가와 Object.defineProperty 메서드로 추가할 수 있다. 이 두 가지 추가 방법이 모두 금지된다.
// 확장이 가능한 객체인지 여부는 Object.isExtensible 메서드로 확인할 수 있다.
const person = {name: 'Lee'};

// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person));

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체다.
console.log(Object.isExtensible(person));

// 프로퍼티 추가가 금지된다.
person.age = 20; // 무시. strict mode 에서는 에러
console.log(person); // {name: 'Lee'}

// 프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name;
console.log(person); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
Object.defineProperty(person, 'age', {value: 20});
// TypeError: Cannot define property age, object is not extensible 



// <<객체 밀봉>> 16.5.2
// Object.seal 메서드는 객체를 밀봉한다. 객체 밀봉이란 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지를 의미한다. 즉, 밀봉된 객체는 읽기와 쓰기만 가능하다.
// 밀봉된 객체인지 여부는 Object.isSealed 메서드로 확인할 수 있다.
const person = {name: 'Lee'};

// person 객체는 밀봉(seal)된 객체가 아니다.
console.log(Object.isSealed(person)); // false

// person 객체를 밀봉(seal)하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
Object.seal(person);

// person 객체는 밀봉(seal)된 객체다.
console.log(Object.isSealed(person)); // true

// 밀봉된 객체는 configurable이 false다.
let descriptor = Object.getOwnPropertyDescriptor(person , 'name');
console.log('name', descriptor);
// name { value: 'Lee', writable: true, enumerable: true, configurable: false }

// 프로퍼티 추가가 금지된다.
person.age = 20;       // 무시. strict mode에서는 에러
console.log(person);   // {name: 'Lee'}

// 프로퍼티 삭제가 금지된다.
delete person.name; // 무시. strict mode에서는 에러
console.log(person);  // {name: 'Lee'}

// 프로퍼티 값 갱신은 가능하다.
person.name = 'Kim';
console.log(person);  // {name: 'Kim'}

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'name' , { configurable: true });
// TypeError: Cannot redefine property: name



// <<객체 동결>> 16.5.3
// Object.freeze 메서드는 객체를 동결한다. 객체 동결이란 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지, 프로퍼티 값 갱신 금지를 의미한다. 즉, 동결된 객체는 읽기만 가능하다.
// 동결된 객체인지 여부는 Object.isFrozen 메서드로 확인할 수 있다.
const person = { name: 'Lee' };

// person 객체는 동결된 객체가 아니다.
console.log(Object.isFrozen(person)); // false

// person 객체를 동결하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지한다.
Object.freeze(person);

// person 객체는 동결된 객체다
console.log(Object.isFrozen(person)); // true

let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log('name', descriptor);
//name { value: 'Lee', writable: false, enumerable: true, configurable: false }

// 프로퍼티 추가가 금지된다.
person.age = 20;   // 무시. strict mode에서는 에러
console.log(person);   // {name: 'Lee'}

// 프로퍼티 값 갱신이 금지된다.
person.name = 'Kim'; // 무시. strict mode에서는 에러
console.log(person); // {name: 'Lee'}

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name



// <<불변 객체>> 16.5.4
// 지금까지 살펴본 변경 방지 메서드들은 얕은 병경 방지로 직속 프로퍼티만 변경이 방지되고 중첩 객체까지는 영향을 주지는 못한다. 따라서 Object.freeze 메서드로 객체를 동결하여도 중첩 객체까지 동결할 수 없다.
const person = {
    name: 'Lee',
    address: { city: 'Seoul' }
};

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결한다.
console.log(Object.isFrozen(person)); // true
// 중첩 객체까지 동결하지 못한다.
console.log(Object.isFrozen(person.address)); // false

person.address.city = 'Busan';
console.log(person);  // { name: 'Lee', address: { city: 'Busan' } }





// 객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야 한다.
function deepFreeze(target) {
    // 객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않은 객체만 동결한다.
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        /* 모든 프로퍼티를 순회하며 재귀적으로 동결한다.
        Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.
        forEach 메서드는 배열을 순회하며 배열의 각 요소에 대하여 콜백 함수를 실행한다.
        */
       Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

const person = {
    name: 'Lee',
    address: { city: 'Seooul'}
};

// 깊은 객체 동결
deepFreeze(person);

console.log(Object.isFrozen(person)); // true
//중첩 객체까지 동결한다.
console.log(Object.isFrozen(person.address)); // true

person.address.city = 'Busan';
console.log(person); // {name: 'Lee', address: {city: 'Seoul'}}




// <<<<생성자 함수에 의한 객체 생성>>>> 17장
// <<<Object 생성자 함수>>> 17.1
// new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다. 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.

// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function() {
    console.log('Hi! My name is' + this.name);
};

console.log(person); // { name: 'Lee', sayHello: [Function (anonymous)] }
person.sayHello();   // Hi! My name isLee



// 생성자 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다. 생성자 함수에 의해 생성된 객체를 인스턴스라 한다.
// 자바스크립는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인 생성자 함수를 제공한다.

// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj);  // object
console.log(strObj);         // [String: 'Lee']

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj);  // object
console.log(numObj);         // [Number: 123]

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj);        // [Boolean: true]

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x' ,'return x * x');
console.log(typeof func);    // function
console.dir(func);           // [Function: anonymous]

// Array 생성자 함수에 의한 Array 객체(배열)생성
const arr = new Array(1,2,3);
console.log(typeof arr);     // object
console.log(arr);            // [ 1, 2, 3 ]

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i); 
console.log(typeof regExp);  // object
console.log(regExp);         // /ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date);    // object
console.log(date);           // 2022-07-26T14:01:18.117Z




// <<<생성자 함수>>> 17.2
// <<객체 리터럴에 의한 객체 생성 방식의 문제점>> 17.2.1
// 객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하다. 하지만 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다. 따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야 하기 때문에 비효율적이다.
const circle1 = {
    radius: 5,
    getDiamneter() {
        return 2 * this.radius;
    }
};
console.log(circle1.getDiamneter());   // 10

const circle2 = {
    radius: 10,
    getDiamneter() {
        return 2 * this.radius;
    }
};
console.log(circle2,getDiamneter());   // 20



// <<생성자 함수에 의한 객체 생성 방식의 장점>> 17.2.2
// 생성자 함수에 의한 객체 생성 방식은 마치 객체(인스턴스)를 생성하기 위한 템플릿(클래스)처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiamneter = function () {
        return 2 * this.radius;
    };
}

// 인스턴스의 생성
const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle1.getDiamneter());
console.log(circle2.getDiamneter());