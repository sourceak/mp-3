import { Link } from "react-router-dom";
export default function Home() {
  return <main>

            <p className="eyebrow">COMPUTER SCIENCE / DATA</p>

            <h2>
                Hello, I'm
                <span>sourceak.</span>
            </h2>

            <p className="intro">
                I'm a Computer Science student at Boston University,
                expected to graduate in May 2027.
            </p>

            <p>
                My work focuses on machine learning and its ability to turn data into useful, real-world solutions. I
                enjoy exploring data, developing and evaluating models, and transforming an initial question into a
                working intelligent system.
            </p>

            <p>
                Explore my education, experience, projects, technical skills,
                and coursework using the navigation menu.
            </p>

            <Link className="button" to="/projects">
                Explore my work →
            </Link>

        </main>;
}
