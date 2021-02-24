import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function handleClick(note) {
        setNotes((prevNotes) => {
            return [
                ...prevNotes,
                note
            ]
        });
        
        console.log(note);
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter(
                (dnote, index) => {
                    return index !== id;
                }
            )
        })
        console.log("delete");
    }


    return (
    <div>
        <Header />
        <CreateArea addClick={handleClick} />
        
        {notes.map((noteItem, index) => {
            return <Note 
            key={index} 
            id={index}
            title={noteItem.title}
            content={noteItem.content} 
            delete={deleteNote}
            />
        })}
        
        <Footer />
    </div>
    );
}

export default App;
