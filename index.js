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

console.log(circle1.getDiamneter()); // 10
console.log(circle2.getDiamneter()); // 20


// 함수는 다양한 방식으로 호출될 수 있다.
function foo() {
    console.log(this);
}

// 일반적인 함수로서 호출
// 전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가리킨다.
foo(); // 브라우저 환경에서는 window

const obj = { foo }; // ES6 프로퍼티 축약 표현

// 메서드로서 호출
obj.foo(); // obj

// 생성자 함수로서 호출
const inst = new foo(); // inst




// 생성자 함수는 이름 그대로 객체(인스턴스)를 생성하는 함수다.
// 일반 함수와 동일한 방법으로 생성자 함수를 정의하고 new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.
// 만약 new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다.

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
// 즉, 일반 함수로서 호출된다.
const circle3 = Circle(15);

// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3); // undefined

// 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
console.log(radius); // 15



// <<생성자 함수의 인스턴스 생성 과정>> 17.2.3
// 생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿(클래스)으로서 동작하여 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)하는 것이다. 생성자 함수가 인스턴스를 생성하는 것은 필수이고, 생성된 인스턴스를 초기화하는 것은 옵션이다.

// 생성자 함수
function Circle(radius) {
    // 인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// 인스턴스 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성



// <<1. 인스턴스 생성과 this 바인딩>>
function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// <<2. 인스턴스 초기화>>
function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// <<3. 인스턴스 반환>>
// 생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
}

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle = new Circle(1);
console.log(circle); // Circle { radius: 1, getDiameter: [Function (anonymous)] }


// 만약 this가 아닌 다른 객체를 명시적으로 반환하면 this가 반환되지 못하고 return 문에 명시한 객체가 반환된다.
function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    return {};
}

// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle = new Circle(1); 
console.log(circle); // {}


// 하지만 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    // 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
    return 100;
}

const circle = new Circle(1);
console.log(circle); // Circle { radius: 1, getDiameter: [Function (anonymous)] 
/////////// 이처럼 생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작으로 훼손한다. 따라서 생성사 함수 내부에서 return 문을 반드시 생략해야 한다.



// <<내부 메서드 [[Call]]과 [[Construct]]>> 17.2.4

// 함수는 객체다
function foo() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo.prop = 10;

// 함수는 객체이므로 메서드를 소유할 수 있다.
foo.method = function() {
    console.log(this.prop);
};

foo.method(); // 10


// 함수는 객체이지만 일반 객체와는 다르다. 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다. 따라서 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드는 물론, 함수로서 동작하기 위해 함수 객체만을 위한 [[Environment]], [[FormalParameters]] 등의 내부 슬롯과 [[Call]], [[Construct]] 같은 내부 메서드를 추가로 가지고 있다. 함수가 일반 함수로서 호출되면 함수 객체의 내부 메서드 [[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 [[Construct]]가 호출된다.
// 호출할 수 없는 객체는 함수 객체가 아니므로 함수로서 기능하는 객체, 즉 함수 객체는 반드시 callable이어야 한다. 따라서 모든 함수 객체는 내부 메서드[[Call]]을 갖고 있으므로 호출할 수 있다. 하지만 모든 함수 객체가 [[Construct]]를 갖는 것은 아니다. 다시 말해, 함수 객체는 constructor 일수도 있고, non-constructor일 수도 있다.
function foo() {}

// 일반적인 함수로서 호출: [[Call]]이 호출된다.
foo();

// 생성자 함수로서 호출: [[Construct]]가 호출된다.
new foo();



// <<constructor와 non-constructor의 구분>> 17.2.5
// 자바스크립트 엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라 함수를 constructor와 non-constructor로 구분한다.
// - constructor : 함수 선언문, 함수 표현식, 클래스(클래스도 함수다)
// - non-constructor : 메서드(ES6 메서드 축약 표현), 화살표 함수
// 이때 주의할 것은 ECMAScript 사양에서 메서드로 인정하는 범위가 일반적인 의미의 메서드보다 좁다는 것이다.

// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {}
const bar = function () {};
// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
const baz = {
    x: function(){}
};

// 일반 함수로 정의된 함수만이 constructor다.
new foo(); // -> foo {}
new bar(); // -> bar {}
new baz.x(); // -> x {}

// 화살표 함수 정의
const arrow = () => {};

new arrow(); // TypeError: arrow is not a constructor

// 메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다.
const obj = {
    x() {}
};

new obj.x(); // TypeError: obj.x is not a constructor

// 함수를 프로퍼티 값으로 사용하면 일반적으로 메서드로 통칭한다. 하지만 ECMAScript 사양에서 메서드란 ES6의 메서드 축약 표현만을 의미한다. 다시 말해 함수가 어디에 할당되어 있는지에 따라 메서드인지를 판단하는 것이 아니라 함수 정의 방식에 따라 constructor와 non-constructor를 구분한다. 따라서 위 예제와 같이 일반 함수, 즉 함수 선언문과 함수 표현식으로 정의된 함수만이 constructor이고 ES6의 화살표 함수와 메서드 축약 표현으로 정의된 함수는 non-constructor다.
// 함수를 일반 함수로서 호출하면 함수 객체의 내부 메서드 [[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출하면 내부 메서드 [[Construct]]가 호출된다. non-constructor인 함수 객체는 내부 메서드 [[Construct]]를 갖지 않는다. 따라서 non-constructor인 함수 객체를 생성자 함수로서 호출하면 에러가 발생한다.
function foo() {}

// 일반 함수로서 호출
// [[Call]]이 호출된다. 모든 함수 객체는 [[Call]]이 구현되어 있다.
foo();

// 생성자 함수로서 호출
// [[Construct]]가 호출된다. 이때 [[Construct]]를 갖지 않는다면 에러가 발생한다.
new foo();
// 주의할 것은 생성자 함수로서 호출될 것을 기대하고 정의하지 않은 일반 함수 (callable이면서 constructor)에 new 연산자를 붙여 호출하면 생성자 함수처럼 동작할 수 있다는 것이다.



// <<new 연산자>> 17.2.6

// 생성자 함수로서 정의하지 않은 일반 함수
function add(x,y) {
    return x + y;
}

// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let inst = new add();  

// 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
console.log(inst); // {}

// 객체를 반환하는 일반 함수
function createUser(name, role) {
    return { name, role };
}

// 일반 함수를 new 연산자와 함께 호출
inst = new createUser('Lee', 'admin');
// 함수가 생성한 객체를 반환한다.
console.log(inst);   // { name: 'Lee', role: 'admin' }



// 반대로 new 연산자 없이 생성자 함수를 호출하면 일반 함수로 호출된다. 다시 말해, 함수 객체의 내부 메서드 [[Construct]]가 호출되는 것이 아니라 [[Call]]이 호출된다.
// Circle 함수를 new 연산자와 함께 생성자 함수로서 호출하면 함수 내부의 this는 Circle 생성자 함수가 생성할 인스턴스를 가리킨다. 하지만 Circle 함수를 일반적인 함수로서 호출하면 함수 내부의 this는 전역 객체 window를 가리킨다.
// 아래의 예제는 Circle 함수는 일반 함수로서 호출되었기 때문에 Circle 함수 내부의 this는 전역 객체 window를 가리킨다. 따라서 radius 프로퍼티와 getDiameter 메서드는 전역 객체의 프로퍼티와 메서드가 된다.
// 일반 함수와 생성자 함수에 특별한 형식적 차이는 없다. 따라서 생성자 함수는 일반적으로 첫 문자를 대문자로 기술하는 파스칼 케이스로 명명하여 일반 함수와 구별할 수 있도록 노력한다.

// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출된다.
const circle = Circle(5);
console.log(circle); // undefined

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(radius);            // 5
console.log(getDiameter());     // 10

circle.getDiameter();  // TypeError: Cannot read properties of undefined (reading 'getDiameter')



// <<new.target>> 17.2.7
// 함수 내부에서 new.target을 사용하면 new 연산자와 함께 생성자 함수로서 호출되었는지 확인할 수 있다.
// new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다. new 연산자 없이 일반 함수로서
// 호출된 함수 내부의 new.target은 undefined다.

// 생성자 함수
function Circle(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined 다.
    if (!new.target) {
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}
// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter()); // 10



// <<<<함수와 일급 객체>>>> 18장
// <<<일급 객체>>> 18.1

// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
    return ++num;
};

const decrease = function (num) {
    return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
    let num = 0;

    return function () {
        num = aux(num);
        return num;
    };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser());     // 1
