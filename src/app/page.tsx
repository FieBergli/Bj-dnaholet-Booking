import { db } from "@/db/db";
import { test } from "@/db/schemas/test";

export default async function Home() {
  const testData = await db.select().from(test);
  console.log(process.env.DATABASE_URL!);
  return (
    <div>
      <ul>
        hei
        {testData.map((row, key) => {
          return <li key={key}>{row.test1}</li>;
        })}
      </ul>
    </div>
  );
}
