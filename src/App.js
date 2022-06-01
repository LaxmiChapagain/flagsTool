import react, { useEffect, useState } from 'react';
import './App.css';
import Customcheckbox from './components/Checkbox';


var flags = {
  showColorPercentage: true,
  hasRugShare: false,
  showSaveImage: true,
  fullPageThumb: false,
  allowCreateYourRugTemplate: false
}

function App() {
  const [showColorPercentage, setShowColorPercentage] = useState(flags.showColorPercentage);
  const [hasRugShare, setHasRugShare] = useState(flags.hasRugShare);
  const [showSaveImage, setShowSaveImage] = useState(flags.showSaveImage);
  const [fullPageThumb, setFullPageThumb] = useState(flags.fullPageThumb);
  const [allowCreateYourRugTemplate, setAllowCreateYourRugTemplate] = useState(flags.allowCreateYourRugTemplate);
  const [submitted, setSubmitted] = useState(false);


  function handleSubmit() {
    flags = {
      showColorPercentage: showColorPercentage,
      hasRugshare: hasRugShare,
      showSaveImage: showSaveImage,
      fullPageThumb: fullPageThumb,
      allowCreateYourRugTemplate: allowCreateYourRugTemplate
    }

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(flags));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "flags.json");
    dlAnchorElem.click();
    setSubmitted(true);

  }

  useEffect(() => {
    setSubmitted(false)
  }, [showColorPercentage, hasRugShare, showSaveImage, fullPageThumb, allowCreateYourRugTemplate])


  return (
    <>
      <div className="App">
        <h1> Flags Tool</h1>
        <Customcheckbox name="colorPercentage" checked={showColorPercentage} label="Show color percentage" handleChange={(val) => setShowColorPercentage(val)} />
        <Customcheckbox name="rugShare" checked={hasRugShare} label="Show Rugshare" handleChange={(val) => setHasRugShare(val)} />
        <Customcheckbox name="showSaveImage" checked={showSaveImage} label="Allow image download" handleChange={(val) => setShowSaveImage(val)} />
        <Customcheckbox name="fullPageThumb" checked={fullPageThumb} label="Show Full page thumbnails" handleChange={(val) => setFullPageThumb(val)} />
        <Customcheckbox name="allowCreateYourRugTemplate" checked={allowCreateYourRugTemplate} label="Allow Create your rug template" handleChange={(val) => setAllowCreateYourRugTemplate(val)} />
      </div>

      <div className='Submit'>
        <input type="submit" onClick={handleSubmit} />
      </div>

      {submitted && <textarea id="story" name="story" rows="10" cols="50">
        {JSON.stringify(flags)}
      </textarea>}
    </>
  )
}
export default App;