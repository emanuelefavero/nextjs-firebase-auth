// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBaM2Zh4LCbJ7htburAubVJSGOh1pXsUjU',
  authDomain: 'nextjs-firebase-auth-9caff.firebaseapp.com',
  projectId: 'nextjs-firebase-auth-9caff',
  storageBucket: 'nextjs-firebase-auth-9caff.appspot.com',
  messagingSenderId: '223588118590',
  appId: '1:223588118590:web:924cea84d1167ffe2e216f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Export the auth module
export const auth = getAuth()
