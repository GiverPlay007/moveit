import { ChallengesContext } from "../contexts/ChallengesContext";
import { useContext } from "react";

import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={ styles.profileContainer }>
      <img src="https://github.com/GiverPlay007.png" alt="Profile image"/>
      <div>
        <strong>Willzinho</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </div>
    </div>
  );
}