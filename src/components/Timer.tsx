import { useReactiveVar } from "@apollo/client";
import { timerVar } from "../state";

const Timer = () => {
  const timer = useReactiveVar(timerVar);

  return (
    <h1>
      {timer === 0
        ? "Timer starts when the first item is added"
        : `Time wasted: ${timer} seconds`}
    </h1>
  );
};

export default Timer;