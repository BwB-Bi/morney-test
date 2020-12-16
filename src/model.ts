const localStorageKeyName = 'recordList';
const model = {
    fetch() {
      return JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    save(data: RecordItem[] | RecordItem) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    },
    clone(data: RecordItem[]){
        return JSON.parse(JSON.stringify(data));
    }
};

export {model};