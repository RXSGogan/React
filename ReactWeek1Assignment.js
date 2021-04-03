class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, student = []) {
        this.name = name;
        this.level = level;
        this.student = student;
    }
    registerStudent(newStudent) {
        if (this.student.filter(element => element.email === student.email).length == 0) {
            this.student.push(student);
            console.log(`Registering ${this.student} to the bootcamp Web Dev Fundamentals.`)
        } else {
            console.log("Student Exists")
        }
        return this.student
    }
}