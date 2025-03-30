

// export const Countries = () => {
//     return <div>
//         <div></div>
//     </div>
// }

'use client';
import { useState } from 'react';

const data = {
  Europe: [
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'Belgium', flag: '🇧🇪' },
    { name: 'Greece', flag: '🇬🇷' },
    { name: 'Bulgaria', flag: '🇧🇬' },
    { name: 'Croatia', flag: '🇭🇷' },
    { name: 'Cyprus', flag: '🇨🇾' },
    { name: 'Czechia', flag: '🇨🇿' },
    { name: 'Denmark', flag: '🇩🇰' },
    { name: 'Estonia', flag: '🇪🇪' },
    { name: 'Finland', flag: '🇫🇮' },
  ],
  Asia: [
    { name: 'India', flag: '🇮🇳' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'South Korea', flag: '🇰🇷' },
    { name: 'Thailand', flag: '🇹🇭' },
    { name: 'Indonesia', flag: '🇮🇩' },
    { name: 'Iran', flag: '🇮🇷' },
    { name: 'Iraq', flag: '🇮🇶' },
    { name: 'Israel', flag: '🇮🇱' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Jordan', flag: '🇯🇴' },
    { name: 'Kazakhstan', flag: '🇰🇿' },
    { name: 'Kuwait', flag: '🇰🇼' },
    { name: 'Kyrgyzstan', flag: '🇰🇬' },
    { name: 'Laos', flag: '🇱🇦' },
    { name: 'Lebanon', flag: '🇱🇧' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Maldives', flag: '🇲🇻' },
    { name: 'Mongolia', flag: '🇲🇳' },
    { name: 'Myanmar', flag: '🇲🇲' },
    { name: 'Nepal', flag: '🇳🇵' },
    { name: 'North Korea', flag: '🇰🇵' },
  ],
  NorthAmerica: [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Mexico', flag: '🇲🇽' },
    { name: 'Cuba', flag: '🇨🇺' },
    { name: 'Nicaragua', flag: '🇳🇮' },
    { name: 'Panama', flag: '🇵🇦' },
    { name: 'Saint Kitts and Nevis', flag: '🇰🇳' },
    { name: 'Saint Lucia', flag: '🇱🇨' },
    { name: 'Saint Vincent and the Grenadines', flag: '🇻🇨' },
    { name: 'Trinidad and Tobago', flag: '🇹🇹' },
    { name: 'United States', flag: '🇺🇸' },
  ],
  Africa: [
    { name: 'Algeria', flag: '🇩🇿' },
    { name: 'Angola', flag: '🇦🇴' },
    { name: 'Botswana', flag: '🇧🇼' },
    { name: 'Cameroon', flag: '🇨🇲' },
    { name: 'Egypt', flag: '🇪🇬' },
    { name: 'Ethiopia', flag: '🇪🇹' },
    { name: 'Ghana', flag: '🇬🇭' },
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'Morocco', flag: '🇲🇦' },
    { name: 'Nigeria', flag: '🇳🇬' },
    { name: 'South Africa', flag: '🇿🇦' },
    { name: 'Tunisia', flag: '🇹🇳' },
    { name: 'Uganda', flag: '🇺🇬' },
    { name: 'Zimbabwe', flag: '🇿🇼' },
],
  Oceania: [
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Fiji', flag: '🇫🇯' },
    { name: 'Kiribati', flag: '🇰🇮' },
    { name: 'Marshall Islands', flag: '🇲🇭' },
    { name: 'Micronesia', flag: '🇫🇲' },
    { name: 'Nauru', flag: '🇳🇷' },
    { name: 'New Zealand', flag: '🇳🇿' },
    { name: 'Palau', flag: '🇵🇼' },
    { name: 'Papua New Guinea', flag: '🇵🇬' },
    { name: 'Samoa', flag: '🇼🇸' },
    { name: 'Solomon Islands', flag: '🇸🇧' },
    { name: 'Tonga', flag: '🇹🇴' },
    { name: 'Tuvalu', flag: '🇹🇻' },
    { name: 'Vanuatu', flag: '🇻🇺' },
  ],
  LatinAmerica: [
    { name: 'Argentina', flag: '🇦🇷' },
    { name: 'Bolivia', flag: '🇧🇴' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'Chile', flag: '🇨🇱' },
    { name: 'Colombia', flag: '🇨🇴' },
    { name: 'Ecuador', flag: '🇪🇨' },
    { name: 'Guyana', flag: '🇬🇾' },
    { name: 'Paraguay', flag: '🇵🇾' },
    { name: 'Peru', flag: '🇵🇪' },
    { name: 'Suriname', flag: '🇸🇷' },
    { name: 'Uruguay', flag: '🇺🇾' },
    { name: 'Venezuela', flag: '🇻🇪' },
  ]
};

const ContinentSelector = () => {
  const [selectedContinent, setSelectedContinent] = useState('Europe');

  return (
    <div className="container mx-auto p-6">
      {/* Continent Tabs */}
      <div className="flex justify-center space-x-5 bg-[#F4F8FA] mb-6">
        {Object.keys(data).map((continent) => (
          <button
            key={continent}
            onClick={() => setSelectedContinent(continent)}
            className={`px-12 py-2 rounded-lg text-lg  transition duration-300 font-medium ${
              selectedContinent === continent
                ? 'bg-[#FFFFFF] text-slate-900 border-b shadow-2xl'
                : 'bg-[#F4F8FA] text-[#ADACBD]'
            }`}
          >
            {continent.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>

      {/* Countries List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 pt-10 lg:grid-cols-4 gap-4">
        {data[selectedContinent as keyof typeof data].map((country) => (
          <div
            key={country.name}
            className="flex items-center justify-start space-x-2 p-4 bg-white shadow-md rounded-lg border border-gray-200"
          >
            <span className="text-2xl">{country.flag}</span>
            <span className="text-lg font-medium">{country.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinentSelector;