console.log(increaser());     // 2

const decreaser = makeCounter(auxs.decrease);    
console.log(decreaser());     // -1
console.log(decreaser());     // -2

// ⬆️ 함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미다. 객체는 값이므로 함수는 값과 동일하게 취급할 수 있다. 따라서 함수는 값을 사용할 수 있는 곳(변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문)이라면 어디서든지 리터럴로 정의할 수 있으며 런타임에 함수 객체로 평가된다.
// 함수는 객체이지만 일반 객체와는 차이가 있다. 일반 객체는 호출할 수 없지만 함수 객체는 호출할 수 있다. 그리고 함수 객체는 일반 객체에는 없는 함수 고유의 프로퍼티를 소유한다.


// <<<함수 객체의 프로퍼티>>> 18.2
// 함수는 객체다. 따라서 함수도 프로퍼티를 가질 수 있다. 브라우저 콘솔에서 console.dir 메서드를 사용하여 함수 객체의 내부를 들여다 볼수있다.
function square(number) {
    return number * number;
}

console.dir(square);

// square 함수의 모든 프로퍼티의 프로퍼티 어트리뷰트를 Object.getOwnPropertyDescriptors 메서드로 확인해 보면 다음과 같다.
function square(number) {
    return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));
/* length: { value: 1, writable: false, enumerable: false, configurable: true },
  name: { value: 'square',writable: false, enumerable: false, configurable: true },
  arguments: { value: null, writable: false, enumerable: false, configurable: false },
  caller: { value: null, writable: false, enumerable: false, configurable: false },
  prototype: { value: {}, writable: true, enumerable: false, configurable: false }
} */

// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); // undefined

// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));
// { get: [Function: get __proto__], set: [Function: set __proto__], enumerable: false, configurable: true }

// ⬆️ 이처럼 arguments, caller, length, name, prototype 프로퍼티는 모두 함수 객체의 데이터 프로퍼티다. 이들 프로퍼티는 일반 객체에는 없는 함수 객체 고유의 프로퍼티다. 하지만 __proto__ 는 접근자 프로퍼티이며, 함수 객체 고유의 프로퍼티가 아니라 Objeect.prototype 객체의 프로퍼티를 상속받은 것을 알 수 있다.



// <<arguments 프로퍼티>> 18.2.1
// 함수 객체의 arguments 프로퍼티 값은 arguments 객체다. arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다. 즉 함수 외부에서는 참조할 수 없다.
function multiply(x, y) {
    console.log(arguments);
    return x * y;
}

console.log(multiply());         //NaN
console.log(multiply(1));        //NaN
console.log(multiply(1, 2));     // 2
console.log(multiply(1, 2, 3));  // 2

// 위의 코드에서 선언된 매개변수의 개수보다 인수를 적게 전달했을 경우 (multiply(),multiply(1)) 인수가 전달되지 않은 매개변수는 undefined로 초기화된 상태를 유지한다. 매개변수의 개수보다 인수를 더 많이 전달한 경우 (multiply(1,2,3))초과된 인수는 무시된다.
// 그렇다고 초과된 인수가 그냥 버려지는 것은 아니다. 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다. 위 예제를 브라우저 콘솔에서 실행시키면 자세히 확인할 수 있다.


// 선언된 매개변수의 개수와 함수를 호출할 때 전달하는 인수의 개수를 확인하지 않는 자바스크립트의 특성 때문에 함수가 호출되면 인수 개수를 확인하고 이에 따라 함수의 동작을 달리 정의할 필요가 있을 수 있다. 이때 유용하게 사용되는 것이 arguments 객체다.
// arguments 객체는 매개변수 개수를 확정할 수 없는 [[[[[가변 인자 함수]]]]] 를 구현할 때 유용하다.
function sum() {
    let res = 0;

    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다.
    for (let i = 0; i < arguments.length; i++){
        res += arguments[i];
    }

    return res;
}

console.log(sum());             // 0
console.log(sum(1, 2));         // 3
console.log(sum(1, 2, 3));      // 6
console.log(sum(1, 2, 3, 4));   // 10




// <<caller 프로퍼티>> 18.2.2
// caller 프로퍼티는 ECMAScript 사양에 포함되지 않은 비표준 프로퍼티다. 이후 표준화될 예정도 없는 프로퍼티이므로 사용하지 말고 참고로만 알아두자.



// <<length 프로퍼티>> 18.2.3
// 함수 객체의 length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.
// arguments 객체의 length 프로퍼티와 함수 객체의 length 프로퍼티의 값은 다를 수 있으므로 주의해야 한다. arguments 객체의 length 프로퍼티는 인자의 개수를 가리키고, 함수 객체의 length 프로퍼티는 매개변수의 개수를 가리킨다.
function foo() {}
console.log(foo.length);  // 0

function bar(x) {
    return x;
}
console.log(bar.length);  // 1

function baz(x, y){
    return x * y;
}
console.log(baz.length);  // 2



// <<name 프로퍼티>> 18.2.4
// 함수 객체의 name 프로퍼티는 함수 이름을 나타낸다. name 프로퍼티는 ES5와 ES6에서 동작을 달리하므로 주의하기 바란다.
// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name);  // foo

// 익명 함수 표현식
var anonymousFunc = function() {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name);  // anonymousFunc

// 함수 선언문
function bar() {}
console.log(bar.name);  // bar



// << __proto__ 접근자 프로퍼티>> 18.2.5
// __proto__ 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티다. 내부 슬롯에는 직접 접근할 수 없고 간접적인 접근 방버블 제공하는 경우에 한하여 접근할 수 있다. 
const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype 이다.
console.log(obj.__proto__ === Object.prototype);  // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 메서드다.
// hasOwnProperty 메서드는 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고 상속받은 프로포타입의 프로퍼티 키인 경우 false를 반환한다.
console.log(obj.hasOwnProperty('a'));      // true
console.log(obj.hasOwnProperty('__proto__'));    // false



// <<prototype 프로퍼티>> 18.2.6
// prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티다. 
// 일반 객체와 생성자 함수로 호출할 수 없는 non-constructor에는 prototype 프로퍼티가 없다.

// 함수 객체는 prototype 프로퍼티를 소유한다.
(function (){}).hasOwnProperty('prototype');   // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype');   // false



// <<<<프로토타입>>>> 19장
// <<< 객체지향 프로그래밍 >>> 19.1
// 원이라는 개념을 객체로 만들면, 원에는 반지름이라는 속성이 있다. 이 반지름을 가지고 원의 지름, 둘레, 넓이를 구할 수 있다. 이때 반지름은 원의 상태를 나타내는 데이터이며 원이 지름, 둘레, 넓이를 구하는 것은 동작이다.
const circle = {
    radius: 5,

    // 원의 지름: 2r
    getDiameter() {
        return 2 * this.radius;
    },

    // 원의 둘레: 2*pi*r
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },

    // 원의 넓이: 2*pi*r^2
    getArea() {
        return 2 * Math.PI * this.radius ** 2;
    }
};

console.log(circle);
//{ radius: 5, getDiameter: [Function: getDiameter], getPerimeter: [Function: getPerimeter], getArea: [Function: getArea] }

console.log(circle.getDiameter());   // 10
console.log(circle.getPerimeter());  // 31.41592653589793
console.log(circle.getArea());       // 157.07963267948966

// ⬆️ 이처럼 객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각한다. 따라서 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조라고 할 수 있다. 이때 객체의 상태 데이터를 프로퍼티, 동작을 메서드라 부른다. 각 객체는 고유의 기능을 갖는 독립적인 부품으로 볼 수 있지만 자신의 고유한 기능을 수행하면서 다른 객체와 관계성을 가질 수 있다. 다른 객체와 메시지를 주고받거나 데이터를 처리할 수도 있다. 또는 다른 객체의 상태 데이터나 동작을 상속받아 사용하기도 한다.



// <<< 상속과 프로토타입 >>> 19.2
// 상속은 객체지향 프로그래밍의 핵심 개념으로, 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.
// 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다. 중복을 제거하는 방법은 기존의 코드를 적극적으로 재사용하는 것이다. 
// 코드 재사용은 개발 비용을 현저히 줄일 수 있는 잠재력이 있으므로 매우 중요하다.

// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius ** 2;
    };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는 getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea);    // false

console.log(circle1.getArea());   // 3.141592653589793
console.log(circle2.getArea());   // 12.566370614359172



