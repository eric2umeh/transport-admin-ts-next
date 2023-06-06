import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import NotFound from "../components/common/NotFound";
import Header3 from "@/components/header/header-3";
import Copyright from "@/components/footer/footer-3/Copyright";

const index = () => {
  return (
    <>
      <Seo pageTitle="404" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <Copyright />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
