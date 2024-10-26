function Person(fn, al) {
    var fullname = fn;
    var alias = al;
    function getAllNames() { return (fullname + “ ” + alias); }
    this.sayHello = function () {
        document.write(getAllNames.apply(this));
    }
}
person = new Person("Hoàng Tùng", "Bolero");
faculty = Object.create(person);
faculty.department = "Khoa CNTT";
faculty.sayHello = function () {
    person.sayHello();
    document.write(" " + this.department);
};
faculty.sayHello();