import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum AdjustmentEnum {
  POSITIVE = "POSITIVE",
  NEGATIVE = "NEGATIVE"
}



type EagerTransactions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transactions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly DateTime?: string | null;
  readonly Adjustment?: AdjustmentEnum | keyof typeof AdjustmentEnum | null;
  readonly Amount?: number | null;
  readonly Accounts?: (TransactionsAccounts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransactions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transactions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly DateTime?: string | null;
  readonly Adjustment?: AdjustmentEnum | keyof typeof AdjustmentEnum | null;
  readonly Amount?: number | null;
  readonly Accounts: AsyncCollection<TransactionsAccounts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Transactions = LazyLoading extends LazyLoadingDisabled ? EagerTransactions : LazyTransactions

export declare const Transactions: (new (init: ModelInit<Transactions>) => Transactions) & {
  copyOf(source: Transactions, mutator: (draft: MutableModel<Transactions>) => MutableModel<Transactions> | void): Transactions;
}

type EagerAccounts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Accounts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Balance?: number | null;
  readonly transactionss?: (TransactionsAccounts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccounts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Accounts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Balance?: number | null;
  readonly transactionss: AsyncCollection<TransactionsAccounts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Accounts = LazyLoading extends LazyLoadingDisabled ? EagerAccounts : LazyAccounts

export declare const Accounts: (new (init: ModelInit<Accounts>) => Accounts) & {
  copyOf(source: Accounts, mutator: (draft: MutableModel<Accounts>) => MutableModel<Accounts> | void): Accounts;
}

type EagerTransactionsAccounts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TransactionsAccounts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly transactionsId?: string | null;
  readonly accountsId?: string | null;
  readonly transactions: Transactions;
  readonly accounts: Accounts;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransactionsAccounts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TransactionsAccounts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly transactionsId?: string | null;
  readonly accountsId?: string | null;
  readonly transactions: AsyncItem<Transactions>;
  readonly accounts: AsyncItem<Accounts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TransactionsAccounts = LazyLoading extends LazyLoadingDisabled ? EagerTransactionsAccounts : LazyTransactionsAccounts

export declare const TransactionsAccounts: (new (init: ModelInit<TransactionsAccounts>) => TransactionsAccounts) & {
  copyOf(source: TransactionsAccounts, mutator: (draft: MutableModel<TransactionsAccounts>) => MutableModel<TransactionsAccounts> | void): TransactionsAccounts;
}