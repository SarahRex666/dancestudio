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
  console.log(danceClass);
  return (
    <div>
      {classes ? (
        <div id={danceClass.id}>
          {/* <p>{danceClass.danceClass.name}</p> */}
          <p>{}</p>
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
