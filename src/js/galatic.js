export class Galatic {

  constructor(age) {
    this.age = age;
    this.lifeExpectancy = 79;
  }

  mercury() {
    return (this.age/.24).toFixed(2);
  }

  venus() {
    return (this.age/.62).toFixed(2);
  }

  mars() {
    return (this.age/1.88).toFixed(2);
  }

  jupiter() {
    return (this.age/11.86).toFixed(2);
  }

  yearsLeftOnEarth() {
    const temp = this.lifeExpectancy - this.age;
    const over = this.age - this.lifeExpectancy;
    if(temp>0){
      return `You have ${temp} years left to live on Earth`;
    }
    else {
      return `You have exceeded your left expectancy by ${over} years.`; 
    }
  }
}