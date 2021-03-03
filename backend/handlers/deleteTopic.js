const Topic = require('../db/models/topics');

exports.deleteTopic = (req, res) => {
  console.log('[DELETE] Topics');
  const { name } = req.params;
  Topic.deleteOne({ name }, null, (err) => {
    if (err) res.send(err);
    res.json({ message: 'Topic deleted!' });
  });
};
