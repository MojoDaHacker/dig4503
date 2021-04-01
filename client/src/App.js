import "./App.css";
import AgeSearch from "./components/AgeSearch";
import NameSearch from "./components/NameSearch";
import ReportingArea from "./components/ReportingArea";

export default function App() {

  return (
    <div className="App">
      <AgeSearch />
      <NameSearch />
      <ReportingArea />
    </div>
  );
}
