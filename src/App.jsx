import "./App.css";
import "./custom.css";
import Links from "./Links";
import { Helmet } from "react-helmet";
import {theme} from './constant/index'
import { useChatContext } from "./context-reducer/ChatContext";
function App() {
  const { themeIndex } = useChatContext();
  return (
    <main className={`${theme[themeIndex.value]} max-w-[1400px] mx-auto`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Duha</title>
        <link rel="canonical" href="https://ad-duha.netlify.app/" />
      </Helmet>
      <Links />
    </main>
  );
}

export default App;
