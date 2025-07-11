
import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <Button 
        className="w-24 h-12 bg-red-500 hover:bg-red-600 active:bg-red-700 border-none rounded-md cursor-pointer outline-none transition-colors duration-150"
        onClick={() => {}} // No action as specified
      >
        {/* No text as specified */}
      </Button>
    </div>
  );
}

export default App;
