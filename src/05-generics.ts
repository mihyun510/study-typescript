interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  company: string;
}

class Response<T> {
  constructor(public value: T, status: number) {}

  getValue() {
    return this.value;
  }
}

const userResponse = new Response<User>({ name: "chris", age: 20 }, 200);
const carResponse = new Response<Car>({ name: "chris", company: "kia" }, 200);
console.log(userResponse.value);
console.log(carResponse.value);

//제네릭의 타입 제한
//extends 키워드를 사용하여 제네릭 타입을 제한할 수 있다.
//extends 키워드가 제네릭 타입과 결합되면 타입이 조건을 제한할 수 있다.
//T extends 조건 ? 조건이 만족할 때 타입 : 조건이 만족하지 않을 때 타입.
//never : 어떤 타입이 아니에요..
//삼항연산자로만 사용이 가능합니다.,

type OnlyString<T> = T extends string ? T : never;

const str: OnlyString<string> = "chris";
//const num: OnlyString<number> = 123; //error

//제네릭 타입 제한 예시 (인터페이스 혹은 타입과 결합)
type Human = {
  name: string;
  age: number;
  legs: number;
};

type Fish = {
  name: string;
  age: number;
};

type Student = {
  name: string;
  age: number;
  legs: number;
  email: string;
};

type OnlyHuman<T> = T extends Human ? T : never;

const chris: OnlyHuman<Student> = {
  name: "chris",
  age: 20,
  legs: 2,
  email: "chris@gmail.com",
};

//Fish 는 human 타입과 다릅니다.. 그래서 never타입이 되엇어요
//필수속성을 human 으로 정했어요..
// const nimo: OnlyHuman<Fish> = {
//   name: "nimo",
//   age: 20,
// }; //error

//제네릭 타입의 중첩 사용 예시
interface Vehicle {
  name: string;
  tire: number;
  manufacturer: string;
}

interface Motorcycle extends Vehicle {
  engine: string;
}

interface ElectricCar extends Vehicle {
  battery: number;
  motor: string;
}

type VehicleType<T> = T extends Vehicle
  ? T extends Motorcycle
    ? Motorcycle
    : ElectricCar
  : never;

//extends로 비교할 떄는 조건에 해당되는 속성을 전부 가지고만 있으면 됨.
//조건에 해당하는 속성이 부족하면 조건 불일치
//조건에 해당하는 속성을 모두 포함하고 있으면 조건 일치(더 가지고 있는 건 상관 없음)
const yamaha = {
  name: "yamaha",
  tire: 2,
  manufacturer: "yamaha",
  engine: "100cc",
};

const tesla = {
  name: "tesla",
  tire: 2,
  manufacturer: "tesla",
  battery: 100,
  motor: "100kw",
};

type Yamaha = VehicleType<typeof yamaha>;

const yamahaCycle: Yamaha = {
  name: "yamaha",
  tire: 2,
  manufacturer: "yamaha",
  engine: "100cc",
  //battery: 100,
};

//typeof : 객체를 그냥 넣을수 없음, 타입의 형태로 전환시 사용..
//객체를 타입으로 사용하기 위해서 반드시 typeof 키워드를 사용해야된다.
//객체의 범위는 object, array, function, 이렇게 해당된다.
type Tesla = VehicleType<typeof tesla>;

const teslaY: Tesla = {
  name: "tesla",
  tire: 4,
  manufacturer: "tesla",
  battery: 100,
  motor: "100kw",
};
