import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Kathmandu Living Labs</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <span style={{ color: "#185ADB" }}>Kathmandu Living Labs!</span>
          </h1>

          <p className={styles.description}>
            Get started by browsing the following pages
          </p>

          <div className={styles.grid}>
            <Link href="/about-us">
              <a className={styles.card}>
                <h2>About Us &rarr;</h2>
                <p>
                  What we serve, how long we&apos;ve been around, goals and
                  mission
                </p>
              </a>
            </Link>

            <Link href="/work-with-us">
              <a className={styles.card}>
                <h2>Work with Us &rarr;</h2>
                <p>
                  Competitive salaries, monthly outings and a flexible schedule
                </p>
              </a>
            </Link>

            <Link href="/in-the-media">
              <a className={styles.card}>
                <h2>In the Media &rarr;</h2>
                <p>Media mentions and press outreach initiatives</p>
              </a>
            </Link>

            <Link href="/contact-us">
              <a className={styles.card}>
                <h2>Contact Us &rarr;</h2>
                <p>Have questions? We&apos;re here to help</p>
              </a>
            </Link>
            <Link href="/blog">
              <a className={styles.card}>
                <h2>Blog List &rarr;</h2>
                <p>See what we’re up to at Kathmandu Living Labs</p>
              </a>
            </Link>
            <Link href="/blog/sample-blog">
              <a className={styles.card}>
                <h2>Blog Detail &rarr;</h2>
                <p>Information in conversational style</p>
              </a>
            </Link>
            <Link href="/our-team">
              <a className={styles.card}>
                <h2>Our Team &rarr;</h2>
                <p>Get to know the people you might be working with</p>
              </a>
            </Link>
            <Link href="/our-team/john-doe">
              <a className={styles.card}>
                <h2>Team Details &rarr;</h2>
                <p>Detailed info about a team member</p>
              </a>
            </Link>
            <Link href="/events">
              <a className={styles.card}>
                <h2>Events &rarr;</h2>
                <p>Noteworthy happenings</p>
              </a>
            </Link>
            <Link href="/events/sample-event">
              <a className={styles.card}>
                <h2>Event Details &rarr;</h2>
                <p>Schedule: date and time</p>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
