import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
} from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const ObjectDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:3001/cardinals/view/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.object));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:3001/cardinals/update/${id}`, {
            name: String(inputs.name),
            position: String(inputs.position),
            years: String(inputs.years),
            battingAvg: Number(inputs.battingAvg),
            available: Boolean(checked),
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/cardinals"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
              maxWidth={700}
              alignContent={"center"}
              alignSelf="center"
              marginLeft={"auto"}
              marginRight="auto"
              marginTop={10}
            >


              <FormLabel>Player's Name</FormLabel>
              <TextField
                value={inputs.name}
                onChange={handleChange}
                type="string"
                margin="normal"
                fullWidth
                variant="outlined"
                name="name"
              />


              <FormLabel>Player's Position</FormLabel>
              <TextField
                value={inputs.position}
                onChange={handleChange}
                type="string"
                margin="normal"
                fullWidth
                variant="outlined"
                name="position"
              />


              <FormLabel>Time Active</FormLabel>
              <TextField
                value={inputs.years}
                onChange={handleChange}
                type="string"
                margin="normal"
                fullWidth
                variant="outlined"
                name="years"
              />


              <FormLabel>Player's Batting Average</FormLabel>
              <TextField
                value={inputs.battingAvg}
                onChange={handleChange}
                type="number"
                margin="normal"
                fullWidth
                variant="outlined"
                name="battingAvg"
              />


              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Available"
              />

  
              <Button variant="contained" type="submit">
                Update
              </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default ObjectDetail;