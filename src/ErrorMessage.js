const ErrorMessage = ({children}) => {
    return (
      <div
      style={{
          width:"100%",
          padding:10,
          marginBottom:4,
          borderRadius:4,
          backgroundColor:"orangered",
          textAlign:"center",
          color:"white",
          textTransfrom:"capatilize"
        
      }}>
        {children}
      </div>
    )
  }
  
  export default ErrorMessage