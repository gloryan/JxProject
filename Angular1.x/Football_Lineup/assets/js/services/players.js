app.factory('players', function(){
    var players = [
        {
            name: '이정주',
            team: 'IT Service',
            position: 'FW',
            email: 'jeongjoo.lee@hansol.com',
            phone: '',
            notes: '축구하고싶다.'
        },{
            name: '황종후',
            team: 'IT Service',
            position: 'MF',
            email: 'jonghoo.hwang@hansol.com',
            phone: '010-3509-7453',
            notes: '열심히 하겠습니다.'
        }
    ];
    return {
        get: function(){
            return players;
        },
        find: function(index){
            return players[index];
        },
        set: function(player){
            players.push(player);
        },
        destroy: function(index){
            players.splice(index, 1);
        }
    };
});