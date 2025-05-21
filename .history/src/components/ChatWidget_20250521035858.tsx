import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: 'Hello! How can I help you today?', isUser: false }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { text: message, isUser: true }]);
    setMessage('');
    
    // Simulate response after a short delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          text: "Thanks for your message! Our team will get back to you soon. For immediate assistance, please W us at +254 712 345 678.", 
          isUser: false 
        }
      ]);
    }, 1000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700">
          <div className="bg-primary-600 dark:bg-primary-800 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">Nexora Chat Support</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-3">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`${
                  msg.isUser 
                    ? 'ml-auto bg-primary-600 text-white' 
                    : 'mr-auto bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                } rounded-lg p-3 max-w-[80%]`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-700 p-3 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            />
            <button 
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-r-md"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;