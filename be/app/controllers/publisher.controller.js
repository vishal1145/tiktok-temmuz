const {
  createPublisher,
  updatePublisherStatus,
  deletePublisher,
  getAllPublisher,
  getAllMembersPublishers,
  updatePublisher,
  getCreator,
  getMember,
  canUpdatePublisher
} = require("../services/publisher.service");

exports.getAllPublisher = async (req, res) => {
  const publishers = await getAllPublisher()
  res.status(200).send({ data: publishers, success: true })
};

exports.getCreator = async (req, res) => {
  const publishers = await getCreator(req.query.name)
  res.status(200).send({ data: publishers, success: true })
};

exports.getMember = async (req, res) => {
  const publishers = await getMember(req.query.name)
  res.status(200).send({ data: publishers, success: true })
};


exports.getAllMembersPublishers = async (req, res) => {

  try {
    const publishers = await getAllMembersPublishers(req.params.id)
    if (publishers.length > 0) {
      res.status(200).send({ data: publishers, success: true })
    } else {
      res.status(200).send({ msg: 'No Record Found', success: true })
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }

}

exports.createPublisher = async (req, res) => {
  try {
    const publisher = await createPublisher(req.body)
    res.status(200).send({ referral_url: `${process.env.APP_URL}app/sessions/affiliate?name=${req.body.tiktok_username}`, success: true });
  } catch (err) {
    res.status(400).send({ message: err, success: false });
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

exports.updatePublisher = async (req, res) => {
  try {
    const result = await updatePublisher(req.params.id, req.body)
    if (result) {
      res.send({ success: true, data: "Publisher Updated" })
    } else {
      res.status(400).send({ message: "Please check publisher Id" })
    }
  } catch (err) {
    res.status(400).send({ message: "Bad request" })
  }
}

exports.canUpdatePublisher = async (req, res) => {
  try {
    const result = await canUpdatePublisher(req.body)
    if (result) {
      res.status(200).send({ success: true, canUpdate: true, result })
    } else {
      res.status(200).send({ success: true, canUpdate: false , message: "Please check publisher Id" })
    }
  } catch (err) {
    res.status(400).send({ message: "Bad request" })
  }
}

exports.deletePublisher = async (req, res) => {
  const reasult = await deletePublisher(req.params.id);
  try {
    res.json(reasult);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};