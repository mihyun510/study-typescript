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
//클래스의 추상화 구현을 위해서 사
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
/**  
    typescript는 컴파일 후 js파일을 실행해주어야됩니다. 
    npm i -g typescript : tsc 명령어 사용하기 위해 설치해줘요.
    tsc src/02-interfaces.ts : tsc 명령어로 타입스트립트 파일을 컴파일 해줘요.
    node src/02-interface.js : 컴파일된 파일(js)을 실행
**/

console.log("Person", person);

//사족보행 interface
interface Legged {
  walk(): void;
  run(): void;
}

//interface Human extends Legged {}

//interface Animal extends Legged {}

//접근제한자 사용
class Human implements Legged {
  //this의 영역
  /*
    public, private, protected
    아무것도 선언하지 않으면 기본적으로는 public
    public: 객체를 생성했을 때 노출되는 영역
  */
  //legs: number;
  //private name: string;

  //constructor 에서 접근제한자를 바로 사용한 경우
  //상위 초기화 영역에서 타입 선언 및 접근제한자 선언을 제외해도 된다.
  constructor(
    public legs: number,
    private readonly name: string,
    protected age: number
  ) {
    //this.legs = legs;
    //constructor 에서 접근제한자를 바로 사용하면 제외해도 된다. 자동할당 되요...
    //this.name = name;
  }
  //프로토타입의 영역
  walk() {
    console.log("walk");
  }

  run() {
    console.log("run");
  }

  getInfo() {
    return `${this.getName()}, ${this.age}`;
  }

  private getName() {
    //private 은 자기자신 클래스에서만 접근가능.
    return this.name;
  }

  getParentName() {
    //private 은 자기자신 클래스에서만 접근가능.
    return this.name;
  }
}

//접근제한자
//public, private, protected
//public: 부모 클래스를 상속 받아도 접근 가능
//private: 부모 클래스를 상속 받아도 접근 불가, 해당 클래스 내부에서만 접근 가능, 실제 객체에서는 접근 불가
//protected: 부모 클래스를 상속 받아도 접근 가능, 실체 객체에서는 접근 불가
class Male extends Human {
  constructor(legs: number, name: string, age: number) {
    //this.name (private)
    //this.legs (public)
    //상속받음
    super(legs, name, age);
  }

  getLegsCount() {
    return this.legs;
  }
  //   getName() {
  //     //return this.name; private 자식 클래스에서 접근 불가
  //     return this.getParentName();
  //   }

  getAge() {
    //protected: 자식 클래스에서 접근 가능
    return this.age;
  }
}

const human = new Human(2, "Chris", 30);

console.log(human);
console.log(human.getInfo());
console.log(human.legs); //public 외부 접근 가능
//console.log(human.name); private  외부 접근 불가
//console.log(human.age); protected 외부 접근 불가
console.log(Object.getPrototypeOf(human));
// class Animal implements Legged {
//   walk() {
//     console.log("walk");
//   }
//   run() {
//     console.log("run");
//   }
// }
