import * as React from "react"
import Svg, { Rect, Path, G, Defs, ClipPath } from "react-native-svg"
import size from '../Size'

function SvgHome({ iconWidth, iconHeigth, iconColor }) {
  return (
    <Svg
      width={iconWidth||size.size20}
      height={iconHeigth||size.size18}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.998 16.149v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87l-8.36-7.53c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87h1.7v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
        fill={iconColor || "#fff"}
      />
    </Svg>
  )
}

export default SvgHome
