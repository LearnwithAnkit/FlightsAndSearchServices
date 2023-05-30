const { CityService } = require("../services");

const cityService = CityService();
/*
 *POST
 *data-req.body
 */
const create = async (req, res) => {
  try {
    const city = cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Succesfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

//Delete->/city/:id
const destroy = async (req, res) => {
  try {
    const response = cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Succesfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

//PATCH->/city/:id
const update = async (req, res) => {
  try {
    const city = cityService.updateeCity(req.params.id, req.body);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Succesfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};

//GET->/city/:id
const get = async (req, res) => {
  try {
    const city = cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Succesfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};
