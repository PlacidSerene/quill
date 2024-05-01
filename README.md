<a name="readme-top"></a>

# Quill - The SaaS for Students

![Quill - The SaaS for Students](/public/thumbnail.png "Quill - The SaaS for Students")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
quill/
  |- prisma/
    |- schema.prisma
  |- public/
  |- src/
    |-- app/
        |--- _trpc/
        |--- api/
        |--- auth-callback/
        |--- dashboard/
        |--- pricing/
        |--- favicon.ico
        |--- globals.css
        |--- layout.tsx
        |--- page.tsx
    |-- components/
        |--- chat/
        |--- ui/
        |--- billing-form.tsx
        |--- dashboard.tsx
        |--- delete-user-modal.tsx
        |--- icons.tsx
        |--- max-width-wrapper.tsx
        |--- mobile-nav.tsx
        |--- navbar.tsx
        |--- pdf-fullscreen.tsx
        |--- pdf-renderer.tsx
        |--- providers.tsx
        |--- upgrade-button.tsx
        |--- upload-button.tsx
        |--- user-account-nav.tsx
    |-- config/
        |--- infinite-query.ts
        |--- stripe.ts
    |-- db/
        |--- index.ts
    |-- lib/
        |--- validators/
        |--- openai.ts
        |--- pinecone.ts
        |--- stripe.ts
        |--- uploadthing.ts
        |--- utils.ts
    |-- trpc/
        |--- index.ts
        |--- trpc.ts
    |-- types/
        |--- message.ts
    |-- middleware.ts
  |- .env
  |- .eslintrc.js
  |- .gitignore
  |- next-env.d.ts
  |- components.json
  |- environment.d.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Clone this repository to your local computer.
2. Create `.env` file in **root** directory.
3. Contents of `.env`:

### 4. Clerk

- **Environment Variables**:
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - `CLERK_SECRET_KEY`
  - `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
  - `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
  - `NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/sign-in`
- **Instructions**:
  - Visit [Clerk website](https://clerk.com) and sign in to your account.
  - Navigate to your account settings or developer dashboard to find the credentials.

### 5. Supabase Database URI

- **Environment Variable**: `DATABASE_URL=`
- **Instructions**:
  - Access your PostgreSQL supabase.
  - Locate the database connection details.
  - Construct the URI following the provided template and replace the placeholders with your actual database credentials.

### 6. Uploadthing

- **Environment Variables**:
  - `UPLOADTHING_SECRET`
  - `UPLOADTHING_APP_ID`
- **Instructions**:
  - Visit the Uploadthing developer dashboard or website.
  - Log in to your account and navigate to the API or application settings.
  - Retrieve `UPLOADTHING_SECRET` and `UPLOADTHING_APP_ID`.

### 7. Pinecone API Key

- **Environment Variable**: `PINECONE_API_KEY=xxxxxxxxxx-xxxxx-xxxx-xxxxxx-xxxxxxxxxxx`
- **Instructions**:
  - Visit Pinecone's official website and log in to your account.
  - Navigate to the API or developer section to find your API key.
  - Retrieve `PINECONE_API_KEY`.

### 8. OpenAI API Key

- **Environment Variable**: `OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- **Instructions**:
  - Log in to your OpenAI account on the official website.
  - Navigate to the API or developer dashboard.
  - Retrieve your API key.

### 9. Stripe

- **Environment Variables**:
  - `STRIPE_SECRET_KEY`
  - `STRIPE_PRICE_ID`
  - `STRIPE_WEBHOOK_SECRET`
- **Instructions**:
  - Log in to your Stripe account.
  - Navigate to the API or developer section.
  - Retrieve the following:
    - `STRIPE_SECRET_KEY`
    - `STRIPE_PRICE_ID`
    - `STRIPE_WEBHOOK_SECRET`

10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Postgresql](https://skillicons.dev/icons?i=postgres "Postgresql")](https://www.postgresql.org/ "Postgresql")

<p align="right">(<a href="#readme-top">back to top</a>)</p>
