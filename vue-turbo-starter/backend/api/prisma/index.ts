import { PrismaClient } from '@prisma/client'
import path = require('path')
const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const instruments = await prisma.instruments.findMany()
  console.log(instruments)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })