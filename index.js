//<<<switch문을 이용한 윤년계산 코드>>>
// var year = 2000;
// var month = 2;
// var days = 0;

// switch(month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//     days = 31;
//     break;

//     case 4: case 6: case 9: case 11:
//         days = 30;
//         break;

//     case 2:
//         days =((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
//         break;

//         default:
//             console.log('Invalid month');
// }

// console.log(days);




//<<<for 문 기본예제>>>
// for(var i = 0 ; i<5; i++){
//     console.log(i);
// }



//<<<이중 for문을 이용한 두개의 주사위를 던졌을때 합이 6이 되는 모든 경우의수>>>
// for(var i = 1; i < 6 ; i++){
//     for(var j =1;j<6;j++){
//         if(i+j === 6 ) console.log('['+ i +','+ j +']');
//         //`[${i} , ${j}]` 괄호안을 이걸로 대체해도 똑같이 동작함 이게 더 가독성이 좋은것같음
//     }
// }



//<<<while문 무한루프에서 특정조건을 만족했을때 탈출하는법>>>
// var count = 0;
// while(true){
//     console.log(count);
//     count ++;
//     if(count === 3) break;
// }



//<<<do-while 문 코드블럭을 먼저 실행하고 조건식을 평가한다.(무조건 코드블록을 한번이상 실행한다)>>>
// var count = 0;
// do{
//     console.log(count);
//     count++;
// }
// while(count < 3);



//<<<레이블 문 예제>>>
// foo: {
//     console.log(1);
//     break foo;
//     console.log(2);
// }
// console.log('Done!');



//<<<중첩 for문에서 내부 for문이 아닌 외부 for문을 탈출하고싶을때 레이블문의 사용법>>>
// outer: for(var i = 0;i < 3; i++) {
//     for(var j = 0 ;j < 3; j++){
//         if(i+j === 3) break outer;
//         console.log(`inner [${i},${j}]`);
//     }
// }
// console.log('Done');



//<<<for문을 이용해 문자열에서 특정 인덱스를 검색하는 예>>>
// var string ='Hello World.';
// var search ='l';
// var index;

// for(var i = 0; i<string.length; i++){
//     if(string[i] === search) {
//         index = i;
//         break;
//     }
// }
// console.log(index);
//console.log(string.indexOf(search));위에 코드대신 이 코드를 사용해도 똑같은 값이 출력된다.



// <<<continue 문을 이용한 문자열에서 특정문자의 개수를 세는 예>>>
// var string ='Hello World.';
// var search ='l';
// var count = 0;
// for (var i = 0; i<string.length ; i++){
//     if(string[i] !== search) continue;
//     count ++;
// }
//console.log(count);

// const regexp = new RegExp(search, 'g');
// console.log(string.match(regexp).length);  //위에 console.log(count); 대신 이 두코드를 써도 똑같이 동작한다.



//<<<위의 방식보다 좀더 쉽게 해결할수 있다.if문내에서 실행해야 할 코드가 한줄이라면 continue문을 사용했을때보다 간편하고 가독성
//도 좋지만 if 문 내에서 실행해야 할 코드가 길다면 들여쓰기가 한 단계 더 깊어지므로 continue 문으로 사용하는편이 가독성이 좋다.>>>
// var string = 'Hello Wolrd.';
// var search = 'l';
// var count = 0;

// for(var i = 0 ; i<string.length ; i++){
//     if(string[i]===search) count ++;
// }

// console.log(count);



//<<<개발자가 의도적으로 값의 타입을 변환(명시적 타입변환 or 타입캐스팅)>>>
//x변수의 값이 변경된것은 아니다.
// var x = 10;
// var str = x.toString();
// console.log(typeof str , str);
// console.log(typeof x, x);



//<<<개발자의 의도와는 상관없는 타입변환(암묵적 타입변환 or 타입 강제 변환)>>>
//x 변수의 값이 변경된것은 아니다.
//때로는 toString()보다 x+''; 가 더 가독성이 좋을수있기때문에 암묵적 타입변환도 잘 이해해둬야한다. 
// var x = 10;
// var str = x +'';
// console.log(typeof str , str);
// console.log(typeof x , x);



//<<<문자열 타입으로 변환>>>
// console.log(String(1));
// console.log(String(NaN));
// console.log((1).toString()); //1.toString 이 아니라 (1).toString인것에 주의한다.
// console.log((true).toString());
// console.log(1+'');
// console.log(true+'');



//<<<숫자 타입으로 변환>>>
// console.log(Number('123'));
// console.log(Number(true));
// console.log(parseInt('0')); //parseInt 는 문자열만 숫자로 변환할수있다.
// console.log(+'0');
// console.log(+'10.53');
// console.log(+true);
// console.log(+false);
// console.log('-1'* 1);
// console.log(true * 1);



//<<<불리언 타입으로 변환>>>9.3.3
// console.log(Boolean('x'));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean({})); // true
// console.log(!!'x');
// console.log(!!(''));
// console.log(!!Infinity);



