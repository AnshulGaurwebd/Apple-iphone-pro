import { useRef } from "react";
import Display from "./components/Display";
import Jumbo from "./components/jumbo";
import Nav from "./components/nav";
import Sound from "./components/Sound";
import Webgi from "./components/webgi";
import Loader from "./components/Loader";

function App() {
  const webgiRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbo />
        <Sound />
        <Display triggerPreview={handlePreview} />
      </div>

      <Webgi contentRef={contentRef} ref={webgiRef} />
    </div>
  );
}

export default App;
