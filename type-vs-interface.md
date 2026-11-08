### What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

---

## Type Alias Vs interface 
#### Type Alias use when you create literals, unions, tuples, primitives. On the other hand use interface.

```ts
type id= number
type name= string
type role= "admin"| "user"
```

#### Interface use when you working with object. How to declear interface:

```ts
interface Student{
    name: string;
    id:number,
    class:number
}

const student: Student{
    name: Rohim,
    id: 100402,
    class: 9,
}
```

#### Also interface can be extend but on the other hand type alias cann't. Here is the example:

```ts
interface Watch{
    name: string;
}
interface SmartWatch extends Watch{ //* now you can access all the property thats are on the Watch 
    brand: string; 
}

const watch: SmartWatch ={
    name: Apple Watch,
    brand: Apple
}

```

#### So When you deal with object and otherwise use tupe alias.
