import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Image from "next/image";
import { uid } from "react-uid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import Hero from "components/home/Hero";
import Partners from "components/home/Partners";
import WhoAreWe from "components/home/WhoAreWe";
import OurWork from "components/home/OurWork";
import SdgCommitment from "components/our-projects/SdgCommitment";
import OurInsights from "components/home/OurInsights";
import FeaturedIn from "components/home/FeaturedIn";
import OurTeam from "components/home/OurTeam";

const content = {
  heroTitle:
    "A pioneer civic-tech enterprise providing humane data and technology solutions to businessnes, governments, development partners and the civil society",
};

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    height: 708,
    background: theme.palette.grey[100],
    paddingTop: "7.78rem",
    paddingBottom: "7.78rem",
  },
  heroTitleContainer: {
    width: "72%",
  },
  heroTitle: {
    color: theme.palette.grey[900],
    fontFamily: "Manrope",
    fontSize: "48px",
    fontWeight: 300,
    lineHeight: "72px",
  },
  heroTitleHighlight: {
    fontFamily: "Manrope",
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "72px",
  },
  heroImg: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  heroImageFill: {
    position: "relative",
    height: 708,
    width: 620,
  },
}));

export default function Home({
  homeData,
  projects,
  partners,
  featuredIn,
  membersCount,
  blogs,
  impact,
}) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Kathmandu Living Labs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero title={homeData.heroTitle} image={homeData.heroImage} />
        <Partners partners={partners} />
        <WhoAreWe data={homeData.whoAreWe} />
        <OurWork projects={projects} data={homeData.ourWork} />
        <SdgCommitment data={homeData.ourCommitment} impact={impact} />
        <OurInsights blogs={blogs} />
        <FeaturedIn featuredIn={featuredIn} />
        <OurTeam membersCount={membersCount} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { API_URL } = process.env;
  const [
    projects,
    partners,
    inTheMedia,
    membersCount,
    blogs,
    homeData,
    impact,
  ] = await Promise.all([
    fetch(`${API_URL}/projects?_limit=5&_sort=displayOrder`).then((r) =>
      r.json()
    ),
    fetch(`${API_URL}/partners?_sort=displayOrder`).then((r) => r.json()),
    fetch(`${API_URL}/in-the-media`).then((r) => r.json()),
    fetch(`${API_URL}/members/count?isAlumnus=false`).then((r) => r.json()),
    fetch(`${API_URL}/blogs?_limit=3`).then((r) => r.json()),
    fetch(`${API_URL}/home`).then((r) => r.json()),
    fetch(`${API_URL}/impact`).then((r) => r.json()),
  ]);

  // const res = await fetch(`${API_URL}/projects?_limit=5&_sort=displayOrder`);
  // const projects = await res.json();

  // const resPartners = await fetch(`${API_URL}/partners?_sort=displayOrder`);
  // const partners = await resPartners.json();

  // const response = await fetch(`${API_URL}/in-the-media`);
  // const inTheMedia = await response.json();

  // const membersRes = await fetch(`${API_URL}/members/count?isAlumnus=false`);
  // const membersCount = await membersRes.json();

  // const blogRes = await fetch(`${API_URL}/blogs?_limit=3`);
  // const blogs = await blogRes.json();

  // const homeDataRes = await fetch(`${API_URL}/home`);
  // const homeData = await homeDataRes.json();

  // const impactRes = await fetch(`${API_URL}/impact`);
  // const impact = await impactRes.json();

  return {
    props: {
      homeData,
      partners,
      projects,
      featuredIn: inTheMedia.featuredInImages,
      blogs,
      membersCount,
      impact,
    },
    revalidate: 84600,
  };
}
