//interface Point{}

//type alias
//interface 와는 다르게 할당 방식을 사용함
//객체 외에도 여러가지 타입에 할용할 수 있음
//객체를 생성하는 클래스와 추상화나 상속에는 적합하지 않음.
type Point = {
  x: number;
  y: number;
  z?: number;
};

const point: Point = {
  x: 1,
  y: 1,
};

//유니온 타입
//여러 타입을 하나의 타입으로 구현
type Direction = "left" | "right" | "up" | "down";
//const direction: Direction = "high";

// 고정 타입
type AdminRole = "admin";
const role: AdminRole = "admin";

//타입의 인터섹션, 유니온
type Human = {
  legs: number;
};

type Person = {
  name: string;
  age: number;
};

//타입의 인터섹션
//두 타입을 하나의 타입으로 합쳐는 것
//일반적으로는 객체 타입에서만 사용한다.
//interface extends 와 동일하게 동작한다.
type Charactor = Human & Person;
const charactor: Charactor = {
  legs: 2,
  name: "Chris",
  age: 3,
};

//타입의 유니온
type HumanOrPerson = Human | Person;

//두 타입의 프로퍼티 중 일부만 포함되도 정상적으로 동작된다.
const humanOrPerson: HumanOrPerson = {
  legs: 2,
  //name: "Chris",
  age: 30,
};

//generic type
//타입을 매개변수로 받아서 다음 타입을 생성하는 방식
type List<T> = T[];

const list: List<number> = [1, 2, 3];
const strList: List<string> = ["Str1", "str2", "str3"];

type Response<T> = {
  code: string;
  messsage: string;
  data: T;
};

interface User {
  role: string;
  name: string;
}

const userResponse: Response<User[]> = {
  code: "200",
  messsage: "Success",
  data: [
    { role: "admin", name: "Chris" },
    { role: "user", name: "Kim" },
  ],
};

//함수 타입의 타입 선언
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
