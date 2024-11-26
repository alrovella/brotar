import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.deleteMany({});
  await prisma.category.createMany({
    data: [
      {
        name: "De interior",
      },
      {
        name: "De exterior",
      },
      {
        name: "Acuaticas",
      },
      {
        name: "Orquídeas",
      },
      {
        name: "Suculentas",
      },
      {
        name: "Cactus",
      },
      {
        name: "Bonsai",
      },
      {
        name: "Frutales",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
