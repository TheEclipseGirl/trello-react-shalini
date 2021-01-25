const domain = "https://api.trello.com/1";

const apis = {
    getAllBoards:`${domain}/members/me/boards?`,//key=${constants.key}&token=${constants.token}
    getAllLists:`${domain}/boards/{id}/lists`,
    getAllCards:`${domain}/lists/{id}/cards`,
    createNewBoard: `${domain}/boards/`,
    createNewlist:`${domain}/lists`,
    archievelist:`${domain}/lists/{id}/closed`,
    createNewCard:`${domain}/cards`,
    deleteCard:`${domain}/cards/{id}`
}

export default apis;