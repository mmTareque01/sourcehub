import HomePage from "@/pages/Home.page";
import { Suspense } from "react";
import Loading from "./loading";


export default async function Home({ searchParams }: {
  searchParams: Promise<{
    page?: number
    search?: string
  }>
}) {
  const { page, search } = await searchParams;
  return (
    <>
      {/* <HomePage page={page} q={q||''}/> */}

      <Suspense fallback={<Loading />}>
        <HomePage page={page} q={search || ''} />
      </Suspense>
    </>
  );
}
