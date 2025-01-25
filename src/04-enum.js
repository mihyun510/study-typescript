//enum
//열거형 타입
//값을 따로 할당하지 않으면 0부터 시작하는 숫자값을 자동으로 가진다.
var Role;
(function (Role) {
    //숫자로 값을 할당하고 그 뒤에 값을 할당하지 않으면
    //할당한 값부터 +1씩 더해서 자동으로 숫자값으로 할당한다.
    Role[Role["admin"] = 10] = "admin";
    Role[Role["user"] = 11] = "user";
})(Role || (Role = {}));
var adminRole = Role.admin;
var userRole = Role.user;
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["notFound"] = 400] = "notFound";
    HttpStatus[HttpStatus["serverError"] = 500] = "serverError";
})(HttpStatus || (HttpStatus = {}));
// const enum
function getHttpStatus(status) {
    return HttpStatus[status];
}
console.log("Http OK", getHttpStatus(HttpStatus.OK));
