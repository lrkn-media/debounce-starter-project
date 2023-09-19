This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Set up Supabase (or other provider)

In this tutorial, we use Supabase to store our dummy data. You may use another provider if you like.

If you are following along with the tutorial, create a Supabase project and copy the contents of .env.example into your own local .env file. Replace the place holder data with the credentials found in your Supabase project settings. Then run:

```bash
npx prisma generate
npx prisma db push
```

Then, check your Supabase DB to make sure the "User" table now exists in your DB.

Finally, seed your DB with dummy data, be sure to consult the schema.prisma file to see how the data is structured. If you are following along with the tutorial, we do this together.
