import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        debugger;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            debugger;
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First Post - 1',
                previewText: 'This is our first post!!',
                thumbnail: 'none'
              },
              {
                id: '2',
                title: 'First Post - 2',
                previewText: 'This is our first post!!',
                thumbnail: 'none'
              },
              {
                id: '3',
                title: 'First Post - 3',
                previewText: 'This is our first post!!',
                thumbnail: 'none'
              },
              {
                id: '4',
                title: 'First Post - 4',
                previewText: 'This is our first post!!',
                thumbnail: 'none'
              },
              {
                id: '5',
                title: 'First Post - 5',
                previewText: 'This is our first post!!',
                thumbnail: 'none'
              },
              {
                id: '6',
                title: 'First Post - 6',
                previewText: 'This is our first post!!',
                thumbnail: 'none'
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
