import Head from "next/head";
import React from "react";

type Props = {};

const home1 = (props: Props) => {
  return (
    <>
      <Head>
        <title>Home 1</title>
        <meta name="description" content="This is Home 1" />
      </Head>
      <>
        <h1>Welcome to Home 1</h1>
        <p>This is the content of Home 1</p>
      </>
    </>
  );
};

export default home1;
