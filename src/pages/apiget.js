import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/apiget.css";

function API_GET() {
  const [videoDB, setVideoDB] = useState([]);

  useEffect(() => {
    axios
      .get("https:/api-get-now.herokuapp.com/api-bjloveyou-q1w2e3r4-freevideos")
      .then((res) => setVideoDB(res.data))
      .then(console.log(videoDB));
  }, []);
  return (
    <div>
      {videoDB.length > 0 && (
        <div className="apige-test">
          <p>{videoDB[0].__id__}</p>
          <img src={videoDB[0].img} />
        </div>
      )}
      {/* {videoDB.length > 0 &&
        videoDB.map((video, index) => {
          return (
            <div className="apige-test" key={index}>
              <p>{video.__id__}</p>
              <img src={video.img} />
            </div>
          );
        })} */}
    </div>
  );
}

export default API_GET;
