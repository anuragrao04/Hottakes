import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function InputWithButton() {
  const [first, setfirst] = useState("");
  const [uid] = useLocalStorage("uid", null);

  async function saveHottake() {
    try {
      const docRef = await addDoc(collection(db, "hottakes"), {
        hottake: first,
        uid: uid,
        upvotedUIDs: [],
        createdOn: Timestamp.fromDate(new Date("December 10, 1815")),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Hottake🔥"
        onChange={(e) => setfirst(e.target.value)}
      />
      <Button type="submit" onClick={saveHottake}>
        Add
      </Button>
    </div>
  );
}
