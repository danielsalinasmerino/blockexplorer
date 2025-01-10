import React from "react";

import "./BlockCard.css";

const BlockCard = ({ block }) => {
  return (
    <div className="card">
      <h1>Ethereum Mainnet's current block</h1>
      <h2>Block Details</h2>
      <p>
        <strong>Hash:</strong> {block.hash || "Pending"}
      </p>
      <p>
        <strong>Parent Hash:</strong> {block.parentHash}
      </p>
      <p>
        <strong>Block Number:</strong>{" "}
        {block.number !== null ? block.number : "Pending"}
      </p>
      <p>
        <strong>Timestamp:</strong>{" "}
        {new Date(block.timestamp * 1000).toLocaleString()}
      </p>
      <p>
        <strong>Nonce:</strong> {block.nonce}
      </p>
      <p>
        <strong>Difficulty:</strong> {block.difficulty}
      </p>
      <p>
        <strong>Gas Limit:</strong> {block.gasLimit.toString()}
      </p>
      <p>
        <strong>Gas Used:</strong> {block.gasUsed.toString()}
      </p>
      <p>
        <strong>Miner:</strong> {block.miner}
      </p>
      <p>
        <strong>Transactions:</strong> {block.transactions.length}{" "}
        transaction(s)
      </p>
    </div>
  );
};

export default BlockCard;
