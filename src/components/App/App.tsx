import React, { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type { VotesState, VoteKey } from "../../types/votes";

const App: React.FC = () => {
  const initialVotes: VotesState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [votes, setVotes] = useState<VotesState>(initialVotes);

  const handleVote = (type: VoteKey) => {
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
