# sprayer

## Installation

```bash
npm install https://github.com/Palladium02/dependency-injection.git
```

## Usage

```ts
import { Injectable, Releasable, bootstrap } from 'dependency-injection';

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
