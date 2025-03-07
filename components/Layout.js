import { MDBContainer } from 'mdbreact';
import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';
import React from 'react'
import styles from '../styles/Layout.module.css'

function Layout(props) {
  return (
    <>
     <Head>
      <title>Orchard Beach Community Group - Water District</title>
      <meta name="description" content="Orchard Beach Community Group Water Management"></meta>
    </Head>
    
      <NavBar />
      <div className="place-content-center">
      <MDBContainer className={styles.pageContent}>{props.children}</MDBContainer>
      </div>
      <Footer />
      <style jsx global>{`
        
      .Image .resizer {
        width: 100%; height:"auto"
      }
      `}</style>      
    </>
  );
}

export default Layout;
