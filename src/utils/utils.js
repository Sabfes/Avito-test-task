import moment from "moment"

export const convertToTime = (number, format = "DD.MM.YYYY h:mm") => {
    return moment.unix(number).format(format)
}