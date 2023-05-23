import { useEffect, useState } from "react";

export default function Intro() {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    setClasses("visible");
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p>
          I&apos;m <span>Melvin Ugochukwu</span>
          <br />
          Full-stack developer,
          <br />
          code enthusiast
        </p>
        <a href="#contact">Contact me</a>
      </div>
      <div>
        <img src="/img/avatar.png" alt="" />
      </div>
    </section>
  );
}