// ⬆️ 이처럼 동일한 생성자 함수에 의해 생성된 모든 인스턴스가 동일한 메서드를 중복 소유하는 것은 메모리를 불필요하게 낭비한다. 또한 인스턴스를 생성할 때마다 메서드를 생성하므로 퍼포먼스에도 악영향을 준다. 만약 10개의 인스턴스를 생성하면 내용이 동일한 메서드도 10개 생성된다.
// 상속을 통해 불필요한 중복을 제거해 보자. 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.
// 생성자 함수
function Circle(radius) {
    this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
};

// 인스탠스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.

console.log(circle1.getArea === circle2.getArea);  // true

console.log(circle1.getArea());  // 3.141592653589793
console.log(circle2.getArea());  // 12.566370614359172


// ⬆️ 상속은 코드의 재사용이란 관점에서 매우 유용하다. 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메서드를 프로토타입에 미리 구현해 두면 생성자 함수가 생성할 모든 인스턴스는 별도의 구현없이 상위(부모) 객체인 프로토타입의 자산을 공유하여 사용할 수 있다.


// <<< 프로토타입 객체 >>> 19.3
// 모든 객체는 [[Prototype]] 이라는 내부 슬롯을 가지며, 이 내부 슬롯의 값은 프로토타입의 참조(null 인 경우도 있다)다. [[Prototype]]에 저장되는 프로토타입은 객체 생성 방식에 의해 결정된다. 즉, 객체가 생성될때 객체 생성 방식에 따라 프로토타입이 결정되고 [[Prototype]]에 저장된다.
// 모든 객체는 하나의 프로토타입을 갖는다. 그리고 모든 프로토타입은 생성자 함수와 연결되어 있다.



// << __proto__ 접근자 프로퍼티 >> 19.3.1
// 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다. 


// __proto__ 는 접근자 프로퍼티다.
const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__ 가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

// setter 함수인 set__proto__ 가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x); // 1


// __proto__ 접근자 프로퍼티는 상속을 통해 사용된다.
// __proto__ 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 Object.prototype 의 프로퍼티다.
// 모든 객체는 상속을 통해 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다.
const person = { name: 'Lee' };

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty('__proto__'));   // false

//__proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));
//{ get: [Function: get __proto__], set: [Function: set __proto__], enumerable: false, configurable: true }


// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true



// __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
// [[Prototype]] 내부 슬롯의 값, 즉 프로토타입에 접근하기 위해 접근자 프로퍼티를 사용하는 이유는 상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서다.
const parent = {};
const child = {};

// child의 프로토타입을 parent로 설정
child.__proto__ = parent;

// parent의 프로토타입을 child로 설정
parent.__proto__ = child;        // TypeError: Cyclic __proto__ value

// ⬆️ 프로포타입은 체인은 단방향 링크드 리스트로 구현되어야 하는데 위의 예제는 순환 참조를 하게된다. 프로토타입 체인의 종점이 존재하지 않기 때문에 프로토타입 체인에서 프로퍼티를 검색할 때 무한 루프에 빠진다. 따라서 아무런 체크 없이 무조건적으로 프로토타입을 교체할 수 없도록 __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하고 교체하도록 구현되어 있다.



// __proto__ 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다.
// 모든 객체가 __proto__ 접근자 프로퍼티를 사용할 수 있는 것은 아니기 때문이다. 

// obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__ 를 상속받을 수 없다.
const obj = Object.create(null);

// obj는 Object.__proto__ 를 상속받을 수 없다.
console.log(obj.__proto__);        // undefined

// 따라서 __proto__보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다.
console.log(Object.getPrototypeOf(obj));       // null


// 따라서 __proto__ 접근자 프로퍼티 대신 프로토타입의 참조를 취득하고 싶은 경우에는 Object.getPrototypeOf 메서드를 사용할 것을 권장한다.

const obj =  {};
const parent = { x: 1 };

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj);    // obj.__proto__;
// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent);      // obj.__proto__ = parent;

console.log(obj.x);  // 1



// << 함수 객체의 prototype 프로퍼티 >> 19.3.2
// 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function() {}).hasOwnProperty('prototype');   // -> true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype');              // -> false

// ⬆️ prototype 프로퍼티는 생성자 함수가 생성할 객체(인스턴스)의 프로토타입을 가리킨다. 따라서 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor 인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는 prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.

