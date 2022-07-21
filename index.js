//<switch문을 이용한 윤년계산 코드>
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




//<for 문 기본예제>
// for(var i = 0 ; i<5; i++){
//     console.log(i);
// }



//<이중 for문을 이용한 두개의 주사위를 던졌을때 합이 6이 되는 모든 경우의수>
// for(var i = 1; i < 6 ; i++){
//     for(var j =1;j<6;j++){
//         if(i+j === 6 ) console.log('['+ i +','+ j +']');
//         //`[${i} , ${j}]` 괄호안을 이걸로 대체해도 똑같이 동작함 이게 더 가독성이 좋은것같음
//     }
// }



//<while문 무한루프에서 특정조건을 만족했을때 탈출하는법>
// var count = 0;
// while(true){
//     console.log(count);
//     count ++;
//     if(count === 3) break;
// }



//<do-while 문 코드블럭을 먼저 실행하고 조건식을 평가한다.(무조건 코드블록을 한번이상 실행한다)>
// var count = 0;
// do{
//     console.log(count);
//     count++;
// }
// while(count < 3);



//<레이블 문 예제>
// foo: {
//     console.log(1);
//     break foo;
//     console.log(2);
// }
// console.log('Done!');



//<중첩 for문에서 내부 for문이 아닌 외부 for문을 탈출하고싶을때 레이블문의 사용법>
// outer: for(var i = 0;i < 3; i++) {
//     for(var j = 0 ;j < 3; j++){
//         if(i+j === 3) break outer;
//         console.log(`inner [${i},${j}]`);
//     }
// }
// console.log('Done');



//<for문을 이용해 문자열에서 특정 인덱스를 검색하는 예>
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



// <continue 문을 이용한 문자열에서 특정문자의 개수를 세는 예>
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



//<위의 방식보다 좀더 쉽게 해결할수 있다.if문내에서 실행해야 할 코드가 한줄이라면 continue문을 사용했을때보다 간편하고 가독성
//도 좋지만 if 문 내에서 실행해야 할 코드가 길다면 들여쓰기가 한 단계 더 깊어지므로 continue 문으로 사용하는편이 가독성이 좋다.>
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
var done = false;
var message = '';
message = done ? '완료' : '미완료';
console.log(message);














