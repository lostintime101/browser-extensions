if (document.querySelector('.discord-token-login-popup')) {
    document.querySelector('#submit').addEventListener('click', () => {
        token = document.querySelector('#token').value;

        if (token != '') {
            document.querySelector('#token').style.border = '1px solid #222428';

            browser.tabs.executeScript(null, {
                code: `token = '${token}';`
            }, () => browser.tabs.executeScript(null, {file: 'login.js'}));
        } 
        else {
            document.querySelector('#token').style.border = '1px solid #ee4445';
        }
    })
}