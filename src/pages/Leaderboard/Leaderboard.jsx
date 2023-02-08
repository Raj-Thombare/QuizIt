import React, { useState, useEffect } from "react";
import { useData } from "../../context/data-context";
import { getUsers } from "../../services";

import classes from "./Leaderboard.module.css";

const Leaderboard = () => {
  const { score, name } = useData();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const user = await getUsers();
        const userData = user.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setUsers(
          userData.sort((a, b) => {
            return b.score - a.score;
          })
        );
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [name, score]);

  return (
    <div>
      <h1>Leaderboard</h1>
      <div className={classes.leaderboard}>
        <table className={classes["user-score"]}>
          <tbody>
            <tr className={classes["table-heading"]}>
              <th>Name</th>
              <th>Score</th>
              <th>Category</th>
              <th>Difficulty</th>
            </tr>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.score}</td>
                  <td>{user.category}</td>
                  <td>{user.difficulty}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
