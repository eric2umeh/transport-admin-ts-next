import { useState } from "react";
import { gql, useMutation } from '@apollo/client';
import { ALL_VEHICLE_QUERY } from './VehicleTable';
import Toast from '@/components/common/Toast';

const CHANGE_VEHICLE_STATUS_MUTATION = gql`
  mutation changeVehicleStatus($input: ChangeVehicleStatusInput!) {
    changeVehicleStatus(input: $input) {
      ok
      error
    }
  }
`;

interface ActionsButtonProps {
  vehicleIds: string[];
}

const ActionsButton = ({ vehicleIds }: ActionsButtonProps) => {
  const [activeFilter, setActiveFilter] = useState('Active');
  const [changeVehicleStatusMutation, { loading, error }] = useMutation(
    CHANGE_VEHICLE_STATUS_MUTATION
  );
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  
  const handleFilterClick = async (filter: any) => {
    setActiveFilter(filter);
    const { data } = await changeVehicleStatusMutation({
      variables: {
        input: {
          vehicleId: parseInt(vehicleIds[0]),
          status: filter,
        },
      },
      refetchQueries: [
        {
          query: ALL_VEHICLE_QUERY,
          variables: { page: 1 },
        },
      ],
    });

    if (data?.changeVehicleStatus?.ok) {
      setToastMessage('Success');
      setShowToast(true);
    } else {
      setToastMessage(data?.changeVehicleStatus?.error);
      setShowToast(true);
    }
  };  

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const filters = [
    { label: 'Inactive', value: 'Inactive' },
    { label: 'Active', value: 'Active' },
    { label: 'Rejected', value: 'Rejected' },
    { label: 'Suspended', value: 'Suspended' },
  ];

  return (
    <div>
      <div className="dropdown js-dropdown js-actions-1-active">
        <div
          className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
          data-bs-offset="0,10"
        >
          <span className="js-dropdown-title">
            {activeFilter === "Active"
              ? "Actions"
              : filters.find((f) => f.value === activeFilter)?.label}
          </span>
          <i className="icon icon-chevron-sm-down text-7 ml-10" />
        </div>
        <div className="toggle-element -dropdown-2 js-click-dropdown dropdown-menu">
          <div className="text-14 fw-500 js-dropdown-list">
            {filters.map((filter) => (
              <div key={filter.value}>
                <button
                  className={`d-block js-dropdown-link ${
                    activeFilter === filter.value ? "text-blue-1" : ""
                  }`}
                  onClick={() => handleFilterClick(filter.value)}
                >
                  {filter.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showToast && <Toast show={showToast} onClose={handleCloseToast} message={toastMessage} />}
    </div>
  );
};

export default ActionsButton;
