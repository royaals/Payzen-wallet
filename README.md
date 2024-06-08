# PayZen

PayZen is a comprehensive financial application that allows users to add money to wallet and perform peer-to-peer transactions.

## Features


- **Peer-to-Peer Transactions**: The application supports direct transactions between users, making it easy to send and receive money.
- **Transaction History**: Users can view their transaction history, providing a clear record of all their financial activities.
- **User Authentication**: The application supports user sign-up/sign-in via email or social media accounts.
- **Profile Management**: This includes user onboarding and the ability for users to update their profiles.

## Technologies Used

- Next.js
- TypeScript
- Prisma
- NextAuth
- Turborepo
- PostgreSQL
- Node.js

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/royaals/Payzen-wallet.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
3. Navigate to the DB directory:
   ```bash
    cd packages/db
   ```   
4. Run Prisma migrations. This command will apply the database schema changes:
    ```bash
    npx prisma migrate dev --name init
    ```

5. Generate the Prisma client. This command will generate the Prisma client code:
    ```bash
    npx prisma generate
    ```   
6. Start the development server:
   ```bash
   npm run dev
   ```
