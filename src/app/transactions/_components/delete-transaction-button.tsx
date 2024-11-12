import { Button } from "@/_components/ui/button";
import { TrashIcon } from "lucide-react";

export default function DeleteTransactionButton() {
  return (
    <div className="flex">
      <TrashIcon />
      <Button></Button>;
    </div>
  );
}
