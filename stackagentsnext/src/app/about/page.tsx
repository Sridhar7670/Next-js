import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import styles from './About.module.css';


export default function About() {
  return (
    <>
    <Header/>
<div className={styles.container}>
  <h1 className={styles.heading}>🧠 About Stack Agents</h1>

  <div className={styles.card}>
    <h2>What is Stack Agents?</h2>
    <p>
      <strong>Stack Agents</strong> is your smart, developer-friendly AI platform that turns simple ideas into complete landing pages — all in seconds.
      Whether you&apos;re a startup founder, designer, or coder, Stack Agents helps you go from prompt to production-ready code with zero friction.
    </p>
  </div>

  <div className={styles.card}>
    <h2>Meet So — Your AI Landing Page Builder</h2>
    <p>
      <strong>So</strong> is the powerful AI behind Stack Agents. Just give So a plain-language prompt like
      <em> “a modern SaaS landing page for a project management tool”</em>, and it responds instantly with:
    </p>
    <ul>
      <li>Clean, responsive React or Next.js code</li>
      <li>Modern UI layout with best practices</li>
      <li>Boilerplate or custom components based on your idea</li>
    </ul>
  </div>

  <div className={styles.card}>
    <h2>What Can You Build With So?</h2>
    <ul>
      <li>SaaS Product Landing Pages</li>
      <li>Personal Portfolio Sites</li>
      <li>Startup MVPs</li>
      <li>Product Teasers</li>
      <li>Launch Pages</li>
    </ul>
    <p>All generated using up-to-date, scalable, and customizable code.</p>
  </div>

  <div className={styles.card}>
    <h2>Why Use Stack Agents?</h2>
    <ul>
      <li>✅ Fast Prototyping – Go from idea to code in seconds</li>
      <li>✅ Clean React/Next.js Code – Developer-ready output</li>
      <li>✅ Flexible Prompts – Describe what you want in plain language</li>
      <li>✅ No Design or Dev Skills Needed – Just describe, and So builds it</li>
      <li>✅ Export and Deploy – Use your favorite tools to host or customize</li>
    </ul>
  </div>

  <div className={styles.card}>
    <h2>Who Is It For?</h2>
    <ul>
      <li>Indie Hackers</li>
      <li>Developers</li>
      <li>Designers</li>
      <li>Founders</li>
      <li>Students learning to build</li>
      <li>Anyone who wants to launch faster</li>
    </ul>
  </div>

  <div className={styles.card}>
    <h2>The Vision</h2>
    <p>
      We believe building on the web shouldn&apos;t require hours of coding or design experience.
      With Stack Agents and So, anyone can ship faster, smarter, and cleaner — one landing page at a time.
    </p>
  </div>
</div>

    <Footer/>
    </>
  );
}
