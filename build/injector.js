"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injector = void 0;
require("reflect-metadata");
class Injector extends Map {
    resolve(target) {
        const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
        const injections = tokens.map((token) => this.resolve(token));
        const instance = this.get(target);
        if (instance)
            return instance;
        const newInstance = new target(...injections);
        this.set(target, newInstance);
        return newInstance;
    }
    release() {
        for (const value of this.values()) {
            if (typeof value['release'] === 'function') {
                value['release']();
            }
        }
        this.clear();
    }
}
exports.Injector = Injector;