// 화살표 함수는 non-constructor다
const Person = name => {
    this.name = name;
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Peson.hasOwnProperty('prototype'));  // false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(Person.prototype);  // undefined

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor다.
const obj = {
    foo() {}
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(obj.foo.hasOwnProperty('protoype'));  // false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(obj.foo.prototype);   // undefined

// ⬆️ 모든 객체가 가지고 있는(엄밀히 말하면 Object.prototype으로부터 상속받은) __proto__ 접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.
// 예를 들어, 생성자 함수로 객체를 생성한 후 __proto__ 접근자 프로퍼티와 prototype 프로퍼티로 프로토타입 객체에 접근해보자.
// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// 결국 Person.prototype과 me.__proto__는 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__);   // true



// << 프로토타입의 constructor 프로퍼티와 생성자 함수 >> 19.3.3
// 모든 프로토타입은 constructor 프로퍼티를 갖는다. 이 constructor 프로퍼티는 prototype 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다. 이 연결은 생성자 함수가 생성될 때, 즉 함수 객체가 생성될 때 이뤄진다.
// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// me 객체의 생성자 함수는 Person 이다.
console.log(me.constructor === Person); // true



// <<< 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입 >>> 19.4

// obj 객체를 생성한 생성자 함수는 Object다.
const obj = new Object();
console.log(obj.constructor === Object);   // true

// add 함수 객체를 생성한 함수는 Function이다.
const add = new Function('a','b','return a + b');
console.log(add.constructor === Function);             // true

// 생성자 함수
function Person(name) {
    this.name;
}

// me 객체를 생성한 생성자 함수는 Person 이다.
const me = new Person('Lee');
console.log(me.constructor === Person);      // true

// 하지만 리터럴 표기법에 의한 객체 생성 방식과 같이 명시적으로 new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하지 않는 객체 생성 방식도 있다.
// 객체 리터럴
const obj = {};

// 함수 리터럴
const add = function (a, b) {return a + b;};

// 배열 리터럴
const arr = [1, 2, 3];

// 정규 표현식 리터럴
const regexp = /is/ig;


// 리터럴 표기법에 의해 생성된 객체도 물론 프로토타입이 존재한다. 하지만 리터럴 표기법에 의해 생성된 객체의 경우 프로토타입의 constructor 프로퍼티가 가리키는 생성자 함수가 반드시 객체를 생성한 생성자 함수라고 단정할 수는 없다.
// obj 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
const obj = {};

// 하지만 obj 객체의 생성자 함수는 Object 생성자 함수다.
console.log(obj.constructor === Object);



// 2. Object 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
let obj = new Object();
console.log(obj);   // {}

// 1. new.target이 undefined나 Object가 아닌 경우
// 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인이 생성된다.
class Foo extends Object {}
new Foo();    // Foo {}

// 3. 인수가 전달된 경우에는 인수를 객체를 변환한다.
// Number 객체 생성
obj = new Object(123);
console.log(obj);   // Number {123}

// String 객체 생성
obj = new Object('123');
console.log(obj);  //String {"123"}




// foo 함수는 Function 생성자 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성했다.
function foo() {}

// 하지만 constructor 프로퍼티를 통해 확인해보면 함수 foo의 생성자 함수는 Function 생성자 함수다.
console.log(foo.constructor === Function);  // true

// ⬆️ 리터럴 표기법에 의해 생성된 객체도 상속을 위해 프로토타입이 필요하다. 따라서 리터럴 표기법에 의해 생성된 객체도 가상적인 생성자 함수를 갖는다. 프로토타입은 생성자 함수와 더불어 생성되며 prototype, constructor 프로퍼티에 의해 연결되어 있기 때문이다. 다시 말해, 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재한다.



// <<< 프로토타입의 생성 시점 >>> 19.5

// << 사용자 정의 생성자 함수와 프로토타입 생성 시점 >> 19.5.1
// 생성자 함수로서 호출할 수 있는 함수, 즉 constructor는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.

// 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
console.log(Person.prototype);          // {constructor: f}  브라우저 콘솔에서 확인할수 있다.

// 생성자 함수
function Person(name) {
    this.name = name;
}

// 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor는 프로토타입이 생성되지 않는다.
// 화살표 함수는 non-constructor다.
const Person = name => {
    this.name = name;
};

// non-constructor는 프로토타입이 생성되지 않는다.
console.log(Person.prototype);   // undefined




// << 빌트인 생성자 함수와 프로토타입 생성 시점 >> 19.5.2
// Object, String, Number, Function, Array, RegExp, Date, Promise 등과 같은 빌트인 생성자 함수도 일반 함수와 마찬가지로 빌트인 생성자 함수가 생성되는 시점에 프로토타입이 생성된다.



// <<< 객체 생성 방식과 프로토타입의 결정 >>> 19.6
// 객체는 다음과 같이 다양한 생성 방법이 있다.
/*  1. 객체 리터럴
    2. Object 생성자 함수
    3. 생성자 함수
    4. Object.create 메서드
    5. 클래스(ES6)
*/
// 이처럼 다양한 방식으로 생성된 모든 객체는 각 방식마다 세부적인 객체 생성 방식의 차이는 있으나 추상 연산 OrdinaryObjectCreate 에 의해 생성된다는 공통점이 있다.
// 추상 연산 OrdinaryObjectCreate는 필수적으로 자신이 생성할 객체의 프로토타입을 인수로 전달 받는다. 그리고 자신이 생성할 객체에 추가할 프로퍼티 목록을 옵션으로 전달할 수 있다. 
// 추상 연산 OrdinaryObjectCreate는 빈 객첼를 생성한 후, 객체에 추가할 프로퍼티 목록이 인수로 전달된 경우 프로퍼티를 객체에 추가한다. 그리고 인수로 전달받은 프로토타입을 자신이 생성한 객체의 [[Property]] 내부 슬롯에 할당한 다음, 생성한 객체를 반환한다.
// 즉, 프로토타입은 추상 연산 OrdinaryObjectCreate에 전달되는 인수에 의해 결정된다. 이 인수는 객체가 생성되는 시점에 객체 생성 방식에 의해 결정된다.



// << 객체 리터럴에 의해 생성된 객체의 프로토타입 >> 19.6.1
// 객체 리터럴에 의해 생성되는 객체의 프로토타입은 Object.prototype이다.
const obj = { x:1 };

// 객체 리터럴에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object);  // true
console.log(obj.hasOwnProperty('x'));     // true




// << Object 생성자 함수에 의해 생성된 객체의 프로토타입 >> 19.6.2
// Object 생성자 함수에 의해 생성되는 객체의 프로토타입은 Object.prototype 이다.
const obj = new Object();
obj.x = 1;

// Object 생성자 함수에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object);   // true
console.log(obj.hasOwnProperty('x'));      // true



// << 생성자 함수에 의해 생성된 객체의 프로토타입 >> 19.6.3
// 생성자 함수에 의해 생성되는 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체다. 
// 표준 빌트인 객체인 Object 생성자 함수와 더불어 생성된 프로토타입 Object.prototyp은 다양한 빌트인 메서드(hasOwnProperty, propertyIsEnumerable 등)를 갖고 있다. 
// 하지만 사용자 정의 생성자 함수 Person과 더불어 생성된 프로토타입 Person.prototype의 프로퍼티는 constructor뿐이다.
// 프로토타입은 객체다. 따라서 일반 객체와 같이 프로토타입에도 프로퍼티를 추가/삭제할 수 있다. 그리고 이렇게 추가/삭제된 프로퍼티는 프로토타입 체인에 즉각 반영된다.
function Person(name) {
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Lee');
const you = new Person('Kim');

me.sayHello();     // Hi! My name is Lee
you.sayHello();    // Hi! My name is Kim

// ⬆️ Person 생성자 함수를 통해 생성된 모든 객체는 프로토타입에 추가된 sayHello 메서드를 상속받아 자신의 메서드처럼 사용할 수 있다.



// << 프로토타입 체인 >> 19.7
// Person 생성자 함수에 의해 생성된 me 객체는 Object.prototype의 메서드인 hasOwnProperty를 호출할 수 있다. 이것은 me 객체가 Person.prototype 뿐만 아니라 Object.prototype도 상속받았다는 것을 의미한다.
// me 객체의 프로토타입은 Person.prototype 이다.
function Person(name) {
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Lee');

// hasOwnProperty는 Object.prototype의 메서드다.
console.log(me.hasOwnProperty('name'));   // true


console.log(Object.getPrototypeOf(me) === Person.prototype);  // true

// Person.prototype의 프로토타입은 Object.prototype이다. 프로토타입의 프로토타입은 언제나 Object.prototype 이다.
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);  // true

// 자바스크립는 객체의 프로퍼티(메서드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 이를 프로포타입 체인이라 한다. 프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘이다.
// hasOwnProperty는 Object.prototype의 메서드다.
// me 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색하여 사용한다.
console.log(me.hasOwnProperty('name'));   // true

////////// 프로토타입 체인의 최상위에 위치하는 객체는 언제나 Object.prototype이다. 따라서 모든 객체는 Object.prototype을 상속받는다. Object.prototype을 프로토타입 체인의 종점(end of prototype chain)이라 한다. Object.prototype의 프로토타입, 즉 [[Prototype]]의 내부 슬롯의 값은 null 이다.
////////// 프로토타입 체인의 종점인 Object.prototype에서도 프로퍼티를 검색할 수 없는 경우 undefined를 반환하다. 이때 에러가 발생하지 않는 것에 주의할 것.
console.log(me.foo);  // undefined



// << 오버라이딩과 프로퍼티 섀도잉 >> 19.8
const Person = (function () {
    // 생성자 함수
    function Person(name) {
        this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHello = function () {
        console.log(`Hi! My name is ${this.name}`);
    };

    // 생성자 함수를 반환
    return Person;
}());

const me = new Person('Lee');

// 인스턴스 메서드
me.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
};

// 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
me.sayHello(); // Hey! My name is Lee

// ⬆️ 생성자 함수로 객체(인스터스)를 생성한 다음, 인스턴스에 메서드를 추가했다. 
// 프로토타입이 소유한 프로퍼티(메서드 포함)를 프로토타입 프로퍼티, 인스턴스가 소유한 프로퍼티를 인스턴스 프로퍼티라고 부른다.
// 프로퍼티를 검색하여 프로토타입 프로퍼티를 덮어쓰는 것이 아니라 인스턴스 프로퍼티로 추가한다.
// 이때 인스턴스 메서드 sayHello는 프로토타입 메서드 sayHello를 오버라이딩했고 프로토타입 메서드 sayHello는 가려진다. 
// 이처럼 상속 관계에 의해 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉 이라 한다.
// ⬇️ 프로퍼티를 삭제하는 경우도 마찬가지다. 위 예제에서 추가한 인스턴스 메서드 sayHello를 삭제해보자

// 인스턴스 메서드를 삭제한다.
delete me.sayHello;
// 인스턴스에는 sayHello 메서드가 없으므로 프로토타입 메서드가 호출된다.
me.sayHello(); 


// 프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않는다.
delete me.sayHello;
// 프로토타입 메서드가 호출된다.
me.sayHello(); // Hi! My name is Lee

// ⬆️ 이와 같이 하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능하다. 다시 말해 하위 객체를 통해 프로토타입에 get 엑세스는 허용되나 set 엑세는 허용되지 않는다.
// 프로토타입 프로퍼티를 변경 또는 삭제하려면 하위 객체를 통해 프로토타입 체인으로 접근하는 것이 아니라 프로토타입에 직접 접근해야 한다.
// 프로토타입 메서드 변경
Person.prototype.sayHello = function() {
    console.log(`Hey! My name is ${this.name}`);
};
me.sayHello();  // Hey!. My name is Lee

// 프로토타입 메서드 삭제
delete Person.prototype.sayHello;
me.sayHello();   // TypeError: me.sayHello is not a function



// <<< 프로토타입의 교체 >>> 19.9
// 프로토타입은 임의의 다른 객체로 변경할 수 있다. 이것은 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다. 이러한 특징을 활용하여 객체 간의 상속 관계를 동적으로 변경할 수 있다. 프로토타입은 생성자 함수 또는 인스턴스에 의해 교체할 수 있다.


// << 생성자 함수에 의한 프로토타입의 교체 >> 19.9.1
const Person = (function() {
    function Person(name) {
        this.name = name;
    }

    // 1. 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
        sayHello() {
            console.log(`Hi! My name is ${this.name}`);
        }
    };

    return Person;
}());

const me = new Person('Lee');

// ⬆️ 1에서 Person.prototype에 객체 리터럴을 할당했다. 이는 Person 생성자 함수가 생성할 객체의 프로토타입을 객체 리터럴로 교체한 것이다.
// 프로토타입으로 교체한 객체 리터럴에는 constructor 프로퍼티가 없다. constructor 프로퍼티는 자바스크립트 엔진이 프로토타입을 생성할 때 암묵적으로 추가한 프로퍼티다.
// 따라서 me 객체의 생성자 함수를 검색하면 Person이 아닌 Object가 나온다.

// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === Person);   // false
// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me.constructor === Object);   // true

// ⬆️ 이처럼 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다. 파괴된 constructor 프로퍼티와 생성자 함수 간의 연결을 되살려 보자.
// 프로토타입으로 교체한 객체 리터럴에 constructor 프로퍼티를 추가하여 프로토타입의 constructor 프로퍼티를 되살린다.
const Person = (function() {
    function Person(name) {
        this.name = name;
    }
    // 1. 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
        // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
        constructor: Person,
        sayHello() {
            console.log(`Hi! My name is ${this.name}`);
        }
    };

    return Person;
}());

