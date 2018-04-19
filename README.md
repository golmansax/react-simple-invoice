# React simple invoice

A React component inspired by this simple HTML invoice template (https://github.com/sparksuite/simple-html-invoice-template).

## Server-side usage

```js
import express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Invoice } from 'react-simple-invoice';

const app = express()

app.get('/', (req, res) => {
  const html = renderToStaticMarkup(
    <Invoice
      invoice={invoice}
      customer={customer}
      company={company}
    />
  );

  res.send(`<!doctype html>${html}`);
});
```
