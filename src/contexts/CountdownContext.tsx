import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;

  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownContextProps {
  children: ReactNode;
}

const INITIAL_TIME: number = 0.05 * 60;

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownContextProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(INITIAL_TIME);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;


  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setTime(INITIAL_TIME);
    setHasFinished(false);
    setIsActive(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  const value: CountdownContextData = {
    minutes, seconds,
    hasFinished, isActive,
    startCountdown, resetCountdown
  };
  
  return (
    <CountdownContext.Provider value={value}>
      {children}
    </CountdownContext.Provider>
  );
}