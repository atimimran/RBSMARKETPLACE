// export default function HeroImages() {
//   return (
//     <div className="grid grid-cols-2 gap-4 items-start w-full">
      
//       {/* Column 1 (Left: Container Ship + Truck) */}
//       <div className="flex flex-col gap-4">
//         <div className="w-full h-[155px] sm:h-[175px] rounded-[24px] overflow-hidden border border-gray-200/80 shadow-xs bg-white">
//           <img 
//             src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop" 
//             alt="Container ship" 
//             className="w-full h-full object-cover hover:scale-105 transition duration-500"
//           />
//         </div>
//         <div className="w-full h-[195px] sm:h-[215px] rounded-[24px] overflow-hidden border border-gray-200/80 shadow-xs bg-white">
//           <img 
//             src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop" 
//             alt="Truck on road" 
//             className="w-full h-full object-cover hover:scale-105 transition duration-500"
//           />
//         </div>
//       </div>

//       {/* Column 2 (Right: Taller Warehouse + Handshake) */}
//       <div className="flex flex-col gap-4">
//         <div className="w-full h-[215px] sm:h-[235px] rounded-[24px] overflow-hidden border border-gray-200/80 shadow-xs bg-white">
//           <img 
//             src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop" 
//             alt="Warehouse forklift" 
//             className="w-full h-full object-cover hover:scale-105 transition duration-500"
//           />
//         </div>
//         <div className="w-full h-[135px] sm:h-[155px] rounded-[24px] overflow-hidden border border-gray-200/80 shadow-xs bg-white">
//           <img 
//             src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop" 
//             alt="Partnership handshake" 
//             className="w-full h-full object-cover hover:scale-105 transition duration-500"
//           />
//         </div>
//       </div>

//       {/* Bottom Full-Width Port Containers Image */}
//       <div className="col-span-2 w-full h-[150px] sm:h-[170px] rounded-[24px] overflow-hidden border border-gray-200/80 shadow-xs bg-white">
//         <img 
//           src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop" 
//           alt="Port yard containers" 
//           className="w-full h-full object-cover hover:scale-105 transition duration-500"
//         />
//       </div>

//     </div>
//   );
// }


// export default function HeroImages() {
//   return (
//     <div className="w-full">
//       {/* Desktop / Tablet Layout */}
//       <div
//         className="
//           relative
//           hidden sm:block
//           w-full
//           max-w-[563px]
//           aspect-[563/691]
//           mx-auto
//         "
//       >
//         {/* =========================
//             1. CONTAINER SHIP
//         ========================== */}
//         <div
//           className="
//             absolute
//             left-[0.7%]
//             top-[1.4%]
//             w-[51.9%]
//             h-[24.3%]
//             overflow-hidden
//             rounded-[24px]
//             bg-white
//             shadow-[0_2px_12px_rgba(0,0,0,0.04)]
//           "
//         >
//           <img
//             src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop"
//             alt="Container ship"
//             className="
//               w-full
//               h-full
//               object-cover
//               transition-transform
//               duration-500
//               hover:scale-105
//             "
//           />
//         </div>

//         {/* =========================
//             2. TRUCK
//         ========================== */}
//         <div
//           className="
//             absolute
//             left-[15.1%]
//             top-[27.9%]
//             w-[37.7%]
//             h-[27.2%]
//             overflow-hidden
//             rounded-[24px]
//             bg-white
//             shadow-[0_2px_12px_rgba(0,0,0,0.04)]
//           "
//         >
//           <img
//             src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop"
//             alt="Truck on road"
//             className="
//               w-full
//               h-full
//               object-cover
//               transition-transform
//               duration-500
//               hover:scale-105
//             "
//           />
//         </div>

//         {/* =========================
//             3. WAREHOUSE
//         ========================== */}
//         <div
//           className="
//             absolute
//             left-[54.7%]
//             top-[1.4%]
//             w-[42.8%]
//             h-[36.3%]
//             overflow-hidden
//             rounded-[24px]
//             bg-white
//             shadow-[0_2px_12px_rgba(0,0,0,0.04)]
//           "
//         >
//           <img
//             src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
//             alt="Warehouse forklift"
//             className="
//               w-full
//               h-full
//               object-cover
//               transition-transform
//               duration-500
//               hover:scale-105
//             "
//           />
//         </div>

//         {/* =========================
//             4. BUSINESS HANDSHAKE
//         ========================== */}
//         <div
//           className="
//             absolute
//             left-[54.7%]
//             top-[39.8%]
//             w-[42.8%]
//             h-[30.4%]
//             overflow-hidden
//             rounded-[24px]
//             bg-white
//             shadow-[0_2px_12px_rgba(0,0,0,0.04)]
//           "
//         >
//           <img
//             src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop"
//             alt="Business partnership handshake"
//             className="
//               w-full
//               h-full
//               object-cover
//               transition-transform
//               duration-500
//               hover:scale-105
//             "
//           />
//         </div>

