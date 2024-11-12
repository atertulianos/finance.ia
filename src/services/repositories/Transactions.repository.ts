import { db } from "@/_lib/prisma";

const MAX_RECORDS = 50;
const MIN_OFFSET = 0;

const Transaction = {
  get: async ({ where = {}, orderBy = {}, limit = 10, offset = 0 }) => {
    const take = Math.min(limit, MAX_RECORDS);
    const skip = Math.max(offset, MIN_OFFSET);

    const records = await db.transaction.findMany({
      where,
      orderBy,
      take,
      skip,
    });
    return records;
  },
  count: async ({ where = {} }) => {
    const count = await db.transaction.count({
      where,
    });
    return count;
  },
};

export default Transaction;
