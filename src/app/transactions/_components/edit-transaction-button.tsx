import { Button } from "@/src/_components/ui/button";
import UpsertTransactionDialog from "@/src/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";
import { EditIcon } from "lucide-react";
import { useState } from "react";

interface EditTransactionButtonProps {
  transaction: Transaction;
}
export default function EditTransactionButton({
  transaction,
}: EditTransactionButtonProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <EditIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
        transactionId={transaction.id}
      />
    </>
  );
}
