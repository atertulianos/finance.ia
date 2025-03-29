import AddTransactionButton from "@/src/_components/add-transaction-button";
import { DataTable } from "@/src/_components/ui/data-table";
import { ScrollArea } from "@/src/_components/ui/scroll-area";
import { canUserAddTransaction } from "@/src/_data/can-user-add-transaction";
import { db } from "@/src/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { transactionColumns } from "./_columns";
// import TransactionService from "@/services/controllers/Transactions.controller";
// import { auth } from "@clerk/nextjs/server";

export default async function TransactionPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: "desc",
    },
  });
  const userCanAddTransaction = await canUserAddTransaction();

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
      </div>
      <ScrollArea className="h-full">
        <DataTable columns={transactionColumns} data={transactions} />
      </ScrollArea>
    </div>
  );
}
