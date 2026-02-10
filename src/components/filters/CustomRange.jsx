import classNames from "classnames"
import React from "react"
import { getTrackBackground, Range } from "react-range"

const CustomRange = ({
  min,
  max,
  step,
  values,
  onChange,
  colors,
  mainMarkDivider,
}) => {
  return (
    <Range
      min={min}
      max={max}
      step={step}
      values={values}
      onChange={onChange}
      renderMark={({ props, index }) => (
        <div
          {...props}
          key={props.key}
          style={{ ...props.style }}
          className={`border-slider-bg -z-1 ${(index * step) % mainMarkDivider === 0 ? "h-full border" : "h-2/3 border-l"}`}
        >
          {(index * step) % mainMarkDivider === 0 ? (
            <p className="absolute top-full left-1/2 -translate-x-1/2 text-slider-bg">
              {index * step}
            </p>
          ) : (
            ""
          )}
        </div>
      )}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className="flex h-7 w-full"
          style={{ ...props.style }}
        >
          <div
            ref={props.ref}
            className="h-2 w-full rounded-full self-center"
            style={{
              background: getTrackBackground({
                values,
                colors: colors,
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ index, props, isDragged }) => {
        const thumbClassNames = classNames(
          "h-3.5 w-3.5 rounded-full outline-none hover:bg-btn-hover bg-highlight ring-highlight/40 relative",
          {
            "ring-4": isDragged,
          },
        )
        return (
          <div
            {...props}
            key={props.key}
            className={thumbClassNames}
            style={{ ...props.style }}
          >
            {isDragged ? (
              <div className="absolute -top-[250%] left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg">
                {values[index].toFixed(0)}
              </div>
            ) : (
              ""
            )}
          </div>
        )
      }}
    />
  )
}

export default CustomRange
