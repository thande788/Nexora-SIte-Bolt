import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // or use <a> if not using react-router

const COOKIE_KEY = "nexora_cookie_consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setShow(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem(COOKIE_KEY, accepted ? "accepted" : "declined");
    setShow(false);
    // TODO: Integrate analytics enable/disable here
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <span className="text-sm text-gray-700 dark:text-gray-200">
        We use cookies for analytics and to improve your experience. See our{" "}
        <Link to="/privacy" className="underline text-primary-600 dark:text-primary-400">Privacy Policy</Link>.
      </span>
      <div className="mt-2 md:mt-0 flex gap-2">
        <button
          className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 focus:ring"
          onClick={() => handleConsent(true)}
        >
          Accept
        </button>
        <button
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring"
          onClick={() => handleConsent(false)}
        >
          Decline
        </button>
      </div>
    </div>
  );
}