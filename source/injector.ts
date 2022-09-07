import 'reflect-metadata';
import { Constructable } from './types';

export class Injector extends Map {
  public resolve<T>(target: Constructable<T>): T {
    const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
    const injections = tokens.map((token: Constructable<T>) =>
      this.resolve<any>(token),
    );

    const instance = this.get(target);
    if (instance) return instance;

    const newInstance = new target(...injections);
    this.set(target, newInstance);
    return newInstance;
  }

  public release(): void {
    for (const value of this.values()) {
      if (typeof value['release'] === 'function') {
        value['release']();
      }
    }
    this.clear();
  }
}
