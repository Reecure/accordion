import background from '../media/bg-pattern-desktop.svg';
import computer from '../media/illustration-woman-online-desktop.svg';
import box from '../media/illustration-box-desktop.svg';
import styles from './ComputerBlock.module.css';

function ComputerBlock() {
  return (
    <div className={styles.imagesPosition}>
      <div className={styles.imagesPosition2}>
        <img className={styles.computerImage} src={computer} alt="computer" />
        <img className={styles.squaresImage} src={background} alt="squares" />
      </div>
    </div>
  );
}

export default ComputerBlock;
