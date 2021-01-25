import boxyLogo from './boxy.svg';
import terminalGif from './intro.gif';

function App() {
  return (
    <div className='app-intro'>
      <img className='app-logo'
        src={boxyLogo} />
      <div className='app-name'>Boxy</div>
      <div className='app-description'>
        O aplicație minimalistă pentru managementul resurselor IT
      </div>
      <img className='-terminal-image' 
        src={terminalGif} />
      <div className='app-footer'>
        [ ... în lucru ... ]
      </div>
    </div>
  );
}

export default App;
