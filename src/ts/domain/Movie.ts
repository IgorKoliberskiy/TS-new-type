import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly nameOrigin: string,    
    readonly year: number,
    readonly state: string,
    readonly slogan: string,
    readonly genre: Array <string>,
    readonly movieDuration: string,
    readonly price: number,
  ) { }
}