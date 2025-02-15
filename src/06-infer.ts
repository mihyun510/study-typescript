//제네릭 타입에서 infer 키워드
//제네릭 타입에서 받는 매개변수에서 일정 부분만 추출하고 싶은 경우

//string 타입에서 일정 부분만 추출
const str = "student_chris_123";

type ExtractString<T> = T extends `${infer U}_${infer V}` ? V : never;

type Chris = ExtractString<typeof str>;

//배열에서 단일 속성만 타입화
const arr = [1, 2, 3, 4, 5, "str", true];

// 속성값 추출 가능.,
type ExtractArray<T> = T extends (infer U)[] ? U : never;

type ArrayItemType = ExtractArray<typeof arr>;

const num: ArrayItemType = 1;

function test(a: string) {
  return a;
}

type FunctionType = typeof test;

//return type을 추출가능
//...args: any[] 매개변수 동적으로 받을거에요., 매개변수는 고정하지 않아요,.
type FunctionReturnType<T> = T extends (...args: any[]) => infer U ? U : never;

type TestFunctionReturn = FunctionReturnType<typeof test>;

function test2(a: string, b: number, c: boolean) {
  //return [a, b, c];
  return {
    a,
    b,
    c,
  };
}

type Test2FunctionReturn = FunctionReturnType<typeof test2>;

//key 제한을 할수있어요.
type UserKey = "name" | "age" | "email" | "isMale";

const color: Record<UserKey, string | number | boolean> = {
  name: "chris",
  age: 20,
  email: "chris@email.com",
  isMale: true,
};

type ExtractObjectValues<T> = T extends Record<string, infer U> ? U : never;

type UserType = ExtractObjectValues<typeof color>;
