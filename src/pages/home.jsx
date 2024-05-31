import '../css/home.css';

const styles = {
  padding: "10px",
};

export default function Home() {
  return (
    <div className="row">
      <div>
        <h1 className="name" style={styles}>
          About Me
        </h1>
      </div>
      <div className="col text-center align-self-center">
        <p>
        My name is Joshua Cherry, and I am a full-stack developer based in the vibrant city of Philadelphia, often referred to as the "City of Brotherly Love." I hold a prestigious certificate in Full-Stack Web Development from the University of Pennsylvania.
        </p>
      </div>

      <div className="col">
        <div>
          <img
            src="Profile Pic.PNG"
            className="img-fluid"
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
}