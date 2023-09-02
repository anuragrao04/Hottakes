import Hottake from "./Hottake";
import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";

function Hottakes() {
  const [hottakes, setHottakes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "hottakes"));
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
      {hottakes.map((hottake) => (
        <Hottake data={hottake} />
      ))}
    </div>
  );
}

export default Hottakes;
