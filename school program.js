// School class
class School {
  constructor(name, level, numStudents) {
    this.name = name;
    this.level = level;
    this.numStudents = numStudents;
    this.teachers = [];
    this.students = [];
    this.classes = [];
  }

  addTeacher(teacher) {
    this.teachers.push(teacher);
  }

  removeTeacher(teacher) {
    const index = this.teachers.indexOf(teacher);
    if (index !== -1) {
      this.teachers.splice(index, 1);
    }
  }

  promoteTeacher(teacher) {
    teacher.promote();
  }

  demoteTeacher(teacher) {
    teacher.demote();
  }

  addStudent(student) {
    this.students.push(student);
  }

  removeStudent(student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }

  getAllStudents() {
    return this.students;
  }

  getAllTeachers() {
    return this.teachers;
  }

  getAllClasses() {
    return this.classes;
  }

  hireTeacher(teacher) {
    teacher.hire();
  }

  fireTeacher(teacher) {
    teacher.fire();
  }

  addClass(className) {
    this.classes.push(className);
  }

  pickSubstituteTeacher() {
    const randIndex = Math.floor(Math.random() * this.teachers.length);
    return this.teachers[randIndex];
  }
}

// Teacher class
class Teacher {
  constructor(name, certification, classes) {
    this.name = name;
    this.certification = certification;
    this.classes = classes;
    this.employed = false;
  }

  assignGrade(student, className, grade) {
    const studentClass = student.classes.find((c) => c.name === className);
    if (studentClass) {
      studentClass.grade = grade;
    }
  }

  addClass(className) {
    this.classes.push(className);
  }

  removeClass(className) {
    const index = this.classes.findIndex((c) => c.name === className);
    if (index !== -1) {
      this.classes.splice(index, 1);
    }
  }

  getAllClasses() {
    return this.classes;
  }

  hire() {
    this.employed = true;
  }

  fire() {
    this.employed = false;
  }

  promote() {
    if (this.certification === "Junior") {
      this.certification = "Intermediate";
    } else if (this.certification === "Intermediate") {
      this.certification = "Senior";
    }
  }

  demote() {
    if (this.certification === "Senior") {
      this.certification = "Intermediate";
    } else if (this.certification === "Intermediate") {
      this.certification = "Junior";
    }
  }
}

// Student class
class Student {
  constructor(name, grade, favoriteSubjects) {
    this.name = name;
    this.grade = grade;
    this.favoriteSubjects = favoriteSubjects;
    this.classes = [];
  }

  addFavoriteSubject(subject) {
    this.favoriteSubjects.push(subject);
  }

  removeFavoriteSubject(subject) {
    const index = this.favoriteSubjects.indexOf(subject);
    if (index !== -1) {
      this.favoriteSubjects.splice(index, 1);
    }
  }

  getAllFavoriteSubjects() {
    return this.favoriteSubjects;
  }

  addClass(className) {
    const newClass = { name: className, grade: null };
    this.classes.push(newClass);
  }

  getAllClasses() {
    return this.classes;
  }
}

// Create objects
 // Create a School object
const school = new School("Example School", "High School");

// Create Teacher objects
const teacher1 = new Teacher("Jane Smith", "Certified", ["English", "History"]);
const teacher2 = new Teacher("John Doe", "Certified", ["Math", "Science"]);

// Add teachers to school
school.addTeacher(teacher1);
school.addTeacher(teacher2);

// Create Student objects
const student1 = new Student("Samantha Brown", 10, ["Math", "Science"]);
const student2 = new Student("Adam Jones", 11, ["English", "History"]);

// Add students to school
school.addStudent(student1);
school.addStudent(student2);
