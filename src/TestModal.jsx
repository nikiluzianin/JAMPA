import { useState } from "react";
import { MoodModal } from "./component/modal/MoodModal";

function TestModal(){
    const [showModal, setShowModal] = useState(false);
    const [mood, setMood] = useState();

  
    const moodButtonClickHandler = (mood) => {
        setShowModal(true);
        setMood(mood)
    };

    return (
        <>
         <div>
            <button className={"mood-button"} onClick={() => moodButtonClickHandler("Happy")}>Happy</button>
            <button className={"mood-button"} onClick={() => moodButtonClickHandler("Angry")}>Angry</button>
            <button className={"mood-button"} onClick={() => moodButtonClickHandler("Sad")}>Sad</button>
        </div>

        <div>
            {showModal && <MoodModal mood={mood} setShowModal={setShowModal} />}
        </div>
    </>
       

    )

};

export default TestModal;