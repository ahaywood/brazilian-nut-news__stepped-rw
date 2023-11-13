type LinkLayoutProps = {
  children?: React.ReactNode
}

const LinkLayout = ({ children }: LinkLayoutProps) => {
  return (
    <div>
      <h1>Link Layout</h1>
      {children}
    </div>
  )
}

export default LinkLayout
