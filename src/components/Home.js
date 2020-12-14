import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  const [count, setCount] = React.useState(0);

  return (
    <Layout>
      <p>Home</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to increase here count {count}
      </button>
      <p>
        <Link to="/home2">Navigate to Home 2</Link>
      </p>
    </Layout>
  );
};

export default Home;