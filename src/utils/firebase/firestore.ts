// import { firestore } from './firebase';

// export const dataAndRef = async (usr: any): Promise<any> => {
//   if (!usr) return;

//   const usrRef = firestore.doc(`users/${usr.uid}`);

//   const doc = await usrRef.get();
//   const data = doc.data();

//   return [data, usrRef, doc];
// };
