import { FC } from 'react';
import Image from 'next/image';

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

interface DetailProps {
  vehicle: Vehicle;
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

const Detail: FC<DetailProps> = ({ vehicle }) => {
  // if (!vehicle || !vehicle.vehicleImage.image) {
  //   return null; // or render an error message
  // }
  
  if (!vehicle || !vehicle.type) {
    return null; // or render an error message
  }
  return (
    <>
      <div className="col-12" key={vehicle.id}>
        <div className="row x-gap-20 y-gap-30">
          <div className="col-md-auto">
            <div className="cardImage ratio ratio-1:1 w-200 md:w-1/2 rounded-4">
              <div className="cardImage__content">
                {/* <Image
                  width={200}
                  height={200}
                  className="rounded-4 col-12 js-lazy"
                  src={`/${vehicle.vehicleImage.image}`}
                  alt="image"
                /> */}
              </div>
            </div>
          </div>
          {/* End col */}

          <div className="col-md">
            <h3 className="text-18 lh-14 fw-500">{vehicle?.name}</h3>
            <div className="text-14 lh-14 text-light-1">
              Created on {new Date(vehicle.createdAt).toLocaleDateString()}
            </div>

            <div className="row x-gap-10 y-gap-10 items-center pt-20">
              <div className="col-auto">
                <p className="text-14">{vehicle.type}</p>
              </div>
              <div className="col-auto">
                <div className="size-3 rounded-full bg-light-1" />
              </div>
              <div className="col-auto">
                <p className="text-14">{vehicle.vehicleNumber}</p>
              </div>
              <div className="col-auto">
                <div className="size-3 rounded-full bg-light-1" />
              </div>
              <div className="col-auto">
                <p className="text-14"><span
                  className={`rounded-100 py-4 px-10 text-center text-14 fw-500 ${
                    vehicle.status === 'Inactive'
                      ? 'bg-yellow-4 text-yellow-3'
                      : vehicle.status === 'Active'
                      ? 'bg-blue-1-05 text-blue-1'
                      : vehicle.status === 'Rejected'
                      ? 'bg-light-2 text-warning-2'
                      : 'bg-red-3 text-red-2'
                  }`}
                >
                  {vehicle.status}
                </span></p>
              </div>
            </div>
            {/* End .row */}

            <div className="row x-gap-10 y-gap-10 pt-20">
              <div className="col-auto">
                <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                  5 seats
                </div>
              </div>
              <div className="col-auto">
                <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                  AC
                </div>
              </div>
              <div className="col-auto">
                <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                  Snacks
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End col */}

          <div className="col-md-auto text-right md:text-left">
            <div className="d-flex flex-column justify-between h-full">
              <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                <div className="col-auto">
                  <span className="fw-500 text-blue-1">
                    {/* 33333 */}
                  </span>{' '}
                  Completed Trips
                  <div className="text-14 lh-14 text-light-1">ID: 3</div>
                </div>
                <div className="col-auto">
                  <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                    15
                  </div>
                </div>
              </div>
              <div className="pt-24">
              <div className="fw-500">{vehicle.company.name}</div>
                <div className="text-14 lh-14 text-light-1">{vehicle.company.phoneNumber}</div>
              </div>
            </div>
          </div>
          {/* End col */}
        </div>
        {/* End .row */}
      </div>
    </>
  );
};

export default Detail;
