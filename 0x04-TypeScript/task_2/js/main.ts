import { createFormatter } from "fork-ts-checker-webpack-plugin";

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string) : Teacher | Director {
    if (Number(salary) < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: TeacherInterface | DirectorInterface) {
    if (isDirector(employee)){
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}

type Student = 'Math' | 'History'

function teachClass(todayClass: Student): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}
// console.log(executeWork(createEmployee(200)));
// Getting to work
// console.log(executeWork(createEmployee(1000)));
// Getting to director tasks

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));