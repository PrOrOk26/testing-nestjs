cd apps/prisma-sample
DATABASE_URL=postgres://postgres:postgres@localhost:5433/prisma
prisma migrate deploy
cd ../..
