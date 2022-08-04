import * as React from "react"
import Svg, { Path } from "react-native-svg"
import size from '../Size'

function SvgStatistic({ iconWidth, iconHeigth, iconColor }) {
  return (
    <Svg
      width={iconWidth||size.size14}
      height={iconHeigth||size.size17}
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 15.821a1 1 0 11-2 0v-11a1 1 0 012 0v11zm-4 0a1 1 0 11-2 0v-7a1 1 0 012 0v7zm6 0v-9a1 1 0 012 0v9a1 1 0 11-2 0zm4-14a1 1 0 012 0v14a1 1 0 01-2 0v-14z"
        fill={iconColor||"#fff"}
      />
    </Svg>
  )
}

export default SvgStatistic
