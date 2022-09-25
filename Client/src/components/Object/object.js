import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./object.css";
const Object = (props) => {
  const history = useNavigate();
  const { _id, name, position, years, battingAvg, available } = props.object;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3001/cardinals/delete/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/cardinals"));
  };

  return (
    <div className="card">
      <article> Name: {name}</article>
      <h3> Position: {position}</h3>
      <h3> Active: {years}</h3>
      <h3> Batting Average: {battingAvg}</h3>
      <h3> Availability: {available}</h3>
      <Button LinkComponent={Link} to={`/cardinals/${_id}`} sx={{ mt: "auto" }}>
            Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete Player
      </Button>
    </div>
  );
};

export default Object;