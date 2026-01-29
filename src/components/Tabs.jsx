import { useEffect, useRef, useState } from "react"
import GradientText from "./GradientText"

const Tabs = ({ data = [], activeTab, onTabChange }) => {
  const [tabStyle, setTabStyle] = useState({ left: 0, width: 0 })

  const tabsRef = useRef([])

  useEffect(() => {
    const currentTab = tabsRef.current[activeTab]
    if (currentTab) {
      setTabStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      })
    }
  }, [activeTab])

  return (
    <div className="flex border border-primary w-fit rounded-full relative justify-center items-center">
      {data.map((item, idx) => (
        <GradientText
          key={idx}
          gradient="bg-gradient2"
        >
          <p
            onClick={() => onTabChange(idx)}
            ref={(el) => (tabsRef.current[idx] = el)}
            className={`px-5 font-semibold py-0.5 cursor-pointer transition-colors ease-out duration-300 ${
              activeTab === idx ? "text-transparent" : "text-black"
            }`}
          >
            {item}
          </p>
        </GradientText>
      ))}
      <div
        className="bg-primary h-full rounded-full w-14 absolute top-0 left-0 transition-all duration-300 ease-out -z-1"
        style={{
          left: tabStyle.left,
          width: `${tabStyle.width}px`,
        }}
      />
    </div>
  )
}

export default Tabs
