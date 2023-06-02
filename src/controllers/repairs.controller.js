exports.findRepairs = (req, res) => {
  return res.status(200).json({
    message: 'find all repairs'
  })
}

exports.createRepair = (req, res) => {
  return res.status(200).json({
    message: 'create a repair'
  })
}

exports.findARepair = (req, res) => {
  return res.status(200).json({
    message: 'find a repair'
  })
}

exports.updateRepair = (req, res) => {
  return res.status(200).json({
    message: 'update repair'
  })
}

exports.deleteRepair = (req, res) => {
  return res.status(200).json({
    message: 'delete repair'
  })
}