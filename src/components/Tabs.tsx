import classNames from "classnames"
import { useEffect, useRef, useState } from "react"

import GradientText from "@components/GradientText"
import type { TabsProps } from "@/utils/types"
interface HighlighterStyleType {
  left: number
  width: number
}

/**
 * this is an tab component it performs the actin based on selected(active) tab.
 *
 * @param {object} param0 - with prop data, activeTab, onTabChange
 *  @param {list} data - it is a list of string for tab title
 *  @param {number} activeTab - it is an index number of the selected(active) tab
 *  @param {function} onTabChange - it is an function with 1 param index it is responsible for change the index number for selected(active) tab and perform some action based on the the selected(active) tab.
 *
 * @returns - jsx for tabs component
 */

const Tabs = ({ data, activeTab, onTabChange }: TabsProps) => {
  const [tabStyle, setTabStyle] = useState<HighlighterStyleType>({ left: 0, width: 0 }) // will change the style of the background div(active indicator)

  const tabsRef = useRef<HTMLParagraphElement[]>([]) // we have the list of the element all the tabs we have

  // changes the active indicator size and position based on the use selection
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
      {data.map((item, idx) => {
        const linkClassNames = classNames(
          "px-2.75 lg:px-5 max-lg:text-xs/10 max-lg:leading-6 font-semibold py-0.5 cursor-pointer transition-colors ease-out duration-300 text-black",
          {
            "text-transparent!": activeTab === idx,
          },
        )
        return (
          <GradientText
            key={idx}
            gradient="bg-gradient2"
          >
            <p
              onClick={() => onTabChange(idx)}
              ref={(el: HTMLParagraphElement) => {
                tabsRef.current[idx] = el
              }}
              className={linkClassNames}
            >
              {item}
            </p>
          </GradientText>
        )
      })}
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
