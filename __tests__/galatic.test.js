import {Galatic} from './../src/js/galatic.js'

describe('Galatic', () => {
  
  test('Galatic constructor should create an object with input age and default life expectancy', () => {
    const andrew = new Galatic(37); 
    expect(andrew.lifeExpectancy).toEqual(78.7);
  });

  test('Mercury function should convert age on Earth to age on Mercury', () => {
    const andrew = new Galatic(1); 
    expect(andrew.mercury()).toEqual("4.17");
  });

  test('venus function should convert age on Earth to age on Venus', () => {
    const andrew = new Galatic(10); 
    expect(andrew.venus()).toEqual("16.13");
  });

});