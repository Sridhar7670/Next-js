import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <>
    <Header/>
    <div className={styles.container}>
      <h1 className={styles.heading}>📬 Contact Us — Alpine Codes</h1>

      <div className={styles.introCard}>
        <p>
          We are a passionate team of web developers from <strong>Alpine Codes</strong>, a startup focused on delivering clean and scalable web solutions.
          If you want to get in touch with us or learn more about our projects, feel free to reach out!
        </p>
      </div>

      <div className={styles.teamGrid}>
        

        <div className={styles.card}>
          <h2>Lokeshwari</h2>
          <p><strong>Role:</strong> Team Lead</p>
          <p>With 1+ years of experience in web development, she guides the team and ensures quality delivery.</p>
        </div>
        <div className={styles.card}>
            <h2>Sridhar Reddy</h2>
            <p><strong>Role:</strong> Web Developer (Fresher)</p>
            <p>Enthusiastic about coding, eager to learn and grow in the web development field.</p>
        </div>
        <div className={styles.card}>
          <h2>Rishitha</h2>
          <p><strong>Role:</strong> Team Member</p>
          <p>Skilled web developer contributing to front-end and back-end development.</p>
        </div>

        <div className={styles.card}>
          <h2>Vishruth</h2>
          <p><strong>Role:</strong> Team Member</p>
          <p>Focused on building robust features and improving application performance.</p>
        </div>
      </div>

      <div className={styles.contactInfo}>
        <h2>Get In Touch</h2>
        <p>Email: <a href="mailto:contact@alpinecodes.com">contact@alpinecodes.com</a></p>
        <p>Phone: +1 234 567 8900</p>
        <p>Website: <a href="https://www.thealpinecode.com/" target="_blank" rel="noopener noreferrer">alpinecodes.com</a></p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
