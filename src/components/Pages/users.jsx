import React, { useState, useEffect } from "react";
import { getUsers } from "../services/service";
export const Users = () => {
  const [usersArr, setUsers] = useState([]);

  const usersData = async () => {
    let users = await getUsers();

    console.log(users);
    setUsers(users);
  };

  useEffect(() => {
    usersData();
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Role</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {usersArr.length >= 0 &&
            usersArr.map((user, index) => {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <th scope="row">{user.ID}</th>
                    <th scope="row">{user.Role}</th>
                    <th>{user.Email}</th>
                  </tr>
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
