var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
function logEvent(event) {
    var timestamp = event[0], level = event[1], message = event[2];
    console.log("[".concat(formatDate(timestamp), "] [").concat(level, "] ").concat(message));
}
function formatDate(date) {
    return date.toISOString();
}
logEvent([new Date(), LogLevel.INFO, "Система запущена"]);
