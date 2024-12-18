import { useRef } from "react";
import { createPlaylist } from "../../Playlists/Playlists";

const ModalComponent = ({ children, onClose, handleSave }) => {
  return (
    <div
      className="modal show"
      tabIndex="-1"
      style={{
        display: "block", // Ensures modal is visible
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent black overlay
      }}
    >
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{
            backgroundColor: "#212529", // Black modal content background
            color: "#fff", // White text for contrast
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title">Create a Playlist</h5>
            <button
              onClick={onClose}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ filter: "invert(1)" }} // Ensures close button is visible
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              onClick={onClose}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="btn btn-primary"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CreatePlaylist = ({ onClose, reloadPlayLists }) => {
  const formRef = useRef(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    createPlaylist(data.playListName, data.description, true).then((created) => {
      if (created) {
        onClose();
        reloadPlayLists();
      }
    });
  };

  return (
    <ModalComponent onClose={onClose} handleSave={handleSave}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="input1" className="form-label">
            Playlist Name
          </label>
          <input
            type="text"
            className="form-control"
            id="playListName"
            name="playListName"
            required
            style={{
              backgroundColor: "#212529", // Match modal background
              color: "#fff", // White text
              border: "1px solid #fff", // White border
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="input2" className="form-label">
            Description
          </label>
          <textarea
            type="textarea"
            className="form-control"
            id="description"
            name="description"
            placeholder="Add an optional description"
            style={{
              backgroundColor: "#212529", // Match modal background
              color: "#fff", // White text
              border: "1px solid #fff", // White border
            }}
          />
        </div>
      </form>
    </ModalComponent>
  );
};
