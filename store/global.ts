import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
    
    id: 'global-store',
    state: () => {
        return {
            _mode: 'dark',
            _navOpen: false,
            _projects: [],
            _ramblings: []
        }
    },
    actions: {
        updateMode( value: string ) { this._mode = value; },
        updateNavOpen( value: boolean ) { this._navOpen = value; },
        updateProjects( value: Array<Object> ) { this._projects = value; },
        updateRamblings( value: Array<Object> ) { this._ramblings = value; }
    },
    getters: { 
        mode: state => state._mode,
        navOpen: state => state._navOpen,
        projects: state => state._projects,
        ramblings: state => state._ramblings,
    }
});