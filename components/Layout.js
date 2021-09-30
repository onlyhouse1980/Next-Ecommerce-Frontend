import { MDBContainer } from 'mdbreact';
import NavBar from './NavBar';
import Header from './Header'
import Footer from './Footer';
import Head from 'next/head';
import React from 'react'
import { AuthContext } from '../context/AuthContext'


export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

function Layout(props) {
  return (
    <>
     <Head>
      <title>Orchard Beach Community Group - Water District</title>
      <meta name="description" content="Orchard Beach Community Group Water Management"></meta>
    </Head>
    
      
      <MDBContainer>{props.children}</MDBContainer>
      <NavBar />
      <Header />
      <Footer />
         
    </>
  );
}

export default Layout;
