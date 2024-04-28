export const getDate = () => {
    const months = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
    ]

    const date = new Date()
    const datestring = `${date.getDay()} ${months[date.getMonth()]}. ${date.getFullYear()}`

    return datestring
            
}