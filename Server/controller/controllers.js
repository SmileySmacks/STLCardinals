const RS = require("../Model/PlayerInformation")

const getAllEntries = async (req, res, next) => {
    let objects;
    try {
      objects = await RS.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!objects) {
      return res.status(404).json({ message: "No values found" });
    }
    return res.status(200).json({ objects });
  };
  
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let object;
    try {
      object = await RS.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!object) {
      return res.status(404).json({ message: "No value found" });
    }
    return res.status(200).json({ object });
  };
  
  const addEntry = async (req, res, next) => {
    const { name, position, years, battingAvg, available } = req.body;
    let new_addition;
    try {
      object = new RS({
            name,
            position,
            years,
            battingAvg,
            available,
      });
      await object.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!object) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ object });
  };
  
  const updateEntry = async (req, res, next) => {
    const id = req.params.id;
    const { name, position, years, battingAvg, available } = req.body;
    let object;
    try {
      object = await RS.findByIdAndUpdate(id, {
            name,
            position,
            years,
            battingAvg,
            available,
      });
      object = await object.save();
    } catch (err) {
      console.log(err);
    }
    if (!object) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ object });
  };
  
  const deleteEntry = async (req, res, next) => {
    const id = req.params.id;
    let object;
    try {
      object = await RS.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!object) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Value Successfully Deleted" });
  };
  
  exports.getAllEntries = getAllEntries;
  exports.addEntry = addEntry;
  exports.getById = getById;
  exports.updateEntry = updateEntry;
  exports.deleteEntry = deleteEntry;