import Button from "react-bootstrap/Button";

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
    <div>
      {classes ? (
        <div id={danceClass.dance_class.id}>
          <p>{danceClass.dance_class.name}</p>
          <p>{danceClass.dance_class.time}</p>
        </div>
      ) : null}
      <Button
        variant="outline-secondary"
        class="btn btn-secondary"
        type="button"
        onClick={() => handleDelete()}
      >
        Drop Class
      </Button>
    </div>
  );
}

export default ProfileDeleteCard;
