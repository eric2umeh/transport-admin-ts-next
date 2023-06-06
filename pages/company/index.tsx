import Seo from '../../components/common/Seo';
import Sidebar from '../common/Sidebar';
import Header from '../../components/header/dashboard-header';
import Footer from '../common/Footer';
import BookingTable from './components/BookingTable';

const index = () => {
  return (
    <>
      <Seo pageTitle="Company" />
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
            <h1 className="text-30 text-light-1 fw-600">
              Manage Company Status
            </h1>

            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <BookingTable />
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
