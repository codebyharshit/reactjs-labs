// import classes from './MeetupDetails.module.css'

// function MeetupDetails(props) {
//    return ( 
//         <section className={classes.detail}>
//             <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fhome%2F&psig=AOvVaw060f_hcZVoyJ3KsGrOoEnF&ust=1678172936611000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDK4b_fxv0CFQAAAAAdAAAAABAE" alt="Meetup" />
//             <h1>{props.title}</h1>
//             <address>{props.address}</address>
//             <p>{props.description}</p>
//         </section>
//     )
// }

// export default MeetupDetails;

import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;