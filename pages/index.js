// import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1', 
//         title: 'A First Meetup',
//         image: 'house',
//         address: 'Some address 5, 122 Gul street City',
//         description: 'This is a first meetup!'
//     }, 
//     {
//         id: 'm2', 
//         title: 'A second Meetup',
//         image: 'house',
//         address: 'Some address s5, 122 Gul street City',
//         description: 'This is a second meetup!'
//     }
// ];

// function HomePage(props) {
//     return <MeetupList meetups={props.meetups} />   
// }

// // export async function getStaticProps() {
// //     return {
// //         props: {
// //             meetups:DUMMY_MEETUPS
// //         },
// //         revalidate: 10
// //     };
// // }

// export async function getStaticPaths() {
//     return { 
//         fallback: false,
//         paths: [
//             {
//                 params: {
//                     meetupId: 'm1',
//                 },
//             },
//             {
//                 params: {
//                     meetupId: 'm2',
//                 },
//             }
//         ],
//     }
// }



// export async function getServerSideProps(context) {
//     // const req = context.req;
//     // const res = context.res;

//     const meetupId = context.params.meetupId;
//     console.log(meetupId);
    
//     return { 
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }


// export default HomePage;


import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {

    const client = await MongoClient.connect(
        'mongodb+srv://maximilian:arlAapzPqFyo4xUk@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
      );
      const db = client.db();
  
      const meetupsCollection = db.collection('meetups');

      const meetups = await meetupsCollection.find().toArray();

      client.close();


  // fetch data from an API
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title, 
        address: meetup.address, 
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1
  }; 
}

export default HomePage;