module.exports = (req, res) => {
    const { message } = req.body;
    res.status(200).json({ receivedMessage: message });
};