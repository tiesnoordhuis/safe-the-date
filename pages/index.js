import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Uitnodiging</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          We willen graag weten of je er bij bent!
        </p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
