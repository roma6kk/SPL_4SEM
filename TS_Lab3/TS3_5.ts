enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR"
  }
  
  // Определение типа LogEntry как кортежа [timestamp, level, message]
  type LogEntry = [timestamp: Date, level: LogLevel, message: string];
  
  // Функция для логирования события
  function logEvent(event: LogEntry): void {
    const [timestamp, level, message] = event;
  
    // Форматирование вывода
    console.log(`[${formatDate(timestamp)}] [${level}] ${message}`);
  }
  
  // Вспомогательная функция для форматирования даты
  function formatDate(date: Date): string {
    return date.toISOString(); // Можно использовать другой формат, если нужно
  }
  logEvent([new Date(), LogLevel.INFO, "Система запущена"]);