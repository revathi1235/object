class employee{
    constructor(name,position,salary){
        this.name=name;
        this.salary=salary;
        this.position=position;}
        getsalary(){
            console.log('the salary of'+this.name+'is'+this.salary+'for'+this.position);
    }
      
    }

    class manager extends employee{}

    let em = new manager("john","hr",80000);
    console.log(em.position,em.name,em.salary);
em.getsalary()

class supervisor extends employee{}
let em2 = new supervisor("sam","web designer",25000);
console.log(em2.position);
console.log("salary of "+em2.name+" is "+em2.salary+" for "+em2.position);
console.log("salary is "+em2.salary);


