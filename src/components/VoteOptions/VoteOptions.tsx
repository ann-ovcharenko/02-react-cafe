import React from "react";
import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VOTE_OPTIONS: VoteType[] = ["good", "neutral", "bad"];

const VoteOptions: React.FC<VoteOptionsProps> = ({
  onVote,
  onReset,
  canReset,
}) => {
  return (
    <div className={css.container}>
      {VOTE_OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          className={css.button}
          onClick={() => onVote(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {canReset && (
        <button
          type="button"
          className={`${css.button} ${css.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;
