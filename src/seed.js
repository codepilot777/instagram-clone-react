import { collection, addDoc } from 'firebase/firestore'

/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(db) {
  const users = [
    {
      userId: 'ZwdzW9yMl8fk4w8tkc76CcEuYTx2',
      username: 'testuser',
      fullName: 'Test User',
      emailAddress: 'testuser@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'raphael',
      fullName: 'Raffaello Sanzio da Urbino',
      emailAddress: 'raphael@sanzio.com',
      following: [],
      followers: ['ZwdzW9yMl8fk4w8tkc76CcEuYTx2'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'dali',
      fullName: 'Salvador Dalí',
      emailAddress: 'salvador@dali.com',
      following: [],
      followers: ['ZwdzW9yMl8fk4w8tkc76CcEuYTx2'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'orwell',
      fullName: 'George Orwell',
      emailAddress: 'george@orwell.com',
      following: [],
      followers: ['ZwdzW9yMl8fk4w8tkc76CcEuYTx2'],
      dateCreated: Date.now()
    }
  ];
}

  // eslint-disable-next-line prefer-const
  // for (let k = 0; k < users.length; k++) {
  //   // db.firestore().collection('users').add(users[k]);
  //   try {
  //     addDoc(collection(db, 'users'), users[k]);
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // eslint-disable-next-line prefer-const
//   for (let i = 1; i <= 5; ++i) {
//     try {
//       addDoc(collection(db,'photos'), {
//         photoId: i,
//         userId : '2',
//         imageSrc: `/images/users/raphael/${i}.jpg`,
//         caption: 'Saint George and the Dragon',
//         likes: [],
//         comments: [
//           {
//             displayName: 'dali',
//             comment: 'Love this place, looks like my animal farm!'
//           },
//           {
//             displayName: 'orwell',
//             comment: 'Would you mind if I used this picture?'
//           }
//         ],
//         userLatitude: '40.7128°',
//         userLongitude: '74.0060°',
//         dateCreated: Date.now()
//       })
//     } catch (err) {
//       console.log(err)
//     }
//     firebase
//       .firestore()
//       .collection('photos')
//       .add({
//         photoId: i,
//         userId: '2',
//         imageSrc: `/images/users/raphael/${i}.jpg`,
//         caption: 'Saint George and the Dragon',
//         likes: [],
//         comments: [
//           {
//             displayName: 'dali',
//             comment: 'Love this place, looks like my animal farm!'
//           },
//           {
//             displayName: 'orwell',
//             comment: 'Would you mind if I used this picture?'
//           }
//         ],
//         userLatitude: '40.7128°',
//         userLongitude: '74.0060°',
//         dateCreated: Date.now()
//       });
//   }