//<<<단축평가>>>9.4 
// console.log('Cat' || 'Dog'); // || 연산자에서는 cat이 truthy값이므로 굳이 우항을 평가하지않고 cat을 반환한다.
// console.log('Cat' && 'Dog'); // && 연산자는 양항이 모두 truthy여야 true 이므로 cat이 truthy로 평가되면 dog를 반환한다.



//<<<단축 평가를 사용하면 if 문을 대체할 수 있다. 어떤 조건이 Truthy 값일 경우>>>09-20
// var done = true;
// var message = '';
// //if (done) message = '완료';
// message = done && '완료';
// console.log(message);



//<<<단축 평가를 사용하면 if 문을 대체할 수 있다. 어떤 조건이 Falsy값 일경우>>>09-21
// var done = false;
// var message = '';
// //console.log(Boolean(done));
// // if(!done) message = '미완료';
// message = done || '미완료';
// console.log(message);



//<<<삼항 조건 연산자는 if...else 문을 대체할 수 있다>>>
// var done = false;
// var message = '';
// message = done ? '완료' : '미완료';
// console.log(message);



//<<<객체 리터럴에 의한 객체 생성>>>10.2
// var person = {
//     name: 'Lee',
//     sayHello: function () {
//         console.log(`Hello! My name is ${this.name}.`);
//     }
// };    //코드 블록의 닫는 중괄호 뒤에는 세미콜론을 붙이지않지만, 객체 리터럴은 값으로 평가되는 표현식이므로 닫는 중괄호 뒤에 세미콜론을 붙인다.
// console.log(typeof person);
// console.log(person);
// person.sayHello();



//<<<프로퍼티 키를 사용할때 식별자 네이밍 규칙을 따르는경우와 그렇지 않은경우>>>
// var person = {
//     firstName: 'Ung-mo',
//     'last-name': 'Lee'         //식별자 네이밍 규칙을 따르지 않을경우 따옴표를 사용해야 한다.
// };
// console.log(person);



//<<<프로퍼티키를 동적을 생성할 수 있다.>>>10-06
// var obj = {};
// var key = 'hello';
// obj[key] = 'world';   //var obj = {[key]: 'world'};
// console.log(obj);



//<<<이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한것이 먼저 선언한것을 덮어쓴다.>>>10-10
// var foo = {
//     name: 'Lee',
//     name: 'Kim'
// };
// console.log(foo);



//<<<메서드란 객체에 묶여 있는 함수를 의미한다.>>>
// var circle = {
//     radius: 5,                         //<-프로퍼티
//     getDiamneter: function(){          //<- 메서드
//         return 2 * this.radius;
//     }
// };
// console.log(circle.getDiamneter());



//<<<프로퍼티 접근>>>
// var person = {
//     name: 'Lee'
// };
// //프로퍼티 키가 식별자 네이밍 규칙을 지키면 마침표 표기법과 대괄호 표기법 둘다 사용할수있다. 이때 대괄호 안에는 꼭 따옴표를 써야한다. 그렇지않으면 식별자로 해석한다.
// console.log(person.name); //마침표 표기법에 의한 프로퍼티 접근
// console.log(person['name']); //대괄호 표기법에 의한 프로퍼티 접근

// var person = {
//     name: 'Lee'
// };
// console.log(person[name]); //ReferenceError 발생(따옴표를 쓰지 않았음)
// console.log(person.age); //Undefined 발생(이때 ReferenceError가 발생되지않는다는것에 주의)



//<<<프로퍼티의 키의 이름이 식별자 네이밍규칙을 따르지않은경우에는 따옴표를 꼭 써줘야하며 이름 호출할때는 꼭 대괄호를 써야한다.>>>10-15
// var person = {
//     'last-name': 'Lee',
//     1: 10
// };
// console.log(person['last-name']);
//프로퍼티가 숫자로 이루어진 문자열일경우 따옴표를 생략할수있다.
// console.log(person.1); //syntax error.
// console.log(person[1]); //10
// console.log(person['1']); //10



//<<<프로퍼티 값 갱신>>>10-16
// var person = {
//     name: 'Lee'
// };
// person.name = 'Kim';
// console.log(person.name);



//<<<프로퍼티 동적 생성(존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티값이 할당된다.>>>
// var person = {
//     name: 'Lee'
// };
// person.age = 20;
// console.log(person);



//<<<프로퍼티 삭제>>>10.8
// var person = {
//     name: 'Lee'
// };
// person.age = 20;
// delete person.name;
// delete person.address;   //존재하지 않는 프로퍼티를 삭제하려고해도 에러가 나지 않는다.
// console.log(person);



//<<<프로퍼티 축약 표현>>>
// var x = 1; y = 2;
// var obj = {
//     x: x, 
//     y: y
// };
// console.log(obj);

// let x = 1,y = 2;
// const obj = {x,y};    //프로퍼티 축약 표현
// console.log(obj);



