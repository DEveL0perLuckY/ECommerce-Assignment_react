import React, { useRef } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

function Layout() {
  const loadingBarRef = useRef(null);

  const startLoadingBar = () => {
    loadingBarRef.current.continuousStart();
    setTimeout(() => {
      loadingBarRef.current.complete();
    }, 2000);
  };

  return (
    <>
      <Header startLoadingBar={startLoadingBar} />
      <LoadingBar
        color='#3498db'
        height={3}
        shadow={false}
        ref={loadingBarRef}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
