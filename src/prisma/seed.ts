import { add, endOfYear, isBefore }  from "date-fns";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const today = new Date();

const questionnaire: Prisma.[] = [{
  name: "Membership Form",
}, {
  name: "Fueled Survey",
}
];

const insertQuestionnaire = async () => {
  for (const item of questionnaire) {
    const createdquestionnaire = await prisma.questionnaire.create({
      data: {
        ...item,
      },
    });
    console.log(`Created questionnaire ${createdquestionnaire.name}`);
  }
};


async function main() {
  await insertQuestionnaire();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
