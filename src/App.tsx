import { useEffect } from "react";
import Layout from "./Layout";
import HomePage from "@/components/HomePage";
import { useLocalStorage } from "@uidotdev/usehooks";
import { createId } from "@paralleldrive/cuid2";

function App() {
  const [uid, saveUID] = useLocalStorage("uid", null);

  useEffect(() => {
    if (!uid) saveUID(createId());
  });

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
