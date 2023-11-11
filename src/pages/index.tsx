import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const pleaseSub = api.subscribe.sub.useQuery({
    text: "codeDarsh",
  });

  return (
    <>
      <Head>
        <title>TRPCwithDarshil</title>
        <meta name="description" content="This is a simple curd operation by TRPC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          
          <p className="text-2xl text-white">{pleaseSub.data ? pleaseSub.data?.pleaseSub 
          + ' Channel' : "Loading Channel"}</p>
        </div>
      </main>
    </>
  );
}
