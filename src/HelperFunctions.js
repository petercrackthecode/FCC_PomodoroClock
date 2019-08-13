export const formatTime= (time) => {
    const colonPos= time.indexOf(':');
    let minutes= time.substr(0, colonPos);
    let seconds= time.substr(colonPos + 1);
  
    if (minutes.length === 1) minutes= '0' + minutes;
    if (seconds.length === 1) seconds= '0' + seconds;

    return minutes + ':' + seconds;
};

export const timeStringToSecond = (time = "") => {
    const minute = parseInt(time.substr(0, 2));
    const second = parseInt(time.substr(3, 2));
    const overallSecond = minute * 60 + second;

    return overallSecond;
};

export const secondToTimeString = (secondAsWhole = 0) => {
    const minute = ~~(secondAsWhole / 60);
    const second = secondAsWhole - minute * 60;

    return `${minute.toString()}:${second.toString()}`;
};