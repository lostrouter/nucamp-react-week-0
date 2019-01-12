const STUDENTS = [
    [
        "Neo",
        "neo@matrix.com",
        "Tacoma",
    ],
    [
        "Morpheus",
        "morpheus@matrix.com",
        "Tacoma",
    ],
    [
        "Trinity",
        "trinity@matrix.com",
        "Spokane",
    ],
    [
        "Cypher",
        "cypher@matrix.com",
        "Seattle",
    ],
    [
        "The Oracle",
        "oracle@matrix.com",
        "Marysville",
    ],
    [
        "Agent Smith",
        "smith@matrix.com",
        "Bellingham",
    ]
];


class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(student) {
        if (this.students.findIndex((s) => {
            return s.email === email
        }) !== -1) {
            console.log(`student with email '${student.email}' already registered`);
        } else {
            console.log(`registering student with email '${student.email}'`);
            this.students.push(student);
        }
        return this.students;
    }
}
