module.exports = {

    saveSession: function(state) {
        localStorage.setItem('session', JSON.stringify(state));
    },
    
    loadSession: function() {
        return JSON.parse(localStorage.getItem('session'));
    }

};