const me = new Person('Lee');

// constructor 프로퍼티가 생성자 함수를 가리킨다.
console.log(me.constructor === Person);    // true
console.log(me.constructor === Object);    // false



// << 인스턴스에 의한 프로토타입의 교체 >> 19.9.2
// 프로토타입은 생성자 함수의 prototype 프로퍼티뿐만 아니라 인스턴스의 __proto__ 접근자 프로퍼티(또는 Object.getPrototypeOf 메서드)를 통해 접근할 수 있다.
// 따라서 인스턴스의 __proto__ 접근자 프로퍼티(또는 Object.getPrototypeOf 메서드)를 통해 프로토타입을 교체할 수 있다.
// 생성자 함수의 prototype 프로퍼티에 다른 임의의 객체를 바인딩하는 것은 미래에 생성할 인스턴스의 프로토타입을 교체하는 것이다. __proto__ 접근자 프로퍼티를 통해 
// 프로토타입을 교체하는 것은 이미 생성된 객체의 프로토타입을 교체하는 것이다. 
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
console.log(me.constructor === Person);    // false
console.log(me.constructor === Object);    // true

// 프로토타입으로 교체한 객체 리터럴에 constructor 프로퍼티를 추가하고 생성자 함수의 prototype 프로퍼티를 재설정하여 파괴된 생성자 함수와 프로토타입 간의 연결을 되살려 보자.
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {
    // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
    constructor: Person,
    sayHello() {
        console.log(`Hi! My name is ${this.name}`);
    }
};

// 생성자 함수와 prototype 프로퍼티와 프로토타입 간의 연결의 설정
Person.prototype = parent;

// me 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me, parent);
// 위 코드는 아래의 코드와 동일하게 동작한다.
// me.__proto__ = parent;

me.sayHello();  // Hi! My name is Lee

// constructor 프로퍼티가 생성자 함수를 가리킨다.
console.log(me.constructor === Person);     // true
console.log(me.constructor === Object);     // false

// 생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킨다.
console.log(Person.prototype === Object.getPrototypeOf(me));     // true
// ⬆ 이처럼 프로토타입 교체를 통해 객체 간의 상속 관계를 동적으로 변경하는 것은 꽤나 번거롭다. 따라서 프로토타입은 직접 교체하지 않는 것이 좋다. 상속 관계를 인위적으로 설정하려면 19.11 절 "직접 상속"에서 살펴볼 직접 상속이 더 편리하고 안전하다.



// <<< instanceof 연산자 >>> 19.10
// instanceof 연산자는 이항 연산자로서 좌변에 객체를 가리키는 식별자, 우변에 생성자 함수를 가리키는 식별자를 피연산자로 받는다. 만약 우변의 피연산자가 함수가 아닌 경우 TypeError가 발생한다.
// 우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평가되고, 그렇지 않은 경우에는 false로 평가된다.

// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Person);   // true

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Object);   // true




// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {};

// 프로토타입으로 교체
Object.setPrototypeOf(me, parent);

// Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
console.log(Person.prototype === parent);   // false
console.log(Person.prototype === Person);   // false

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 때문에 false로 평가된다.
console.log(me instanceof Person);   // false

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Object);   // true




// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {};

// 프로토타입의 교체
Object.setPrototypeOf(me, parent);

// Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
console.log(Person.prototype === Object.prototype);  // false
console.log(Person.prototype === Person);  // false

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 때문에 false로 평가된다.
console.log(me instanceof Person);  // false

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Object);  // true

// ⬆️ me 객체는 비록 프로토타입이 교체되어 프로토타입과 생성자 함수 간의 연결이 파괴되었지만 Person 생성자 함수에 의해 생성된 인스터인스임에는 틀림이 없다. 그러나 me instanceof Person은 false로 평가된다.
// 이는 Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 때문이다. ⬇️ 따라서 프로토타입으로 교체한 parent객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩하면 me instanceof Person은 true 로 평가될 것이다.

// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {};

// 프로토타입의 교체
Object.setPrototypeOf(me, parent);

// Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
console.log(Person.prototype === parent);  // false
console.log(Person.prototype === Person);  // false


// parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩한다.
Person.prototype = parent;

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Person);    // true

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Object);    // true

// ⬆️ 이처럼 instanceof 연산자는 프로토타입의 constructor 프로퍼티가 가리키는 생성자 함수를 찾는 것이 아니라 생성자 함수의 prototype에 바인딩된 객체가 프로토타입 체인 상에 존재하는지 확인한다.
// ⬇️ instanceof 연산자를 함수로 표현하면 다음과 같다.
function isInstanceof(instance, constructor) {
    // 프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);

    // 재귀 탈출 조건
    // prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다.
    if (prototype === null) return false;

    // 프로토타입 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환한다.
    // 그렇지 않다면 재귀 호출로 프로토타입 체인 상의 상위 프로토타입으로 이동하여 확인한다.
    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me, Person));   // true
console.log(isInstanceof(me, Object));   // true
console.log(isInstanceof(me, Array));    // false

// ⬆️ 따라서 생성자 함수에 의해 프로토타입이 교체되어 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴 되어도 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결은 파괴되지 않으므로 instanceof는 아무런 영향을 받지 않는다.



const Person = (function() {
    function Person(name) {
        this.name = name;
    }

    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
        sayHello() {
            console.log(`Hi! My name is ${this.name}`);
        }
    };
    
    return Person;
}());

const me = new Person('Lee');

// constructor 프로퍼티와 생성자 함수 간의 연결이 파괴되어도 instanceof는 아무런 영향을 받지 않는다.
console.log(me instanceof Person);   // true
// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Object);   // true



// <<< 직접 상속 >>> 19.11
// << Object.create에 의한 직접 상속 >> 19.11.1
// Object.create 메서드는 명시적으로 프로토타입을 지정하여 새로운 객체를 생성한다. Object.create 메서드도 다른 객체 생성 방식과 마찬가지로 추상 연산 OrdinaryObjectCreate를 호출한다.
// Object.create 메서드의 첫 번째 매개변수에는 생성할 객체의 프로토타입으로 지정할 객체를 전달한다. 두번째 매개변수에는 생성할 객체의 프로퍼티 키와 프로퍼티 디스크립터 객체로 이뤄진 객체를 전달한다. 이 객체의 형식은 Object.defineProperties 메서드의 두 번째 인수와 동일하다. 두 번째 인수는 옵션이므로 생략 가능하다.

// 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
// obj -> null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null);    // true
// Object.prototype을 상속받지 못한다.
console.log(obj.toString());  // TypeError: obj.toString is not a function

// obj -> Object.prototype -> null
// obj = {}; 와 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);    // true


// obj -> Object.prototype -> null
// obj = { x:1 }; 와 동일하다
obj = Object.create(Object.prototype, {
    x: {value: 1, writable: true, enumerable: true, configurable: true}
});
// 위 코드는 아래와 동일하다.
// obj = Object.create(Object.prototype);
// obj.x = 1;
console.log(obj.x);   // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype);   // true


const myProto = { x: 10 };
// 임의의 객체를 직접 상속받는다.
// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x);   // 10
console.log(Object.getPrototypeOf(obj) === myProto);  // true


// 생성자 함수
function Person(name) {
    this.name = name;
}

