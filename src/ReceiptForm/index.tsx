import { useRef, useState } from 'react';
import styles from './styles.module.scss';
import Screenshot from '../Screenshot';
import exportAsImage from '../utilities/exportAsImage';

const ReceiptForm = () => {
    const [name, setName] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [date, setDate] = useState<string>();
    const [mode, setMode] = useState<string>('');
    const elementRef = useRef(null);
    const onClickCTA = () => {
        if (elementRef.current) {
            exportAsImage(elementRef.current, 'assoReceipt', true);
        }
    };
    return (
        <>
            <div className={styles.receipt}>
                <label className={styles.label}>Received from</label>
                <textarea className={styles.textarea} rows={3} value={name} onChange={e => setName(e.target.value)} />
                <label className={styles.label}>Amount</label>
                <input type="text" className={styles.inputField} value={amount} onChange={e => setAmount(e.target.value)} />
                <label className={styles.label}>Date</label>
                <input type="text" className={styles.inputField} value={date} onChange={e => setDate(e.target.value)} />
                <label className={styles.label}>Received by (Cash/Cheque/others)</label>
                <input type="text" className={styles.inputField} value={mode} onChange={e => setMode(e.target.value)} />
                <button className={styles.cta} onClick={onClickCTA}>Generate Receipt</button>
            </div>
            <Screenshot name={name} amount={amount} date={date} mode={mode} refs={elementRef} />
        </>
    );
};

export default ReceiptForm;