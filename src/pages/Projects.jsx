import Calculator from "../components/Calculator";
export default function Projects() {
  return <main>

            <p className="eyebrow">06 / PROJECTS</p>

            <h2>
                Ideas into
                <span>working things.</span>
            </h2>

            <p className="intro">
                A selection of projects I've built while exploring
                machine learning, data, and software engineering.
            </p>


            

            <div className="card">

                <h3>Recyclify</h3>

                <p>
                    AI-powered application that identifies recyclable
                    items, simplifying waste sorting and promoting
                    eco-friendly practices.
                </p>

                <p>
                    <strong>Technologies:</strong>
                    Python · TensorFlow · Matplotlib · NumPy ·
                    Streamlit · GitHub
                </p>

            </div>


            

            <div className="card">

                <h3>Book Recommendation System</h3>

                <p>
                    Content-based recommendation system that recommends
                    books based on preferred authors and titles, with a
                    percentage-based measure of alignment to a reader's
                    preferences.
                </p>

                <p>
                    <strong>Technologies:</strong>
                    Python · Pandas · NumPy · Jupyter Notebook · Git
                </p>

            </div>


            

            <div className="card">

                <h3>Loan Qualification System</h3>

                <p>
                    Qualification tool that evaluates credit score,
                    monthly debt, monthly income, and desired loan
                    amount, with account data retrieved through Plaid APIs.
                </p>

                <p>
                    <strong>Technologies:</strong>
                    Flask · SQLite · HTML · CSS · Git
                </p>

            </div>


            

            <Calculator />

        </main>;
}
