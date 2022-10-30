import React from "react";
import profile from '../Images/profile.jpeg';

function Dashboard({ user }) {
  return (
    <div className="dashboard-parent flex">
      
      <div className="dashboard flex">
      <h1>PROFILE</h1>
        <div className="profil">
          <img src={profile} alt="profile"/>
        </div>
       <div className="dash">
       <h2>Name: {user.firstName} {user.lastName}</h2>
        <h2>Email: {user.email}</h2>
       </div>
      </div>
    </div>
  );
}

export default Dashboard;
