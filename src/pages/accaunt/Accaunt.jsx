import React from "react";
import "./Accaunt.css"

function Accaunt() {
  return (
    <div className="account-container">
      <div className="sidebar">
        <h4>Manage My Account</h4>
        <ul>
          <li className="active">My Profile</li>
          <li>Address Book</li>
          <li>My Payment Options</li>
        </ul>

        <h4>My Orders</h4>
        <ul>
          <li>My Returns</li>
          <li>My Cancellations</li>
        </ul>

        <h4>My WishList</h4>
      </div>

      <div className="profile-card">
        <h2>Edit Your Profile</h2>

        <div className="form-grid">
          <div>
            <label>First Name</label>
            <input type="text" defaultValue="First Name" />
          </div>

          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder="Eamil" />
          </div>

          <div>
            <label>Address</label>
            <input type="text" placeholder="Adress" />
          </div>
        </div>

        <div className="password-section">
          <label>Password Changes</label>
          <input type="password" placeholder="Current Password" />
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm New Password" />
        </div>

        <div className="actions">
          <button className="cancel">Cancel</button>
          <button className="save">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default Accaunt;
