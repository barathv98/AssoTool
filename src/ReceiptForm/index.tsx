import { useCallback, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Screenshot from '../Screenshot';
import exportAsImage from '../utilities/exportAsImage';
import allShortMonthYear from '../utilities/dateTime';

const ReceiptForm = () => {
    const [name, setName] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [date, setDate] = useState<string>(allShortMonthYear(new Date()));
    const [mode, setMode] = useState<string>('');
    const elementRef = useRef(null);
    const onClickCTA = () => {
        if (elementRef.current) {
            exportAsImage(elementRef.current, 'assoReceipt', true);
        }
    };
    const onChangeMode = useCallback((e: any) => {
        setMode(e.target.value);
    }, []);
    return (
        <>
            <div className={styles.receipt}>
                <label className={styles.label}>Received from</label>
                <textarea className={styles.textarea} rows={3} value={name} onChange={e => setName(e.target.value)} />
                <label className={styles.label}>Amount</label>
                <input type="text" className={styles.inputField} value={amount} onChange={e => setAmount(e.target.value)} />
                <label className={styles.label}>Date</label>
                <input type="text" className={styles.inputField} value={date} onChange={e => setDate(e.target.value)} />
                <label className={styles.label} htmlFor="mode">Received by (Cash/Cheque/others)</label>
                <select className={styles.inputField} name="mode" id="mode" onChange={onChangeMode}>
                    <option value="Cash">Cash</option>
                    <option value="Cheque">Cheque</option>
                    <option value="RTGS">RTGS</option>
                    <option value="NEFT">NEFT</option>
                    <option value="Google Pay">Google Pay</option>
                    <option value="PhonePe">PhonePe</option>
                </select>
                <button className={styles.cta} onClick={onClickCTA}>Generate Receipt</button>
            </div>
            <Screenshot name={name} amount={amount} date={date} mode={mode} refs={elementRef} />
        </>
    );
};

export default ReceiptForm;