const funcs = {
    comb(k, n) {
        if (k > n) return;
        let num = 1;
        let dem = 1;
        for (let i = 1; i <= k; i++) {
            num *= n + 1 - i;
            dem *= i;
        }
        return num / dem;
    }
};

export default funcs;
