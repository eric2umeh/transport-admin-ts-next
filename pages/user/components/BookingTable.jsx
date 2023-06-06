import { useState } from 'react';
import Pagination from '../../common/Pagination';
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

  const tabItems = ['All', 'Approved', 'Pending', 'Rejected', 'Archived'];

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
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Joined Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="cursor-pointer" onClick={handleModal}>
                  <tr>
                    <td>1</td>
                    <td className="lh-16">Mustafa Mohammed</td>
                    <td className="lh-16">08073622632</td>
                    <td>Male</td>
                    <td className="lh-16">04/03/2023</td>
                    <td>
                      <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                        Pending
                      </span>
                    </td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="lh-16">Chinenye Obiagelii</td>
                    <td className="lh-16">09027362272</td>
                    <td>Female</td>
                    <td className="lh-16">24/03/2023</td>
                    <td>
                      <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                        Approved
                      </span>
                    </td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td className="lh-16">Florence Omalicha</td>
                    <td className="lh-16">08073622632</td>
                    <td>Female</td>
                    <td className="lh-16">04/03/2023</td>
                    <td>
                      <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                        Pending
                      </span>
                    </td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td className="lh-16">Mustafa Mohammed</td>
                    <td className="lh-16">08073622632</td>
                    <td>Male</td>
                    <td className="lh-16">04/03/2023</td>
                    <td>
                      <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                        Suspended
                      </span>
                    </td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td className="lh-16">Mustafa Mohammed</td>
                    <td className="lh-16">08073622632</td>
                    <td>Male</td>
                    <td className="lh-16">04/03/2023</td>
                    <td>
                      <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                        Pending
                      </span>
                    </td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td className="lh-16">Mustafa</td>
                    <td className="lh-16">08073622632</td>
                    <td>Male</td>
                    <td className="lh-16">04/03/2023</td>
                    <td>
                      <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                        Pending
                      </span>
                    </td>
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
      <Pagination />


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
