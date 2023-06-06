const RercentBooking = () => {
  const data = [
    {
      item: "Chinenye Abaje",
      description: "Chisco Transport",
      branch: "Awka-Etiti, Anambra",
      total: "₦4,800",
      commission: "₦50",
      status: { color: "yellow-4", text: "yellow-3", label: "Pending" },
      createdAt: "04/04/2022 08:16",
    },
    {
      item: "Kelechukwu Omahaliwe",
      description: "ABC Transport",
      branch: "Asaba, Delta",
      total: "₦9,300",
      commission: "₦50",
      status: { color: "blue-1-05", text: "blue-1", label: "Confirmed" },
      createdAt: "04/04/2022 08:16",
    },
    {
      item: "Kakashi Naruto",
      description: "God is Good Motors",
      branch: "Awka-Etiti, Anambra",
      total: "₦4,600",
      commission: "₦50",
      status: { color: "red-3", text: "red-2", label: "Rejected" },
      createdAt: "04/04/2022 08:16",
    },
    {
      item: "Gon Freecs",
      description: "Rivers Transport Nigeria",
      branch: "Port-Harcourt, Rivers",
      total: "₦11,000",
      commission: "₦50",
      status: { color: "blue-1-05", text: "blue-1", label: "Confirmed" },
      createdAt: "04/04/2022 08:16",
    },
    {
      item: "Chisco Transport",
      description: "Awka-Etiti, Anambra",
      branch: "Awka-Etiti, Anambra",
      total: "₦130",
      commission: "₦50",
      status: { color: "blue-1-05", text: "blue-1", label: "Confirmed" },
      createdAt: "04/04/2022 08:16",
    },
  ];
  return (
    <div className="overflow-scroll scroll-bar-1 pt-30">
      <table className="table-2 col-12">
        <thead>
          <tr>
            <th>#</th>
            <th className="lh-20">Item</th>
            <th>Total</th>
            <th>Commission</th>
            <th>Branch</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {row.item}
                <br /> {row.description}
              </td>
              <td>{row.total}</td>
              <td>{row.commission}</td>
              <td className="fw-500">{row.branch}</td>
              <td>{row.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RercentBooking;
