import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.scss";
import Head from "next/head";
import { Provider, useSelector } from "react-redux";
import { store } from "../redux/store";
import ImagePreview from "../components/ImagePreview/ImagePreview";
import { selectActiveImage } from "../redux/ImagePreviewSlice";

function MyApp({ Component, pageProps }) {
  // const [showPreview, setShowPreview] = useState(false)
  // const activeImage = useSelector(selectActiveImage)

  const handleImageClick = () => {
    console.log("You are clicking an image");
  };

  return (
    <Provider store = {store}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
      {/* {showPreview && (
        <ImagePreview activeImage={activeImage} showPreview = {showPreview} setShowPreview = {setShowPreview} />
      )} */}
    </Provider>
  );
}

export default MyApp;
