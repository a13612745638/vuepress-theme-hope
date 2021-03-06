---
category: config
tags:
  - plugin
  - config
---

# @mr-hope/sitemap

This plugin will automatically generate a sitemap for your webpage when you build it.

## Options

### hostname

- Type: `string`
- Required: Yes

The domain name where the current website is deployed, please at least pass it into the plugin option, or fill in `themeConfig.hostname`, otherwise the plugin will not work.

### urls

- Type: `string[]`
- Required: No

URLs to be included

### exclude

- Type: `string[]`
- Required: No

Pages not included

### outFile

- Type: `string`
- Default value: `"sitemap.xml"`

The output file name

### changefreq

- Type: `"always" | "hourly" | "daily" | "weekly" |"monthly" | "yearly" | "never"`
- Default value: `"daily"`

Page default update frequency

### dateFormatter

- Type: `($page: PageComputed) => string`
- Required: No

Time formatter. The timestamp will be automatically generated by default. If you encounter time zone problems, please set this option.
