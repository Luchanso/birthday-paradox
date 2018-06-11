const calc = () => {
    const labels = [];
    const set = [];

    for (let j = 2; j < 365; j++) {
        let result = 0;
        const experiments = 10000;

        for (let exp = 0; exp < experiments; exp++) {
            let calc = {};
            for (let i = j; i > 0; i--) {
                const day = Math.ceil((Math.random() * 365));
                calc[day] = 1 + calc[day] || 0;
            }

            if (Object.values(calc).find(i => i > 0)) {
                result++;
            }
        }

        labels.push(j);
        set.push((result / experiments) * 100);
    }

    return { labels, set };
};

export default calc;