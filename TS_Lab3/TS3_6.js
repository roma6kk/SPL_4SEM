var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatus || (HttpStatus = {}));
function success(data) {
    return [HttpStatus.OK, data, undefined];
}
function error(message, status) {
    return [status, null, message];
}
var successfulResponse = success({ id: 1, name: "Example" });
console.log(successfulResponse);
var errorResponse = error("Не удалось найти ресурс", HttpStatus.BAD_REQUEST);
console.log(errorResponse);
var unauthorizedResponse = error("Нет доступа", HttpStatus.UNAUTHORIZED);
console.log(unauthorizedResponse);
var serverErrorResponse = error("Внутренняя ошибка сервера", HttpStatus.INTERNAL_SERVER_ERROR);
console.log(serverErrorResponse);
