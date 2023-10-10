import "./bootcamp.css";

function Bootcamp() {
  return (
    <>
      <h2>BootCamp</h2>
      <div>
        <section className="container">
          <button className="transition-btn">Hover me!</button>
        </section>
        <section className="container">
          <div className="color">watch this</div>
        </section>
        <section className="container">
          <div className="color3">slide colorchange</div>
        </section>
        <section className="container">
          <div className="color4"> slide n rotate</div>
        </section>
     
        <div className="boxcontainer timing">
        <div className="linear">linear</div>
        <div className="ease-in">ease-in</div>
        <div className="ease-out">ease-out</div>
        <div className="ease-in-out">ease-in-out</div>
      </div>  
   
      </div>
    </>
  );
}

export default Bootcamp;
