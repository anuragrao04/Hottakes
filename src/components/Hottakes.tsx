import Hottake from "./Hottake";
import { db } from "@/lib/firebase";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { collection, query } from "firebase/firestore";

function Hottakes() {
  const [hottakes, setHottakes] = useState<any>([]);
  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "hottakes"));
      onSnapshot(q, (querySnapshot) => {
        setHottakes(
          querySnapshot.docs.map((docSnapshot) => {
            return {
              id: docSnapshot.id,
              ...docSnapshot.data(),
            };
          })
        );
      });
    }
    fetchData();
  });

  return (
    <div className="grid grid-cols-4 gap-4">
      {hottakes.map((hottake: any) => (
        <Hottake data={hottake} />
      ))}
    </div>
  );
}

export default Hottakes;
