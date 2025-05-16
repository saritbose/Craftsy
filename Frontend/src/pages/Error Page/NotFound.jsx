import { Home, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Error Page
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-neutral-900 flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        <div className="flex justify-center animate-spin">
          <LoaderCircle className="h-24 w-24 text-orange-400" />
        </div>

        <div className="space-y-4">
          <h1 className="text-7xl font-bold text-white">404</h1>
          <h2 className="text-2xl font-semibold text-white">Page not found</h2>
          <p className="text-neutral-400 max-w-md mx-auto">
            Looks like this feature is still not available. Let's get you back
            to where you left.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700 w-full sm:w-auto cursor-pointer"
          >
            Go Back
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="bg-orange-400 hover:bg-orange-600 text-white w-full sm:w-auto cursor-pointer"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
