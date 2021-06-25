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

  yearsLeft(planet) {
    let young = this.lifeExpectancy - this.age;
    let old = this.age - this.lifeExpectancy;
    if(planet === "Mercury") {
      young /= .24;
      old /=.24; 

      if(young>0) {
        return `You have ${young.toFixed(2)} years left to live on Mercury`;
      }
      else {
        return `You have exceeded your left expectancy by ${old.toFixed(2)} Mercury years.`; 
      }
    }
    else if (planet === "Venus") {
      young /= .62;
      old /= .62; 
      if(young>0){
        return `You have ${young.toFixed(2)} years left to live on Venus`;
      }
      else {
        return `You have exceeded your left expectancy by ${old.toFixed(2)} Venus years.`; 
      }
    }
    else if (planet === "Mars") {
      young /= 1.88;
      old /= 1.88; 
      if(young>0){
        return `You have ${young.toFixed(2)} years left to live on Mars`;
      }
      else {
        return `You have exceeded your left expectancy by ${old.toFixed(2)} Mars years.`; 
      }
    }
    else if (planet === "Jupiter") {
      young /= 11.86;
      old /= 11.86; 
      if(young>0){
        return `You have ${young.toFixed(2)} years left to live on Jupiter`;
      }
      else {
        return `You have exceeded your left expectancy by ${old.toFixed(2)} Jupiter years.`; 
      }
    }
    else {
      if(young>0){
        return `You have ${young.toFixed(2)} years left to live on Earth`;
      }
      else {
        return `You have exceeded your left expectancy by ${old.toFixed(2)} Earth years.`; 
      }
    }
  }

}