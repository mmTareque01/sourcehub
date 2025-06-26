import HomePage from "@/pages/Home.page";



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
      <HomePage page={page} q={search || ''} />
      {/* <Suspense fallback={<Loading />}>
        <HomePage page={page} q={search || ''} />
      </Suspense> */}
    </>
  );
}
