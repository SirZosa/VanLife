import { BsStarFill } from "react-icons/bs"
import imgReview from '../../assets/imgs/reviews.png'
import styles from './reviews.module.css'

export default function Reviews(){
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    
    return (
    <section className={styles.content}>
            <div className={styles.header}>
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <img
                className={styles.graph}
                src={imgReview}
                alt="Review graph"
            />
            <h3>Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id}>
                    <div>
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className={styles.stars} key={i} />
                        ))}
                        <div className={styles.info}>
                            <p className={styles.name}>{review.name}</p>
                            <p className={styles.date}>{review.date}</p>
                        </div>
                        <p className={styles.text}>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
        </section>
    )
}