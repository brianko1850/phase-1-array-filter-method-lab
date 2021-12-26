// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, name) {
    let filtered=array.filter((driverName) => typeof driverName === "string" && driverName.toLowerCase() === name.toLowerCase())
    return filtered
    }
    
function fuzzyMatch(array, str) {
    
    let filtered = array.filter((driverName) => typeof driverName === "string" && driverName.startsWith(str))
    return filtered
}
function matchName(array, name) {
    const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
  
      let filtered = array.filter((driver) => typeof driver.name === "string" && driver.name.toLowerCase() === name.toLowerCase())
      return filtered

}