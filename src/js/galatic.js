export class Galatic {

  constructor(age) {
    this.age = age;
    this.lifeExpectancy = 78.7;
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
}