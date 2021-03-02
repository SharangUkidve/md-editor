import ThemeToggle from './ThemeToggle';
import { ReactComponent as FCCLogo } from './fcc.svg';

const Header = ({ disableSave, onSave }) => {
  return (
    <header className='md-header'>
      <h1 className='md-title'>MD Editor</h1>
      <div className='spacer'></div>
      {disableSave ? null : (
        <button
          className='icon-button'
          title='Save File'
          onClick={() => onSave()}
        >
          <i className='mat-icon'>download_for_offline</i>
        </button>
      )}
      <a
        href='https://github.com/SharangUkidve/md-editor'
        target='_blank'
        rel='noopener noreferrer'
        className='icon-button'
        title='Github'
      >
        <i className='github-icon'></i>
      </a>
      <a
        href='https://freecodecamp.org'
        target='_blank'
        rel='noopener noreferrer'
        className='icon-button fcc-logo'
        title='Free Code Camp'
      >
        <FCCLogo />
      </a>
      <ThemeToggle />
    </header>
  );
};

export default Header;