// obj -> Person.prototype -> Object.prototype -> null
// obj = new Person('Lee')와 동일하다.
obj = Object.create(Person.prototype);
obj.name = 'Lee';
console.log(Object.getPrototypeOf(obj) === Person.prototype);  // true
// ⬆️ 이처럼 Object.create 메서드는 첫 번째 매개변수에 전달한 객체의 프로토타입 체인에 속하는 객체를 생성한다. 즉, 객체를 생성하면서 직접적으로 상속을 구현하는 것이다.
// 이 메서드의 장점은 다음과 같다.
/*
- new 연산자 없이도 객체를 생성할 수 있다.
- 프로토타입을 지정하면서 객체를 생성할 수 있다.
- 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다.
*/

// object.prototype의 빌트인 메서드인 Object.prototype.hasOwnProperty, Object.prototype.isPrototypeOf, Object.prototype.propertyIsEnumerable 등은 모든 객체의 프로토타입 체인의 종점, 즉 Object.prototype의 메서드이므로 모든 객체가 상속받아 호출할 수 있다.
const obj = { a: 1 };

console.log(obj.hasOwnProperty('a'));         // true
console.log(obj.propertyIsEnumerable('a'));   // true

// 그런데 ESLint에서는 앞의 예제와 같이 Object.prototype의 빌트인 메서드를 객체가 직접 호출하는 것을 권장하지 않는다. 그 이유는 Object.create 메서드를 통해 프로토타입 체인의 종점에 위치하는 객체를 생성할 수 있기 때문이다. 프로토타입 체인의 종점에 위치하는 객체는 Object.prototype의 빌트인 메서드를 사용할 수 없다.
// 프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성한다.
const obj = Object.create(null);
obj.a = 1;

console.log(Object.getPrototypeOf(obj) === null);   // true

// obj는 Object.prototype의 빌트인 메서드를 사용할 수 없다.
console.log(obj.hasOwnProperty('a'));  // TypeError: obj.hasOwnProperty is not a function

// ⬆️⬇️ 따라서 이 같은 에러를 발생시킬 위험을 없애기 위해 Object.prototype의 빌트인 메서드는 다음과 같이 간접적으로 호출하는 것이 좋다.
// 프로토타입이 null인 객체를 생성한다.
const obj = Object.create(null);
obj.a = 1;

// console.log(obj.hasOwnProperty('a'));
// TypeError: obj.hasOwnProperty is not a function

// Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않는다.
console.log(Object.prototype.hasOwnProperty.call(obj, 'a'));   // true
// ⬆️ Function.prototype.call 메서드에 대해서는 22.2.4절에서 알아본다.


// << 객체 리터럴 내부에서 __proto__ 에 의한 직접 상속 >> 19.11.2
// Object.create 메서드에 의한 직접 상속은 앞에서 다룬 것과 같이 여러 장점이 있다. 하지만 두 번째 인자로 프로퍼티를 정의하는 것은 번거롭다. 일단 객체를 생성한 이후 프로퍼티를 추가하는 방법도 있으나 이 또한 깔끔한 방법은 아니다. 
// ES6에서는 객체 리터럴 내부에서 __proto__ 접근자 프로퍼티를 사용하여 직접 상속을 구현할 수 있다.
const myProto = { x: 10 };

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj = {
    y: 20,
    // 객체를 직접 상속받는다.
    // obj -> myProto -> Object.prototype -> null
    __proto__: myProto
};
/* 위 코드는 아래와 동일하다.
const obj = object.create(myProto, {
    y: { value: 20, writable: true, enmerable: true, configurable: true }
});
*/

console.log(obj.x, obj.y);  // 10 20
console.log(Object.getPrototypeOf(obj) === myProto); // true



//<<< 정적 프로퍼티/메서드 >>> 19.12
// 정적 프로퍼티/메서드는 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드를 말한다.

// 생성자 함수
function Person(name) {
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function() {
    console.log(`Hi! My name is ${this.name}`);
};

// 정적 프로퍼티
Person.staticProp = 'static prop';

// 정적 메서드
Person.staticMethod = function () {
    console.log('staticMethod');
};

const me = new Person('Lee');

// 생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출한다.
Person.staticMethod();

// 정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다.
// 인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야 한다.
me.staticMethod();  // TypeError: me.staticMethod is not a function
// ⬆️ Person 생성자 함수는 객체이므로 자신의 프로퍼티/메서드를 소유할 수 있다. Person 생성자 함수 객체가 소유한 프로퍼티/메서드를 정적 프로퍼티/메서드라고 한다. 정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다.
// 생성자 함수가 생성한 인스턴스는 자신의 프로토타입 체인에 속한 객체의 프로퍼티/메서드에 접근할 수 있다. 하지만 정적 프로퍼티/메서드는 인스턴스의 프로토타입 체인에 속한 객체의 프로퍼티/메서드가 아니므로 인스턴스로 접근할 수 없다.
// 앞에서 살펴본 Object.create 메서드는 Object 생성자 함수의 정적 메서드고 Object.prototype.hasOwnProperty 메서드는 Object.prototype의 메서드다. 따라서 Object.create 메서드는 인스턴스, 즉 Object 생성자 함수가 생성한 객체로 호출할 수 없다. 하지만 Objcet.prototype.hasOwnProperty 메서드는 모든 객체의 프로토타입 체인의 종점, 즉 Object.prototype의 메서드이므로 모든 객체가 호출할 수 있다.

// Object.create는 정적 메서드다.
const obj = Object.create({ name: 'Lee' });

// Object.protoype.hasOwnProperty는 프로토타입 메서드다.
obj.hasOwnProperty('name'); 


// 만약 인스턴스/프로토타입 메서드 내에서 this를 사용하지 않는다면 그 메서드는 정적 메서드로 변경할 수 있다. 인스턴스가 호출한 인스턴스/프로토타입 메서드 내에서 
// this는 인스턴스를 가리킨다. 메서드 내에서 인스턴스를 참조할 필요가 없다면 정적 메서드로 변경하여도 동작한다. 프로토타입 메서드를 호출하려면 인스턴스를 생성해야 
// 하지만 정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있다.
function Foo() {}

// 프로토타입 메서드
// this를 참조하지 않는 프로토타입 메서드는 정적 메서드로 변경하여도 동일한 효과를 얻을 수 있다.
Foo.prototype.x = function() {
    console.log('x');
};

const foo = new Foo();
// 프로토타입 메서드를 호출하려면 인스턴스를 생성해야 한다.
foo.x(); // x

// 정적 메서드
Foo.x = function () {
    console.log('x');
};

// 정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있다.
Foo.x(); // x

// 참고로 프로토타입 프로퍼티/메서드를 표기할 때 prototype을 #으로 표기(예를 들어, Object.prototype.isPrototypeOf를 Object#isPrototypeOf으로 표기)하는 경우도 있으니 알아두도록 하자.



// <<< 프로퍼티 존재 확인 >>> 19.13

// << in 연산자 >> 19.13.1
// in 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인한다. in 연산자의 사용법은 다음과 같다.
/*
* key: 프로퍼티 키를 나타내는 문자열
* object: 객체로 평가되는 표현식
*/
// key in object
const person = {
    name: 'Lee',
    address: 'Seoul'
};

// person 객체에 name 프로퍼티가 존재한다.
console.log('name' in person);    // true

// person 객체에 address 프로퍼티가 존재한다.
console.log('address' in person); // true

// person 객체에 age 프로퍼티가 존재하지 않는다.
console.log('age' in person);     // true

// ⬇️ in 연산자는 확인 대상 객체(위 예제의 경우 person객체)의 프로퍼티뿐만 아니라 확인 대상 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인하므로 주의가 필요하다.
// person 객체에는 toString이라는 프로퍼티가 없지만 다음 코드의 실행 결과는 true다.

console.log('toString' in person); // true

// ⬆️ 이는 in 연산자가 person 객체가 속한 프로토타입 체인 상에 존재하는 모든 프로토타입에서 toString 프로퍼티를 검색했기 때문이다. toString은 Object.prototype의 메서드다.

// in 연산자 대신 ES6에서 도입된 Reflect.has 메서드를 사용할 수도 있다. Reflect.has 메서드는 in 연산자와 동일하게 동작한다.
const person = { name: 'Lee' };

console.log(Reflect.has(person, 'name'));       // true
console.log(Reflect.has(person, 'toString'));   // true



// << Object.prototype.hasOwnProperty 메서드
// Object.prototype.hasOwnProperty 메서드를 사용해도 객체에 특정 프로퍼티가 존재하는지 확인할 수 있다.
console.log(person.hasOwnProperty('name'));   // true
console.log(person.hasOwnProperty('age'));    // false

// ⬇️ Object.prototype.hasOwnProperty 메서드는 이름에서 알 수 있듯이 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고
// 상속받는 프로토타입의 프로퍼티 키인 경우 false를 반환한다.

console.log(person.hasOwnProperty('toString'));  //false



// <<< 프로퍼티 열거 >>> 19.14

// << for...in 문 >> 19.14.1
// 객체의 모든 프로퍼티를 순회하며 열거 하려면 for...in 문을 사용한다.
// for (변수선언문 in 객체) {...}

const person = {
    name: 'Lee',
    address: 'Seoul'
};

// for...in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
for (const key in person) {
    console.log(key+': '+person[key]);
}
//name: Lee
//address: Seoul

// ⬆️ for...in 문은 객체의 프로퍼티 개수만큼 순회하며 for...in 문의 변수 선언문에서 선언한 변수에 프로퍼티 키를 할당한다. 위 예제의 경우 person 객체에는 2개의 프로퍼티가 있으므로
// 객체를 2번 순회하면서 프로퍼티 키를 key 변수에 할당한 후 코드 블록을 실행한다. 첫 번째 순회에서는 프로퍼티 키 'name'을 key 변수에 할당한 후 코드 블록을 실행하고 두
// 번째 순회에서는 프로퍼티 키 'address'를 key 변수에 할당한 후 코드블록을 실행한다.

// for...in 문은 in 연산자처럼 순회 대상 객체의 프로퍼티뿐만 아니라 상속받은 프로토타입의 프로퍼티까지 열거한다. 하지만 위 예제의 경우 toString과 같은 Object.prototype의 프로퍼티가 
// 열거되지 않는다.


const person = {
    name: 'Lee',
    address: 'Seoul'
};

// in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
console.log('toString' in person);

// for...in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거한다.
// 하지만 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않는다.
for (const key in person) {
    console.log(key+': '+person[key]);
}
// name: Lee
// address: Seoul

// ⬆️ 이는 toString 메서드가 열거할 수 없도록 정의되어 있는 프로퍼티이기 때문이다. 다시 말해, Object.prototype.string 프로퍼티의 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false이기 때문이다.
// 프로퍼티 어트리뷰트 [[Enumerable]]은 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다.

// Object.getOwnPropertyDescriptor 메서드는 프로퍼티 디스크립터 객체를 반환한다.
// 프로퍼티 디스크립터 객체는 프로퍼티 어트리뷰트 정보를 담고 있는 객체다.
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString')); { value: [Function: toString], writable: true, enumerable: false, configurable: true }

// for...in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.

const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
};

