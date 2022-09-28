import styles from './MainFAQ.module.css';
import ComputerBlock from './UI/ComputerBlock';
import TextContent from './UI/TextContent';

function MainFAQ() {
  return (
    <div className={styles.mainBlock}>
      <ComputerBlock />
      <TextContent />
    </div>
  );
}

export default MainFAQ;
