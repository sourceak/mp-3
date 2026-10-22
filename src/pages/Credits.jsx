import { Link } from "react-router-dom";
export default function Credits() {
  return <main>

            <p className="eyebrow">07 / CREDITS</p>

            <h2>
                Site
                <span>credits.</span>
            </h2>

            <p className="intro">
                Resources used in the design and development of this website.
            </p>

            <div className="card">

                <h3>Fonts</h3>

                <p>
                    This website uses the Manrope and DM Mono typefaces
                    provided by Google Fonts.
                </p>

            </div>

            <div className="card">

                <h3>Development</h3>

                <p>
                    This website was created using HTML, CSS, and JavaScript.
                </p>

            </div>

            <Link className="button" to="/">
                ← Return Home
            </Link>

        </main>;
}
