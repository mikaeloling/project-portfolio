import styles from './LiveDemoButton.module.css';


export const LiveDemoButton = () => {
return (
<div className={styles.liveDemoButton}>
<img className={styles.liveDemoIcon} alt="" src="src/assets/LiveDemo.svg" />
<div className={styles.liveDemo}>Live demo</div>
</div>);
};
export default LiveDemoButton;
