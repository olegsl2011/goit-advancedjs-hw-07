class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 1000);
  }
}

const employee = new Employee('Clarc', 'IT', 10000);
const manager = new Manager('Ket', 'IT', 10000);

console.log(employee.getEmployeeDetails());
console.log(manager.getEmployeeDetails());

export {};
