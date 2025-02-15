//메서드 오버로드
//하나의 함수를 매개변수 혹은 반환값을 다양한 형태로 지정하는 방법
//선언된 오버로드의 타입 조건에 맞으면 해당 오버로드를 반환한다.

//여기까지는 함수의 오버로드 선언
function overloadTest(a: string): number;
function overloadTest(a: number): string;
function overloadTest(a: number, b: string): boolean;
//여기부터는 함수의 실제 구현체
//함수의 실체 구현체는 오버로드의 모든 조건을 포함하고 있어야한다.
function overloadTest(
  a: string | number,
  b?: string
): number | string | boolean {
  if (!b && typeof a === "string") {
    return 10;
  }

  if (!b && typeof a === "number") {
    return "test";
  }
  return true;
}

const result1 = overloadTest(1);
const result2 = overloadTest("str");
const result3 = overloadTest(1, "str");

/**
 * 20250126
 * generic 타입의 고급 활용
 * typeof를 사용한 객체의 타입화
 * extends 키워드를 활용한 타입의 조건 처리
 * infer 키워드를 활용한 제네릭 타입의 개별 추출
 * 메서드 오버로드를 활용한 함수의 조건 처리
 */
