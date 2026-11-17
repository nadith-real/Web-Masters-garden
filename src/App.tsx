import { useEffect } from "react";
import { CookieNotice, Footer, Nav } from "./components/Layout";
import { useRoute } from "./components/ui";
import Home from "./pages/Home";
import Case from "./pages/Case";
import Legal from "./pages/Legal";

export default function App() {
  const route = useRoute();

  // reset scroll on page change (goHome then scrolls to a section if requested)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [route]);

  let page;
  if (route.startsWith("work/")) page = <Case key={route} slug={route.slice(5)} />;
  else if (route === "privacy") page = <Legal kind="privacy" />;
  else if (route === "terms") page = <Legal kind="terms" />;
  else page = <Home />;

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <Nav />
      <main>{page}</main>
      <Footer />
      <CookieNotice />
    </div>
  );
}
