var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = {
    name: "John",
};
var sum = function (a, b) { return a + b; };
//class
//자바스트립트의 생성자 함수를 좀 더 사용하기 편한 문법으로 제공하는 개념
//자바스크립트만 사용하면 인터페이스 구현 개념을 사용할 수 없음
var Person = /** @class */ (function () {
    function Person(name, age, role) {
        if (role === void 0) { role = "user"; }
        this.name = name;
        this.age = age;
        this.role = role;
    } //생성자 함수를 실제 수행하는 블럭
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var person = new Person("John", 30); // 생성자 실행과 똑같음
/**
    typescript는 컴파일 후 js파일을 실행해주어야됩니다.
    npm i -g typescript : tsc 명령어 사용하기 위해 설치해줘요.
    tsc src/02-interfaces.ts : tsc 명령어로 타입스트립트 파일을 컴파일 해줘요.
    node src/02-interface.js : 컴파일된 파일(js)을 실행
**/
console.log("Person", person);
//interface Human extends Legged {}
//interface Animal extends Legged {}
//접근제한자 사용
var Human = /** @class */ (function () {
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
    function Human(legs, name) {
        this.legs = legs;
        this.name = name;
        //this.legs = legs;
        //constructor 에서 접근제한자를 바로 사용하면 제외해도 된다. 자동할당 되요...
        //this.name = name;
    }
    //프로토타입의 영역
    Human.prototype.walk = function () {
        console.log("walk");
    };
    Human.prototype.run = function () {
        console.log("run");
    };
    Human.prototype.getParentName = function () {
        //private 은 자기자신 클래스에서만 접근가능.
        return this.name;
    };
    return Human;
}());
//접근제한자
//public, private, protected
//public: 부모 클래스를 상속 받아도 접근 가능
//private: 부모 클래스를 상속 받아도 접근 불가, 해당 클래스 내부에서만 접근 가능, 실제 객체에서는 접근 불가
//protected: 부모 클래스를 상속 받아도 접근 가능, 실체 객체에서는 접근 불가
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(legs, name) {
        //this.name (private)
        //this.legs (public)
        //상속받음
        return _super.call(this, legs, name) || this;
    }
    Male.prototype.getLegsCount = function () {
        return this.legs;
    };
    Male.prototype.getName = function () {
        //private name 은 자식 클래스에서는 접근할 수 없음.
        //return this.name;
    };
    return Male;
}(Human));
var human = new Human(2, "Chris");
console.log(human);
// class Animal implements Legged {
//   walk() {
//     console.log("walk");
//   }
//   run() {
//     console.log("run");
//   }
// }
