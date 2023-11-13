type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div>
      <h1>Base Layout</h1>
      {children}
    </div>
  )
}

export default BaseLayout
