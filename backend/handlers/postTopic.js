const Topic = require('../db/models/topics');

exports.postTopic = (req, res) => {
    console.log('[POST] Topics');
    const { name } = req.body;
    const topic = new Topic();
    topic.name = name;
    topic.save((err) => {
        if (err) res.send(err);
        res.json({ message: 'Topic created!' });
    });
}
