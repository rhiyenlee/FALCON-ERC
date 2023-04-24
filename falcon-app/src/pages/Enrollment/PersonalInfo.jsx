import { useStepperContext } from "./context/StepperContext";

export default function PersonalInfo() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="infoContainer">
      <p className="personal-info">Personal Information</p>

      <form action="" method="">
        <div className="first-col">
          <label>First Name </label>
          <input
            type="text"
            name="firstname"
            onChange={handleChange}
            value={userData["firstname"] || ""}
            id=""
            className="firstname"
            placeholder="First Name"
            required
          />
          <label>Middle Name </label>
          <input
            type="text"
            name="midname"
            onChange={handleChange}
            value={userData["middlename"] || ""}
            id=""
            className="midname"
            placeholder="Middle Name"
          />
          <label>Last Name </label>
          <input
            type="text"
            name="lastname"
            onChange={handleChange}
            value={userData["lastname"] || ""}
            id=""
            className="lastname"
            placeholder="Last Name"
          />
          <label>Code Name </label>
          <input
            type="text"
            name="codename"
            onChange={handleChange}
            value={userData["codename"] || ""}
            id=""
            className="codename"
            placeholder="ex. PtFtHAS13"
          />
        </div>
        <div className="second-col">
          <label>School Graduated </label>
          <input
            type="text"
            name="schoolname"
            onChange={handleChange}
            value={userData["schoolname"] || ""}
            id=""
            className="school"
            placeholder="School"
          />

          <label>Address </label>
          <input
            type="address"
            name="address"
            onChange={handleChange}
            value={userData["address"] || ""}
            id=""
            className="address"
            placeholder="Address"
          />

          <label>Facebook Name </label>
          <input
            type="text"
            name="fbname"
            onChange={handleChange}
            value={userData["fbname"] || ""}
            id=""
            className="fb-name"
            placeholder="Facebook Name"
          />

          <label>Facebook Link </label>
          <input
            type="text"
            name="fblink"
            onChange={handleChange}
            value={userData["fblink"] || ""}
            id=""
            className="fb-link"
            placeholder="Facebook Link"
          />
        </div>
        <div className="third-col">
          <label for="phone">Mobile Number: </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={handleChange}
            value={userData["phone"] || ""}
            className="mobilenum"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="+63"
          ></input>

          <label for="size">Tshirt Size: </label>

          <select className="tshirtsize" name="size" id="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">XLarge</option>
            <option value="xxl">XXLarge</option>
          </select>
        </div>

        <p className="account-info">Account Information</p>
        <div className="fourth-col">
          <label>Email </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={userData["email"] || ""}
            id=""
            className="email"
            placeholder="Email Address"
          />
        </div>

        <div className="fifth-col">
          <label>Password </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={userData["password"] || ""}
            id=""
            className="password"
            placeholder="Password"
          />
        </div>

        <div className="sixth-col">
          <label>Confirm Password </label>
          <input
            type="password"
            name="confirmpass"
            onChange={handleChange}
            value={userData["confirmpass"] || ""}
            id=""
            className="confirmpass"
            placeholder="Confirm Password"
          />
        </div>
      </form>
    </div>
  );
}
