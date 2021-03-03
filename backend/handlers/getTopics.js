const Topic = require('../db/models/topics');

exports.getTopics = (req, res) => {
  console.log('[GET] Topics');
  Topic.find((err, topics) => {
    if (err) res.send(err);
    res.json(topics);
  });
  Topic.deleteOne()
};
