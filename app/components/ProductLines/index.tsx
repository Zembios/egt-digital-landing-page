import styles from './productLines.module.scss';

function ProductLines() {
  return <div className={styles.productLines}>
    <div className={styles.productLinesTitle}>Our Products</div>

    <div className={styles.productLinesWrapper}>
      <div className={styles.productLine}>
        <img src='https://fastly.picsum.photos/id/698/300/500.jpg?hmac=0Dj0rhPBwjjhC9zDlBK2jPRwzDbZsPc7AEu9f6pj3YA'/>
        <div className={styles.productLineName}>R-LINE</div>
        <div className={styles.productLineCircle}/>
      </div>
      <div className={styles.productLine}>
        <img src='https://fastly.picsum.photos/id/698/300/500.jpg?hmac=0Dj0rhPBwjjhC9zDlBK2jPRwzDbZsPc7AEu9f6pj3YA'/>
        <div className={styles.productLineName}>S-LINE</div>
        <div className={styles.productLineCircle}/>
      </div>
      <div className={styles.productLine}>
        <img src='https://fastly.picsum.photos/id/698/300/500.jpg?hmac=0Dj0rhPBwjjhC9zDlBK2jPRwzDbZsPc7AEu9f6pj3YA'/>
        <div className={styles.productLineName}>T-LINE</div>
        <div className={styles.productLineCircle}/>
      </div>
    </div>
  </div>
}

export default ProductLines;