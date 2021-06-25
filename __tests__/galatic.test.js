import {Galatic} from './../src/js/galatic.js'

describe('Galatic', () => {
  
  test('Galatic constructor should create an object with input age and default life expectancy', () => {
    const andrew = new Galatic(37); 
    expect(andrew.lifeExpectancy).toEqual(79);
  });

  test('Mercury function should convert age on Earth to age on Mercury', () => {
    const andrew = new Galatic(1); 
    expect(andrew.mercury()).toEqual("4.17");
  });

  test('venus function should convert age on Earth to age on Venus', () => {
    const andrew = new Galatic(10); 
    expect(andrew.venus()).toEqual("16.13");
  });

  test('mars function should convert age on Earth to age on Mars', () => {
    const andrew = new Galatic(10); 
    expect(andrew.mars()).toEqual("5.32");
  });

  test('jupiter function should convert age on Earth to age on Jupiter', () => {
    const andrew = new Galatic(100); 
    expect(andrew.jupiter()).toEqual("8.43");
  });

  test('yearsLeftOnEarth function should calculate how many years left you have on Earth based on life Expectancy', () => {
    const andrew = new Galatic(37); 
    expect(andrew.yearsLeftOnEarth()).toEqual("You have 42 years left to live on Earth");
  });

  test('yearsLeftOnEarth function should calculate how many years left you have on Earth based on life Expectancy', () => {
    const andrew = new Galatic(100); 
    expect(andrew.yearsLeftOnEarth()).toEqual("You have exceeded your left expectancy by 21 years.");
  });


});