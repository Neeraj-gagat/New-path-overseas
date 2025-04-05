'use client';
import { useState } from 'react';
import { FaPlaneDeparture } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa6";
import { IoBookSharp } from 'react-icons/io5';
import { MdOutlinePersonOutline } from 'react-icons/md';

const data = {
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

const data2 = [
  {icon: <FaPlaneDeparture/> ,
   name:"Work Visa",
   paragraph:"Visarzo provides business visas for those people who want to grow their business internationally."
  },
  {icon: <FaPlane/> ,
    name:" Tourists Visa ",
    paragraph:"A visa is a conditional permission provided by a region to a foreigner to enter, stay in, or leave that country."
  },
  {icon: <MdOutlinePersonOutline/> ,
  name:"PR",
  paragraph:"For people with professions that don't require a lot of experience but aren't temporary or seasonal."
  },
  {icon: <IoBookSharp/> ,
  name:"Study Visa​",
  paragraph:"Student visas are non-immigrant visas that do not require to become a citizen of the country in which they are issued."
  }
]

export const ContinentSelector = () => {
  const [selectedContinent, setSelectedContinent] = useState('NorthAmerica');

  return (
    <div className="container mx-auto p-6">
      {/* Continent Tabs */}
      <div className="grid grid-cols-3 md:flex md:justify-center space-y-2 md:space-y-0 space-x-2 md:space-x-5 bg-[#F4F8FA] mb-6">
        {Object.keys(data).map((continent) => (
          <button
            key={continent}
            onClick={() => setSelectedContinent(continent)}
            className={`px-4 md:px-12 py-2 text-sm md:text-lg transition duration-300 font-medium ${
              selectedContinent === continent
                ? 'bg-[#FFFFFF] text-slate-900 border-b shadow-2xl'
                : 'bg-[#F4F8FA] text-[#AFAFBF]'
            }`}
          >
            {continent.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>

      {/* Countries List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 pt-7 md:pt-10 lg:grid-cols-4 gap-4">
        {data[selectedContinent as keyof typeof data].map((country) => (
          <div
            key={country.name}
            className="flex items-center justify-start w-[170px] md:w-[240px] border-r-2 border-l-2 space-x-2 p-2 md:p-5 bg-white shadow-md rounded-lg border-gray-200"
          >
            <span className="text-sm md:text-2xl">{country.flag}</span>
            <span className="text-sm md:text-lg font-medium">{country.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Services = () => {
  return <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-7'>
          {data2.map((service) => (
            <div className='flex flex-col max-w-[250px] rounded-2xl shadow-2xl border-r-2 border-l-2 p-5' key={service.name}>
              <div className='flex justify-center text-3xl'>{service.icon}</div>
              <div className='flex justify-center font-bold text-[#FAB855]'>{service.name}</div>
              <div className='flex justify-center text-sm md:text-base text-center text-[#]'><p>{service.paragraph}</p></div>
            </div>
          ))}
        </div>
  </div>
}


