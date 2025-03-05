type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type DoneType = boolean;

type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}

type GroupType = {
    students: Array<StudentType>// массив студентов типа StudentType
    studentsFilter: (group: GroupFilterType) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: MarkFilterType) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}

const group: GroupType = {
    students: [],
    studentsFilter: function(group: GroupFilterType): Array<StudentType> {
        return this.students.filter(student => student.group === group);
    },
    marksFilter: function(mark: MarkFilterType): Array<StudentType> {
        return this.students.filter(student => 
            student.marks.some(markObj => markObj.mark === mark));
    },
    deleteStudent: function(id: number): void {
        this.students = this.students.filter(student => student.id !== id);
    },
    mark: 1 as MarkFilterType,
    group: 1 as GroupFilterType,
}

const student1: StudentType = {
    id: 72718,
    name: "Хряпкин Вадим Михайлович",
    group: 6,
    marks: [
        { subject: "География", mark: 10, done: true },
        { subject: "Математика", mark: 6, done: false },
    ],
};

const student2: StudentType = {
    id: 68932,
    name: "Подоксёнова Людмила Вячеславовна",
    group: 3,
    marks: [
        { subject: "Математика", mark: 8, done: true },
        { subject: "Информатика", mark: 8, done: true },
    ],
};

const student3: StudentType = {
    id: 98472,
    name: "Четверенько Борис Викторович",
    group: 3,
    marks: [
        { subject: "Обществоведение", mark: 10, done: true },
        { subject: "Физика", mark: 6, done: false },
    ],
};

group.students.push(student1, student2, student3);

const studentsFromGroup = group.studentsFilter(3);
console.log("Студенты группы 3:", studentsFromGroup);

const studentsWithMark = group.marksFilter(6);
console.log("Студенты с оценкой 6:", studentsWithMark);

group.deleteStudent(72718);
console.log("Студенты после удаления студента с id 72718:", group.students);