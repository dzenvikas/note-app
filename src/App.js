import React, { Component } from 'react';
import Notes from './containers/Notes/Notes';
import Editor from './containers/Editor/Editor';
import Toolbar from './containers/Toolbar/Toolbar';
import { toggleNotesDrawer } from './store/actions';
import store from './store';

import * as styles from './App.module.css';

const App = () => {
  const state = store.getState();
  const showDrawer = store.getState().showNotesDrawer;
  const activeNote = state.notes[state.activeNoteId];
  let bgFallback = showDrawer ? (
    <div className={styles.BgFallback} onClick={handleToggleSidebar} />
  ) : null;
  return (
    <div className={styles.App}>
      <div className={styles.Container}>
        <div className={styles.Head}>
          <Toolbar toggleSideBar={handleToggleSidebar} />
        </div>
        <div className={styles.Body}>
          {bgFallback}
          <Notes notes={state.notes} showDrawer={showDrawer} />
          <Editor note={activeNote} />
        </div>
      </div>
    </div>
  );
  function handleToggleSidebar() {
    store.dispatch(toggleNotesDrawer());
  }
};

export default App;
