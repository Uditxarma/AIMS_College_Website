import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen navy-gradient flex items-center justify-center geo-pattern pt-24">
      <div className="text-center px-4">
        <h1 className="font-display text-8xl md:text-9xl font-bold text-secondary mb-4">404</h1>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Page Not Found</h2>
        <p className="text-primary-foreground/60 font-body mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="gold" size="lg">
            <Home size={16} /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
