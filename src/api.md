---
title: API
layout: layouts/base.liquid
---

# API

This notes management site exposes a static JSON file under [`/api/notes.json`](/api/notes.json). It is `Note[]` where `Note` is:
```ts
interface Note {
    name: string;
    url: string;
    description?: string;
}
```