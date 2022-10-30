import HomeIcon from '@mui/icons-material/Home'

type HomeIconsProps = {
  fontSize?: string
  color?: string
}

const HomeIconComponent = (props: HomeIconsProps) => {
  const { fontSize, color } = props
  return (
    <span style={{ fontSize, color }}>
      <HomeIcon fontSize='inherit' color='inherit' />
    </span>
  )
}

const HomeIcons = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <HomeIconComponent />
      <HomeIconComponent fontSize='22px' />
      <HomeIconComponent fontSize='33px' />
      <HomeIconComponent color='red' />
      <HomeIconComponent fontSize='22px' color='red' />
    </div>
  )
}

export default HomeIcons
