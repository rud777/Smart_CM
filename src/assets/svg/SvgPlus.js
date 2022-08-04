import * as React from "react"
import Svg, { Path } from "react-native-svg"
import size from '../Size'

function SvgPlus({ iconWidth, iconHeigth, iconColor }) {
  return (
    <Svg
      width={iconWidth||size.size15}
      height={iconHeigth||size.size15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M14.239 8.821h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z" fill={iconColor||"#FFFFFF"} />
    </Svg>
  )
}

export default SvgPlus
