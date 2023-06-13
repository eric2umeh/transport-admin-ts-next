import Head from "next/head";

interface Props {
  pageTitle: string;
}

const Seo = ({ pageTitle }: Props) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} | Tfare`}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>
);

export default Seo;
