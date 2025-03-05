// Определение перечисления для HTTP-статусов
enum HttpStatus {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    INTERNAL_SERVER_ERROR = 500
  }
  
  // Определение типа ApiResponse как кортежа [status, data, error?]
  type ApiResponse<T> = [status: HttpStatus, data: T | null, error?: string];
  
  // Функция для создания успешного ответа
  function success<T>(data: T): ApiResponse<T> {
    return [HttpStatus.OK, data, undefined];
  }
  
  // Функция для создания ошибочного ответа
  function error(message: string, status: HttpStatus): ApiResponse<null> {
    return [status, null, message];
  }
  
  // Пример использования
  const successfulResponse = success({ id: 1, name: "Example" });
  console.log(successfulResponse); // Вывод: [200, { id: 1, name: "Example" }, undefined]
  
  const errorResponse = error("Не удалось найти ресурс", HttpStatus.BAD_REQUEST);
  console.log(errorResponse); // Вывод: [400, null, "Не удалось найти ресурс"]
  
  const unauthorizedResponse = error("Нет доступа", HttpStatus.UNAUTHORIZED);
  console.log(unauthorizedResponse); // Вывод: [401, null, "Нет доступа"]
  
  const serverErrorResponse = error("Внутренняя ошибка сервера", HttpStatus.INTERNAL_SERVER_ERROR);
  console.log(serverErrorResponse); // Вывод: [500, null, "Внутренняя ошибка сервера"]