# pwd-fishway
Interactive fishway exhibit for the Fairmount Water Works Museum

### Requirements

* Vagrant 1.8+
* VirtualBox 4.3
* Ansible 2.1+

### Getting Started

### Set Environment Variables
Fishway uses a paid FontAwesome Pro subscription which requires a secret token for use. To configure this, from the project root directory copy the example Docker configuration file:

```sh
$ cp docker-compose.env.example docker-compose.env
```
Open docker-compose.env in a text editor and add the FontAwesome token. Find the token in the Notes section of the FontAwesome entry in LastPass. If using the Lastpass browser extension, "edit" the entry to see the Notes section.

### Create the Virtual Environments
Install the application and all required dependencies.

```sh
./scripts/setup
```

#### Development

Rebuild Docker images and run application.

```sh
vagrant up
vagrant ssh
./scripts/update
./scripts/server
```

### Optimizing the browser for touchscreen mode
The website hosted at the FWW Museum will be displayed on an ELO touchscreen of 1920 x 1080 screen size, on the latest version of Chrome at the time of initial deployment, on a Windows 10 Pro computer. Windows and Chrome have a lot of built-in touch-initiated interactions that are sub-optimal for the museum display. For example, we don't want activity from pinch-zoom, long taps, or hard left/right swipes. Chrome and Windows allows customization for some of these behaviors and Chrome does save settings. At the time of install, these should be set up:
- [ ] Windows in Tablet mode
- [ ] Windows launch Chrome at startup
- [ ] Windows disable screen edge touch interactions
  - Windows group policy > Computer Configuration > Windows Components > Edge UI > Disable all
- [ ] Chrome fullscreen, full window (F11)
- [ ] Chrome settings, open at the production site
- [ ] Chrome flags at `chrome://flags`
  - *Touch UI Layout* set to **Enabled**
  - *Overscroll history navigation* set to **Disabled**
  - *Overscroll history navigation on Touchpad* set to **Disabled**
  - *Passive Event Listener Override* set to **True**
  - *Document Level Event Listeners Passive Default* set to **Enabled**
  - *Touch adjustment* set to **Enabled**


### Ports

| Service            | Port                            |
| ------------------ | ------------------------------- |
| Webpack Dev Server | [`3474`](http://localhost:3474) |

### Testing

```
./scripts/test
```

### Scripts

| Name           | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| `cibuild`      | Build project for CI                                          |
| `clean`        | Free disk space by cleaning up dangling Docker images         |
| `console`      | Run interactive shell inside application container            |
| `lint`         | Lint source code                                              |
| `server`       | Run Docker Compose services                                   |
| `setup`        | Provision Vagrant VM and run `update`                         |
| `test`         | Run unit tests                                                |
| `update`       | Build Docker images                                           |

### Adding NPM Packages

To add a new NPM package to the project:

- Manually add the package to the project's `package.json` file, ensuring that you 
pin it to a specific version.
- Run `./scripts/update` in the VM.
- Commit the changes to the following files to git:
    - `package.json`
    - `yarn.lock`

#### Notes

* We usually pin packages to a specific version to minimize build errors.
