import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import Description from "@components/Description";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div 
    style={{ position: 'relative' }}
    className="container">
      <img
        src="/bg-flower2.svg"
        alt="Background Image"
        style={{
          position: 'absolute',
          top: 0,
          left: '-50px',
          width: '30%', // Adjust the width as needed
        }}
      />
      <img
        src="/bg-flower2.svg"
        alt="Background Image"
        style={{
          position: 'absolute',
          top: 0,
          right: '-50px',
          width: '30%', // Adjust the width as needed
          transform: 'scaleX(-1)', // Mirror the image horizontally
        }}
      />
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
