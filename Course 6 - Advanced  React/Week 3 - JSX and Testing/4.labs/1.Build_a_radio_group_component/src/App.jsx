import { useState } from "react";
import { RadioGroup, RadioOption } from "./Radio";
import "./App.css";

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected} />
      <RadioOption value="social_media">Social Media</RadioOption>
      <RadioOption value="friends">Friends</RadioOption>
      <RadioOption value="advertising">Advertising</RadioOption>
      <RadioOption value="other">Other</RadioOption>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;
