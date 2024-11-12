import Transaction from "../repositories/Transactions.repository";

const TransactionService = {
  getTransactionsUser: async (userId: string, page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    const data = await Transaction.get({ where: { userId }, limit, offset });
    const total = await Transaction.count({});
    const totalPages = Math.ceil(total / limit);
    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total,
        totalPages,
      },
    };
  },
};

export default TransactionService;
