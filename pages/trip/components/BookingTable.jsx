import { useState } from 'react';
// import Pagination from '../../common/Pagination';
import ActionsButton from './ActionsButton';
import Detail from './Detail';

const BookingTable = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Modal
  const [click, setClick] = useState(false);
  const handleModal = () => setClick((prevState) => !prevState);

  const tabItems = [ 'Active', 'Pending', 'Rejected', 'Completed', 'Progress', 'Full', 'Cancelled'];

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
                    <th>ID</th>
                    <th>Branch</th>
                    <th>Destination</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Vehicle</th>
                    <th>Driver</th>
                    <th>Created At</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody className="cursor-pointer" onClick={handleModal}>
                  <tr>
                    <td>1</td>
                    <td className="lh-16">Abakeleki</td>
                    <td className="lh-16">Aba</td>
                    <td className="lh-16">N4,678</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">Sienna</td>
                    <td className="lh-16">Manager Tunde</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">05:24am</td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="lh-16">Ojo</td>
                    <td className="lh-16">Abeokuta</td>
                    <td className="lh-16">N4,678</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">Sienna</td>
                    <td className="lh-16">Manager Tunde</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">05:24am</td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td className="lh-16">Ojo</td>
                    <td className="lh-16">Aba</td>
                    <td className="lh-16">N4,678</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">Sienna</td>
                    <td className="lh-16">Manager Tunde</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">05:24am</td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                  <tr>
                  <td className="lh-16">3</td>
                  <td className="lh-16">Ojo</td>
                    <td className="lh-16">Aba</td>
                    <td className="lh-16">N4,678</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">Sienna</td>
                    <td className="lh-16">Manager Tunde</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">05:24am</td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td className="lh-16">Ojo</td>
                    <td className="lh-16">Aba</td>
                    <td className="lh-16">N4,678</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">Sienna</td>
                    <td className="lh-16">Manager Tunde</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">05:24am</td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td className="lh-16">Owerri</td>
                    <td className="lh-16">Awkaa</td>
                    <td className="lh-16">N4,678</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">Jeep</td>
                    <td className="lh-16">Manager Tunde</td>
                    <td className="lh-16">04/03/2023</td>
                    <td className="lh-16">05:24am</td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination /> */}


      {/* Modal */}
      <div className={`modalMenu js-modalMenu ${click ? '' : 'is-hidden'}`}>
        <div className="currencyMenu__bg" onClick={handleModal}></div>
        <div className="modalMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">Details</div>
            {/* End title */}
            <button className="pointer" onClick={handleModal}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* Emd flex-wrapper */}

          <div className="px-30 py-20 sm:px-15">
            <Detail />
          </div>
        </div>
        {/* End modalMenu */}
      </div>
    </>
  );
};

export default BookingTable;
