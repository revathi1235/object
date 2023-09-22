class animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(this.name+' eat food');
    }
}
    class alligator extends animal{
        eat(){
            super.eat()
            console.log(this.name+" eat fish");
            }
        }
        let murphy = new alligator('murphy');
        murphy.eat()
    
    