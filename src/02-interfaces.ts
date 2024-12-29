//인터페이스
//객체의 타입을 정의할 때 사용
//type 방식에 비해서 용도가 다양하진 않음.
//대신, 타입 추론이 가능하고 확장이 용이하다.
interface User {
  readonly name: string; //접근제한자 > 읽기만 가능
  age?: number; // 선택적 프로퍼티 ? = 넣어도되고 않넣어도되요
}

const user: User = {
  name: "John",
};

//user.name = "John"; //readonly 프로퍼티가 아니라면 수정가능

//함수 타입 인터페이스
//거의 사용하지 않음
interface SumFunction {
  //매개변수 : 리턴
  (a: number, b: number): number;
}

const sum: SumFunction = (a, b) => a + b;

//클래스 구현체
interface PersonImpl {
  name: string;
  age: number;
  role?: "admin" | "user";
  getName(): string;
  getAge(): number;
}

//class
//자바스트립트의 생성자 함수를 좀 더 사용하기 편한 문법으로 제공하는 개념
//자바스크립트만 사용하면 인터페이스 구현 개념을 사용할 수 없음
class Person implements PersonImpl {
  //변수 초기화 실행 영역
  //사용하고자하는 this의 타입 정의가 반드시 필요하다.
  name: string;
  age: number;
  role: "admin" | "user";

  constructor(name: string, age: number, role: "admin" | "user" = "user") {
    this.name = name;
    this.age = age;
    this.role = role;
  } //생성자 함수를 실제 수행하는 블럭

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }
}

const person = new Person("John", 30); // 생성자 실행과 똑같음

console.log("Person", person);
