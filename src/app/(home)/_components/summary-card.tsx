import AddTransactionButton from "@/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
  userCanAddTransaction?: boolean;
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size,
  userCanAddTransaction,
}: SummaryCardProps) => {
  return (
    <Card className={`${size === "large" ? "bg-slate-900/75" : ""}`}>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={`${size === "large" ? "text-white opacity-70" : "text-muted-foreground"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col justify-between sm:flex-row sm:items-center sm:gap-2">
        <p
          className={`font-bold ${size === "large" ? "text-4xl" : "text-2xl md:m-0 md:text-xl"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && (
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
