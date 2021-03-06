import {
  SET_ACTIVE_NOTE_ID,
  UPDATE_NOTE,
  NEW_NOTE,
  DELETE_NOTE,
  TOGGLE_NOTES_DRAWER,
  SEARCH_NOTES
} from "../action-types";

export const setActiveNoteId = id => ({
  type: SET_ACTIVE_NOTE_ID,
  payload: { id }
});

export const updateNote = (id, title, lastUpdate) => ({
  type: UPDATE_NOTE,
  payload: { id, title, lastUpdate }
});

export const createNewNote = note => ({
  type: NEW_NOTE,
  payload: { note }
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  payload: { id }
});

export const toggleNotesDrawer = () => ({
  type: TOGGLE_NOTES_DRAWER
});

export const searchNotes = (notes, query) => ({
  type: SEARCH_NOTES,
  payload: { notes, query }
});
