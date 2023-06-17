import { useState } from "react";
import Pagination from "../../common/Pagination";
import { gql, useQuery } from "@apollo/client";


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

interface AllBranchData {
  allBranch: {
    ok: boolean;
    results: Branch[];
    error: string;
    totalPages: number;
  };
}

export const ALL_BRANCH_QUERY = gql`
  query AllBranch($page: Int!) {
    allBranch {
      ok
      error
      totalPages
      results {
        id
        isActive
        company {
          name
        }
        address
        location {
          city
          state {
            state
            country
          }
        }
        users_count
      }
    }
  }
`;

const BookingTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1)

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  const { loading, error, data } = useQuery<AllBranchData>(ALL_BRANCH_QUERY, {
    variables: {
      page: page,
    },
  });

  const tabItems = [
    "All",
  ];

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tabItems.map((item, index) => (
            <div className="col-auto" key={index}>
              <button
                className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${
                  activeTab === index ? "is-tab-el-active" : ""
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
              <table className="table-4 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>ID</th>
                    <th>Town</th>
                    <th>State</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* End theade */}
                <tbody>
                  <tr>
                    <td className="text-blue-1 fw-500">1</td>

                    <td>Gwagwalada</td>

                    <td>Abuja</td>

                    <td>04/04/2022</td>

                    <td>
                      <div className="row x-gap-10 y-gap-10 items-center">
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
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
                  {/* End tr */}

                  <tr>
                    <td className="text-blue-1 fw-500">2</td>
                    <td>Festac</td>
                    <td>Lagos</td>

                    <td>04/04/2022</td>

                    <td>
                      <div className="row x-gap-10 y-gap-10 items-center">
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
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
                  {/* End tr */}

                  <tr>
                    <td className="text-blue-1 fw-500">3</td>
                    <td>Awka-Etiti</td>
                    <td>Anambra</td>

                    <td>04/04/2022</td>

                    <td>
                      <div className="row x-gap-10 y-gap-10 items-center">
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
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
                  {/* End tr */}

                  <tr>
                    <td className="text-blue-1 fw-500">1</td>
                    <td>Gwagwalada</td>
                    <td>Abuja</td>

                    <td>04/04/2022</td>

                    <td>
                      <div className="row x-gap-10 y-gap-10 items-center">
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
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
                  {/* End tr */}

                  <tr>
                    <td className="text-blue-1 fw-500">1</td>
                    <td>Gwagwalada</td>
                    <td>Abuja</td>

                    <td>04/04/2022</td>

                    <td>
                      <div className="row x-gap-10 y-gap-10 items-center">
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
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
                  {/* End tr */}

                  <tr>
                    <td className="text-blue-1 fw-500">1</td>
                    <td>Gwagwalada</td>
                    <td>Abuja</td>

                    <td>04/04/2022</td>

                    <td>
                      <div className="row x-gap-10 y-gap-10 items-center">
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
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
                  {/* End tr */}

                  <tr>
                    <td className="text-blue-1 fw-500">1</td>
                    <td>Gwagwalada</td>
                    <td>Abuja</td>
                    
                    <td>04/05/2022</td>

                    <td>
                      <div className="row x-gap-10 y-gap-10 items-center">
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
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
                  {/* End tr */}

                  <tr>
                    <td className="text-blue-1 fw-500">1</td>
                    <td>Gwagwalada</td>
                    <td>Abuja</td>
                    
                    <td>04/04/2022</td>

                    <td>
                      <div className="row x-gap-10 y-gap-10 items-center">
                        <div className="col-auto">
                          <button className="flex-center bg-light-2 rounded-4 size-35">
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
                  {/* End tr */}
                </tbody>
                {/* End tbody */}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination totalPages={ data?.allBranch.totalPages} setCurrentPage={ setPage } currentPage={ page }/>
    </>
  );
};

export default BookingTable;
