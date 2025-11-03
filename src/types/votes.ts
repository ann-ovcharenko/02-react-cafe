export type VoteKey = "good" | "neutral" | "bad";

export interface VotesState {
  good: number;
  neutral: number;
  bad: number;
}
