function replaceGlobally(original, searchTxt, replaceTxt) {
    const regex = new RegExp(searchTxt, 'g');
    return original.replace(regex, replaceTxt) ;
}
module.exports=replaceGlobally;