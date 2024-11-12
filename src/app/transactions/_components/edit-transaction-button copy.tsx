import { Button } from "@/_components/ui/button";
import { EditIcon } from "lucide-react";

export default function EditTransactionButton() {
  return (
    <div className="flex">
      <EditIcon />
      <Button></Button>;
    </div>
  );
}
