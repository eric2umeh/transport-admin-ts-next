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

const EditVehicle: FC<EditProps> = ({ editVehicle }) => {
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
      <div className="dashboard__content bg-light-2">
        
        <form key={editVehicle.id} onSubmit={handleFormSubmit}>
          <div className="py-20 px-20 mb-10 rounded-4 bg-white shadow-3">
            <input
              type="text"
              placeholder="Vehicle Name"
              className="js-search js-dd-focus"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="py-20 px-20 mb-10 rounded-4 bg-white shadow-3">
            <input
              type="text"
              placeholder="Vehicle Number"
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

      </div>
    </>
  );
};

export default EditVehicle;
