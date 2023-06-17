import { FC } from 'react';

interface Branch {
  id: string;
  city: string;
  location: Location;
  createdAt: Date;
}

interface Location {
  id: string;
  city: string;
  state: State;
}

interface State {
  id: string;
  country: string;
  state: string;
}
interface DetailProps {
  branch: Branch;
}

const Detail: FC<DetailProps> = ({ branch }) => {
  return (
    <>
      <div className="col-12" key={branch?.id}>
        <div className="row x-gap-20 y-gap-30">

          <div className="col-md">
            <h3 className="text-18 lh-14 fw-500">{branch?.location.city}</h3>
            <div className="text-14 lh-14 text-light-1">
              Created on {new Date(branch?.createdAt).toLocaleDateString()}
            </div>
          </div>
          {/* End col */}

          <div className="col-md-auto text-right md:text-left">
            <div className="d-flex flex-column justify-between h-full">
              <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                <div className="col-auto">
                  {branch?.location.state.state}, {branch?.location.state.country}
                  <div className="text-14 lh-14 text-light-1">ID: {branch?.id}</div>
                </div>
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

