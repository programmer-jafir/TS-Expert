### Explain how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.

#### OOP means Object Orientend Programming. In oop are the building blocks are the app. It helps us to make our code clean and effecient. When you declare a class in ts it self it is public. It means you can rewrite and assign the value.But when you make a properity private you can change the value of this properity outside of the class but inside of the class you can changed it. Also when you make a properity readonly you can not assain the value you can se read. And the last when you use protected you can not use the class inside of this class but you can use when you inherite the class.


```ts
class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails() { //* A function create
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee { //* inherit the Employee
     private department: string;
  constructor(
    name: string, //* this way you can use protected properity
    baseSalary: number,
    department: string,
  ) {
    super(name, baseSalary);
    this.department= department
  }
  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
```