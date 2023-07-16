import Seo from '../../../components/common/Seo';
import Sidebar from '../../common/Sidebar';
import Header from '../../../components/header/dashboard-header';
import Footer from '../../common/Footer';
import { gql, useMutation } from "@apollo/client";
import { FC, FormEvent, useState } from "react";

const EDIT_VEHICLE_MUTATION = gql`
  mutation editVehicle($input: EditVehicleInput!) {
    editVehicle(input: $input) {
      ok
      error
      vehicleId
    }
  }
`;

interface EditVehicleInput {
  name: string;
  vehicleId: number;
}

interface EditVehicleResult {
  ok: boolean;
  error: string;
  vehicleId: string;
}

interface EditVehicle {
  id: string;
  name: string;
  status: string;
  isVerified: Boolean;
  type: string;
  message: string;
  phoneNumber: string;
  vehicleNumber: string;
  company: Company;
  vehicleImage: VehicleImage;
  createdAt: Date;
}

interface Company {
  id: string;
  name: string;
  phoneNumber: string;
}

interface VehicleImage {
  id: string;
  image: string;
}

interface EditProps {
  editVehicle: EditVehicle;
}

const index: FC<EditProps> = ({ editVehicle }) => {
  const [editVehicleMutation] = useMutation<EditVehicleResult, EditVehicleInput>(
    EDIT_VEHICLE_MUTATION
  );

  const [name, setName] = useState("");

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // try {
    //   const response = await editVehicleMutation({
    //     variables: {
    //       input: {
    //         name,
    //         vehicleId: 1,
    //       }
    //     }
    //   });

    //   const { ok, error, vehicleId } = response.data.editVehicle;
    //   if (ok) {
    //     console.log("Vehicle edited successfully");
    //     console.log("Updated vehicle ID:", vehicleId);
    //   } else {
    //     console.error("Error editing vehicle:", error);
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    // }
  };

  return (
    <>
      <Seo pageTitle="Edit Vehicle" />
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
                <h1 className="text-30 text-light-1 fw-600">Edit Vehicle</h1>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <form onSubmit={handleFormSubmit}>
              <div className="py-20 px-20 mb-10 rounded-4 bg-white shadow-3">
                <input
                  type="text"
                  placeholder="Vehicle Name"
                  className="js-search js-dd-focus"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="d-inline-block pt-30">
                <button
                  type="submit"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                >
                  Save Changes <div className="icon-arrow-top-right ml-15" />
                </button>
              </div>
            </form>

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
