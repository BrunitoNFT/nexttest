This is a [Next.js](https://nextjs.org/) 13 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Firstly , install dependencies:

```bash
npm install
# or
```

Secondly , run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technical stuff

- I used both client side rendering (CSR) with "use client" in the top of App.js and server side rendering (SSR) with the default components.
  SSR is present in all the components less in App.js (CSR) because is the only component which needs client logic of react, such as useState.

- I have written again the function fetchFromTheServer() inside the page.js for seeing clear SSR features. I know that It would be a greater practise using a single function for page.js and App.js fetches.

- The console logs are there again, for letting things clear, and one more time showing the difference between (CSR) and (SSR).
