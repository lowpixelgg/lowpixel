export const getGreeting = () => {
    let h = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        hour12: false,
    });

    const hour = Number(h);

    if (hour >= 0 && hour <= 5) {
        return 4;
    } else if (hour >= 6 && hour < 12) {
        return 1;
    } else if (hour >= 12 && hour < 18) {
        return 2;
    } else if (hour >= 18 && hour <= 23) {
        return 3;
    }

    return 1
}

