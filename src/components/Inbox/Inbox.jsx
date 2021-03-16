import React, { useEffect, useState } from "react";
import axios from "axios";
import Contacts from "../Contacts/Contacts";

const Inbox = (props) => {
  const [users, setUsers] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/api/user", {
        headers: {
          "app-id": "60509309ca7752a58003a280",
        },
      })
      .then(({ data }) => {
        setUsers(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="inbox">
      {users &&
        users.map((details, index) => {
          let unread = false;
          let badge = null;
          if (Math.floor(Math.random() * 2)) {
            unread = true;
            badge = Math.floor(Math.random());
          }
          return (
            <div
              key={index}
              onClick={() =>
                props.viewHandler({
                  data: {
                    firstName: details.firstName,
                    avatar: details.picture,
                  },
                })
              }
            >
              <Contacts details={details} unread={unread} badge={badge} />
            </div>
          );
        })}
    </div>
  );
};

export default Inbox;
