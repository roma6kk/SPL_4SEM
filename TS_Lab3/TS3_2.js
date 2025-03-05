var HTMLReport = /** @class */ (function () {
    function HTMLReport(title, content) {
        this.title = title;
        this.content = content;
    }
    HTMLReport.prototype.generate = function () {
        return "<h1>${this.title}</h1><p>${this.content}</p>";
    };
    return HTMLReport;
}());
var JSONReport = /** @class */ (function () {
    function JSONReport(title, content) {
        this.title = title;
        this.content = content;
    }
    JSONReport.prototype.generate = function () {
        return "title : ${this.title} content : ${this.content}";
    };
    return JSONReport;
}());
var report1 = new HTMLReport("Отчет 1", "Содержание отчета");
console.log(report1.generate());
var report2 = new JSONReport("Отчет 2", "Содержание отчета");
console.log(report2.generate());
