import { Table } from "react-bootstrap";
import data from "./tableData.jsx";

const SimpleDataTable = () => {
   return (
      <>
         <Table responsive className="w-100">
            <div id="example_wrapper" className="dataTables_wrapper">
               <table
                  id="example"
                  className="display w-100 dataTable"
                  role="grid"
                  aria-describedby="example_info"
               >
                  <thead>
                     {data.jobsTable.columns.map((d, i) => (
                        <th key={i}>{d}</th>
                     ))}
                  </thead>
                  <tbody>
                     {data.jobsTable.data.map((d, i) => (
                        <tr key={i}>
                           {d.map((da, i) => (
                              <td key={i}>{da}</td>
                           ))}
                        </tr>
                     ))}
                  </tbody>

               </table>
            </div>
         </Table>
      </>
   );
};

export default SimpleDataTable;
