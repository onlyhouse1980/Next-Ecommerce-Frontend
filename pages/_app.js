import React, { Component } from 'react';
import App from 'next/app';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Layout from '../components/Layout';
import { AnimatePresence } from "framer-motion";
import Head from 'next/head';
import { AuthProvider } from '../context/AuthContext'

export default class MyApp extends App {
  

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <AuthProvider>
      <Layout>

      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
      </AuthProvider>
    );
  }
}
