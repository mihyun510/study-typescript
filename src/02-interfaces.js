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
console.log("Person", person);
