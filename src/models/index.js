// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AdjustmentEnum = {
  "POSITIVE": "POSITIVE",
  "NEGATIVE": "NEGATIVE"
};

const { Transactions, Accounts, TransactionsAccounts } = initSchema(schema);

export {
  Transactions,
  Accounts,
  TransactionsAccounts,
  AdjustmentEnum
};