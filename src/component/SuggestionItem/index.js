const SuggestionItem = props => {
    const { suggestionDetail, deleteItem } = props
    const { id, title, logoUrl, domainUrl, timeAccessed } = suggestionDetail
    const onDelete = () => {
        deleteItem(id)
    }
    return (
        <li className="list-container">
            <p className="time">{timeAccessed}</p>
            <img src={logoUrl} className="logo" alt="domain logo" />
            <p className="time">{title}</p>
            <p className="link-element">{domainUrl}</p>
            <button className="button" type="button" onClick={onDelete}>
                <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                    className="delete-logo"
                    testid="delete"
                />
            </button>
        </li>
    )
}
export default SuggestionItem