import { Button } from "@/_components/ui/button";
import { DataTable } from "@/_components/ui/data-table";
import { ArrowDownUpIcon } from "lucide-react";
import { transactionColumns } from "./_columns";
import { db } from "@/_lib/prisma";
// import TransactionService from "@/services/controllers/Transactions.controller";
// import { auth } from "@clerk/nextjs/server";

export default async function TransactionPage() {
  //   const { userId } = await auth();
  //   const transactions = await TransactionService.getTransactionsUser(
  //     userId as string,
  //   );
  const transactions = await db.transaction.findMany();

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar Transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
}
