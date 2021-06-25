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

  test('yearsLeft function should calculate how many years left you have on Earth based on life Expectancy', () => {
    const andrew = new Galatic(37); 
    expect(andrew.yearsLeft("Earth")).toEqual("You have 42.00 years left to live on Earth");
  });

  test('yearsLeft function should calculate how many years you have surpassed your life Expectancy on Earth', () => {
    const andrew = new Galatic(100); 
    expect(andrew.yearsLeft("Earth")).toEqual("You have exceeded your left expectancy by 21.00 Earth years.");
  });

  test('yearsLeft function should calculate how many years left you have on Mercury based on life expectancy', () => {
    const andrew = new Galatic(37); 
    expect(andrew.yearsLeft("Mercury")).toEqual("You have 175.00 years left to live on Mercury");
  });

  test('yearsLeft function should calculate how many years you have surpassed your life Expectancy on Mercury', () => {
    const andrew = new Galatic(100); 
    expect(andrew.yearsLeft("Mercury")).toEqual("You have exceeded your left expectancy by 87.50 Mercury years.");
  });

  test('yearsLeft function should calculate how many years left you have on Venus based on life expectancy', () => {
    const andrew = new Galatic(37); 
    expect(andrew.yearsLeft("Venus")).toEqual("You have 67.74 years left to live on Venus");
  });

  test('yearsLeft function should calculate how many years you have surpassed your life Expectancy on Venus', () => {
    const andrew = new Galatic(100); 
    expect(andrew.yearsLeft("Venus")).toEqual("You have exceeded your left expectancy by 33.87 Venus years.");
  });

  test('yearsLeft function should calculate how many years left you have on Mars based on life expectancy', () => {
    const andrew = new Galatic(37); 
    expect(andrew.yearsLeft("Mars")).toEqual("You have 22.34 years left to live on Mars");
  });

  test('yearsLeft function should calculate how many years you have surpassed your life Expectancy on Mars', () => {
    const andrew = new Galatic(100); 
    expect(andrew.yearsLeft("Mars")).toEqual("You have exceeded your left expectancy by 11.17 Mars years.");
  });

  test('yearsLeft function should calculate how many years left you have on Jupiter based on life expectancy', () => {
    const andrew = new Galatic(37); 
    expect(andrew.yearsLeft("Jupiter")).toEqual("You have 3.54 years left to live on Jupiter");
  });

  test('yearsLeft function should calculate how many years you have surpassed your life Expectancy on Jupiter', () => {
    const andrew = new Galatic(100); 
    expect(andrew.yearsLeft("Jupiter")).toEqual("You have exceeded your left expectancy by 1.77 Jupiter years.");
  });

});