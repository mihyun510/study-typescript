/**
 * 기본 데이터 타입 사용
 * 변수에 타입 선언 시 해당 타입으로 강제된다.
 * 변수: 타입 = 값
 */

// 문자열
let str: string = "hello";

//숫자열
let num: number = 123;

// 블리언
let bool: boolean = true;

//undefined
let notDefined: undefined = undefined;

//null
let blank: null = null;

//배열
// 데이터 타입[] 또는 Array<데이터 타입>
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

//튜플
// 자바스크립트 에는 없는 타입이지만 타입스크립트에서 튜플처럼 활용 가능
let tuple: [number, string] = [1, "hello"];

//객체
let obj: object = {};

//union types
let union: string | number = "hello";
union = 123;
//union = true; //error

//배열에 유니온 타입 적용
let arr3: (string | number)[] = [1, "hello"];

//사용을 추천하지 않음
//any: 모든 타입 허용
//빈번하게 사용하는 건 지양해야 한다.
let any: any = "hello";
any = 123;
any = "hello";
any = [];

//any와 unknown이 다른 점은 any는 모든 타입 허용, unknown은 타입을 알 수 없음.
//unknown: 타입 캐스팅이 된 이휴에는 타입이 정해지나 그 전엔 모든 타입 허용
// 타입 가드에 의해서도 타입이 정해질 수 있다.
let unknown: unknown = "hello";
unknown = 123;
unknown = true;
unknown = [];

function stringLength(value: unknown) {
  //타입가드 기능..
  if (typeof value !== "string") return value; //unknown
  return value.length; //unknown => string 으로 해석됩니다.
} // 타입이 정해지지 않는다면......

//isString(123);

//void: 함수에서 반환 값이 없는 경우
//함수에서 return 이 없는 경우 암묵적으로 undefined를 반환한다. === void
let a = 1;
let b = 1;

//함수의 반환 타입
//함수(): 반환타입
function returnVoid(): void {
  a = 2;
  b = 3;
}

returnVoid();

console.log(returnVoid()); //undefined
console.log(a, b); //2,3

function returnString(): string {
  return "string";
}

//literal type : 원시값
let literal: "hello" = "hello";
let unionLiteral: "hello" | "world" = "hello";
unionLiteral = "world";