//         {/* =========================
//             5. CONTAINER PORT
//         ========================== */}
//         <div
//           className="
//             absolute
//             left-[32.7%]
//             top-[72.1%]
//             w-[64.6%]
//             h-[26.6%]
//             overflow-hidden
//             rounded-[24px]
//             bg-white
//             shadow-[0_2px_12px_rgba(0,0,0,0.04)]
//           "
//         >
//           <img
//             src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
//             alt="Shipping containers at port"
//             className="
//               w-full
//               h-full
//               object-cover
//               transition-transform
//               duration-500
//               hover:scale-105
//             "
//           />
//         </div>
//       </div>

//       {/* =================================
//           MOBILE LAYOUT
//       ================================== */}
//       <div className="sm:hidden flex flex-col gap-4 w-full">
        
//         {/* Ship */}
//         <div
//           className="
//             w-full
//             h-[190px]
//             overflow-hidden
//             rounded-[24px]
//             bg-white
//             shadow-[0_2px_12px_rgba(0,0,0,0.04)]
//           "
//         >
//           <img
//             src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop"
//             alt="Container ship"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Truck + Warehouse */}
//         <div className="grid grid-cols-2 gap-4">
//           <div
//             className="
//               h-[180px]
//               overflow-hidden
//               rounded-[24px]
//               bg-white
//               shadow-[0_2px_12px_rgba(0,0,0,0.04)]
//             "
//           >
//             <img
//               src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop"
//               alt="Truck on road"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div
//             className="
//               h-[180px]
//               overflow-hidden
//               rounded-[24px]
//               bg-white
//               shadow-[0_2px_12px_rgba(0,0,0,0.04)]
//             "
//           >
//             <img
//               src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
//               alt="Warehouse forklift"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Handshake */}
//         <div
//           className="
//             w-full
//             h-[210px]
//             overflow-hidden
//             rounded-[24px]
//             bg-white
//             shadow-[0_2px_12px_rgba(0,0,0,0.04)]
//           "
//         >
//           <img
//             src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop"
//             alt="Business partnership handshake"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Port Containers */}
//         <div
//           className="
//             w-full
//             h-[190px]
//             overflow-hidden
//             rounded-[24px]
//             bg-white
//             shadow-[0_2px_12px_rgba(0,0,0,0.04)]
//           "
//         >
//           <img
//             src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
//             alt="Shipping containers at port"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function HeroImages() {
  return (
    <div className="w-full">

      {/* DESKTOP MOSAIC */}
      <div
        className="
          relative
          hidden
          w-full
          aspect-563/691
          sm:block
        "
      >

        {/* SHIP */}
        <div
          className="
            absolute
            left-[0.7%]
            top-[1.4%]
            h-[24.3%]
            w-[51.9%]
            overflow-hidden
            rounded-[17px]
            bg-white
            shadow-sm
          "
        >
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop"
            alt="Container ship"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* TRUCK */}
        <div
          className="
            absolute
            left-[15.1%]
            top-[27.9%]
            h-[27.2%]
            w-[37.7%]
            overflow-hidden
            rounded-[17px]
            bg-white
            shadow-sm
          "
        >
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop"
            alt="Truck on road"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* WAREHOUSE */}
        <div
          className="
            absolute
            left-[54.7%]
            top-[1.4%]
            h-[36.3%]
            w-[42.8%]
            overflow-hidden
            rounded-[17px]
            bg-white
            shadow-sm
          "
        >
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
            alt="Warehouse forklift"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* HANDSHAKE */}
        <div
          className="
            absolute
            left-[54.7%]
            top-[39.8%]
            h-[30.4%]
            w-[42.8%]
            overflow-hidden
            rounded-[17px]
            bg-white
            shadow-sm
          "
        >
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop"
            alt="Business partnership"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* CONTAINERS */}
        <div
          className="
            absolute
            left-[32.7%]
            top-[72.1%]
            h-[26.6%]
            w-[64.6%]
            overflow-hidden
            rounded-[17px]
            bg-white
            shadow-sm
          "
        >
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
            alt="Port containers"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* MOBILE */}
      <div className="grid grid-cols-2 gap-2.5 sm:hidden">

        <div className="col-span-2 h-[150px] overflow-hidden rounded-[16px]">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop"
            alt="Container ship"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="h-[145px] overflow-hidden rounded-[16px]">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop"
            alt="Truck"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="h-[145px] overflow-hidden rounded-[16px]">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
            alt="Warehouse"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="col-span-2 h-[170px] overflow-hidden rounded-[16px]">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop"
            alt="Business partnership"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="col-span-2 h-[150px] overflow-hidden rounded-[16px]">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
            alt="Port containers"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

