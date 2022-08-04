import * as React from "react"
import Svg, { Path } from "react-native-svg"
import size from '../Size'

function SvgStar({ iconWidth, iconHeigth, iconColor }) {
  return (
    <Svg
      width={iconWidth||size.size13}
      height={iconHeigth||size.size12}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.896.62l1.912 3.704 4.088.593-3 2.883.75 4.07-3.75-1.921-3.75 1.921.75-4.07-3-2.883 4.2-.593L6.896.62z"
        fill={iconColor||"#FCFCFC"}
      />
    </Svg>
  )
}

export default SvgStar
