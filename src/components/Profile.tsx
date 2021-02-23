import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={ styles.profileContainer }>
      <img src="https://github.com/GiverPlay007.png" alt="Profile image"/>
      <div>
        <strong>Willzinho</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}