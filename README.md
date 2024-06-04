# PayZen

PayZen is a comprehensive financial application that allows users to add money from their bank accounts and perform peer-to-peer transactions.

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
3. Copy the `.env.example` file to `.env.local`:   
   ```bash
   cp .env.example .env.local
   ```
4. Insert your credentials into the environment variables in the `.env.local` file.

5. Start the development server:
   ```bash
   npm run dev
   ```
### Using Docker for Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/royaals/Payzen-wallet.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
   
3. Insert your credentials into the environment variables in the `docker-compose.yml` file.   

4. Run the Docker Compose command to start the development server:
   ```bash
   docker-compose up --build
   ```