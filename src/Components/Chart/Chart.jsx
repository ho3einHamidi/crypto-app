import styles from "./Chart.module.css";
function Chart({ chart, setChart }) {
  console.log(chart);
  return (
    <div className={styles.container}>
      <div onClick={() => setChart(false)} className={styles.cross}>
        <p>X</p>
      </div>
      <div className={styles.chart}></div>
    </div>
  );
}

export default Chart;
