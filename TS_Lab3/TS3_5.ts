enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR"
  }
  
  type LogEntry = [timestamp: Date, level: LogLevel, message: string];
  
  function logEvent(event: LogEntry): void {
    const [timestamp, level, message] = event;
  
    console.log(`[${formatDate(timestamp)}] [${level}] ${message}`);
  }
  
  function formatDate(date: Date): string {
    return date.toISOString(); 
  }
  logEvent([new Date(), LogLevel.INFO, "Система запущена"]);