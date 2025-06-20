import { useRef } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "./tableData.jsx";

const FeesCollection = () => {
  const sort = 3;
  let jobPagination = Array(Math.ceil(data.feeTable.data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  const activePag = useRef(0);
  const jobData = useRef(
    data.feeTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    )
  );
  const onClick = (i) => {
    activePag.current = i;

    jobData.current = data.feeTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    );
  };
  return (
    <div className="w-100 table-responsive">
      <div id="example_wrapper" className="dataTables_wrapper">
        <table id="example" className="display w-100 dataTable">
          <thead>
            <tr role="row">
              {data.feeTable.columns.map((d, i) => (
                <th key={i}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jobData.current.map((d, i) => (
              <tr key={i}>
                {d.map((da, ii) => (
                  <td key={ii}>
                    {da === "Paid" ? (
                      <Badge variant="success light">Paid</Badge>
                    ) : da === "Unpaid" ? (
                      <Badge variant="danger light">Unpaid</Badge>
                    ) : da === "Panding" ? (
                      <Badge variant="warning light">Panding</Badge>
                    ) : (
                      da
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
        <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-2">
          <div className="dataTables_info">
            Showing {activePag.current * sort + 1} to{" "}
            {data.length > (activePag.current + 1) * sort
              ? (activePag.current + 1) * sort
              : data.length}{" "}
            of {data.length} entries
          </div>
          <div
            className="dataTables_paginate paging_simple_numbers mb-0"
            id="example5_paginate"
          >
            <Link
              className="paginate_button previous disabled"
              to="/table-datatable-basic"
              onClick={() =>
                activePag.current > 0 && onClick(activePag.current - 1)
              }
            >
              <i className="fa fa-angle-double-left" aria-hidden="true" /> 
            </Link>
            <span>
              {jobPagination.map((number, i) => (
                <Link
                  key={i}
                  to="/table-datatable-basic"
                  className={`paginate_button  ${activePag.current === i ? "current" : ""
                    } `}
                  onClick={() => onClick(i)}
                >
                  {number}
                </Link>
              ))}
            </span>
            <Link
              className="paginate_button next"
              to="/table-datatable-basic"
              onClick={() =>
                activePag.current + 1 < jobPagination.length &&
                onClick(activePag.current + 1)
              }
            >
              <i className="fa fa-angle-double-right" aria-hidden="true" /> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesCollection;
