import {useState} from 'react';


export default function AllNotesPage() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  

  
  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNote.trim() !== '') {
      const timestamp = new Date().toLocaleString();
      const newTodo = {
        text: newNote,
        timestamp: timestamp,
      };
      setNotes([...notes, newTodo]);
      setNewNote('');
    }
  };

  return (
    
    <div>
    <h1>All Notes</h1>
    {notes.length === 0 ? (
        <p>No notes added yet.</p>
      ) : (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          {note.text} (Created at: {note.timestamp})
        </li>
      ))}
      
      </ul>
      )}
      <h1>Add A Note</h1>
      <form onSubmit={handleAddNote}>
        <input
          type="text"
          name="note"
          placeholder="Add your note!"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          required
        />
        <button type="submit">Add My Note</button>
      </form>     
    </div>
  );
}