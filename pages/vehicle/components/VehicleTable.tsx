import { FC, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Pagination from '../../common/Pagination';
import Detail from './Detail';
import Loading from '@/components/common/Loading';
import EditVehicle from './EditVehicle';

interface Vehicle {
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

interface VehicleImage {
  id: string;
  image: string;
}

interface Company {
  id: string;
  name: string;
  phoneNumber: string;
}

interface AllVehicleData {
  allVehicle: {
    ok: boolean;
    error: string;
    results: Vehicle[];
    totalPages: number;
  };
}
const EDIT_VEHICLE_MUTATION = gql`
  mutation editVehicle ($input: EditVehicleInput!) {
    editVehicle(input: $input) {
      ok
      error
    }
  }
`;

export const ALL_VEHICLE_QUERY = gql`
  query AllVehicle($page: Int!) {
    allVehicle(input: { page: $page }) {
      ok
      results {
        id
        name
        status
        isVerified
        type
        message
        vehicleNumber
        vehicleImage {
          image
        }
        company {
          id
          name
          phoneNumber
        }
        createdAt
      }
      totalPages
    }
  }
`;

const VehicleTable: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [editedVehicle, setEditedVehicle] = useState<Vehicle | null>(null);
  const [page, setPage] = useState(1)

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  // Modal
  const [click, setClick] = useState(false);
  const handleModal = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setClick((prevState) => !prevState);
  };

  const [editClick, setEditClick] = useState(false);
  const editHandleModal = (vehicle: Vehicle) => {
    setEditedVehicle(vehicle);
    setEditClick((prevState) => !prevState);
  };

  const tabItems = [
    'All',
    'Active',
    'Inactive',
    'Rejected',
    'Suspended',
  ];

  const { loading, error, data } = useQuery<AllVehicleData>(ALL_VEHICLE_QUERY, {
    variables: {
      page: 1, // Set the desired page value here
    },
  });

  if (loading) {
    return <div><Loading /></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredVehicles: Vehicle[] | undefined = data?.allVehicle.results.filter((vehicle) => {
    switch (activeTab) {
      case 0:
        return true;
      case 1:
        return vehicle.status === 'Active';
      case 2:
        return vehicle.status === 'Inactive';
      case 3:
        return vehicle.status === 'Rejected';
      case 4:
        return vehicle.status === 'Suspended';
      default:
        return true;
    }
  })

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tabItems.map((item, index) => (
            <div className="col-auto" key={index}>
              <button
                className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${
                  activeTab === index ? 'is-tab-el-active' : ''
                }`}
                onClick={() => handleTabClick(index)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-3 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th className="d-none d-sm-block d-md-none">Type</th>
                    <th>Registration Number</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVehicles?.length === 0 ? (
                    <tr>
                      <td className='text-18' colSpan={4}>No data available</td>
                    </tr>
                  ) : (
                  filteredVehicles?.map((vehicle) => (
                    <tr className="cursor-pointer" key={vehicle.id}>
                      <td className="d-none d-sm-block d-md-none" onClick={() => handleModal(vehicle)}>{vehicle.type}</td>
                      <td onClick={() => handleModal(vehicle)}>{vehicle.vehicleNumber}</td>
                      <td onClick={() => handleModal(vehicle)}>
                          <p className="text-14">
                            <span
                            className={`rounded-100 py-4 px-10 text-center fw-500 ${
                              vehicle.status === 'Inactive'
                                ? 'bg-yellow-4 text-yellow-3'
                                : vehicle.status === 'Active'
                                ? 'bg-blue-1-05 text-blue-1'
                                : vehicle.status === 'Rejected'
                                ? 'bg-light-2 text-warning-2'
                                : vehicle.status === 'Suspended'
                                ? 'bg-red-3 text-red-2'
                                : 'bg-info-1 text-black'
                            }`}
                            >
                              {vehicle.status}
                            </span>
                          </p>
                        </td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button onClick={() => editHandleModal(vehicle)} className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1" />
                            </button>
                          </div>
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination totalPages={ data?.allVehicle.totalPages} setCurrentPage={ setPage } currentPage={ page }/>

      {/* Modal */}
      {selectedVehicle && (
      <div className={`modalMenu js-modalMenu ${click ? '' : 'is-hidden'}`}>
        <div className="currencyMenu__bg" onClick={() => setClick((prevState) => !prevState)}></div>
        <div className="modalMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">Details</div>
            {/* End title */}
            <button className="pointer" onClick={() => setClick((prevState) => !prevState)}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* Emd flex-wrapper */}

          <div className="px-30 py-20 sm:px-15">
            {selectedVehicle && <Detail vehicle={selectedVehicle} />}
          </div>
        </div>
        {/* End modalMenu */}
      </div>
      )}

    {editedVehicle && (
      <div className={`modalMenu js-modalMenu ${click ? '' : 'is-hidden'}`}>
        <div className="currencyMenu__bg" onClick={() => setClick((prevState) => !prevState)}></div>
        <div className="modalMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">Details</div>
            {/* End title */}
            <button className="pointer" onClick={() => setClick((prevState) => !prevState)}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* Emd flex-wrapper */}

          <div className="px-30 py-20 sm:px-15">
            {editedVehicle && <EditVehicle editVehicle={editedVehicle} />}
          </div>
        </div>
        {/* End modalMenu */}
      </div>
      )}
      
    </>
  );
};

export default VehicleTable;
