const FeedBackModel = require("../model/feedbackMessage");

exports.postFeedback=async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const feedbackResult = new FeedBackModel({ name, email, message });
    const result = await feedbackResult.save();
    res.send(result ? "Feedback sent Successfully" : "Feedback not sent successfully");
  } catch (error) {
    res.send(error.message);
  }
}