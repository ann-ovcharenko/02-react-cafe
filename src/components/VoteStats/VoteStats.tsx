import React from "react";
import css from "./VoteStats.module.css";
import type { VotesState } from "../../types/votes";

interface VoteStatsProps {
  votes: VotesState;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats: React.FC<VoteStatsProps> = ({
  votes,
  totalVotes,
  positiveRate,
}) => {
  if (totalVotes === 0) {
    return null;
  }

  const { good, neutral, bad } = votes;

  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
