function EditableRow({ editformdata, handleEditformchange }) {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          minlength="11"
          maxlength="20"
          name="name"
          value={editformdata.name}
          onChange={handleEditformchange}
        />
      </td>
      <td>
        <input
          type="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          name="email"
          value={editformdata.email}
          onChange={handleEditformchange}
        />
      </td>
      <td>
        <input
          type="marks"
          required
          name="marks"
          value={editformdata.marks}
          onChange={handleEditformchange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  );
}
export default EditableRow;
