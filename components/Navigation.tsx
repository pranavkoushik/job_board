import { MapPin, Settings, Bell } from "lucide-react";

export function Navigation() {
  return (
    <nav className="bg-[#1a1a2e] border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Nav Items */}
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
              <span className="text-white text-lg">Taskify Ai</span>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-white pb-4 border-b-2 border-white">Find job</a>
              <a href="#" className="text-gray-400 hover:text-white">Messages</a>
              <a href="#" className="text-gray-400 hover:text-white">Hiring</a>
              <a href="#" className="text-gray-400 hover:text-white">Community</a>
              <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
            </div>
          </div>
          
          {/* Right Side Items */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">New York, NY</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-orange-400"></div>
            <button className="text-gray-400 hover:text-white">
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}