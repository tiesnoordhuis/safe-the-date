import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import Description from "@components/Description";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <hr />
        <Description part='cerimony'/>
        <hr />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
