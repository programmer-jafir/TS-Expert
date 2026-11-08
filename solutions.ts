//* Problem 1

const multiplyValue = (a: number, b?: number): number => {
  if (b === undefined) {
    return a * 2;
  } else {
    return a * b;
  }
};

//* Problem 2

const processInput = (
  item: string | number | boolean,
): string | number | boolean => {
  if (typeof item === "string") {
    return item.trim().toLowerCase();
  } else if (typeof item === "number") {
    return item * 10;
  } else if (typeof item === "boolean") {
    return item ? "Active" : "Inactive";
  }

  return item;
};

//* Problem 3

const formatCoordinate = (args: readonly [number, number, string]) => {
  const [latitude, longitude, locationName] = args;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

//* Problem 4

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((result, arr) => result.concat(arr));
}

//* Problem 5

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number) {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
}


//* Problem 6

interface user<T> {
  //*generic interface
  data: T[];
}
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((i) => i[key]);
};



//* Problem 7

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
     private department: string;
  constructor(
    name: string,
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

//* Problem 8


const validateAgeAsync = async (age:number): Promise<string> => {
  if(age>=18){
    await new Promise<string>((resolve) => 
      setTimeout(resolve, 1000));
    return "Access Granted";
}
    throw new Error("Access Denied: Must be 18 or older")

}
