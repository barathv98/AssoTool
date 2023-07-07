import { ReactComponent as SuccessTick } from '../assets/successTick.svg';
import { ToWords } from 'to-words';
import styles from './styles.module.scss';

const Screenshot = (props: any) => {
    const { name, amount, date, mode, refs } = props;
    const toWords = new ToWords();
    const rupee = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });
    return (
        <div className={styles.screenshot} ref={refs}>
            <div className={styles.header}>
                <img className={styles.image} src={require('../assets/logo.png')} alt='logo' />
                <div className={styles.title}>ASSOCIATE PRINTS</div>
            </div>
            <div className={styles.details}>
                <div className={styles.highlight}>
                    <div className={styles.icon}>
                        <SuccessTick />
                    </div>
                    <div className={styles.amount}>{rupee.format(amount)}</div>
                    <div className={styles.subTitle}>Amount Received</div>
                </div>
                <div className={styles.dataRow}>
                    <div className={styles.dataLabel}>Received from</div>
                    <div className={styles.dataValue}>{name}</div>
                    <div className={styles.dataLabel}>Amount in words</div>
                    {amount && <div className={styles.dataValue}>{toWords.convert(amount, { currency: true })}</div>}
                    <div className={styles.dataLabel}>Date</div>
                    <div className={styles.dataValue}>{date}</div>
                    <div className={styles.dataLabel}>Received by</div>
                    <div className={styles.dataValue}>{mode}</div>
                </div>
            </div>
        </div>
    );
};

export default Screenshot;
