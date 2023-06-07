class Human{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  talk(){
    return this.name +' '+ 'speaks.'
  }
}
const humanKind = new Human('Dennis Yeboah','45 years old')
console.log(humanKind);

const humanKind1 = new Human('Ama Koomson','16 years old')
console.log(humanKind1.talk());


class Man extends Human{
    new(){
      return this.talk
    }
}
const humanKind2 = new Man('Alhassan Begyim','25 years old')
console.log(humanKind2.talk());