import { createContext, ReactNode, useState } from 'react';

import challenges from "../../challenges.json";

interface ChallengesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;

  experienceToNextLevel: number;

  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level +1) * 4, 2);

  function levelUp() {
    setLevel(level +1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    
    setActiveChallenge(challenge); 
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  const value: ChallengesContextData = { 
    level, currentExperience, challengesCompleted, activeChallenge, 
    levelUp, startNewChallenge, resetChallenge,
    experienceToNextLevel
  };

  return (
    <ChallengesContext.Provider value={ value }>
      { children }
    </ChallengesContext.Provider>
  );
}