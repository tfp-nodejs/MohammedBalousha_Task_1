export const customFilter = (data, callback) => {
        const filteredData = [];
        for (const item of data) {
            if (callback(item)) {
                filteredData.push(item);
            }
        }
        return filteredData;
    }
    
