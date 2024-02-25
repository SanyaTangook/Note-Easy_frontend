import axios from "axios";
import Link from "next/link";
export default async function NotePage({ params }) {
  const GetData = (await axios.get(`http://localhost:3001/Note/${params.id}`))
    .data[0];

  return (
    <>
        <h1>Title  : {GetData.Title}</h1>
        <h1>Content: {GetData.content}</h1>
        <h1>Date   : {GetData.Date}</h1>
        <Link href='/' className="btn btn-success m-2"> Back Home </Link>
    </>
  );
}
