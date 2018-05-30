import { Component, OnInit } from '@angular/core';


class Greeting {
  message: string;
  constructor(message: string){
    this.message = message;
  }

  greet(){
    return "Hello, " + this.message;
  }
}

class Animal {
  name:string;

  constructor(animalName: string){
    this.name = animalName;
  }

  move(distance: number =0){
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string){
    super(name);
  }
  bark(){
    console.log("woof!");
  }

  move(distanceMovedByDog: number = 5){
    console.log('dog is moving');
    super.move(distanceMovedByDog);
  }

}


class Poodle extends Dog{
  constructor(name:string){
    super(name);
  }
  move(){
    let moving = super.move();
    console.log('poodle is walking...');
  }
}

class Horse extends Animal {
  constructor (name: string){
    super(name);
  
  }
  


  move(distanceMovedByHorse : number = 45){
    console.log('Horse is moving..');
    super.move(distanceMovedByHorse);
  }
}


class User {
  private name: string;
  
  constructor(name: string){
    this.name = name;
  }
}

class John extends User {
  constructor(){
    super("John");
  }
}

class Employee{
  private name:string;
  constructor(name: string){
    this.name = name;
  }
}


class Person{
  protected name:string;
  constructor(name:string){
    this.name = name;
  }
}

class Worker extends Person{
  private department: string;
  constructor(name: string , department: string){
    super(name);
    this.department = department;
  }

  getDetails(){
    return `My name is ${this.name}   and I work in ${this.department} .`
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

ngOnInit(){
  // this.classTesting();
  // this.animalClassTest();
  // this.classCompatibilityTest();
  // this.extendDevrideTest();
  // this.protectedTest();
  const positions: number[] = [232,545,34,233];
  const colors: string[] = ['blue', 'red', 'green'];
  console.log('random number selected', this.randomIntElem([343244,5676,233244,452347,43242345]));

  console.log("random string selected" , this.randomStringElem(['red','blue', 'yellow']));
 console.log('random position selected', this.randomElem(positions));
 console.log('random colors selected', this.randomElem(colors));
}



randomIntElem(arr: number[]) : number {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

randomStringElem(arr: string[]) : string {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
randomElem(arr:any[]): any{
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// extendDevrideTest(){
// const poodle = new Poodle('tom');
// poodle.move();
// }
// 
protectedTest(){
  const worker = new Worker("steve", "sales");
  console.log(worker.getDetails());
  // console.log(worker.name);

  const person = new Person("James");
  console.log(person);
}

classCompatibilityTest(){
  let user = new User("doe");
  const john = new John();

  console.log(user);
  console.log(john);

  const employee = new Employee("smith");
  console.log(employee);

  user = john;
  console.log(user);
}
  classTesting(){
    const greeter = new Greeting('Hello Worlds'); 
    console.log(greeter.greet());
  }

  animalClassTest(){
    // const dog= new Dog("Snoopy");
    // dog.bark();
    // dog.move();
    
    const horse: Animal = new Horse('Mustang');
    horse.move();
  }

}
