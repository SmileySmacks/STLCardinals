const RS = require("../Model/PlayerInformation")

const getAllEntries = async (req, res, next) => {
    let list;
    try {
        list = await RS.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!list) {
      return res.status(404).json({ message: "No values found" });
    }
    return res.status(200).json({ list });
  };
  
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let view_value;
    try {
        view_value = await RS.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!view_value) {
      return res.status(404).json({ message: "No value found" });
    }
    return res.status(200).json({ view_value });
  };
  
  const addEntry = async (req, res, next) => {
    const { name, position, years, battingAvg, available } = req.body;
    let new_addition;
    try {
        new_addition = new RS({
            name,
            position,
            years,
            battingAvg,
            available,
      });
      await new_addition.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!new_addition) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ new_addition });
  };
  
  const updateEntry = async (req, res, next) => {
    const id = req.params.id;
    const { name, position, years, battingAvg, available } = req.body;
    let new_update;
    try {
        new_update = await RS.findByIdAndUpdate(id, {
            name,
            position,
            years,
            battingAvg,
            available,
      });
      new_update = await new_update.save();
    } catch (err) {
      console.log(err);
    }
    if (!new_update) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ new_update });
  };
  
  const deleteEntry = async (req, res, next) => {
    const id = req.params.id;
    let to_delete;
    try {
        to_delete = await RS.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!to_delete) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Value Successfully Deleted" });
  };
  
  exports.getAllEntries = getAllEntries;
  exports.addEntry = addEntry;
  exports.getById = getById;
  exports.updateEntry = updateEntry;
  exports.deleteEntry = deleteEntry;