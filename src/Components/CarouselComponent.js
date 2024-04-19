// import React, { useState } from "react";
// import frame1 from "../Assets/frame1.png";
// import frame2 from "../Assets/frame2.png";
// import frame3 from "../Assets/frame3.png";

// const tabs = {
//   carbon: frame1,
//   wildlife: frame2,
//   communities: frame3,
// };
// const TabButton = ({ name, active, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`tab-button ${active ? "active" : ""}`}
//     style={{
//       backgroundColor: active ? "#1a5130" : "transparent",
//       color: active ? "white" : "#1a5130",
//       fontSize: "23px",
//       outline: "none",
//       padding: "15px 30px",
//       margin: "0 2px",
//       cursor: "pointer",
//       borderRadius: "50px",
//       transition: "all 0.3s ease",
//       flex: "1 0 auto",
//       maxWidth: "calc(33% - 70px)",
//       boxShadow: active
//         ? "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"
//         : "none",
//     }}
//     // Add hover effect
//     onMouseEnter={() =>
//       active
//         ? null
//         : (event.target.style.boxShadow =
//             "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)")
//     }
//     onMouseLeave={() => (event.target.style.boxShadow = "none")}
//   >
//     {name}
//   </button>
// );

// export default function CarouselComponent() {
//   const [activeTab, setActiveTab] = useState("carbon");

//   const handleClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="flex flex-col items-center bg-[#fdfaec] p-12 w-full">
//       <div style={{ fontFamily: "Arial, sans-serif" }} className="mb-7 w-full">
//         <div className="flex flex-col text-center gap-6 mb-16">
//           <div className="text-[#1a5130] text-7xl font-bold ">
//             See Carbon in Action
//           </div>
//         </div>
//         <div
//           className="flex justify-center items-center mb-5 w-full"
//           //   style={{ width: "1174px" }} // Adjust the max-width as per the design requirement
//         >
//           <div
//             className="tab-buttons px-8 py-3  flex justify-between items-center bg-white rounded-full w-full h-full"
//             style={{
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//               overflow: "hidden",
//             }} // Use overflow hidden to maintain rounded corners
//           >
//             {Object.keys(tabs).map((tab) => (
//               <TabButton
//                 key={tab}
//                 name={tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 active={activeTab === tab}
//                 onClick={() => handleClick(tab)}
//               />
//             ))}
//           </div>
//         </div>
//         <div
//           className="carousel w-full flex justify-center items-center"
//           style={{ position: "relative" }}
//         >
//           <img
//             src={tabs[activeTab]}
//             alt={`${activeTab}`}
//             style={{ width: "100%", height: "auto", maxWidth: "1784px" }} // Adjust height to 'auto' for responsive height
//             className="rounded-3xl object-cover" // Use object-cover to ensure the aspect ratio is maintained
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
