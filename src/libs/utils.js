import numeral from 'numeral'

const toOrdinal = (num) => {
    if (num === undefined || num === null) {
        return num;
    } else if (num === 1 || num === '1') {
        return '1st';
    } else if (num === 2 || num === '2') {
        return '2nd';
    } else if (num === 3 || num === '3') {
        return '3rd';
    }
    return num+'th';
};

const numeralFormat = (n, format) => {
    return numeral(n).format(format)
}

const toGauge = (numerator, denominator) => {
    const val = numerator / denominator
    if (val === 0) return 'gauge per0'
    else if (val > 0 && val < 0.15) return 'gauge per10'
    else if (val >= 0.15 && val < 0.25) return 'gauge per20'
    else if (val >= 0.25 && val < 0.35) return 'gauge per30'
    else if (val >= 0.35 && val < 0.45) return 'gauge per40'
    else if (val >= 0.45 && val < 0.55) return 'gauge per50'
    else if (val >= 0.55 && val < 0.65) return 'gauge per60'
    else if (val >= 0.65 && val < 0.75) return 'gauge per70'
    else if (val >= 0.75 && val < 0.85) return 'gauge per80'
    else if (val >= 0.85 && val < 0.95) return 'gauge per90'
    else if (val >= 0.95) return 'gauge per100'
    return 
}

const DeviceType = {
    mobile: 'mobile',
    pc: 'pc'
}

const checkDevice = () => {
    var ua = navigator.userAgent.replace(/ /g,'').toLowerCase()
    if (ua.indexOf(DeviceType.mobile) > -1) {
        return DeviceType.mobile
    } else {
        return DeviceType.pc
    }
}

export {
    toOrdinal,
    numeralFormat,
    toGauge,
    checkDevice,
    DeviceType,
};