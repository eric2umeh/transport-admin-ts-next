import { FC, useState } from "react";
import Pagination from "../../common/Pagination";
import { gql, useQuery } from "@apollo/client";
import Detail from "./Detail";
import Loading from "@/components/common/Loading";

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

const BranchTable: FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [page, setPage] = useState(1)

  // Modal
  const [click, setClick] = useState<boolean>(false);
  const handleModal = (branch: Branch) => {
    setSelectedBranch(branch);
    setClick((prevState) => !prevState);
  };

  const { loading, error, data } = useQuery<AllBranchData>(ALL_BRANCH_QUERY, {
    variables: {
      page: page,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div><Loading /></div>;
  }


  return (
    <>
      <div className="tabs -underline-2 js-tabs">

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-4 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th className="d-none d-sm-block d-md-none">ID</th>
                    <th className="d-none d-sm-block d-md-none">Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* End theade */}
                <tbody>
                  {data?.allBranch.results.map((branch) => (
                    <tr className="cursor-pointer" key={branch.id}>
                      <td className="text-blue-1 fw-500 d-none d-sm-block d-md-none" onClick={() => handleModal(branch)}>{branch.id}</td>
                      <td className="d-none d-sm-block d-md-none" onClick={() => handleModal(branch)}>{branch.location.city}</td>
                      <td onClick={() => handleModal(branch)}>{branch.location.city}</td>
                      <td onClick={() => handleModal(branch)}>{branch.location.state.state}</td>
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
                  ))}
                </tbody>

                {/* End tbody */}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination totalPages={ data?.allBranch.totalPages} setCurrentPage={ setPage } currentPage={ page }/>

      {/* Modal */}
      {selectedBranch && (
        <div className={`modalMenu js-modalMenu ${click ? '' : 'is-hidden'}`}>
          <div className="currencyMenu__bg" onClick={() => setClick((prevState) => !prevState)}></div>
          <div className="modalMenu__content bg-white rounded-4">
            <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
              <div className="text-20 fw-500 lh-15">Details</div>
              {/* End title */}
              <button className="pointer" onClick={() => setClick((prevState) => !prevState)}>
                <i className="icon-close" />
              </button>
              {/* End close button */}
            </div>
            {/* End flex-wrapper */}
            <div className="px-30 py-20 sm:px-15">
              {selectedBranch && <Detail branch={selectedBranch} />}
            </div>
          </div>
          {/* End modalMenu */}
        </div>
      )}
    </>
  );
};

export default BranchTable;
