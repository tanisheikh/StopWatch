import moment from "moment";

const ListTimeView = (props) => {
  let allData = props.timeList;

  return (
    <div className="tableStyle">
     
        <table className="table table-striped tableStyle">
          <thead>
            <tr>
              <th scope="col">Lap</th>
              <th scope="col">LapTimes</th>
              <th scope="col">overAllTimes</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((item, index) => (
              <tr key={index}>
                <td>{index >= 0 ? index + 1 : ""}</td>
                
                <td>{moment.utc(item).format("mm:ss:SS")}</td>
                <td>{moment.utc(item).format("mm:ss:SS")}</td>

                <td>
                  <button
                    onClick={() => {
                      props.deleteItem(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  );
};

export default ListTimeView;
