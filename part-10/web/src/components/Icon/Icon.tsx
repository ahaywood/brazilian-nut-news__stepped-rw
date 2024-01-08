const Icon = ({ id, size = 24, ...props }) => {
  return (
    <svg width={size} height={size} {...props}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
