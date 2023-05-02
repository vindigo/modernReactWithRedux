import Button from './components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <div className="p-3">
      <div>
        <Button 
          success 
          rounded 
          onClick={handleClick}
          className="mb-5">
            <GoCloudDownload />
            Click me!!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoDatabase />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBell />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
  
    </div>
  );
}

export default App;