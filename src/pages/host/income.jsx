import incomeImg from '../../assets/imgs/income.png'
import styles from './income.module.css'

export default function Income(){
    const transactionsData = [
        { amount: 720, date: "Jan 3, 2023", id: "1" },
        { amount: 560, date: "Dec 12, 2022", id: "2" },
        { amount: 980, date: "Dec 3, 2022", id: "3" },
    ]
    return (
        <section className={styles.content}>
            <h1>Income</h1>
            <p>
                Last <span>30 days</span>
            </p>
            <h2>$2,260</h2>
            <img
                className={styles.graph}
                src={incomeImg}
                alt="Income graph"
            />
            <div className={styles.info}>
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className={styles.transactions}>
                {transactionsData.map((item) => (
                    <div key={item.id} className={styles.transactionscard}>
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}