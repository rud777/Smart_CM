import * as React from "react"
import Svg, { Path } from "react-native-svg"
import size from '../Size'

function SvgTaskStar({ iconWidth, iconHeigth, iconColor }) {
  return (
    <Svg
      width={iconWidth||size.size19}
      height={iconHeigth||size.size21}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M18.146 3.87a1.5 1.5 0 00-1.5-1.5h-3V.87h-1.5v1.5h-6V.87h-1.5v1.5h-3a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h3v-1.5h-3v-15h3v1.5h1.5v-1.5h6v1.5h1.5v-1.5h3v4.5h1.5v-4.5z"
        fill={iconColor||"#FCFCFC"}
      />
    </Svg>
  )
}

export default SvgTaskStar
