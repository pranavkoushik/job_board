import { Search, MapPin, Briefcase, Calendar, ChevronDown } from "lucide-react";

interface SearchFiltersProps {
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
  salaryRange: [number, number];
  setSalaryRange: (range: [number, number]) => void;
}

export function SearchFilters({ searchKeyword, setSearchKeyword, salaryRange, setSalaryRange }: SearchFiltersProps) {
  return (
    <div className="bg-[#1a1a2e] border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] rounded-lg px-3 py-2 flex-1 max-w-[180px] border border-gray-700">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="bg-transparent text-white outline-none w-full text-sm"
            />
          </div>

          {/* Work Location */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] rounded-lg px-3 py-2 flex-1 max-w-[180px] border border-gray-700">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm">Work location</span>
            <ChevronDown className="w-3 h-3 text-gray-400 ml-auto" />
          </div>

          {/* Experience */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] rounded-lg px-3 py-2 flex-1 max-w-[180px] border border-gray-700">
            <Briefcase className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm">Experience</span>
            <ChevronDown className="w-3 h-3 text-gray-400 ml-auto" />
          </div>

          {/* Per Month */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] rounded-lg px-3 py-2 flex-1 max-w-[180px] border border-gray-700">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm">Per month</span>
            <ChevronDown className="w-3 h-3 text-gray-400 ml-auto" />
          </div>

          {/* Salary Range */}
          <div className="flex-1 ml-6">
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-400 text-xs">Salary range</span>
              <span className="text-white text-xs">${salaryRange[0]}/hr - ${salaryRange[1]}/hr</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="500"
                value={salaryRange[1]}
                onChange={(e) => setSalaryRange([salaryRange[0], parseInt(e.target.value)])}
                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}