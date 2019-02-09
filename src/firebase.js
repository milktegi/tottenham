import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBP6WQN-mInvYmj7zU3aV3DgJVIpDPqNYM',
  authDomain: 'tottenham-wi.firebaseapp.com',
  databaseURL: 'https://tottenham-wi.firebaseio.com',
  projectId: 'tottenham-wi',
  storageBucket: 'tottenham-wi.appspot.com',
  messagingSenderId: '1082736651942'
};

firebase.initializeApp(config);

// 데이터베이스 연결
// 위에 있는 import구문 호출 
const db = firebase.database();
const dbMatches = db.ref('matches');
const dbPromotions = db.ref('promotions');

export {
	firebase,
	dbMatches,
  dbPromotions
}