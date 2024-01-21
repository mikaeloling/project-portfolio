import styles from './ViewCodeButton.module.css';

export const ViewCodeButton = () => {

return (
<div className={styles.viewCodeButton}>
<img className={styles.githubIcon} alt="" src="src/assets/github.svg" />
<div className={styles.viewTheCode}>View the code</div>
</div>);
};
export default ViewCodeButton;