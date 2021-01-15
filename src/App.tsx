import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    var deferredPrompt: any;
    const btnSave: any = document.querySelector('.add-button');

window.addEventListener('beforeinstallprompt', function(e: any) {
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  return false;
});

btnSave.addEventListener('click', function() {
  alert()
  if(deferredPrompt !== undefined) {
    // The user has had a postive interaction with our app and Chrome
    // has tried to prompt previously, so let's show the prompt.
    deferredPrompt.prompt();

    // Follow what the user has done with the prompt.
    deferredPrompt.userChoice.then(function(choiceResult: any) {

      console.log(choiceResult.outcome);

      if(choiceResult.outcome === 'dismissed') {
        console.log('User cancelled home screen install');
      }
      else {
        console.log('User added to home screen');
      }

      // We no longer need the prompt.  Clear it up.
      deferredPrompt = null;
    });
  }
});
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button style={{display: 'block'}} className="add-button">Add asd home screen</button>

      </header>
    </div>
  );
}

export default App;
