import Seo from '../../../components/common/Seo';
import Sidebar from '../../common/Sidebar';
import Header from '../../../components/header/dashboard-header';
import Footer from '../../common/Footer';
import AddVehicle from './AddVehicle';

const index = () => {
  return (
    <>
      <Seo pageTitle="Add Vehicle" />
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
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 text-light-1 fw-600">Add Vehicle</h1>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-20 px-20 mb-10 rounded-4 bg-white shadow-3">
              <AddVehicle locationText="Name" />
            </div>

            <div className="py-20 px-20 rounded-4 bg-white shadow-3">
              <AddVehicle locationText="Number" />
            </div>

            <div className="py-20 px-20 mt-10 rounded-4 bg-white shadow-3">
              <AddVehicle locationText="Type" />
            </div>

            <div className="d-inline-block pt-30">
              <button
                type="submit"
                className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
              >
                Save Changes <div className="icon-arrow-top-right ml-15" />
              </button>
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
