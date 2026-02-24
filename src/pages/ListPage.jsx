import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../components/NavBar";
import ListItems from "../components/ListItems";


const ListPage = () => {
  const [data, setdata] = useState([])
  const handleApiCall = () => {
    axios.post("https://backend.jotish.in/backend_dev/gettabledata.php",{
   "username":"test",
   "password":"123456"
    })
    .then((response) =>  setdata(response.data.TABLE_DATA.data))
    .catch((error) => console.error(error));
  }

  useEffect(() => {
    handleApiCall();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <h1>Employee List</h1>
        <h6>Manage and monitor your global workforce insights.</h6>
      </div>
      <div>
        {/* container */}

          <ul>
            <li>Position</li>
            <li>City</li>
            <li>Office Code</li>
            <li>Joining Date</li>
            <li>Salary</li>
          </ul>
          <br />

          {data.map((item , idx ) => {
            return (
              <ListItems key={idx} item={item}></ListItems>
            )
          }
          )}

      </div>

    </div>
  )
}

export default ListPage