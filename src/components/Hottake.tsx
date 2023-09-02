import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useHottakeStore } from "@/lib/useHottakeStore";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

function Hottake({ data }) {
  const [uid] = useLocalStorage("uid", null);
  async function handleClick() {
    const washingtonRef = doc(db, "hottakes", data.id);
    const check = data.upvotedUIDs.includes(uid);
    if (check) alert("Already voted");

    await updateDoc(washingtonRef, {
      upvotedUIDs: arrayUnion(uid),
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>🔥</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{data.hottake}</p>
      </CardContent>
      <CardFooter className="gap-8">
        <Button onClick={handleClick}>Upvote</Button>
        <Button variant="outline" size="icon">
          {data.upvotedUIDs.length}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Hottake;
