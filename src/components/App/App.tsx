import CafeInfo from "../CafeInfo/CafeInfo";
import React, { useState } from "react";
import css from "./App.module.css";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type { Votes, VoteType } from "../../types/votes.ts";

const App: React.FC = () => {
  const initialVotes: Votes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };

  const total = Object.values(votes).reduce((sum, count) => sum + count, 0);

  const positivePercentage = total ? Math.round((votes.good / total) * 100) : 0;

  const canReset = total > 0;

  return (
    <div className={css.app}>
      <CafeInfo />

      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />

      {total > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={total}
          positiveRate={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
