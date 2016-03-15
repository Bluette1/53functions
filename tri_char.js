module.exports = function(ch){
var draw = require('./draw');
return draw(['   '+ch, '  '+ch+ ' '+ ch, ' '+ch+' '+ch+' '+ch, ch+' '+ch+' '+ch+' '+ch]);

}
