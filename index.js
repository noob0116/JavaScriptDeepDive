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

if(true) {          //예시를 위해 쓴것일뿐 if문은 이런식으로 사용하지 못한다.
    var var2 = 2;   //코드 블록 내에서 선언한 변수
    if(ture) {
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