for (const key in person) {
    console.log(key +': '+ person[key]);
}
/* name: Lee
address: Seoul
age: 20 */

// ⬇️ for...in 문은 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다.
const sym = Symbol();
const obj = {
    a: 1,
    [sym]: 10
};

for (const key in obj) {
    console.log(key +': '+ obj[key]);
}
// a: 1



// 상속받은 프로퍼티는 제외하고 객체 자신의 프로퍼티만 열거하려면 Object.prototype.hasOwnProperty 메서드를 사용하여 객체 자신의 프로퍼티인지 확인해야 한다.
const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
};

for (const key in person) {
    // 객체 자신의 프로퍼티인지 확인한다.
    if (!person.hasOwnProperty(key))continue;
    console.log(key +': '+ person[key]);
}

// name: Lee
// address: Seoul

// ⬆️ 위 예제의 결과는 person 객체의 프로퍼티가 정의된 순서대로 열거되었다. 하지만 for...in 문은 프로퍼티를 열거할 때 순서를 보장하지 않으므로 주의해야 한다.
// 하지만 대부분의 모던 브라우저는 순서를 보장하고 숫자(사실은 문자열)인 프로퍼티 키에 대해서는 정렬을 실시한다.

const obj = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a'
};

for (const key in obj) {
    if (!obj.hasOwnProperty(key))continue;
    console.log(key +': '+ obj[key]);
}
/*
1: 1
2: 2
3: 3
b: b
a: a
*/

// ⬆️ 배열에는 for...in 문을 사용하지 말고 일반적인 for 문이나 for...of 문 또는 Array.prototype.forEach 메서드를 사용하기를 권장한다. 사실 배열도 객체이므로
// 프로퍼티와 상속받은 프로퍼티가 포함될 수 있다.

const arr = [1, 2, 3];
arr.x = 10;  // 배열도 객체이므로 프로퍼티를 가질 수 있다.

for (const i in arr) {
    // 프로퍼티 x도 출력된다.
    console.log(arr[i]);   // 1 2 3 10
};

// arr.length는 3이다.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  // 1 2 3
} 

// forEach 메서드는 요소가 아닌 프로퍼티는 제외한다.
arr.forEach(v => console.log(v));  // 1 2 3

// for...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
for (const value of arr) {
    console.log(value);  // 1 2 3
};


// << Object.keys/values/entries 메서드
// 지금까지 살펴보았듯이 for...in 문은 객체 자신의 고유 프로퍼티뿐 아니라 상속받은 프로퍼티도 열거한다. 따라서 Object.prototype.hasOwnProperty 메서드를 사용하여
// 객체 자신의 프로퍼티인지 확인하는 추가 처리가 필요하다. 객체 자신의 고유 프로퍼티만 열거하기 위해서는 for...in 문을 사용하는 것보다 Object.keys/values/entries 
// 메서드를 사용하는 것을 권장한다. Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.
const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
};

console.log(Object.keys(person));  // [ 'name', 'address' ]


// ES8에서 도입된 Object.values 메서드는 객체 자신의 열거 가능한 프로퍼티 값을 배열로 반환한다.
console.log(Object.values(person));  // [ 'Lee', 'Seoul' ]

// ES8에서 도입된 Object.entries 메서드는 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍의 배열을 배열에 담아 반환한다.
console.log(Object.entries(person)); // [ [ 'name', 'Lee' ], [ 'address', 'Seoul' ] ]

Object.entries(person).forEach(([key,value]) => console.log(key, value));
/*
name Lee
address Seoul
*/




// <<<< strict mode >>>> 20장
// <<< strinct mode란? >>> 20.1
function foo() {
    x = 10;
}
foo ();

console.log(x);
// ↑ foo 함수 내에서 선언하지 않은 x 변수에 값 10을 할당하면 자바스크립트 엔진은 먼저 foo 함수의 스코프에서 x 변수의 선언을 검색한다. foo 함수의 스코프에는 x변수의 선언이 없으므로 검색에 실패하고
// 엔진은 x변수를 검색하기 위해 foo 함수 컨텍스트의 상위 스코프(위 예제의 경우 전역 스코프)에서 x 변수의 선언을 검색한다.
// 전역 스코프에도 x 변수의 선언이 존재하지 않기 때문에 ReferenceError를 발생시킬 것 같지만 자바스크립트 엔진은 암묵적으로 전역 객체에 x 프로퍼티를 동적 생성한다. 
// 이때 전역 객체의 x프로퍼티는 마치 전역 변수처럼 사용할 수 있다. 이러한 현상을 암묵적 전역 이라고 한다. 개발자의 의도와는 상관없이 발생한 암묵적 전역은 오류를 발생시키는 원인이 될 가능성이 크다.
// 따라서 반드시 var,let,const 키워드를 사용하여 변수를 선언한 다음 사용해야 한다.

// 오류를 줄이기위해 strict mode 와 ESLint 같은 린트 도구를 사용할수 있는데 린트 도구는 strict mode가 제한하는 오류를 물론 코딩 컨벤션을 따로 설정 파일 형태로 정의하고 강제할 수 있기 때문에
// 더욱 강력한 효과를 얻을 수 있다.



// <<< strict mode의 적용 >>> 20.2
// strict mode 를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict';를 추가한다. 전역의 선두에 추가하면 스크립트 전체에 strict mode가 적용된다.
'use strict';

function foo() {
    x = 10;  // ReferenceError: x is not defined
}
foo(); 

// ↓ 함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode가 적용된다.
function foo() {
    'use strict';

    x = 10;   // ReferenceError: x is not defined

}
foo();   


// ↓ 코드의 선두에 'use strict'; 를 위치시키지 않으면 strict mode가 제대로 동작하지 않는다.
function foo() {
    x = 10;
    'use strict'; // 에러를 발생시키지 않는다.
}
foo();



