export const Modal = ({ title, children, setShowModal }) => {
    const closeModalHandler = () => {
        setShowModal(false);
    }
    return (
        <div className={"modal"} id={"staticBackdrop"} data-bs-backdrop={"static"} data-bs-keyboard={"false"} aria-labelledby={"staticBackdropLabel"} aria-hidden={"true"}>
            <div className={"modal-dialog modal-dialog-centered modal-dialog-scrollable"}>
                <div className={"modal-content"} id={"id-modal-content"}>
                    <div className={"modal-header"}>
                        <h1 className={"modal-title fs-5"} id={"staticBackdropLabel"}>{title}</h1>
                        <button type={"button"} className={"btn-close"} data-bs-dismiss={"modal"} aria-label={"Close"} onClick={closeModalHandler} ></button>
                    </div>
                    <div className={"modal-body"}>
                        {children}
                    </div>
                    <div className={"modal-footer"}>
                        <button type={"button"} className={"btn btn-secondary"} data-bs-dismiss={"modal"} onClick={closeModalHandler} >Close</button>
                        <a href='#songList'>BackToTop</a>
                    </div>
                </div>
            </div>
        </div>
    )
}