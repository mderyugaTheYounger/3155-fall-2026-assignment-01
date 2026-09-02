export type EventMap = {
  launch: string;
  shutdown: number;
};

export class SimpleEventEmitter<T extends EventMap> {
  
  private listener : {[K in keyof T]?: Array<(data: T[K]) => void>} = {};

  public on<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void {
    if(!this.listener[eventName]){
      this.listener[eventName] = [];
    }
    this.listener[eventName]!.push(callback);
  }

  public emit<K extends keyof T>(eventName: K, data: T[K]): void {
    const cb = this.listener[eventName];
    if(cb){
      cb.forEach((cb) => cb(data));
    }
  }
}