//<<<계산된 프로퍼티 이름>>>10.9.2
//ES5에서는 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면 객체 리터럴 외부에서 대괄호 기법을 사용해야 한다.
// var prefix = 'prop';
// var i = 0;
// var obj = {};
// obj[prefix + '-' + ++i] = i;
// obj[prefix + '-' + ++i] = i;
// obj[prefix + '-' + ++i] = i;
// console.log(obj);

//ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.
// const prefix = 'prop';
// let i = 0;
// const obj = {
//     [`${prefix}-${++i}`]: i,
//     [`${prefix}-${++i}`]: i,
//     [`${prefix}-${++i}`]: i
// };
// console.log(obj);



//<<<메서드 축약 표현>>>
//ES5
// var obj = {
//     name: 'Lee',
//     sayHi: function(){
//         console.log('Hi!'+ this.name);
//     }
// };
// obj.sayHi();

//ES6
// const obj = {
//     name:'Lee',
//     sayHi(){                       //function키워드를 생략하고도 메서드를 정의할수있다.(메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당한 함수와 다르게 동작한다.)
//         console.log('Hi!'+this.name)   
//     }
// };
// obj.sayHi();



//<<<원시값>>>
//str변수의 값을 변경하더라도 메모리에 'Hello' 와 'world'가 둘다 있다 단지 식별자 str이 Hello를 가리키고 있다가 world를 가리키게 된것 뿐이다.
// var str = 'Hello';
// console.log(str);
// str = 'world';
// console.log(str);



//<<<유사 배열 객체>>>
//유사 배열 객체란 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고, length 프로퍼티를 갖는 객체를 말한다. 문자열은 마치 배열처럼 인덱스를 통해 각 문자에 접근할 수 있으며, length 프로퍼티를 갖기 떄문에 유사 배열 객체이고 for 문으로 순회할 수도 있다.
// var str = 'string';
// console.log(str[0]);
// console.log(str.length);
// console.log(str.toUpperCase());

//문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있지만, 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
// var str = 'string';
// str[0] = 'S';
// console.log(str); //string



//<<<값에 의한 전달>>>
//score에 있는 원시값을 복사하여 전달하는데 이때의 score변수의 변수값과 copy변수의 변수값을 서로 다른 메모리에 저장된다. 따라서 score 변수의 변수값을 재할당했다고 해도 copy 변수의 변수값에는 아무런 영향을 끼치지않는다.
// var score = 80;
// var copy = score;

// console.log(score); //80
// console.log(copy);  //80

// score = 100;

// console.log(score); //100
// console.log(copy);  //80




//<<<참조에 의한 전달(자바스크립트에서 이러한 전달을 나타내는 공식적인 언어가 없다 포인터가 존재하는 다른 프로그래밍 언어의 "참조에 의한 전달"과 의미가 정확히 일치하지 않는다)>>>11.2.2
// var person = {
//     name: 'Lee'
// };
// var copy = person; //이런경우 원본 person과 사본 copy는 저장된 메모리 주소는 다르지만 동일한 참조 값을 갖는다. 다시말해 둘다 동일한 객체를 가리키고, 둘중 한쪽에서라도 객체를 변경하면 서로 영향을 주고 받는다.
// console.log(copy === person);
// copy.name = 'Kim';
// person.address = 'Seoul';
// console.log(person);
// console.log(copy);



//<<<함수 기본 예제>>>
// function add(x,y){     //함수 리터럴
//     return x + y;
// }
// console.log(add(10,30));



//<<<함수 리터럴과 함수 선언문은 형태가 동일하지만 함수 선언문에서는 함수명을 생략할수없다>>>12.4.1
//변수에 함수 리터럴을 할당
// var f = function(x,y) {
//     return x + y;
// };
// console.log(f(4,4));
//기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
//함수 선언문에서는 함수 이름을 생략할 수 없다.
// function foo() {console.log('foo');}
// foo();

//함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
//함수 리터럴에서는 함수 이름을 생략할 수 있다.
// (function bar() {console.log('bar');})
// bar();
//함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다. 따라서 함수 외부에서는 함수이름을 가지고 함수를 참조할수 없다.
//하지만 위에 foo또한 함수이름이므로 함수 내부에서만 참조할 수 있어야 하지만, 외부에서도 참조할수있는것은 자바스크립트 엔진이
//암묵적으로 이름이 같은 foo 식별자를 생성한것이다. 자바스크립트 엔진은 함수 선언문을 해석해 함수 객체를 생성한다.
//이때 함수 이름은 함수 몸체 내부에서만 유효한 식별자이므로 함수 이름과는 별도로 생성된 함수 객체를 가리키는 식별자가 필요하다.
//함수 객체를 가리키는 식별자가 없으면 생성된 함수 객체를 참조할 수 없으므로 호출할 수도 없다. 따라서 자바스크립트 엔진은 생성된
//함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다.
 

































