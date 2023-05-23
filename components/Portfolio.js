import { data } from "../assets/frontend-portfolio";
import { FaGithub, FaGlobe } from "react-icons/fa";
export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="center">
        <h2>Portfolio</h2>
        <div className="portfolio-container">
          {data?.map((item) => {
            const { title, img, url, short_desc, tech, github_url } = item;
            return (
              <div className="portfolio-item">
                <article>
                  <img src={item.img} alt="" />
                </article>
                <div>
                  <h3>{title}</h3>
                  <p className="portfolio-desc">{short_desc}</p>
                  <div className="tech">
                    Technologies :{" "}
                    {tech.split(",").map((item) => (
                      <p className="tech-item">{item}</p>
                    ))}
                  </div>
                </div>
                <div className="portfolio-item-btn-container">
                  <a href={url} target="_blank" className="portfolio-item-btn">
                    <FaGlobe />
                    <span>Live</span>
                  </a>
                  <a
                    href={github_url}
                    target="_blank"
                    className="portfolio-item-btn"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
