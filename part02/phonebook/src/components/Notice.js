export const Notice = ({ message }) => {

    const noticeStyle = {
        color: 'green',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 6
    }

    const warningStyle = {
        color: 'red',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 6
    }

    if (message === null) {
      return null
    }
    
    else if (message.charAt(message.length-1) === ".")
    return (
      <div style={warningStyle}>
        {message}
      </div>
    )
    return (
        <div style={noticeStyle}>
          {message}
        </div>
      )
  }