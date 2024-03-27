import { PairData } from "./pairData";
import { Timestamp } from "firebase-admin/firestore";

export type TrendingTokens = [string, PairData][];
export interface StoredToTrend {
  id?: string;
  token: string;
  status: "PENDING" | "PAID" | "EXPIRED" | "MANUAL";
  hash: string;
  trendSlot: number;
  trendDuration: number;
  sentTo: string;
  amount: number;
  paidAt: Timestamp;
  expiresAt: Timestamp;
  initiatedBy: string;
}