const Button = ({type, isDisabled, children, section}) => {
    return (
      <button className={`btn btn-${section}`} type={type} disabled={isDisabled}>
          {children}
      </button>
    )
  }
  
  export default Button
  
  Button.defaultProps = {
      type: 'button',
      id: 'btn',
      isDisabled: false,
  }