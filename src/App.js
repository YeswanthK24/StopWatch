import "./styles.css";
import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

export default function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [inter, setInter] = useState();
  const [status, setStatus] = useState(0);

  var updateMs = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateH = time.h;

  const start = () => {
    run();
    setInter(setInterval(run, 10));
    setStatus(1);
  };

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;

    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  const stop = () => {
    clearInterval(inter);
    setStatus(0);
  };
  const reset = () => {
    clearInterval(inter);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setStatus(0);
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <div className="App">
        <Display time={time} />
        <Button start={start} status={status} stop={stop} reset={reset} />
      </div>
    </div>
  );
}
