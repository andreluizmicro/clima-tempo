let BASE = 'http://localhost:3004/api';

export default {
    getLocales: async () => {
        const res = await fetch(BASE + '/locales');
        const json = await res.json();
        return json;
    },
    getWeathers: async (search) => {
        let fields = {};
        if(search !== '') {
            fields.search = search;
        }

        let queryString = new URLSearchParams(fields).toString();
        console.log(queryString);

        const res = await fetch(BASE + '/weathers?'+queryString);
        const json = await res.json();
        return json;
        
    }
};