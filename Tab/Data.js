import React, { Fragment, useState } from "react";
import styles from "../../styles/Home.module.css";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
function Data() {
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [usermarks, setusermarks] = useState("");
  const [editContactId, seteditContactId] = useState(null);
  const [stddata, setdata] = useState([]);

  const nameenter = (event) => {
    setusername(event.target.value);
  };
  const email = (event) => {
    setuseremail(event.target.value);
  };
  const num = (event) => {
    setusermarks(event.target.value);
  };
  const [editformdata, seteditformdata] = useState({
    name: "",
    email: "",
    marks: "",
  });

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    seteditContactId(contact.id);
    const formvalue = {
      name: contact.name,
      email: contact.email,
      marks: contact.marks,
    };
    seteditformdata(formvalue);
  };

  const handleaddFormsubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: Math.random().toString(),
      name: username,
      email: useremail,
      marks: usermarks,
    };
    setdata([...stddata, newContact]);
    setusername("");
    setuseremail("");
    setusermarks("");
  };
  const handleEditformchange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldvalue = event.target.value;
    const newFormdata = { ...editformdata };
    newFormdata[fieldName] = fieldvalue;
    seteditformdata(newFormdata);
  };
  const handleEditedformsubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      name: editformdata.name,
      email: editformdata.email,
      marks: editformdata.marks,
    };
    const newContacts = [...stddata];
    const index = stddata.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setdata(newContacts);
    seteditContactId(null);
  };
  const del = (ind) => {
    const delrow = stddata.filter((data) => {
      return ind !== data.id;
    });
    setdata(delrow);
  };
  return (
    <div>
      <div className={styles.navbar}>
        <form onSubmit={handleaddFormsubmit}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={username}
            onChange={nameenter}
            required
            minlength="11"
            maxlength="20"
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={useremail}
            onChange={email}
          />
          <label>Marks</label>
          <input
            name="marks"
            type="number"
            required
            value={usermarks}
            onChange={num}
          />
          <button type="submit"> Add </button>
        </form>
      </div>
      <form onSubmit={handleEditedformsubmit}>
        <table border="1" className={styles.tab}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {stddata.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editformdata={editformdata}
                    handleEditformchange={handleEditformchange}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    del={del}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
export default Data;
