type LegalLayoutProps = {
  children?: React.ReactNode
}

const LegalLayout = ({ children }: LegalLayoutProps) => {
  return (
    <div>
      <h1>Legal Page</h1>
      {children}
    </div>
  )
}

export default LegalLayout
