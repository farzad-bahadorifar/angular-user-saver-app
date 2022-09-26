export class GlobalFunction {
  static clone (obj : any) {
    const objStr = JSON.stringify(obj);
    return JSON.parse(objStr);
  }

}
