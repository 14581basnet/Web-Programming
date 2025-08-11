// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getDatabase, set, get, ref, update, remove } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
     apiKey: "AIzaSyBmYCLzYL7Xfho6b-lMx5bMuRDEQNrRbD4",
    authDomain: "mobb-app-1fb0a.firebaseapp.com",
     databaseURL: "https://mobb-app-1fb0a-default-rtdb.firebaseio.com",
    projectId: "mobb-app-1fb0a",
    storageBucket: "mobb-app-1fb0a.firebasestorage.app",
    messagingSenderId: "1031170844934",
    appId: "1:1031170844934:web:b2fd3149767c38863f5687",
  measurementId: "G-QFE6LF264C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  console.log(db)


//   //
// function writeUserData(userID, firstname,lastname,email){
//     // Get the database instance
//     //const do = getDatabase();

//     // Create a references/ppints to 'user/(userId)' and set the data (name and email)
//     set(ref(db, 'users/'+ userID), {
//         firstname: firstname,
//         lastname: lastname,
//         email: email 
//     });
// }
// writeUserData(1, "Neha", "basnet","basnetneha95@gmail.com")

// //// Function to write user data to Firebase Realtime Database
// function writeUserData(userId, firstname, lastname, email ){
//   //Get the database instance
//   //const db= getDatabase(app);
//   //create a reference/point to 'users/ {userId}' and set the data (name, email)
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: firstname,
//     lastname: lastname,
//     email: email
//   });
// }
// writeUserData(1, "Neha", "basnet", "basnetneha95@gmail.com");



// // Function to read user data from Firebase Realtime Database
// function readUserData(){
//   const userRef = ref(db, 'users');

//   get(userRef).then((snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//         console.log(childSnapshot.val());
//       });
//     });
//   }
// readUserData();


// function updateUserData(userId, updatedData) {
//   const userRef = ref(db, 'users/' + userId);
//   update(userRef, updatedData)
//     .then(() => {
//       console.log('User data updated successfully');
//     })
//     .catch((error) => {
//       console.error('Error updating user data:', error);
//     });
//   }
//   //Example usage;
//   updateUserData(1, { name: "Neha Basnet", email: "basnetneha95@gmail.com" });


//   function deleteUserData(userId) {
//     const userRef = ref(db, 'users/' + userId);
//     remove(userRef)
//       .then(() => {
//         console.log('User data deleted successfully');
//       })
//       .catch((error) => {
//         console.error('Error deleting user data:', error);
//       });
//   }
//   deleteUserData(3); // Example usage to delete user with ID 1