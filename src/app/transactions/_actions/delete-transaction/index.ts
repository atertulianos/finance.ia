"use server";

import { db } from "@/src/_lib/prisma";
import { revalidatePath } from "next/cache";
import { DeleteTransactionSchema } from "./schema";

export const deleteTransaction = async ({
  transactionId,
}: DeleteTransactionSchema) => {
  await db.transaction.delete({
    where: {
      id: transactionId,
    },
  });
  revalidatePath("/transactions");
  revalidatePath("/");
};
