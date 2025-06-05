import HomePage from "@/pages/Home.page";


export default async function Home({ searchParams }: { searchParams: Promise<{ page?: number }> }) {
  const {page} = await searchParams;
  return (
    <>
      <HomePage page={page} />
    </>
  );
}
