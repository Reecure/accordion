import styles from './MainFAQ.module.css';
import ComputerBlock from './UI/ComputerBlock';

function MainFAQ() {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.backgroungSquares}>
        <ComputerBlock />
      </div>
    </div>
  );
}

export default MainFAQ;
