import Head from "next/head";
import Footer from "@components/Footer";
import DinnerForm from "@components/DinnerForm";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div 
    className="container">
      <Head>
        <title>Dinner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DinnerForm />
      </main>
      <Footer />
    </div>
  );
}
