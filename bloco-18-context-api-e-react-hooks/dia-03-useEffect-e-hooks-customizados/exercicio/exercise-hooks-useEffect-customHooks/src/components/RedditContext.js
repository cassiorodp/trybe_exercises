import React, { createContext,  useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();
const { Provider, Consumer } = Context;

const RedditProvider = ({ children }) => {
  const [state, setState] = useState({
    postsBySubreddit: {
      frontend: {},
      reactjs: {},
    },
    selectedSubreddit: 'reactjs',
    shouldRefreshSubreddit: false,
    isFetching: false,
  })

  useEffect(() => {
    const { shouldRefreshSubreddit } = state;

    if (shouldRefreshSubreddit) {
      fetchPosts();
    }
  })

  const fetchPosts = () => {
    if (!shouldFetchPosts()) return;

    setState({
      ...state,
      shouldRefreshSubreddit: false,
      isFetching: true,
    });

    const { selectedSubreddit } = state;
    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess, handleFetchError);
  }

  const shouldFetchPosts = () => {
    const {
      selectedSubreddit,
      postsBySubreddit,
      shouldRefreshSubreddit,
      isFetching,
    } = state;
    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  }

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);
    const newState = {
      ...state,
      shouldRefreshSubreddit: false,
      isFetching: false,
    };

    newState.postsBySubreddit[state.selectedSubreddit] = {
      items,
      lastUpdated,
    };
    setState({ ...state, ...newState })
  }

  const handleFetchError = (error) => {
    const newState = {
      ...state,
      shouldRefreshSubreddit: false,
      isFetching: false,
    };

    newState.postsBySubreddit[state.selectedSubreddit] = {
      error: error.message,
      items: [],
    };
    setState({ ...state, ...newState })
  }

  const handleSubredditChange = (selectedSubreddit) => {
    setState({ ...state, selectedSubreddit });
  }

  const handleRefreshSubreddit = () => {
    setState({ ...state, shouldRefreshSubreddit: true });
  }

  const { selectedSubreddit, postsBySubreddit } = state;
  const context = {
    ...state,
    selectSubreddit: handleSubredditChange,
    fetchPosts,
    refreshSubreddit: handleRefreshSubreddit,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Consumer, Context };