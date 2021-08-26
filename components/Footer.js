import { uid } from "react-uid";
import Link from "next/link";
import Image from "next/image";
import kllLogoWhite from "../public/kll-logo-white.png";

const groups = [
  {
    title: "Company",
    subGroups: [
      {
        title: "About Us",
        link: "/about-us",
      },
      {
        title: "Contact Us",
        link: "/contact-us",
      },
      {
        title: "Our Team",
        link: "/our-team",
      },
      {
        title: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    title: "Quick Links",
    subGroups: [
      {
        title: "Showcase",
        link: "/showcase",
      },
      {
        title: "Gallery",
        link: "/gallery",
      },
      {
        title: "News & Updates",
        link: "/news-and-updates",
      },
      {
        title: "Events",
        link: "/events",
      },
    ],
  },
  {
    title: "Get Involved",
    subGroups: [
      {
        title: "Work with us",
        link: "/work-with-us",
      },
      {
        title: "Join the OSM Community",
        link: "/join-osm-community",
      },
    ],
  },
  {
    title: "Follow Us",
    subGroups: [
      {
        title: "Facebook",
        link: "/facebook",
      },
      {
        title: "Twitter",
        link: "/twitter",
      },
      {
        title: "Instagram",
        link: "/instagram",
      },
      {
        title: "YouTube",
        link: "/youtube",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className={styles["footer-container"]}>
      <div className="container">
        <div className={styles["groups"]}>
          {groups.map((group) => (
            <div key={uid(group)}>
              <div className={styles["group-title"]}>{group.title}</div>
              <div className={styles["sub-groups"]}>
                {group.subGroups.map((subGroup) => (
                  <div
                    key={uid(subGroup)}
                    className={styles["sub-group-title"]}
                  >
                    <Link href={subGroup.link}>{subGroup.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Image
            className={styles.logo}
            src={kllLogoWhite}
            height={46}
            width={42}
            alt="Picture of the author"
          />
          <p className={`${styles['text-secondary']} mt-2`}>Copyright 2021. Kathmandu Living Labs. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
