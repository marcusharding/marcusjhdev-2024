import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
    
    id: 'global-store',
    state: () => {
        return {
            _mode: 'dark',
            _navOpen: false
        }
    },
    actions: {
        updateMode( value: string ) { this._mode = value; },
        updateNavOpen( value: boolean ) { this._navOpen = value; }
    },
    getters: { 
        mode: state => state._mode,
        navOpen: state => state._navOpen
    }
});