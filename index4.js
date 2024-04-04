function Person(name , daromad , xarajat) {
    this.name = name
    this.daromad = daromad
    this.xarajat = xarajat
    this.getMonthlyIncome = this.daromad - this.xarajat
    this.getSalary = () => {
        alert(this.name + "ning xarajatdan tashqari daromadi $" + this.getMonthlyIncome);
    }
}
const p1 = new Person('Jhon' , 1000 , 200)
const p2 = new Person('David' , 3000,  300)
const p3 = new Person('Stive' , 2500, 170)
const p4 = new Person('Piter' , 4000, 2400)
const p5 = new Person('Alex' , 15000, 3060)
const p6 = new Person('JJ' , 1800, 450)
const p7 = new Person('Chris' , 4500, 960)
const p8 = new Person('Jimmie' , 6300, 780)
const p9 = new Person('Patrick' , 7200, 1000)
const p10 = new Person('Jake' , 300, 20)

p1.getSalary()
p2.getSalary()
p3.getSalary()
p4.getSalary()
p5.getSalary()
p6.getSalary()
p7.getSalary()
p8.getSalary()
p9.getSalary()
p10.getSalary()