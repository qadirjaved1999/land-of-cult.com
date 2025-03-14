import MainPage from "@/components/home-page/MainPage";

export default function Home({ refs }) {
  return (
    <div className="container w-full min-w-full">
      <MainPage refs={refs}/>
    </div>
  );
}