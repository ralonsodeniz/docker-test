const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initMongoose } = require('./db/config');
const { postTopic } = require('./handlers/postTopic');
const { getTopics } = require('./handlers/getTopics');
const { deleteTopic } = require('./handlers/deleteTopic');

const app = express();
app.use(cors());
initMongoose();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
const router = express.Router();
router.post('/topics', postTopic);
router.get('/topics', getTopics);
router.delete('/topics/:name', deleteTopic);
app.use(router);

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
