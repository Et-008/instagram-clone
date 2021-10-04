import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
} from "firebase/database";

let UpdateFirebase = {
  writeUserData: (userId, data, successHandler) => {
    const db = getDatabase();
    set(ref(db, "users/" + userId), data).then(() => {
      successHandler();
    });
  },
  getUserData: (userId, setCurrentData) => {
    const db = getDatabase();
    const userRef = ref(db, "users/" + userId);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setCurrentData(data);
    });
  },
  bookmarkPosts: (userId, postId, postURL) => {
    const db = getDatabase();
    const savedPostListRef = ref(db, "users/" + userId + "/savedposts");
    const newPostRef = push(savedPostListRef);
    set(newPostRef, { imageId: postId, url: postURL });
  },
  getSavedPosts: (userId, setCurrentData) => {
    const db = getDatabase();
    const savedPostListRef = ref(db, "users/" + userId + "/savedposts");
    onChildAdded(savedPostListRef, (data) => {
      setCurrentData({ id: data.val().imageId, url: data.val().url });
    });

    onChildChanged(savedPostListRef, (data) => {
      setCurrentData({ id: data.val().imageId, url: data.val().url });
    });

    onChildRemoved(savedPostListRef, (data) => {
      setCurrentData({ id: data.val().imageId, url: data.val().url });
    });
  },
  likePosts: (userId, postId, postURL) => {
    const db = getDatabase();
    const likedPostListRef = ref(db, "users/" + userId + "/likedposts");
    const newPostRef = push(likedPostListRef);
    set(newPostRef, { imageId: postId, url: postURL });
  },
  getLikedPosts: (userId, setCurrentData) => {
    const db = getDatabase();
    const likedPostRef = ref(db, "users/" + userId + "/likedposts");
    onChildAdded(likedPostRef, (data) => {
      setCurrentData({ id: data.val().imageId, url: data.val().url });
    });

    onChildChanged(likedPostRef, (data) => {
      setCurrentData(data);
    });

    onChildRemoved(likedPostRef, (data) => {
      setCurrentData(data);
    });
  },
};

export default UpdateFirebase;
