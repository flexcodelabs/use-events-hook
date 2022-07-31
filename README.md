[![npm](https://img.shields.io/npm/v/@flexcodelabs/use-events-hooks)](https://www.npmjs.com/package/@flexcodelabs/use-events-hooks) [![NPM](https://img.shields.io/npm/l/@flexcodelabs/use-events-hooks)](https://www.npmjs.com/package/@flexcodelabs/use-events-hooks)

[Package Name](#@flexcodelabs/use-events-hooks)

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)

## Installation

`npm install @flexcodelabs/use-events-hooks`

or

`yarn add @flexcodelabs/use-events-hooks`

## Usage

```js
...
import { useEventListener, useWindowSize, useClickOutsideListener} from '@flexcodelabs/use-events-hooks';

const Test = () => {
  const buttonRef = useRef(null);

  // window size
  const { width, height } = useWindowSize();

  // event listener
  useEventListener("scroll", () => {
    console.log("scrolled");
  });

  // detect outside clicks
  useClickOutsideListener(buttonRef, () => {
    console.log("clicked outside");
  });

  return (
    <div>
      viewport size: {width}x{height}
      <button ref={buttonRef}>Text</button>
    </div>
  );
};

```

## Examples

[Source code](https://github.com/flexcodelabs/use-events-hooks)
