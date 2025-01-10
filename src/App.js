import { useEffect, useState } from "react";
import BlockCard from "./components/BlockCard/BlockCard";
import alchemy from "./utils/alchemy/alchemy-configuration";

import "./App.css";

function App() {
  const [block, setBlock] = useState();

  useEffect(() => {
    async function getBlock() {
      setBlock(await alchemy.core.getBlock());
    }

    getBlock();
  });

  return <div className="App">{block && <BlockCard block={block} />}</div>;
}

export default App;
