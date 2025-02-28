import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
