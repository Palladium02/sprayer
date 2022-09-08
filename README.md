# sprayer

## Installation

```bash
npm install https://github.com/Palladium02/sprayer.git
```

Note that you also have to have `reflect-metadata` installed for sprayer to
work.

## Usage

```ts
import 'reflect-metadata';
import { Injectable, Releasable, bootstrap } from 'sprayer';

@Injectable()
class Dependency {
  public someMethod() {
    // functionality
  }
}

@Injectable()
class App {
  constructor(private dependency: Dependency) {}

  public run() {
    this.dependency.someMethod();
  }
}

function main() {
  const [app, release] = bootstrap<App>(App);
  app.run();
  release();
}

main();
```

### @Injectable

`@Injectable` is used to mark a class as injectable. This decoration is needed
to let `reflect-metadata` know that it should collect metadata about the class.
If you do not mark a dependency as injectable will lead to an error as the dependency
is unknown.

### bootstrap

`bootstrap` is the function that will resolve all dependencies for the given
entry class. It will create a dependency container where all dependencies live
in. `bootstrap` will return an instance of the given class and a `release` function
that will clear out the dependency container.

### Releasable

You can make your dependency classes extend `Releasable`. That will force you to
provide a `release` method on that given class. This `release` method will be
called when the dependency container is cleared, meaning if you call the `release`
function returned by `bootstrap` all depedency classes will execute their `release` method.
