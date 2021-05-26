import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import ContentA from "./components/ContentA/ContentA";
import CallOut from "./components/CallOut/CallOut";
import { SmallCard } from "./components/SmallCard/SmallCard";
import { ContentB } from "./components/ContentB/ContentB";
import SmallCardContainer from "./components/SmallCardContainer/SmallCardContainer";
import { CallOut2 } from "./components/CallOut2/CallOut2";
import { DownloadDunzo } from "./components/DownloadDunzo/DownloadDunzo";
import { Areas } from "./components/Areas/Areas";
import { EssentialsP } from "./components/EssentialsP/EssentialsP";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentA />
      <EssentialsP />
      <CallOut />
      <SmallCardContainer />
      <ContentB />
      <DownloadDunzo />
      <Areas />
    </div>
  );
}

export default App;
