import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import TeacherClasses from "./TeacherClasses";
import { Carousel } from "react-bootstrap";

function TeacherCard({ teacher, teacherDanceClasses }) {
  return (
    <>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={teacher.image_url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{teacher.name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </>
    // <Card style={{ width: "20rem" }}>
    //   <Card.Img variant="top" src={teacher.image_url} />
    //   <Card.Header>{teacher.name}</Card.Header>
    //   <TeacherClasses teacherClasses={teacherDanceClasses} />
    // </Card>
  );
}

export default TeacherCard;

//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=First slide&bg=373940"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Second slide&bg=282c34"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Third slide&bg=20232a"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;
