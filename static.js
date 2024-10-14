var Employe = /** @class */ (function () {
    function Employe(name, age) {
        Employe._employeeName = name;
        this._age = age;
    }
    Object.defineProperty(Employe, "employeeName", {
        get: function () {
            return Employe._employeeName;
        },
        set: function (value) {
            Employe._employeeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employe.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Employe.printName = function () {
        console.log(Employe.employeeName);
    };
    return Employe;
}());
var employee1 = new Employe('Arul', 21);
var employee2 = new Employe('Kumaran', 21);
console.log(Employe.employeeName);
Employe.employeeName = 'Test';
console.log(Employe.employeeName);
Employe.printName();
