import { useState, useEffect, useCallback } from 'react';
import axios from './utils/html';
import { Header, Message } from 'semantic-ui-react';
import { PATHS } from './paths';
import { StyledContainer } from './app.styled';
import TopicsTable from './components/topics-table/topics-table';

const App = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setName(value);
  };
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(PATHS.TOPICS);
        setTopics(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })();
  }, []);

  const handlePostTopic = async (event) => {
    event.preventDefault();
    try {
      await axios.post(PATHS.TOPICS, { name });
      setTopics((prevState) => [...prevState, { name }]);
    } catch (error) {
      console.log(error);
    } finally {
      setName('');
    }
  };

  const handleDeleteTopic = useCallback(async (name) => {
    try {
      await axios.delete(`${PATHS.TOPICS}/${name}`);
      setTopics((prevState) => prevState.filter((topic) => topic.name !== name));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <StyledContainer text>
      <Header as={'h1'}>Topics</Header>
      {isLoading ? <Message info header={'Loading topics...'} /> : null}
      <TopicsTable topics={topics} handleDeleteTopic={handleDeleteTopic} />
      <p>Add topic</p>
      <form onSubmit={handlePostTopic}>
        <input
          type={'text'}
          value={name}
          onChange={handleChange}
          placeholder={'Input new topic'}
        />
        <button type={'submit'}>Add topic</button>
      </form>
    </StyledContainer>
  );
};

export default App;
