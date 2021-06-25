import {Galatic} from './../src/js/galatic.js'

describe('Galatic', () => {
  
  test('Galatic constructor should create an object with input age and default life expectancy', () => {
    const andrew = new Galatic(37); 
    expect(andrew.lifeExpectancy).toEqual(78.7);
  });


});