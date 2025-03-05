var group = {
    students: [],
    studentsFilter: function (group) {
        return this.students.filter(function (student) { return student.group === group; });
    },
    marksFilter: function (mark) {
        return this.students.filter(function (student) {
            return student.marks.some(function (markObj) { return markObj.mark === mark; });
        });
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
    },
    mark: 1,
    group: 1,
};
var student1 = {
    id: 72718,
    name: "Хряпкин Вадим Михайлович",
    group: 6,
    marks: [
        { subject: "География", mark: 10, done: true },
        { subject: "Математика", mark: 6, done: false },
    ],
};
var student2 = {
    id: 68932,
    name: "Подоксёнова Людмила Вячеславовна",
    group: 3,
    marks: [
        { subject: "Математика", mark: 8, done: true },
        { subject: "Информатика", mark: 8, done: true },
    ],
};
var student3 = {
    id: 98472,
    name: "Четверенько Борис Викторович",
    group: 3,
    marks: [
        { subject: "Обществоведение", mark: 10, done: true },
        { subject: "Физика", mark: 6, done: false },
    ],
};
group.students.push(student1, student2, student3);
var studentsFromGroup = group.studentsFilter(3);
console.log("Студенты группы 3:", studentsFromGroup);
var studentsWithMark = group.marksFilter(6);
console.log("Студенты с оценкой 6:", studentsWithMark);
group.deleteStudent(72718);
console.log("Студенты после удаления студента с id 72718:", group.students);
