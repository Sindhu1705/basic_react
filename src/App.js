import CoreConcepts from "./components/CoreConcepts.js";
import Header from "./components/Header/Header.js";
import Examples from "./components/Examples.js";
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
