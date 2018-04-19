import express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Invoice } from '../src';

const app = express();

app.get('/', (req, res) => {
  const invoice = {
    createdDate: '2018-03-16',
    dueDate: '2018-04-16',
    paymentMethod: 'PayPal',
    id: 'ABCD-1234',
    description: 'Post-show cravings',
    items: [
      {
        description: 'Shake Shack',
        amount: 9.59,
      },
      {
        description: 'Crinkle Cut Fries',
        amount: 2.99,
      },
      {
        description: 'Strawberry Shake',
        amount: 5.29,
      },
    ],
  };

  const customer = {
    name: 'Lin-Manuel Miranda',
    email: 'me@linmanuel.com',
    address: [
      '226 W 46th St',
      'New York, NY 10036',
    ],
    logoUrl: 'http://p.fod4.com/p/media/c9c34f4e09/JqdTM3oTiqTcrbFoLdxb_Hamilton_200x200.jpg',
  };

  const company = {
    name: 'Shake Shack',
    address: [
      'Madison Square Park',
      'New York, NY 10010',
    ],
    email: 'contact@shakeshack.com',
    logoUrl: 'https://www.shakeshack.com/wp-content/themes/shakeshack/images/shakeshack_logo.png',
  };

  const html = renderToStaticMarkup(
    <Invoice
      invoice={invoice}
      customer={customer}
      company={company}
    />,
  );

  res.send(`<!doctype html>${html}`);
});

const PORT = process.env.PORT || 3111;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
