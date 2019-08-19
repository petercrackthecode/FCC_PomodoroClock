export const formatTime= (time) => {
    const colonPos= time.indexOf(':');
    let minutes= parseInt(time.substr(0, colonPos));
    let seconds= parseInt(time.substr(colonPos + 1));

    if (minutes < 10) minutes= '0' + minutes;
    if (seconds < 10) seconds= '0' + seconds;

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

export function accurateInterval() {
    (function() {
        window.accurateInterval = function(fn, time) {
            var cancel, nextAt, timeout, wrapper;
            nextAt = new Date().getTime() + time;
            timeout = null;
            wrapper = function() {
                nextAt += time;
                timeout = setTimeout(wrapper, nextAt - new Date().getTime());
                return fn();
            };
            cancel = function() {
                return clearTimeout(timeout);
            };
            timeout = setTimeout(wrapper, nextAt - new Date().getTime());
            return {
                cancel: cancel
            };
        };
    }).call(this);
  }

