import { useEffect } from "react";
import Layout from "./Layout";
import HomePage from "@/components/HomePage";
import { createId } from "@paralleldrive/cuid2";

function App() {
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    if (!uid) localStorage.setItem("uid", createId());
  });

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
