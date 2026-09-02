export class Stack<T> {
  private a : T[] = [];

  public push(item: T): void {
    this.a.push(item);
  }

  public pop(): T | undefined {
    if(this.a.length != 0){return this.a.pop()}
    return undefined;
  }

  public peek(): T | undefined {
    if(this.a.length != 0){return this.a[this.a.length-1]}
    return undefined;
  }

  public size(): number {
    return this.a.length;
  }
}