// <<< 전역에 strict mode를 적용하는 것은 피하자 >>> 20.3
// 전역에 적용한 strict mode는 스크립트 단위로 적용된다.
<!DOCTYPE html>
<html>
<body>
    <script>
        'use strict';
    </script>
    <script>
        x = 1;    // 에러가 발생하지 않는다.
        console.log(x);
    </script>
    <script>
        'use strict';

        y = 1;   // ReferenceError: y is noe defined
        console.log(y);
    </script>
</body>
</html>

// 위 예제와 같이 스크립트 단위로 적용된 strict mode는 다른 스크립트에 영향을 주지 않고 해당 스크립트에 한정되어 적용된다. 하지만 strict mode 스크립트와 non-strict mode스크립트를 혼용하는 것은
// 오류를 발생시킬 수 있다. 특히 외부 서드파티 라이브러리를 사용하는 경우 라이브러리가 non-strict mode인 경우도 있기 때문에 전역에 strict mode를 적용하는 것은 바람직하지 않다. 이러한 경우 즉시
// 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.

// 즉시 실행 함수의 선두에 strict mode 적용
(function () {
    'use strict';

    // Do something...
}());



// <<< 함수 단위로 strict mode를 적용하는 것도 피하자 >>> 20.4
// 함수 단위로도 strict mode를 적용할 수 있다. 그러나 어떤 함수는 strict mode를 적용하고 어떤 함수는 strict mode를 적용하지 않는 것은 바람직하지 않으며 모든 함수에 일일이 strict mode를
// 적용하는 것은 번거로운 일이다. 그리고 strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에 strict mode를 적용하지 않는다면 이 또한 문제가 발생할 수 있다.
(function () {
    // non-strict mode
    var let = 10; // 에러가 발생하지 않는다.

    function foo() {
        'use strict';

        let = 20;   // SyntaxError: Unexpected strict mode reserved word
    }
    foo();
}());
// ↑ 따라서 strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.



// <<< strict moder가 발생시키는 에러 >>> 20.5
// << 암묵적 전역 >> 20.5.1
// 선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.
(function () {
    'use strict';

    x = 1;      
    console.log(x);  // ReferenceError: x is not defined
}());



// << 변수,함수,매개변수의 삭제 >> 20.5.2
// delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.
(function () {
    'use strict';

    var x = 1;
    delete x;    // SyntaxError: Delete of an unqualified identifier in strict mode.

    function foo(a) {
        delete a;   // SyntaxError: Delete of an unqualified identifier in strict mode.
    }
    delete foo;  // SyntaxError: Delete of an unqualified identifier in strict mode.
}());



// << 매개변수 이름의 중복 >> 20.5.3
// 중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.
(function () {
    'use strict';

    // SyntaxError: Duplicate parameter name not allowed in this context
    function foo(x, x) {
        return x + x;
    }
    console.log(foo(1, 2));
}());




// << with문의 사용 >> 20.5.4
// with 문을 사용하면 SyntaxError가 발생한다. with 문은 전달된 객체를 스코프 체인에 추가한다. with문은 동일한 객체의 프로퍼티를 반복해서 사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해지는
// 효과가 있지만 가동성이 나빠지는 문제가 있다. 따라서 with문은 사용하지 않는 것이 좋다.
(function () {
    'use strict';

    // SyntaxError: Strict mode code may not include a with statement
    with({ x: 1 }) {
        console.log(x);
    }
}());



// <<< strict mode 적용에 의한 변화 >>> 20.6
// << 일반 함수의 this >> 20.6.1
// strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다. 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문이다. 이때 에러는 발생하지 않는다.
(function () {
    'use strict';

    function foo() {
        console.log(this);  // undefined
    }
    foo();

    function Foo() {
        console.log(this);  // Foo
    }
    new Foo();
}());



// << arguments 객체 >> 20.6.2
// strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
(function (a) {
    'use strict';
    // 매개변수에 전달된 인수를 재할당하여 변경
    a = 2;

    // 변경된 인수가 arguments 객체에 반영되지 않는다.
    console.log(arguments);   // [Arguments] { '0': 1 }
}(1));




// <<<< 빌트인 객체 >>>> 21장
// <<< 자바스크립트 객체의 분류 >>> 21.1

// << 표준 빌트인 객체 >> 21.2
// Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 인스턴스를 생성할 수 있는 생성자 함수 객체다. 생성자 함수 객체인 표준 빌트인 객체는 프로토타입 메서드와 정적 메서드를 제공하고 생성자
// 함수 객체가 아닌 표준 빌트인 객체는 정적 메서드만 제공한다. 예를 들어, 표준 빌트인 객체인 String, Number, Boolean, Function, Array, Date는 생성자 함수로 호출하여 인스턴스를 생성할 수 있다.

// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');  // String {"Lee"}
console.log(typeof strObj);        // object

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);   // Number {123}
console.log(typeof numObj);       // object

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);// Boolean {true}
console.log(typeof boolObj);      // object

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');    // f anonymous(x)
console.log(typeof func);                          // function'

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);   // (3) [1, 2, 3]
console.log(typeof arr);          // object

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);   // /ab+c/i
console.log(typeof regExp);           // object

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();  
console.log(typeof date);    // object


// ↓ 생성자 함수인 표준 빌트인 객체가 생성한 인스턴스의 프로토타입은 표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체다. 예를 들어, 표준 빌트인 객체인 String을 생성자 함수로서 호출하여
// 생성한 String인스턴스의 프로토타입은 String.prototype이다.

// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');  // String{"Lee"}

// String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype이다.
console.log(Object.getPrototypeOf(strObj) === String.prototype);   // true


// ↓ 표준 빌트인 개겣의 prototype 프로퍼티에 바인딩된 객체(예를 들어, String.prototype)는 다양한 기능의 빌트인 프로토타입 메서드를 제공한다. 그리고 표준 빌트인 객체는 인스턴스 없이도 호출 가능한
// 빌트인 정적 메서드를 제공한다. 



// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5);

// toFixed는 Number.prototype의 프로토타입 메서드다.
// Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj.toFixed());   // 2

// isInteger는 Number의 정적 메서드다.
// Number.isInteger는 인수가 정수(integer)인지 검사하여 그 결과를 Boolean으로 반환한다.
console.log(Number.isInteger(0.5));  // false



// <<< 원시값과 래퍼 객체 >>> 21.3
// 문자열이나 숫자, 불리언 등의 원시값이 있는데도 문자열, 숫자, 불리언 객체를 생성하는 String, Number, Boolean 등의 표준 빌트인 생성자 함수가 존재하는 이유는 무엇일까
// 다음예제를 보면, 원시값은 객체가 아니므로 프로퍼티나 메서드를 가질 수 없는데도 원시값인 문자열이 마치 객체처럼 동작한다.
const str = 'hello';

// 원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
console.log(str.length);          // 5  
console.log(str.toUpperCase());   // HELLO

// ↑ 이처럼 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체라 한다. 예를 들어, 문자열에 대해 마침표 표기법으로 접근하면 그 순간 래퍼 객체인 String 생성자 함수의
// 인스턴스가 생성되고 문자열은 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
const str = 'hi';

//원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환된다.
console.log(str.length);               // 2
console.log(str.toUpperCase());        // HI

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof str);               // string

// ↑ 이때 문자열 래퍼 객체인 String 생성자 함수의 인스턴스는 String.prototype의 메서드를 상속받아 사용할 수 있다.




// 그 후 래퍼 객체의 처리가 종료되면 래퍼 ---------------객체의 [[StringData]] 내부 슬롯에 할당된 원시값으로 원래의 상태, 즉 식별자가 원시값을 갖도록 되돌리고 래퍼 객체는 가비지 컬렉션의 대상이 된다.
// 1. 식별자 str은 문자열을 값으로 가지고 있다.
const str = 'hello';

// 2. 식별자 str은 암묵적으로 생성된 래퍼 객체를 가리킨다.
// 식별자 str의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
// 래퍼 객체에 name 프로퍼티가 동적 추가된다.
str.name = 'Lee';

// 3. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 2에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

// 4. 식별자 str 은 새롭게 암묵적으로 생성된 (2에서 생성된 래퍼 객체와는 다른) 래퍼 객체를 가리킨다.
// 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않는다.
console.log(str.name); // undefined

// 5 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// 이때 4에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
console.log(typeof str, str);  // string hello

