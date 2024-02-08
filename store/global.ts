import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
    
    id: 'global-store',
    state: () => {
        return {
            _mode: 'dark'
        }
    },
    actions: {
        updateMode( value: string ) { this._mode = value; }
    },
    getters: { 
        mode: state => state._mode
    }
});