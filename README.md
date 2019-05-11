# Jekyll Theme: Richienb

A jekyll theme that follows the [Richienb style guide](https://github.com/Richienb/richienb#style-guide).

## Basic usage:

Set the following remote theme in your `_config.yml` file.

```yml
remote_theme: Richienb/jekyll-theme-richienb
```

### Custom theme colour

By default, the primary theme colour `#3F51B5` and accent theme colour `#f44336` is used. You can overrride this by setting the `primarycolour` or `accentcolour` property.

```yml
primarycolour: "#6200ee"
accentcolour: "#018786"
```

### Setting favicon

You can set the favicon source by setting the `favicon` property.

```yml
favicon: "favicon.ico"
```

### Disabling dark mode toggle button

By default a FAB is shown in the top-right of the document which allows the user to change the theme used. To disable the FAB, set the `darktoggle` property.

```yml
darktoggle: false
```

### Disabling scripts

You can disable all scripts and script-enabled utilities by setting the `scripts` property.

```yml
scripts: false
```

### Disabling ads

By default, Carbon Ads are enabled to help support the developer. If, however you don't want to support the developer free of charge, set the `ads` property in your configuration file.

```yml
ads: false
```

### Disabling analytics preconnection

You can disable Google analytics preconnection by setting the `analytics` property.

```yml
analytics: false
```

## Playground

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```

Sample code:

```python
import os
import unittest

from appium import webdriver
from appium.webdriver.common.touch_action import TouchAction
from appium.webdriver.common.multi_action import MultiAction

from time import sleep

# Returns abs path relative to this file and not cwd
PATH = lambda p: os.path.abspath(
    os.path.join(os.path.dirname(__file__), p)
)

class ComplexAndroidTests(unittest.TestCase):
    def setUp(self):
        desired_caps = {}
        desired_caps['platformName'] = 'Android'
        desired_caps['platformVersion'] = '4.2'
        desired_caps['deviceName'] = 'Android Emulator'
        desired_caps['app'] = PATH(
            '../../../sample-code/apps/ApiDemos/bin/ApiDemos-debug.apk'
        )

        self.driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)

    def tearDown(self):
        self.driver.quit()

    def test_find_elements(self):
        # pause a moment, so xml generation can occur
        sleep(2)

        els = self.driver.find_elements_by_xpath('//android.widget.TextView')
        self.assertEqual('API Demos', els[0].text)

        el = self.driver.find_element_by_xpath('//android.widget.TextView[contains(@text, "Animat")]')
        self.assertEqual('Animation', el.text)

        el = self.driver.find_element_by_accessibility_id("App")
        el.click()

        els = self.driver.find_elements_by_android_uiautomator('new UiSelector().clickable(true)')
        # there are more, but at least 10 visible
        self.assertLess(10, len(els))
        # the list includes 2 before the main visible elements
        self.assertEqual('Action Bar', els[2].text)

        els = self.driver.find_elements_by_xpath('//android.widget.TextView')
        self.assertLess(10, len(els))
        self.assertEqual('Action Bar', els[1].text)

    def test_scroll(self):
        sleep(2)
        els = self.driver.find_elements_by_xpath('//android.widget.TextView')
        self.driver.scroll(els[7], els[3])

        el = self.driver.find_element_by_accessibility_id('Views')

    def test_smiley_face(self):
        # just for the fun of it.
        # this doesn't really assert anything.
        self.driver.find_element_by_accessibility_id('Graphics').click()

        els = self.driver.find_elements_by_class_name('android.widget.TextView')
        self.driver.scroll(els[len(els)-1], els[0])

        el = None
        try:
            el = self.driver.find_element_by_accessibility_id('Touch Paint')
        except Exception as e:
            els = self.driver.find_elements_by_class_name('android.widget.TextView')
            self.driver.scroll(els[len(els)-1], els[0])

        if el is None:
            el = self.driver.find_element_by_accessibility_id('Touch Paint')

        el.click()

        # paint
        e1 = TouchAction()
        e1.press(x=150, y=100).release()

        e2 = TouchAction()
        e2.press(x=250, y=100).release()

        smile = TouchAction()
        smile.press(x=110, y=200) \
            .move_to(x=1, y=1) \
            .move_to(x=1, y=1) \
            .move_to(x=1, y=1) \
            .move_to(x=1, y=1) \
            .move_to(x=1, y=1) \
            .move_to(x=2, y=1) \
            .move_to(x=2, y=1) \
            .move_to(x=2, y=1) \
            .move_to(x=2, y=1) \
            .move_to(x=2, y=1) \
            .move_to(x=3, y=1) \
            .move_to(x=3, y=1) \
            .move_to(x=3, y=1) \
            .move_to(x=3, y=1) \
            .move_to(x=3, y=1) \
            .move_to(x=4, y=1) \
            .move_to(x=4, y=1) \
            .move_to(x=4, y=1) \
            .move_to(x=4, y=1) \
            .move_to(x=4, y=1) \
            .move_to(x=5, y=1) \
            .move_to(x=5, y=1) \
            .move_to(x=5, y=1) \
            .move_to(x=5, y=1) \
            .move_to(x=5, y=1) \
            .move_to(x=5, y=0) \
            .move_to(x=5, y=0) \
            .move_to(x=5, y=0) \
            .move_to(x=5, y=0) \
            .move_to(x=5, y=0) \
            .move_to(x=5, y=0) \
            .move_to(x=5, y=0) \
            .move_to(x=5, y=0) \
            .move_to(x=5, y=-1) \
            .move_to(x=5, y=-1) \
            .move_to(x=5, y=-1) \
            .move_to(x=5, y=-1) \
            .move_to(x=5, y=-1) \
            .move_to(x=4, y=-1) \
            .move_to(x=4, y=-1) \
            .move_to(x=4, y=-1) \
            .move_to(x=4, y=-1) \
            .move_to(x=4, y=-1) \
            .move_to(x=3, y=-1) \
            .move_to(x=3, y=-1) \
            .move_to(x=3, y=-1) \
            .move_to(x=3, y=-1) \
            .move_to(x=3, y=-1) \
            .move_to(x=2, y=-1) \
            .move_to(x=2, y=-1) \
            .move_to(x=2, y=-1) \
            .move_to(x=2, y=-1) \
            .move_to(x=2, y=-1) \
            .move_to(x=1, y=-1) \
            .move_to(x=1, y=-1) \
            .move_to(x=1, y=-1) \
            .move_to(x=1, y=-1) \
            .move_to(x=1, y=-1)
        smile.release()

        ma = MultiAction(self.driver)
        ma.add(e1, e2, smile)
        ma.perform()

        # so you can see it
        sleep(10)


if __name__ == '__main__':
    suite = unittest.TestLoader().loadTestsFromTestCase(ComplexAndroidTests)
    unittest.TextTestRunner(verbosity=2).run(suite)
```
