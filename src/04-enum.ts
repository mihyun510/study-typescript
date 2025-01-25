//enum
//열거형 타입
//값을 따로 할당하지 않으면 0부터 시작하는 숫자값을 자동으로 가진다.
enum Role {
  //숫자로 값을 할당하고 그 뒤에 값을 할당하지 않으면
  //할당한 값부터 +1씩 더해서 자동으로 숫자값으로 할당한다.
  admin = 10,
  user,
}

const adminRole: Role = Role.admin;
const userRole: Role = Role.user;

enum HttpStatus {
  OK = 200,
  notFound = 400,
  serverError = 500,
}

//열거형 키 값을  유니온 타입으로 반환
type HttpStatusKey = keyof typeof HttpStatus;

//열거형 값을 가져오는 방법(추천하진않아요)
//자동으로 모든 값이 문자열로 변경된다는 단점이 있다.
type HttpStatusValue = `${HttpStatus}`;

// const enum
//컴파일 단계에서 트리쉐이킹(객체 생성) 을 하지 않음
//타입검증을 하기 위한 정적 분석 단계에서만 사용된다.
function getHttpStatus(status: HttpStatus) {
  return HttpStatus[status];
}

console.log("Http OK", getHttpStatus(HttpStatus.OK));
