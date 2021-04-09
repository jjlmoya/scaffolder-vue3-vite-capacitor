const removeData = (apiObject) => apiObject.data
    ? removeData(apiObject.data)
    : apiObject

module.exports = {
    removeData
}
