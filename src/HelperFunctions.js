const formatTime= (time) => {
    const colonPos= time.indexOf(':');
    let minutes= time.substr(0, colonPos);
    let seconds= time.substr(colonPos + 1);
  
    if (minutes.length === 1) minutes= '0' + minutes;
    if (seconds.length === 1) seconds= '0' + seconds;

    return minutes + ':' + seconds;
};

export default formatTime;