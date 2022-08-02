import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

function ProfileDeleteCard({ danceClass, setClasses, classes }) {
  const handleDelete = () => {
    fetch(`/registrations/${danceClass.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setClasses(resp));
  };
  return (
    <>
      <Card border="secondary" style={{ width: "18rem" }}>
        {classes ? (
          <div id={danceClass.id}>
            <Card.Header>{danceClass?.dance_class?.name}</Card.Header>
            <Card.Body>
              <p>{danceClass?.dance_class?.time}</p>
              <Button
                variant="outline-secondary"
                class="btn btn-secondary"
                type="button"
                onClick={() => handleDelete()}
              >
                Drop Class
              </Button>
            </Card.Body>
          </div>
        ) : null}
      </Card>
      <br></br>
    </>
  );
}

export default ProfileDeleteCard;
