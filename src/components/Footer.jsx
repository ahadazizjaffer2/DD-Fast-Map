// import { GithubIcon, LinkedinIcon } from "lucide-react";

// const developers = [
//   {
//     name: "Ahmed Bilal",
//     role: "Lead Developer",
//     github: "https://github.com/ahmedbilal",
//     linkedin: "https://linkedin.com/in/ahmedbilal",
//   },
//   {
//     name: "Maryam Khan",
//     role: "3D Artist",
//     github: "https://github.com/maryamkhan",
//     linkedin: "https://linkedin.com/in/maryamkhan",
//   }
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-zinc-900 py-6 border-t border-red-800">
//       <div className="container mx-auto px-4 md:px-8">
//         {/* Developers Section */}
//         <div className="mb-6">
//           <h4 className="text-center text-red-500 font-bold mb-4">DEVELOPERS</h4>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
//             {developers.map((developer, index) => (
//               <div
//                 key={index}
//                 className="bg-zinc-800 p-4 rounded border-l-2 border-red-600 hover:bg-zinc-800/80 transition-colors"
//               >
//                 <p className="font-medium text-white">{developer.name}</p>
//                 <p className="text-xs text-zinc-400 mt-1 mb-3">{developer.role}</p>
//                 <div className="flex space-x-3">
//                   <a
//                     href={developer.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-zinc-400 hover:text-red-500 transition-colors"
//                   >
//                     <GithubIcon className="w-4 h-4" />
//                   </a>
//                   <a
//                     href={developer.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-zinc-400 hover:text-red-500 transition-colors"
//                   >
//                     <LinkedinIcon className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-800 pt-6">
//           <div className="mb-4 md:mb-0">
//             {/* Logo placeholder - replace with your actual logo */}
//             <div className="flex items-center">
//               <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mr-2">
//                 <img src="/logo.png" alt="Logo" />
//               </div>
//               <span className="text-lg font-bold text-red-600">
//                 Developers <span className="text-white">Day 2025</span>
//               </span>
//             </div>
//           </div>
//           <div className="flex space-x-4 mb-4 md:mb-0">
//             <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
//               <GithubIcon className="w-5 h-5" />
//             </a>
//           </div>
//           <div className="text-zinc-400 text-xs">
//             &copy; {new Date().getFullYear()} Developers' Day. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { GithubIcon, LinkedinIcon } from "lucide-react";

// Developer data array
const developers = [
  {
    name: "Ahmed Bilal",
    role: "Lead Developer",
    github: "https://github.com/ahmedbilal",
    linkedin: "https://linkedin.com/in/ahmedbilal",
  },
  {
    name: "Maryam Khan",
    role: "3D Artist",
    github: "https://github.com/maryamkhan",
    linkedin: "https://linkedin.com/in/maryamkhan",
  },
  {
    name: "Hassan Ali",
    role: "UI Designer",
    github: "https://github.com/hassanali",
    linkedin: "https://linkedin.com/in/hassanali",
  }
];

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-6 border-t border-red-800">
      <div className="container mx-auto px-4 md:px-8">
        {/* Developers Section */}
        <div className="mb-6">
          <h4 className="text-center text-red-500 font-bold mb-4">DEVELOPERS</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto justify-items-center">
            {developers.map((developer, index) => (
              <div
                key={index}
                className="bg-zinc-800 w-full p-4 rounded border-l-2 border-red-600 hover:bg-zinc-800/80 transition-colors"
              >
                <p className="font-medium text-white">{developer.name}</p>
                <p className="text-xs text-zinc-400 mt-1 mb-3">{developer.role}</p>
                <div className="flex space-x-3">
                  <a
                    href={developer.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={developer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-800 pt-6">
          <div className="mb-4 md:mb-0">
            {/* Logo placeholder - replace with your actual logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mr-2">
                <img src="/logo.png" alt="Logo" />
              </div>
              <span className="text-lg font-bold text-red-600">
                Developers <span className="text-white">Day 2025</span>
              </span>
            </div>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="text-zinc-400 text-xs">
            &copy; {new Date().getFullYear()} Developers' Day. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
