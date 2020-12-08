---
title: Partial Typescript Types
keywords: ["typescript"]
description: Creating partials of Typescript types
---

You can use [Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype) to make all the properties of a type optional.

```ts
interface Foo {
    bar: string;
}

type FooPartial = Partial<Foo>;

const foo: FooPartial = {};
```