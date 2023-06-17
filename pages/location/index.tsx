import Seo from '../../components/common/Seo';
import Sidebar from '../common/Sidebar';
import Header from '../../components/header/dashboard-header';
import Footer from '../common/Footer';
import BranchTable from './components/BranchTable';
import Link from 'next/link';

const index = () => {
  return (
    <>
      <Seo pageTitle="Location" />
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-10 lg:pb-10 md:pb-10">
              <div className="col-auto">
                <h1 className="text-30 text-light-1 fw-600">
                  Branch Info
                </h1>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                <Link
                  href="/branch/add"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                >
                  Add Branch{' '}
                  <div className="icon-arrow-top-right ml-15"></div>
                </Link>
              </div>
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <BranchTable />
              {/* End tabs */}
            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default index;
