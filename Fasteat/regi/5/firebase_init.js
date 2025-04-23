// クラス番号を入れる(firebaseのコレクション名と一致)
const classnum="5"
const firebaseConfig = {
  apiKey: "AIzaSyDMEqJhWCTGHACbVHSWrSMNjfqfO57halU",
  authDomain: "fasteat-2d5fd.firebaseapp.com",
  projectId: "fasteat-2d5fd",
  storageBucket: "fasteat-2d5fd.appspot.com",
  messagingSenderId: "979649202054",
  appId: "1:979649202054:web:d38164694e9fe25d0e0e07",
  measurementId: "G-XLZ81N5TBV"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const classcollection = db.collection(classnum);