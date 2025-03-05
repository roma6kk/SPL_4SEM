enum HttpStatus {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    INTERNAL_SERVER_ERROR = 500
  }
  
  type ApiResponse<T> = [status: HttpStatus, data: T | null, error?: string];
  
  function success<T>(data: T): ApiResponse<T> {
    return [HttpStatus.OK, data, undefined];
  }
  
  function error(message: string, status: HttpStatus): ApiResponse<null> {
    return [status, null, message];
  }
  
  const successfulResponse = success({ id: 1, name: "Example" });
  console.log(successfulResponse); 
  
  const errorResponse = error("Не удалось найти ресурс", HttpStatus.BAD_REQUEST);
  console.log(errorResponse); 
  
  const unauthorizedResponse = error("Нет доступа", HttpStatus.UNAUTHORIZED);
  console.log(unauthorizedResponse);
  
  const serverErrorResponse = error("Внутренняя ошибка сервера", HttpStatus.INTERNAL_SERVER_ERROR);
  console.log(serverErrorResponse); 