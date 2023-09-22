class Employee{
    constructor(name,salary,position){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
                   getSalary(){
        console.log('the salary of'+this.name+'is'+this.salary+'for'+this.position);
    }
    
}
let em = new Employee("john",20000,"developer");
    em.getSalary()
   console.log(em.name);
   console.log(em.salary);
   console.log(em.position);

