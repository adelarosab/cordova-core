_[Demo and API docs](https://adelarosab.github.io/cordova-core)_

### &lt;cordova-core&gt;
`<cordova-core>` implements a basic interface about cordova application status.

### Installation
```bash
bower install --save cordova-core
```

### Usage
```html
<cordova-core
    ready
    paused
></cordova-core>
```

`<cordova-core>` allow to read the state of the native aplication in the 
current moment. `ready` means cordova is fully operative and `paused` the 
application is running in background. 

---

###### Note
Due to restrictions `ready` attribute is not shown into attributes table.
