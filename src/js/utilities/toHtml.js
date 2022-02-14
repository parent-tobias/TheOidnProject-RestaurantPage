const toHtml = (str)=>document.createRange().createContextualFragment(str).firstChild;

export default toHtml;