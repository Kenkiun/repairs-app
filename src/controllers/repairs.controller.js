const Repair = require('../models/repair.model')

exports.findRepairs = async (req, res) => {

  const repairs = await Repair.findAll({
    where: {
      status: 'pending',
    },
  });

  return res.json({
    results: products.length,
    status: 'success',
    message: 'Repair found',
    repairs,
  });
}

exports.createRepair = async (req, res) => {
  try {
    const {date, userId} = req.body;

    const repair = await Repair.create({
      date,
      userId
    });

    return res.status(201).json({
      message: 'The repair has been created!',
      repair,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
    });
  } 
}

exports.findARepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({
      where: {
        id,
      },
    });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `The repair with id: ${id} doesn't exist`,
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Repair found',
      repair,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
}

exports.updateRepair = async (req, res) => {
  try {
    const {id} = req.params;
    const {status} = req.body;

    const repair = await Repair.findOne({
      where: {
        id,
      },
    });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `Repair with id: ${id} doesn't exist`,
      });
    }

    await status.update({status: 'completed'});

    res.status(200).json({
      status: 'success',
      message: 'Repair has been updated',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
}

exports.deleteRepair = async (req, res) => {
  try {
    const {id} = req.params;

    const repair = await Repair.findOne({
      where: {
        status: true,
        id,
      },
    });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `Repair with id: ${id} doesn't exist!`,
      });
    }

    await repair.update({ status: 'cencelled' })

    return res.status(200).json({
      status: 'success',
      message: 'the repair has been deleted!',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
} 