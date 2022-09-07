"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
// import 'reflect-metadata';
const injector_1 = require("./injector");
function bootstrap(target) {
    const injector = new injector_1.Injector();
    const entry = injector.resolve(target);
    return [entry, () => injector.release()];
}
exports.bootstrap = bootstrap;
