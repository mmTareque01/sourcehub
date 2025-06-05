import HomePage from "@/pages/Home.page";


export default async function Home({ searchParams }: { searchParams: Promise<{ 
  page?: number 
  q?: string
}> }) {
  const {page,q} = await searchParams;
  return (
    <>
      <HomePage page={page} q={q||''}/>
    </>
  );
}
