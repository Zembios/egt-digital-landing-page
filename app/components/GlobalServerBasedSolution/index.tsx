import styles from './gsbs.module.scss';

function GlobalServerBasedSolution() {
  return <div className={styles.globalServerBasedSolution}>
    <div className={styles.gsbsTitle}>Our Global Server Based Solution</div>

    <div className={styles.gsbsShowcase}>
      <img className={styles.gsbsImg} src='https://fastly.picsum.photos/id/1047/1440/500.jpg?hmac=4eTDGIccoOYQ2cjPfwQK3J5gGLhJIWytIcdamhpYhMU'/>
      <div className={styles.gsbsShowcaseTitle}>OCTOPUS</div>
      <div className={styles.gsbsShowcaseSubtitle}>Server Based Gaming</div>
      <div className={styles.gsbsShowcaseCircle}/>
    </div>
  </div>
}

export default GlobalServerBasedSolution;