import Head from "next/head";

interface Props {
  title: string;
  icon: string;
}

//page header component
const PageHead = ({ icon, title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href={icon} />
    </Head>
  );
};

export default PageHead;
