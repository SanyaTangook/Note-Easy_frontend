import axios from "axios";
import Link from "next/link";

export default async function Page() {
  const GetData = await axios.get("http://localhost:3001/Note");
  return (
    <>
      {Object.keys(GetData.data).map((index) => (
        <div className="card w-96 bg-base-100 shadow-xl m-4">
          <div className="card-body">
            <h2 className="card-title">{GetData.data[index].Title}</h2>
            <p> {GetData.data[index].content}</p>
            <div className="card-actions justify-end">
              <Link href={`/Note/${GetData.data[index].Title}`} className="btn btn-primary">Look Note</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
