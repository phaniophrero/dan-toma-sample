const UserSettings = () => {
  // TODO - Importi datele user-ului si le pui la input in value, de ex: value={email}

  return (
    <div className="user-settings-container">
      <form action="" className="user-settings-form">
        <div className="user-settings-form-group">
          <div className="user-settings-form-group-title">
            <h2 className="">AVATAR</h2>
          </div>
          <div className="user-settings-form-profile-avatar">
            <div className="user-settings-form-profile-image-wrapper">
              <span className="user-settings-form-profile-icon">
                <svg
                  height="512"
                  viewBox="0 0 32 32"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                  id="fi_4211763"
                >
                  <g id="_34-Add-image" data-name="34-Add-image">
                    <path d="m29 24h-3v-3a1 1 0 0 0 -2 0v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z"></path>
                    <path d="m17 24h-12a1 1 0 0 1 -1-1v-18a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 0 2 0v-12a3 3 0 0 0 -3-3h-18a3 3 0 0 0 -3 3v18a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2z"></path>
                    <circle cx="11" cy="8.5" r="2.5"></circle>
                    <path d="m7.29 14.29-1.29 1.3v6.41h16v-6.41l-4.29-4.3a1 1 0 0 0 -1.42 0l-5.29 5.3-2.29-2.3a1 1 0 0 0 -1.42 0z"></path>
                  </g>
                </svg>
              </span>
              <label
                className="user-settings-form-upload-circle"
                htmlFor="file"
              >
                CHANGE <br /> PROFILE
              </label>
              <button className="user-settings-form-profile-btn">remove</button>
            </div>
            <div className="user-settings-form-profile-info-wrapper">
              <h3 className="user-settings-form-info">
                We recommend an image of at least 512 x 512 for the server.{" "}
              </h3>
              <label className="user-settings-form-upload-btn" htmlFor="file">
                Upload An Image
              </label>
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
                className="user-settings-form-file"
              />
            </div>
          </div>
        </div>
        <div className="user-settings-form-group">
          <div className="user-settings-form-group-title">
            <h2 className="">ACCOUNT DETAILS</h2>
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" name="lastName" id="lastName" />
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="address1">Address 1*</label>
            <input type="text" name="address1" id="address1" />
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="address2">Address 2</label>
            <input type="text" name="address2" id="address2" />
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="country">Country*</label>
            <input type="text" name="country" id="country" />
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="city">City*</label>
            <input type="text" name="city" id="city" />
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" name="zipCode" id="zipCode" />
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="phoneNumber">Phone Number*</label>
            <input type="text" name="phoneNumber" id="phoneNumber" />
          </div>
        </div>
        <div className="user-settings-form-group">
          <div className="user-settings-form-group-title">
            <h2 className="">ACCOUNT DETAILS</h2>
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@email.com"
            />
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="password">Password*</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="user-settings-form-row">
            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div>
        </div>
        <div className="user-settings-form-btn-wrapper">
          {/* Doar cand modifica un input atunci este valabil butonul UPDATE, daca nu este nici o modificare este disabled */}
          <button className="user-settings-form-btn">UPDATE</button>
        </div>
      </form>
    </div>
  );
};

export default UserSettings;
