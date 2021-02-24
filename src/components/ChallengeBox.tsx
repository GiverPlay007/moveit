import { ChallengesContext } from "../contexts/ChallengesContext";
import { useContext } from "react";

import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {
        activeChallenge ? (
          <div className={styles.challengeActive}>
            <header>Ganhe { activeChallenge.amount } xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
              <strong>Novo desafio</strong>
              <p>{ activeChallenge.description }</p>
            </main>

            <footer>
              <button 
                type="button"
                className={styles.challengeFailedButton}
                onClick={resetChallenge}
              >
                Falhei
              </button>
              <button 
                type="button"
                className={styles.challengeSucceededButton}
              >
                Completei
              </button>
            </footer>
          </div>
        ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber desafios</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios
            </p>
          </div>
        )
      }
    </div>
  );
}
