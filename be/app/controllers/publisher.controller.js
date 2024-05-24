const {
  createPublisher,
  updatePublisherStatus,
  deletePublisher
} = require("../services/publisher.service");

exports.createPublisher = async (req, res) => {
  try {
      const { created } = await createPublisher(req.body)
      if (created) {
          res.send({ success: true, data: created })
      } else {
          res.status(400).send({ message: "Invalid request" })
      }
  } catch (err) {
      res.status(400).send({ message: "Bad request" })
  }
}

exports.updatePublisherStatus = async (req, res) => {
  try {
      const result = await updatePublisherStatus(req.params.id, req.body)
      if (result) {
          res.send({ success: true, data: "Status Updated" })
      } else {
          res.status(400).send({ message: "Please check publisher Id" })
      }
  } catch (err) {
      res.status(400).send({ message: "Bad request" })
  }
}

exports.deletePublisher = async (req, res) => {
  const reasult = await deletePublisher(req.params.id);
  try {
    res.json( reasult );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};