import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Balla Vamsi Srinivas" />
      <meta name="copyright" content="NASA" />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="1 day" />
      <meta name="language" content="en" />
      <meta name="theme-color" content="#000000" />
      <meta name="application-name" content="Nasa IOD" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <script type="text/javascript" src="js/clarity.js"></script>
    </Head>
  );
};

Meta.defaultProps = {
  title: "NASA IOD",
  keywords:
    "NASA, Image of the day, Astronomy, Space, Astronomy Picture of the Day, ballavamsi, ballavamsisrinias, balla vamsi",
  description: "NASA Image of the day using NextJS",
};
export default Meta;
