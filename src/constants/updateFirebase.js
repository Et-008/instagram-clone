import { getDatabase, ref, set, onValue } from "firebase/database";

let UpdateFirebase = {
  writeUserData: (userId, data, successHandler) => {
    const db = getDatabase();
    set(ref(db, "users/" + userId), data).then(() => {
      successHandler()
    });
  },
  getUpdatedData: (userId) => {
    const db = getDatabase();
    const profilePictureRef = ref(db, "users/" + userId);
    onValue(profilePictureRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      return data;
    });
  },
};

export default UpdateFirebase;
