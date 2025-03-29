import { TransactionCategory, TransactionType } from "@prisma/client";

export type TransactionPercentagePerType = Record<TransactionType, number>;

export interface TotalExpensePerCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
