import react, { useEffect, useReducer } from 'react';
import './App.css';
import Customcheckbox from './components/FtTools';
import { Flags_Actions, reducer } from './reducers/flags.reducer';

const flags = {
  showColorPercentage: true,
  hasRugShare: false,
  showSaveImage: true,
  fullPageThumb: false,
  allowCreateYourRugTemplate: false,
}

const initialState = {
  flags: flags,
  submitted: false
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit() {
    let flags = {
      showColorPercentage: state.flags.showColorPercentage,
      hasRugshare: state.flags.hasRugShare,
      showSaveImage: state.flags.showSaveImage,
      fullPageThumb: state.flags.fullPageThumb,
      allowCreateYourRugTemplate: state.flags.allowCreateYourRugTemplate,
    }

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.flags));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "flags.json");
    dlAnchorElem.click();
  }

  useEffect(() => {
    dispatch({ type: Flags_Actions.SET_SUBMITTED, payload: false })
  }, [state.flags])

  return (
    <>
      <div className="App">
        <h1> Flags Tool</h1>
        <Customcheckbox name="colorPercentage" checked={state.flags.showColorPercentage} label="Show color percentage" handleChange={(val) => dispatch({ type: Flags_Actions.SET_SHOW_COLOR_PERCENTAGE, payload: val })} />
        <Customcheckbox name="hasRugShare" checked={state.flags.hasRugShare} label="Show has RugShare" handleChange={(val) => dispatch({ type: Flags_Actions.SET_HAS_RUG_SHARE, payload: val })} />
        <Customcheckbox name="showSaveImage" checked={state.flags.showSaveImage} label="Show save image" handleChange={(val) => dispatch({ type: Flags_Actions.SET_SHOW_SAVE_IMAGE, payload: val })} />
        <Customcheckbox name="fullPageThumb" checked={state.flags.fullPageThumb} label="Full page thumb" handleChange={(val) => dispatch({ type: Flags_Actions.SET_FULL_PAGE_THUMB, payload: val })} />
        <Customcheckbox name="allowCreateYourRugTemplate" checked={state.flags.allowCreateYourRugTemplate} label="Allow create your rug template" handleChange={(val) => dispatch({ type: Flags_Actions.SET_ALLOW_CREATE_YOUR_RUG_TEMPLATE, payload: val })} />
      </div>

      <div className='Submit'>
        <input type="submit" onClick={() => handleSubmit(dispatch({ type: Flags_Actions.SET_SUBMITTED, payload: true }))} />
      </div>

      {state.submitted && <textarea id="story" name="story" rows="10" cols="50">
        {JSON.stringify(initialState.flags)}
      </textarea>}
    </>
  )
}
export default App;