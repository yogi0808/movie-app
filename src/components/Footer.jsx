import { FooterLinks } from "../constants"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="text-white flex items-center flex-col bg-primary">
      <div className="py-20 flex gap-10 flex-wrap">
        <div className="relative -top-9">
          <div className="w-32.5 h-23.5 absolute top-0 right-0">
            <Logo xl />
          </div>
          <a className="text-highlight bg-white text-[18.72px] font-bold border-2 border-white rounded-[5px] px-4 py-2 relative top-37.5">
            Hi yogi0808!
          </a>
        </div>
        {FooterLinks.map((link) => (
          <div key={link.id}>
            <h3 className="text-[20.16px] font-bold uppercase leading-[28.224px]">
              {link.title}
            </h3>
            <ul className="flex flex-col gap-0.5">
              {link.links.map((link) => (
                <li
                  key={link.id}
                  className="leading-[23.04px] max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white"
                >
                  <a
                    className="text-[17.28px] hover:underline transition-all duration-300 ease-out"
                    href={link.link}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <section className="text-[11.2px] text-white opacity-10">
        Build 722ea34 (9678)
      </section>
    </footer>
  )
}

export default Footer

// <div className="relative flex gap-10.5 flex-wrap text-sm py-20 max-w-325 mx-auto justify-center">
//   <div className="flex h-fit flex-col relative -top-9">
//     <div className="w-32.5 h-23.5 self-end">
//       <Logo xl />
//     </div>
//     <button className="bg-white w-full px-4.5 py-2.5 text-lg font-bold relative top-10 rounded text-highlight">
//       Hi yogi0808!
//     </button>
//   </div>
//   {FooterLinks.map((link) => (
//     <div
//       key={link.id}
//       className="flex h-fit flex-col"
//     >
//       <h2 className="uppercase font-bold text-[20px]">{link.title}</h2>
//       {link.links.map((link) => (
//         <a
//           key={link.id}
//           className="hover:underline text-[17px] font-normal transition-all ease-out duration-300"
//           href={link.link}
//         >
//           {link.text}
//         </a>
//       ))}
//     </div>
//   ))}
// </div>
