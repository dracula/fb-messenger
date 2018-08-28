# Dracula for Facebook Messenger

> A chrome extension dark theme for [Facebook Messenger](https://www.messenger.com/)

![](https://github.com/dracula/fb-messenger/blob/master/src/img/screenshot.png)

## Install

The extension can be installed in the [Chrome Web Store](https://chrome.google.com/webstore/detail/dracula-theme-for-messeng/ijphgphffpboghbejdbjjoddacphjafh)

## Development

To run this project you will need [Sass](http://sass-lang.com/)

My preferred way to use sass is to install [node-sass](https://github.com/sass/node-sass) using `npm install -g node-sass` and then run `node-sass --watch --source-map-contents src/sass --output src/css

Open up your chrome browser and enter [chrome://extensions](chrome://extensions) into the address bar , or click on settings, more tools, extensions.
Toggle **developer mode** and click on **load unpacked**.

_Note: Make sure you `watch` the `src/sass/` directory during development. The syntax of the command to do this will depend on which sass you have installed._

## Team

This theme is maintained by the following person(s) and a bunch of [awesome contributors](https://github.com/dracula/fb-messenger/graphs/contributors).

| [![Philippe Partarrrieu](https://avatars0.githubusercontent.com/u/16687219?v=3&s=70)](https://github.com/ppartarr) |
| ------------------------------------------------------------------------------------------------------------------ |
| [Philippe Partarrieu](https://github.com/ppartarr)                                                                 |

## Contributing

Feel free to help me develop this extension by submitting pull requests! You can view a list of contributors [here](https://github.com/dracula/fb-messenger/graphs/contributors)

### Todo

- [x] change colour of placeholder in message input
- [ ] change colour of settings dropdown
- [ ] change colour of @mentions in text
- [ ] change colour of "Contacts" when searching for friends
- [x] change colour of group names
- [x] add colour to messenger friends without FB account
- [ ] change colour of dropdown for marketplace details
- [x] replace ruby sass with node-sass

THEN:

- [ ] update screenshot in README
- [ ] submit PR to be on dracula theme website as showcase

## Questions

If you have an problems getting something to work please email me at <philippe@partarrieu.me> or file a [Github Issue](https://github.com/dracula/fb-messenger/issues)

## License

This extension is free and open source software, distributed under the The MIT License.
