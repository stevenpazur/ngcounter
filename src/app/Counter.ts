export class Counter {
  public value: number = 1;
  public _superCounter: boolean = false;

  setSuperCounter(bool: boolean){
    this._superCounter = bool;
  }
}
